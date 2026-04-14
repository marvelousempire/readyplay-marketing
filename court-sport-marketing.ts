/**
 * Court sport grid — keep in sync with `CourtSport` in `Court.swift` (order, labels, live flag, strip labels).
 *
 * **iOS app icons:** `SportSwitchStrip` and the sport hub use `Image(systemName: CourtSport.icon)` (SF Symbols).
 * **Web “stickers”:** `sticker` is a high-DPI emoji stand-in for GitHub Pages (no SF Symbols webfont). To match
 * the app pixel-for-pixel, export small PNGs from SF Symbols.app and replace emoji in this file.
 */

export type CourtSportMarketing = {
  id: string;
  label: string;
  stripLabel: string;
  /** High-quality emoji “sticker” used in marketing mosaic (matches SportSwitchStrip spirit). */
  sticker: string;
  /** `CourtSport.isPrimaryAppExperienceLive` — only basketball today. */
  isLiveExperience: boolean;
  venuePlural: string;
  sessionPlural: string;
  /** One line for marketing. */
  hook: string;
  /** Slightly longer body. */
  body: string;
};

export const courtSportEntries: CourtSportMarketing[] = [
  {
    id: "basketball",
    label: "Basketball",
    stripLabel: "Hoops",
    sticker: "🏀",
    isLiveExperience: true,
    venuePlural: "courts",
    sessionPlural: "games",
    hook: "The deepest live vertical—tap board, shot spot, fouls on every tile, leaderboards that split makes by type.",
    body: "Full scorekeeping, Achievement Hall depth, Watch + Live Activity, CloudKit broadcast, and league standings ship here first. Everything else proves on this engine.",
  },
  {
    id: "volleyball",
    label: "Volleyball",
    stripLabel: "Volley",
    sticker: "🏐",
    isLiveExperience: false,
    venuePlural: "courts",
    sessionPlural: "matches",
    hook: "Same shell: rosters, runs, reviews, and calendar—scorekeeping depth ramps as the sport shell matures.",
    body: "Switch the sport hub to Volleyball and Home, Community, and leaderboards stay scoped so your crew never mixes threads with another sport.",
  },
  {
    id: "tennis",
    label: "Tennis",
    stripLabel: "Tennis",
    sticker: "🎾",
    isLiveExperience: false,
    venuePlural: "courts",
    sessionPlural: "matches",
    hook: "Match-first language, real venues, and the same trust graph as pickup.",
    body: "Calendar and Play Sites stay aligned; live scoring and achievement catalog depth follow the basketball roadmap.",
  },
  {
    id: "padel",
    label: "Padel",
    stripLabel: "Padel",
    sticker: "🏟️",
    isLiveExperience: false,
    venuePlural: "courts",
    sessionPlural: "matches",
    hook: "Court sport with the same discovery and league rails.",
    body: "Padel rides the multi-sport shell—toolbar switcher, scoped Home, and honest MVP banners where the live book is still catching up.",
  },
  {
    id: "pickleball",
    label: "Pickleball",
    stripLabel: "Pickle",
    sticker: "🏓",
    isLiveExperience: false,
    venuePlural: "courts",
    sessionPlural: "matches",
    hook: "Fast sessions, same RSVP and site discipline.",
    body: "Pickleball shares calendars, join flows, and reputation with the rest of READYPLAY—live tap scoring expands sport-by-sport.",
  },
  {
    id: "soccer",
    label: "Soccer",
    stripLabel: "Soccer",
    sticker: "⚽",
    isLiveExperience: false,
    venuePlural: "pitches",
    sessionPlural: "games",
    hook: "Pitch language, park pins, and roster truth.",
    body: "Soccer uses the same Play Sites anchor and post-game reviews so pickup stays grounded in where you actually played.",
  },
  {
    id: "baseball-softball",
    label: "Baseball / Softball",
    stripLabel: "Diamond",
    sticker: "⚾",
    isLiveExperience: false,
    venuePlural: "diamonds",
    sessionPlural: "matches",
    hook: "Diamonds, dugouts, and the same finished-game record.",
    body: "League tags and standings carry over; deep live books land as each sport shell graduates from MVP.",
  },
  {
    id: "flag-football",
    label: "Flag Football",
    stripLabel: "Flag FB",
    sticker: "🏈",
    isLiveExperience: false,
    venuePlural: "fields",
    sessionPlural: "games",
    hook: "Field sports on the same organizer and bench tools.",
    body: "Flag football keeps RSVPs, roles, and reviews attached to real fields—score flows follow as the engine extends.",
  },
  {
    id: "foot-racing",
    label: "Track / Run",
    stripLabel: "Track",
    sticker: "🏃",
    isLiveExperience: false,
    venuePlural: "courses",
    sessionPlural: "games",
    hook: "Courses, streaks, and Health-aware context when you want it.",
    body: "Track and run modes lean on the same identity and calendar spine; Watch and Health copy from basketball where it fits.",
  },
  {
    id: "swimming",
    label: "Pool",
    stripLabel: "Pool",
    sticker: "🏊",
    isLiveExperience: false,
    venuePlural: "pools",
    sessionPlural: "games",
    hook: "Aquatics with the same “who showed up” truth.",
    body: "Pool sessions stay peer-verified; live vertical depth follows the sport roadmap.",
  },
  {
    id: "fishing",
    label: "Fishing",
    stripLabel: "Fish",
    sticker: "🎣",
    isLiveExperience: false,
    venuePlural: "spots",
    sessionPlural: "trips",
    hook: "Trips and spots—not halves—but the same record habit.",
    body: "Fishing shells the app for crews who want a logged outing, reviews, and credits-friendly roles as the product widens.",
  },
];

/** Extra “equipment” emoji to fill mosaic like `LaunchSportGlyphBackdrop` extra pool (decorative). */
export const mosaicExtraStickers = [
  "⛹️",
  "🥇",
  "🎖️",
  "👟",
  "⏱️",
  "🧢",
  "🧴",
  "🌊",
  "☀️",
  "🦵",
  "💨",
  "🔥",
] as const;
