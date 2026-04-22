import type { Metadata } from "next";
import Link from "next/link";

import { MarketingChrome } from "@/components/marketing-chrome";
import { PlayerSearchBox } from "@/components/public/PlayerSearchBox";
import { searchPublicPlayers } from "@/lib/public-api";

export const metadata: Metadata = {
  title: "Find a player — READYPLAY",
  description:
    "Search the READYPLAY directory — peer-reviewed OVR, runs played, and conduct grades for every public player.",
  robots: "index, follow",
  openGraph: {
    title: "READYPLAY · Find a player",
    description:
      "Search the READYPLAY directory — peer-reviewed OVR, runs played, and conduct grades.",
  },
};

export default async function FindPlayerPage() {
  // Seed the SSR'd HTML with the 30 most-active players so the page isn't
  // blank on first paint (especially important since the marketing site is
  // statically exported — this is a build-time fetch).
  const initial = await searchPublicPlayers({ limit: 30 });

  return (
    <MarketingChrome>
      <section className="bg-neutral-50 px-6 pt-28 pb-8 md:px-10 md:pt-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">
            Players
          </p>
          <h1 className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">
            Find a player.
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-600">
            Fuzzy search over every public READYPLAY profile. Match by name or
            park nickname. Tap anyone to see their card — OVR, runs, grades,
            top skills.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-4xl">
          <PlayerSearchBox
            initialResults={initial.entries}
            initialTotal={initial.total}
          />

          <nav className="mt-10 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
              Jump to:
            </span>
            <Link
              href="/leaderboard/"
              className="rounded-full border border-neutral-200 bg-white px-3 py-1 font-semibold text-neutral-800 transition hover:border-orange-400 hover:text-orange-700"
            >
              Global leaderboard →
            </Link>
            {/* FL leads — READYPLAY is live in Miami. Other chips stay
                for visitors and accounts in nearby launch markets. */}
            {["FL", "NY", "GA", "CA", "TX"].map((s) => (
              <Link
                key={s}
                href={`/leaderboard/${s.toLowerCase()}/`}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1 font-semibold text-neutral-800 transition hover:border-orange-400 hover:text-orange-700"
              >
                {s} leaderboard
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </MarketingChrome>
  );
}
