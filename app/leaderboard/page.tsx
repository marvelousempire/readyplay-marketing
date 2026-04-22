import type { Metadata } from "next";

import { MarketingChrome } from "@/components/marketing-chrome";
import { LeaderboardTable } from "@/components/public/LeaderboardTable";
import { getPublicLeaderboard } from "@/lib/public-api";

export const metadata: Metadata = {
  title: "Leaderboard — READYPLAY",
  description:
    "Live rankings — peer-reviewed OVR, runs played, and conduct grades across READYPLAY.",
  robots: "index, follow",
  openGraph: {
    title: "READYPLAY Leaderboard",
    description:
      "Live rankings — peer-reviewed OVR, runs played, and conduct.",
  },
};

export default async function LeaderboardPage() {
  const board = await getPublicLeaderboard({ limit: 50 });

  return (
    <MarketingChrome>
      <section className="bg-neutral-50 px-6 pt-28 pb-20 md:px-10 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <LeaderboardTable
            board={board}
            state={null}
            title="Who's actually showing up."
            description="Ranked by runs played × peer-reviewed team-player score. Updates continuously as new reviews land."
          />
        </div>
      </section>
    </MarketingChrome>
  );
}
