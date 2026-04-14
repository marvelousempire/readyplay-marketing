import type { Metadata } from "next";
import Link from "next/link";
import { MarketingChrome } from "@/components/marketing-chrome";

export const metadata: Metadata = {
  title: "Changelog — READYPLAY",
  description: "Public release notes for READYPLAY (beta).",
};

type Release = { version: string; date: string; headline: string; bullets: string[] };

/** Curated, user-facing notes only — no secrets or internal ops detail. */
const releases: Release[] = [
  {
    version: "0.6.38",
    date: "2026-04-14",
    headline: "Marketing pipeline polish",
    bullets: [
      "Safer default for marketing deploys on private repositories (build still runs everywhere).",
    ],
  },
  {
    version: "0.6.34",
    date: "2026-04-14",
    headline: "READYPLAY positioning",
    bullets: [
      "READYPLAY is a multi-sport pickup platform; basketball is the first fully featured vertical.",
      "Docs and marketing copy aligned with what the app actually does today.",
    ],
  },
  {
    version: "0.6.33",
    date: "2026-04-14",
    headline: "Marketing site",
    bullets: [
      "Apple-style landing: hero, story beats, feature highlights, screenshot strip, early-access CTA.",
      "Static export for simple hosting (GitHub Pages, Netlify, Cloudflare, your own server).",
    ],
  },
  {
    version: "0.6.32",
    date: "2026-04-13",
    headline: "Live score experience",
    bullets: [
      "Live score UI refinements and team matchup ordering improvements.",
      "Smaller entitlement surface where appropriate.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <MarketingChrome>
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-24 md:px-10 md:pt-28">
        <p className="text-sm font-medium text-neutral-500">
          <Link href="/" className="transition hover:text-neutral-950">
            ← Site home
          </Link>
        </p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
          Changelog
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
          High-level release notes for the READYPLAY beta. Versioning is{" "}
          <span className="font-medium text-neutral-800">0.x.y</span> until the first wide App Store
          release.
        </p>
        <ol className="mt-12 space-y-12 border-t border-neutral-200/80 pt-12">
          {releases.map((r) => (
            <li key={r.version}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="text-lg font-semibold text-neutral-950">{r.version}</h2>
                <time className="text-sm text-neutral-500" dateTime={r.date}>
                  {r.date}
                </time>
              </div>
              <p className="mt-2 text-sm font-medium text-neutral-800">{r.headline}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-600">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </MarketingChrome>
  );
}
