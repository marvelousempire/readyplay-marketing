import type { MetadataRoute } from "next";

// Served at `/robots.txt`. Everything here is public marketing / player
// data by design — no auth, no PII. We allow every user agent and point
// at the sitemap so crawlers pick up new profile pages each deploy.
//
// `dynamic = "force-static"` is required by `output: 'export'`: without it
// Next bails out of static rendering for the route and the build fails.

export const dynamic = "force-static";

const SITE_ORIGIN = "https://readyplay.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
