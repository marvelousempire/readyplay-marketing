import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarketingChrome } from "@/components/marketing-chrome";
import { LeaderboardTable } from "@/components/public/LeaderboardTable";
import { getPublicLeaderboard } from "@/lib/public-api";

// Pretty per-state URLs. With `output: 'export'` we must enumerate every
// static param at build time, so we pre-render all 50 US states + DC + PR.
// Unknown slugs will 404 via `notFound()` (Next emits 404.html for us).

const US_STATES = [
  "al","ak","az","ar","ca","co","ct","de","fl","ga","hi","id","il","in","ia",
  "ks","ky","la","me","md","ma","mi","mn","ms","mo","mt","ne","nv","nh","nj",
  "nm","ny","nc","nd","oh","ok","or","pa","ri","sc","sd","tn","tx","ut","vt",
  "va","wa","wv","wi","wy","dc","pr",
];

export function generateStaticParams() {
  return US_STATES.map((state) => ({ state }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const code = state.toUpperCase();
  if (!US_STATES.includes(state.toLowerCase())) {
    return { title: "READYPLAY · Leaderboard" };
  }
  const title = `Top players in ${code} — READYPLAY`;
  const description = `Peer-reviewed OVR rankings across ${code}. Live stats, runs played, and conduct grades.`;
  return {
    title,
    description,
    robots: "index, follow",
    openGraph: { title, description },
  };
}

export default async function StateLeaderboardPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  if (!US_STATES.includes(state.toLowerCase())) return notFound();
  const code = state.toUpperCase();

  const board = await getPublicLeaderboard({ limit: 50, state: code });

  return (
    <MarketingChrome>
      <section className="bg-neutral-50 px-6 pt-28 pb-20 md:px-10 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <LeaderboardTable
            board={board}
            state={code}
            title={`Top players in ${code}.`}
            description={`Peer-reviewed OVR rankings across ${code}. Updates continuously as new reviews land — switch filters above to see other states.`}
          />
        </div>
      </section>
    </MarketingChrome>
  );
}
