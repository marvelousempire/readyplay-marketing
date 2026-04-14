import { brand } from "./brand-marketing";

/** Planned marketing captures under `public/marketing/`. Build shows an image when the file exists. */

export type MarketingScreenshotDef = {
  file: string;
  alt: string;
  caption: string;
};

export const marketingScreenshotManifest: MarketingScreenshotDef[] = [
  {
    file: "play-sites.png",
    alt: "READYPLAY outdoor-style full court art used in the score flow",
    caption: `${brand.sitesScreenTitle} pins real parks—in the app you pick from map or list; games stay anchored to a real pin.`,
  },
  {
    file: "live-game-tapboard.png",
    alt: "READYPLAY full-court score tap art from the shipped iOS app",
    caption: "Tap-to-score lives on a live board with player tiles and fouls—this is the same court system players see in-game.",
  },
  {
    file: "leaderboard.png",
    alt: "READYPLAY shot-zone overlay art from the score tap experience",
    caption: "Shot-style nuance and splits—home leaderboards carry that same depth, not just total points.",
  },
  {
    file: "achievements.png",
    alt: "READYPLAY full-court highlight overlay from in-app score art",
    caption: "Achievement Hall and prestige—clutch stretches and challenges stack on finished, reviewed games.",
  },
];
