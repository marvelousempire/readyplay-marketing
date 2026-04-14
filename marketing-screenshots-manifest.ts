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
    alt: "READYPLAY Play Sites map or list anchored to real parks",
    caption: `${brand.sitesScreenTitle} — real pins, not a vague “meet at the park” thread.`,
  },
  {
    file: "live-game-tapboard.png",
    alt: "READYPLAY live game board with player tiles and score",
    caption: "Live board — tap players to score, fouls on every tile, sideline speed.",
  },
  {
    file: "leaderboard.png",
    alt: "READYPLAY home leaderboards and streak-friendly stats",
    caption: "Leaderboards — home boards, streaks, and bragging rights that stick.",
  },
  {
    file: "achievements.png",
    alt: "READYPLAY Achievement Hall and prestige-style progress",
    caption: "Achievement Hall — challenges and prestige layered on real games.",
  },
];
