import { brand } from "./brand-marketing";

/** Planned marketing captures under `public/marketing/`. Build shows an image when the file exists. */

export type MarketingScreenshotDef = {
  file: string;
  alt: string;
  caption: string;
};

export const marketingScreenshotManifest: MarketingScreenshotDef[] = [
  {
    file: "home-screen.png",
    alt: "READYPLAY Home tab showing live games, weather, and leaderboard preview",
    caption: "Home at a glance—live runs nearby, current conditions, and your leaderboard standing all on one screen.",
  },
  {
    file: "live-game-tapboard.png",
    alt: "READYPLAY tap-to-score live board with player tiles and foul controls",
    caption: "Tap any player tile to log a make, miss, or foul. Big rows, quick swipes, optional shot spot and style—the book stays honest even in bright sun.",
  },
  {
    file: "team-setup.png",
    alt: "READYPLAY team setup matchup board showing two teams side by side",
    caption: "Drag players into position before tip-off. Each tile shows the player's rating so balanced matchups happen before the whistle, not after.",
  },
  {
    file: "leaderboard.png",
    alt: "READYPLAY leaderboard showing scoring, streaks, and shot-style splits",
    caption: "Scroll through scoring, threes, layups, win streaks, and more—each ranked against the people you actually played with.",
  },
  {
    file: "achievements.png",
    alt: "READYPLAY Achievement Hall showing badges, trophies, and prestige levels",
    caption: "Achievement Hall—park medals, milestone trophies, timed challenges, and prestige levels earned from finished, reviewed games.",
  },
  {
    file: "profile-ovr.png",
    alt: "READYPLAY player profile showing OVR rating, attributes, and stats",
    caption: "Your OVR card: overall rating, 10 attributes, split stats by court and conditions, conduct grade, and a reputation built by the people you played with.",
  },
  {
    file: "game-summary.png",
    alt: "READYPLAY game summary showing final score, player stats, and shot map",
    caption: "The finished record—final score, player stat breakdown, shot map, and the integrity check that locks the run in place.",
  },
  {
    file: "play-sites.png",
    alt: "READYPLAY Play Sites map showing court pins and venue discovery",
    caption: `${brand.sitesScreenTitle} pins real parks—pick from map or list, see who's playing now, and start a game anchored to an actual court.`,
  },
  {
    file: "feature-credits.png",
    alt: "READYPLAY credits screen showing earned credits and StoreKit bundles",
    caption: "Credits earned for scorekeeping and neutral roles—the bench economy that recognizes the labor keeping pickup honest.",
  },
  {
    file: "feature-broadcast.png",
    alt: "READYPLAY spectator broadcast view showing live score and timeline",
    caption: "CloudKit broadcast keeps followers on the same timeline as the scorekeeper—score from Apple Watch while friends follow from the sideline.",
  },
];
