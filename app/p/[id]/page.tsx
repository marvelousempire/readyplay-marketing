import type { Metadata } from "next";
import Link from "next/link";

import { MarketingChrome } from "@/components/marketing-chrome";
import { PlayerAttributeBar } from "@/components/public/PlayerAttributeBar";
import {
  getPublicLeaderboard,
  getPublicPlayer,
  getPublicSitemap,
  getSimilarPlayers,
  initials,
  ovrTone,
  type PublicPlayer,
} from "@/lib/public-api";

// ─────────────────────────────────────────────────────────────────────────────
// Static-export profile pages
//
// The marketing site is fully static (`output: 'export'`), which means every
// dynamic `/p/<id>/` path must be returned by `generateStaticParams` at
// build time. We fetch the top-5k most-active players from the public
// sitemap feed and pre-render one page per player — gives us real OG
// previews on share, real SEO, and zero runtime dependency.
//
// Two edge cases are handled explicitly:
//
//   1. Sitemap empty / API unreachable at build time. This happens before
//      the backend /public/* endpoints deploy, or during transient outages.
//      We always include a known sentinel ID ("coming-soon") in the static
//      params so the build succeeds. That page renders a branded "stats are
//      indexing" placeholder with the live leaderboard — still useful.
//
//   2. Someone visits /p/<uuid> for a player the site didn't pre-render
//      (e.g. signed up after the last deploy). With `dynamicParams = false`
//      that URL becomes a 404, and our global `app/not-found.tsx` redirects
//      the visitor to `admin.readyplay.app/p/<uuid>` where live data renders.
//      On iOS with the app installed, the Universal Link catches the tap
//      before the 404 ever fires.
//
// Nightly cron (see .github/workflows/rebuild.yml) re-runs `next build`
// so freshly-added players join the pre-rendered set within 24 hours.
// ─────────────────────────────────────────────────────────────────────────────

const SENTINEL_ID = "coming-soon";

// Unknown IDs 404 cleanly → not-found.tsx handles the redirect.
export const dynamicParams = false;

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  const base: Array<{ id: string }> = [{ id: SENTINEL_ID }];
  try {
    const feed = await getPublicSitemap(5000);
    const real = feed.entries
      .filter((e) => typeof e.id === "string" && e.id.length > 0)
      .map((e) => ({ id: e.id }));
    return [...base, ...real];
  } catch (err) {
    console.warn(
      "[/p/[id]] generateStaticParams: API unreachable, pre-rendering sentinel only.",
      err
    );
    return base;
  }
}

const ATTRIBUTE_ORDER: Array<{ key: string; label: string }> = [
  { key: "speed", label: "Speed" },
  { key: "offensiveAwareness", label: "Offensive IQ" },
  { key: "defensiveAwareness", label: "Defensive IQ" },
  { key: "insideShooting", label: "Inside Shot" },
  { key: "threePoint", label: "3-Point" },
  { key: "defense", label: "Defense" },
  { key: "steals", label: "Steals" },
  { key: "blocks", label: "Blocks" },
  { key: "screens", label: "Screens" },
  { key: "morale", label: "Morale" },
  { key: "teamPlay", label: "Team Play" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  if (id === SENTINEL_ID) {
    return {
      title: "Player profiles — READYPLAY",
      description:
        "READYPLAY player cards: peer-reviewed OVR, runs played, conduct grades, and top skills — for every public player.",
      robots: "index, follow",
    };
  }

  const player = await getPublicPlayer(id);
  if (!player) return { title: "Player — READYPLAY" };

  const where = [player.homeCity, player.homeState].filter(Boolean).join(", ");
  const title = `${player.displayName} · OVR ${player.ovr} — READYPLAY`;
  const description = [
    `OVR ${player.ovr}`,
    `${player.gamesPlayed} runs`,
    player.topAttributes.slice(0, 3).join(" · "),
    where,
  ]
    .filter(Boolean)
    .join(" — ");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
      images: player.avatarUrl ? [{ url: player.avatarUrl }] : undefined,
    },
    twitter: { card: "summary", title, description },
    robots: "index, follow",
  };
}

export default async function PlayerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id === SENTINEL_ID) {
    return <ComingSoonShell />;
  }

  const [player, leaderboard, similar] = await Promise.all([
    getPublicPlayer(id),
    getPublicLeaderboard({ limit: 5 }),
    getSimilarPlayers(id, 6),
  ]);

  // If the player row disappeared between build-time sitemap and render
  // (deleted account, etc.), degrade gracefully rather than crash — render
  // the placeholder so the static export still emits a valid page.
  if (!player) return <ComingSoonShell />;

  return <ProfileBody player={player} leaderboardTop5={leaderboard.entries} similar={similar.entries} similarState={similar.state} />;
}

// ── Profile body ─────────────────────────────────────────────────────────────

