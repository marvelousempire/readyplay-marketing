import type { MetadataRoute } from "next";

import { getPublicSitemap } from "@/lib/public-api";

// Dynamic sitemap served at `/sitemap.xml`. Includes every statically-
// exported page plus one entry per pre-rendered player profile. The
// top-5k IDs come from /public/sitemap; if the API is unreachable during
// build we emit just the static entries and the player URLs get added on
// the next deploy.
//
// `SITE_ORIGIN` is hard-coded to the canonical marketing domain so the
// emitted URLs match what Google sees when it crawls readyplay.app (and
// not, say, a preview deploy or a staging hostname).
//
// `dynamic = "force-static"` is required by `output: 'export'`: without
// it Next bails out of static rendering for the sitemap route.

export const dynamic = "force-static";

const SITE_ORIGIN = "https://readyplay.app";

const STATES = [
  "al","ak","az","ar","ca","co","ct","de","fl","ga","hi","id","il","in","ia",
  "ks","ky","la","me","md","ma","mi","mn","ms","mo","mt","ne","nv","nh","nj",
  "nm","ny","nc","nd","oh","ok","or","pa","ri","sc","sd","tn","tx","ut","vt",
  "va","wa","wv","wi","wy","dc","pr",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_ORIGIN}/`,            lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_ORIGIN}/find/`,       lastModified: now, changeFrequency: "hourly",  priority: 0.9 },
    { url: `${SITE_ORIGIN}/leaderboard/`, lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${SITE_ORIGIN}/beta/`,       lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_ORIGIN}/changelog/`,  lastModified: now, changeFrequency: "weekly",  priority: 0.5 },
    { url: `${SITE_ORIGIN}/privacy/`,    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE_ORIGIN}/terms/`,      lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    ...STATES.map((s) => ({
      url: `${SITE_ORIGIN}/leaderboard/${s}/`,
      lastModified: now,
      changeFrequency: "hourly" as const,
      priority: 0.7,
    })),
  ];

  try {
    const feed = await getPublicSitemap(5000);
    const playerEntries: MetadataRoute.Sitemap = feed.entries
      .filter((e) => typeof e.id === "string" && e.id.length > 0)
      .map((e) => ({
        url: `${SITE_ORIGIN}/p/${e.id}/`,
        lastModified: e.updatedAt ? new Date(e.updatedAt) : now,
        changeFrequency: "daily" as const,
        priority: 0.6,
      }));
    return [...staticEntries, ...playerEntries];
  } catch (err) {
    console.warn("[sitemap] API unreachable — emitting static entries only.", err);
    return staticEntries;
  }
}
