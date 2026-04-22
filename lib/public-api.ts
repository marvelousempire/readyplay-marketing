/**
 * public-api.ts — typed helpers for the READYPLAY public API.
 *
 * Used by the profile / leaderboard / directory pages. All endpoints are
 * unauthenticated and return safe (no-PII) subsets of player data. The
 * backend sets 60s Cache-Control on every response, so call sites can be
 * cheap and repeated without hammering postgres.
 *
 * The base URL is a compile-time constant: the live API lives at
 * api.readyplay.app. Override at build time with PUBLIC_API_URL for
 * staging. (This site is exported static, so there is no runtime env.)
 */

export const PUBLIC_API_BASE =
  process.env.PUBLIC_API_URL ?? "https://api.readyplay.app";

export type AttributeMap = Record<string, number>;

export interface PublicPlayerSocials {
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  x?: string;
}

export interface PublicPlayer {
  id: string;
  displayName: string;
  parkNickname: string | null;
  avatarUrl: string | null;
  homeCity: string | null;
  homeState: string | null;
  verified: boolean;
  ovr: number;
  gamesPlayed: number;
  performanceGrade: string | null;
  conductGrade: string | null;
  effortGrade: number | null;
  teamPlayerScore: number;
  topAttributes: string[];
  attributes: AttributeMap;
  socials: PublicPlayerSocials;
  rank: number | null;
  /** True when this profile is a seeded demo row. Missing on older servers. */
  isDemo?: boolean;
  updatedAt: string | null;
}

export interface PublicLeaderboard {
  generatedAt: string;
  state: string | null;
  count: number;
  /** True when the response contains at least one demo entry. Surfaces
   *  the "Preview" banner on the page. Missing → infer from entries. */
  demoActive?: boolean;
  entries: PublicPlayer[];
}

export interface PublicSearchResult {
  q: string;
  state: string | null;
  limit: number;
  offset: number;
  total: number;
  entries: PublicPlayer[];
}

export interface PublicSimilar {
  seedId: string;
  state: string | null;
  count: number;
  entries: PublicPlayer[];
}

export interface PublicSitemapFeed {
  generatedAt: string;
  count: number;
  entries: { id: string; displayName: string; updatedAt: string | null }[];
}

async function fetchJSON<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${PUBLIC_API_BASE}${path}`, {
      headers: { Accept: "application/json" },
      // `revalidate: 60` keeps the fetch inside Next's static-render contract
      // — no bailout to dynamic rendering — while still letting subsequent
      // deploys pick up data that's at most 60 seconds stale. (Critical for
      // `output: 'export'`: `cache: "no-store"` bails out of static gen
      // entirely and the build errors out under strict `dynamic: "error"`.)
      next: { revalidate: 60 },
    });
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch (err) {
    // Don't let transient network blips kill the whole `next build` — the
    // static export still emits the shell pages, and the client-side code
    // re-fetches on load.
    console.error("[marketing public-api] fetch failed", path, err);
    return fallback;
  }
}

export function getPublicPlayer(id: string): Promise<PublicPlayer | null> {
  if (!id) return Promise.resolve(null);
  return fetchJSON<PublicPlayer | null>(
    `/public/players/${encodeURIComponent(id)}`,
    null
  );
}

export function getPublicLeaderboard(params?: {
  limit?: number;
  state?: string;
}): Promise<PublicLeaderboard> {
  const q = new URLSearchParams();
  if (params?.limit) q.set("limit", String(params.limit));
  if (params?.state) q.set("state", params.state);
  const suffix = q.toString() ? `?${q}` : "";
  return fetchJSON<PublicLeaderboard>(`/public/leaderboard${suffix}`, {
    generatedAt: new Date().toISOString(),
    state: params?.state ?? null,
    count: 0,
    entries: [],
  });
}

export function searchPublicPlayers(params: {
  q?: string;
  state?: string;
  limit?: number;
  offset?: number;
}): Promise<PublicSearchResult> {
  const q = new URLSearchParams();
  if (params.q) q.set("q", params.q);
  if (params.state) q.set("state", params.state);
  if (params.limit) q.set("limit", String(params.limit));
  if (params.offset) q.set("offset", String(params.offset));
  const suffix = q.toString() ? `?${q}` : "";
  return fetchJSON<PublicSearchResult>(`/public/players/search${suffix}`, {
    q: params.q ?? "",
    state: params.state ?? null,
    limit: params.limit ?? 20,
    offset: params.offset ?? 0,
    total: 0,
    entries: [],
  });
}

export function getSimilarPlayers(
  id: string,
  limit = 6
): Promise<PublicSimilar> {
  return fetchJSON<PublicSimilar>(
    `/public/players/${encodeURIComponent(id)}/similar?limit=${limit}`,
    { seedId: id, state: null, count: 0, entries: [] }
  );
}

export function getPublicSitemap(limit = 5000): Promise<PublicSitemapFeed> {
  return fetchJSON<PublicSitemapFeed>(`/public/sitemap?limit=${limit}`, {
    generatedAt: new Date().toISOString(),
    count: 0,
    entries: [],
  });
}

// ── Rendering helpers shared between profile + leaderboard pages ─────────────
export function ovrTone(ovr: number): string {
  if (ovr >= 85) return "text-sky-600";
  if (ovr >= 75) return "text-emerald-600";
  if (ovr >= 60) return "text-amber-600";
  return "text-orange-600";
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase() ?? "")
    .join("");
}