function ProfileBody({
  player,
  leaderboardTop5,
  similar,
  similarState,
}: {
  player: PublicPlayer;
  leaderboardTop5: PublicPlayer[];
  similar: PublicPlayer[];
  similarState: string | null;
}) {
  const where = [player.homeCity, player.homeState].filter(Boolean).join(", ");

  return (
    <MarketingChrome>
      <section className="bg-neutral-50 px-6 pt-28 pb-20 md:px-10 md:pt-32">
        <div className="mx-auto max-w-4xl">
          {/* Hero card — same visual language as the Wallet pass */}
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <div className="flex items-center justify-between bg-gradient-to-r from-[#ea580c] to-[#c2410c] px-6 py-3 text-[11px] font-black tracking-[0.18em] text-white">
              <span>READYPLAY PLAYER CARD</span>
              {player.verified && (
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold tracking-widest">
                  VERIFIED
                </span>
              )}
            </div>

            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-white bg-orange-50 shadow sm:h-28 sm:w-28">
                {player.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={player.avatarUrl}
                    alt={player.displayName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-orange-600">
                    {initials(player.displayName)}
                  </div>
                )}
              </div>

              <div className="flex-1">
                <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
                  {player.displayName}
                </h1>
                {player.parkNickname && (
                  <p className="mt-0.5 text-sm italic text-neutral-500">
                    &ldquo;{player.parkNickname}&rdquo;
                  </p>
                )}
                <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm text-neutral-600">
                  {where && <span>{where}</span>}
                  <span>{player.gamesPlayed.toLocaleString()} runs</span>
                  {player.rank && (
                    <span className="font-semibold text-neutral-950">
                      Rank #{player.rank.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-baseline gap-2 sm:flex-col sm:items-end">
                <span
                  className={`text-5xl font-black tabular-nums sm:text-6xl ${ovrTone(
                    player.ovr
                  )}`}
                >
                  {player.ovr}
                </span>
                <span className="text-xs font-bold tracking-widest text-neutral-500">
                  OVR
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-neutral-200 sm:grid-cols-4">
              <GradeCell label="Performance" value={player.performanceGrade ?? "—"} />
              <GradeCell
                label="Effort"
                value={
                  player.effortGrade != null ? String(player.effortGrade) : "—"
                }
              />
              <GradeCell label="Conduct" value={player.conductGrade ?? "Ungraded"} />
              <GradeCell
                label="Top Skill"
                value={player.topAttributes[0] ?? "—"}
              />
            </div>
          </div>

          {/* Attributes */}
          <section className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-neutral-500">
              Attributes
            </h2>
            <p className="mt-1 text-xs text-neutral-500">
              60% peer-reviewed · 40% algorithm. Refreshed after every on-record run.
            </p>
            <div className="mt-5 grid gap-3">
              {ATTRIBUTE_ORDER.map((a) => (
                <PlayerAttributeBar
                  key={a.key}
                  label={a.label}
                  value={player.attributes[a.key] ?? 50}
                />
              ))}
            </div>
          </section>

          {/* Socials */}
          {(player.socials.instagram ||
            player.socials.tiktok ||
            player.socials.youtube ||
            player.socials.x) && (
            <section className="mt-6 flex flex-wrap gap-2">
              {player.socials.instagram && (
                <SocialPill
                  href={`https://instagram.com/${player.socials.instagram.replace(/^@/, "")}`}
                  label={`@${player.socials.instagram.replace(/^@/, "")}`}
                  network="Instagram"
                />
              )}
              {player.socials.tiktok && (
                <SocialPill
                  href={`https://tiktok.com/@${player.socials.tiktok.replace(/^@/, "")}`}
                  label={`@${player.socials.tiktok.replace(/^@/, "")}`}
                  network="TikTok"
                />
              )}
              {player.socials.youtube && (
                <SocialPill
                  href={`https://youtube.com/@${player.socials.youtube.replace(/^@/, "")}`}
                  label={`@${player.socials.youtube.replace(/^@/, "")}`}
                  network="YouTube"
                />
              )}
              {player.socials.x && (
                <SocialPill
                  href={`https://x.com/${player.socials.x.replace(/^@/, "")}`}
                  label={`@${player.socials.x.replace(/^@/, "")}`}
                  network="X"
                />
              )}
            </section>
          )}

          {/* Top 5 */}
          {leaderboardTop5.length > 0 && (
            <section className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-black uppercase tracking-[0.16em] text-neutral-500">
                  Top players
                </h2>
                <Link
                  href="/leaderboard/"
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700"
                >
                  Full leaderboard →
                </Link>
              </div>
              <ol className="mt-4 divide-y divide-neutral-100">
                {leaderboardTop5.map((p) => (
                  <li key={p.id} className="flex items-center gap-3 py-3">
                    <span className="w-8 shrink-0 text-sm font-bold text-neutral-400 tabular-nums">
                      #{p.rank}
                    </span>
                    <Link
                      href={`/p/${p.id}/`}
                      className="flex-1 text-sm font-semibold text-neutral-950 hover:text-orange-600"
                    >
                      {p.displayName}
                      {p.parkNickname && (
                        <span className="ml-2 text-xs font-normal italic text-neutral-500">
                          &ldquo;{p.parkNickname}&rdquo;
                        </span>
                      )}
                    </Link>
                    <span
                      className={`text-base font-black tabular-nums ${ovrTone(p.ovr)}`}
                    >
                      {p.ovr}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Similar */}
          {similar.length > 0 && (
            <section className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-black uppercase tracking-[0.16em] text-neutral-500">
                  {similarState
                    ? `More players in ${similarState}`
                    : "More players like this"}
                </h2>
                <Link
                  href={
                    similarState
                      ? `/leaderboard/${similarState.toLowerCase()}/`
                      : "/find/"
                  }
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700"
                >
                  {similarState ? `All of ${similarState} →` : "Browse →"}
                </Link>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {similar.map((p) => (
                  <Link
                    key={p.id}
                    href={`/p/${p.id}/`}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-200 p-3 transition hover:border-orange-300 hover:bg-orange-50/40"
                  >
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-orange-50">
                      {p.avatarUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.avatarUrl}
                          alt={p.displayName}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs font-bold text-orange-600">
                          {initials(p.displayName)}
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-neutral-950">
                        {p.displayName}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-neutral-500">
                        {[p.homeCity, p.homeState].filter(Boolean).join(", ") ||
                          `${p.gamesPlayed} runs`}
                      </p>
                    </div>
                    <span
                      className={`text-base font-black tabular-nums ${ovrTone(p.ovr)}`}
                    >
                      {p.ovr}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* App CTA */}
          <section className="mt-10 rounded-3xl bg-gradient-to-br from-[#ea580c] to-[#b54308] p-8 text-white shadow-lg">
            <p className="text-xs font-black uppercase tracking-[0.22em] opacity-80">
              Play next with {player.displayName.split(" ")[0]}
            </p>
            <h3 className="mt-2 text-2xl font-bold">
              Real runs. Real rep. Carried in Apple Wallet.
            </h3>
            <p className="mt-2 max-w-xl text-sm opacity-90">
              READYPLAY tracks how people actually play — peer-reviewed OVR,
              conduct, fairness. Download the app to recruit, rate, and add
              your own player card to Apple Wallet.
            </p>
            <Link
              href="/#cta"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-orange-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get READYPLAY →
            </Link>
          </section>
        </div>
      </section>
    </MarketingChrome>
  );
}

// ── Fallback shell for the sentinel / disappeared-player case ────────────────

async function ComingSoonShell() {
  const board = await getPublicLeaderboard({ limit: 5 });

  return (
    <MarketingChrome>
      <section className="bg-neutral-50 px-6 pt-28 pb-20 md:px-10 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">
            Player profile
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Stats are indexing.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
            Each player card on READYPLAY carries peer-reviewed OVR, runs
            played, top skills, and conduct grades. If you landed here from a
            shared link, the profile is likely still being indexed — check the
            leaderboard for players whose cards are live right now.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <Link
              href="/leaderboard/"
              className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              See the live leaderboard →
            </Link>
            <Link
              href="/find/"
              className="rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 transition hover:border-orange-400 hover:text-orange-700"
            >
              Find a player
            </Link>
          </div>
        </div>

        {board.entries.length > 0 && (
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.16em] text-neutral-500">
                Live top 5
              </h2>
              <Link
                href="/leaderboard/"
                className="text-xs font-semibold text-orange-600 hover:text-orange-700"
              >
                Full leaderboard →
              </Link>
            </div>
            <ol className="mt-4 divide-y divide-neutral-100">
              {board.entries.map((p) => (
                <li key={p.id} className="flex items-center gap-3 py-3">
                  <span className="w-8 shrink-0 text-sm font-bold text-neutral-400 tabular-nums">
                    #{p.rank}
                  </span>
                  <Link
                    href={`/p/${p.id}/`}
                    className="flex-1 text-sm font-semibold text-neutral-950 hover:text-orange-600"
                  >
                    {p.displayName}
                  </Link>
                  <span
                    className={`text-base font-black tabular-nums ${ovrTone(p.ovr)}`}
                  >
                    {p.ovr}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </section>
    </MarketingChrome>
  );
}

// ── Atoms ────────────────────────────────────────────────────────────────────

function GradeCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white px-4 py-3">
      <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-semibold text-neutral-950">{value}</p>
    </div>
  );
}

function SocialPill({
  href,
  label,
  network,
}: {
  href: string;
  label: string;
  network: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800 transition hover:border-orange-400 hover:text-orange-700"
    >
      <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
        {network}
      </span>
      {label}
    </a>
  );
}
