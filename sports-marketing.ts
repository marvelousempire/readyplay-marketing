/**
 * Per-sport marketing copy — keep `id` + `label` aligned with `CourtSport` in Court.swift.
 * `isLiveExperience` mirrors `CourtSport.isPrimaryAppExperienceLive` (basketball only today).
 */

export type SportMarketing = {
  id: string;
  label: string;
  emoji: string;
  /** Matches app: only basketball has full live stats / primary tab depth today. */
  isLiveExperience: boolean;
  sessionWord: string;
  venueWord: string;
  /** One paragraph for the marketing “every sport” grid. */
  blurb: string;
};

export const sportsMarketing: SportMarketing[] = [
  {
    id: "basketball",
    label: "Basketball",
    emoji: "🏀",
    isLiveExperience: true,
    sessionWord: "games",
    venueWord: "courts",
    blurb:
      "The deepest live vertical: tap-to-score boards, fouls on every player tile, shot spot and styles, merged history, Watch + Live Activity, CloudKit broadcast, home leaderboards, and a full Achievement Hall catalog—all proven on pickup first.",
  },
  {
    id: "volleyball",
    label: "Volleyball",
    emoji: "🏐",
    isLiveExperience: false,
    sessionWord: "matches",
    venueWord: "courts",
    blurb:
      "Same identity, Play Sites, scheduling, reviews, and scorekeeper culture as hoops—volleyball runs on the shared shell while sport-specific live depth and hall entries ramp with the roadmap.",
  },
  {
    id: "tennis",
    label: "Tennis",
    emoji: "🎾",
    isLiveExperience: false,
    sessionWord: "matches",
    venueWord: "courts",
    blurb:
      "Match language, court pins, and reputation that travel with you—tennis shares the trusted rails; live scoring nuance grows as we deepen the shell.",
  },
  {
    id: "padel",
    label: "Padel",
    emoji: "🔷",
    isLiveExperience: false,
    sessionWord: "matches",
    venueWord: "courts",
    blurb:
      "Padel sits on the same sport switcher and venue model as tennis and pickleball—pick your shell, keep one profile, and grow history as live features land.",
  },
  {
    id: "pickleball",
    label: "Pickleball",
    emoji: "🏓",
    isLiveExperience: false,
    sessionWord: "matches",
    venueWord: "courts",
    blurb:
      "Fast sessions, real parks, same RSVP and review loop—pickleball gets the full social and scheduling spine today with scoring depth catching up to demand.",
  },
  {
    id: "soccer",
    label: "Soccer",
    emoji: "⚽",
    isLiveExperience: false,
    sessionWord: "games",
    venueWord: "pitches",
    blurb:
      "Pitch vocabulary, league tags when you use them, and the same finished-game record—soccer benefits from basketball’s engine without pretending every stat is live yet.",
  },
  {
    id: "baseball-softball",
    label: "Baseball / Softball",
    emoji: "⚾",
    isLiveExperience: false,
    sessionWord: "matches",
    venueWord: "diamonds",
    blurb:
      "Diamonds, innings language where it applies, and peer reviews after the last out—structured competition without losing pickup’s soul.",
  },
  {
    id: "flag-football",
    label: "Flag Football",
    emoji: "🏈",
    isLiveExperience: false,
    sessionWord: "games",
    venueWord: "fields",
    blurb:
      "Field sessions, roster truth, and sideline scorekeeping—flag shares the live board patterns as we widen sport-specific playbooks.",
  },
  {
    id: "foot-racing",
    label: "Track / Run",
    emoji: "🏃",
    isLiveExperience: false,
    sessionWord: "games",
    venueWord: "courses",
    blurb:
      "Course-based meets and crew accountability—running uses the same “who showed up, who finished, who reviewed” graph even when the scoreboard looks different from hoops.",
  },
  {
    id: "swimming",
    label: "Pool",
    emoji: "🏊",
    isLiveExperience: false,
    sessionWord: "games",
    venueWord: "pools",
    blurb:
      "Pool meets, lane culture, and safety-first defaults—swimming stays on the identity and venue rails while aquatic-specific live scoring evolves.",
  },
  {
    id: "fishing",
    label: "Fishing",
    emoji: "🎣",
    isLiveExperience: false,
    sessionWord: "trips",
    venueWord: "spots",
    blurb:
      "Trips and spots instead of quarters—fishing stretches the platform to outdoor competition that still cares about who was there and what got logged.",
  },
  {
    id: "bowling",
    label: "Bowling",
    emoji: "🎳",
    isLiveExperience: false,
    sessionWord: "games",
    venueWord: "lanes",
    blurb:
      "Frame-by-frame digital scoring, individual lane records, and verified season averages — bowling leagues have carried paper scoresheets for decades. READYPLAY gives every bowler a portable profile with high game, high series, strike rate, and spare percentage, all attached to the same verified trust graph that runs the rest of the platform.",
  },
];

/** @deprecated Use `sportsMarketing.map(s => s.label)` — kept for a few imports. */
export const courtSportLabels = sportsMarketing.map((s) => s.label);
