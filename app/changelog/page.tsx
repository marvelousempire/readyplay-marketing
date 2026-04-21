import type { Metadata } from "next";
import Link from "next/link";
import { MarketingChrome } from "@/components/marketing-chrome";

export const metadata: Metadata = {
  title: "Changelog — READYPLAY",
  description: "Public release notes for READYPLAY (beta).",
};

type Release = { version: string; date: string; headline: string; area: string; bullets: string[] };

const releases: Release[] = [
  {
    version: "Update 047",
    date: "2026-04-09",
    headline: "Multi-Sport Worlds, Morphed Home, and Honest Preview Banners",
    area: "Multi-Sport",
    bullets: [
      "Sport Hub + toolbar switcher sets the active sport context; tabs reset navigation per sport.",
      "Home morphs copy and layout for live vs parked sports.",
      "Calendar, Community, and Leaderboard show a clear preview banner when a sport isn't fully live yet.",
      "Default avatars use user-style stickers instead of basketballs.",
    ],
  },
  {
    version: "Update 046",
    date: "2026-04-09",
    headline: "League Standings, Teammate Win Chemistry, and Motion Hints",
    area: "Community",
    bullets: [
      "League detail computes local standings from finished games; recent league activity feed added.",
      "Profiles add a wins-with-teammates ranking derived from shared rosters.",
      "Subtle SF Symbol motion applied to important actions and hints in Live Game and Roadmap.",
    ],
  },
  {
    version: "Update 045",
    date: "2026-04-08",
    headline: "Viewport Framing and Layout Stability",
    area: "App Shell",
    bullets: [
      "Fixed horizontal overflow and content feeling zoomed or clipped on iPhone and iPad.",
      "Splash view no longer participates in layout measurement after hydration is complete.",
      "Settings Form scrolls correctly without Auto Layout constraint warnings.",
      "New Game scheduling controls size predictably across compact and regular size classes.",
    ],
  },
  {
    version: "Update 044",
    date: "2026-04-08",
    headline: "Credits, Designated Scorekeeper, and Apple Watch Scoring",
    area: "Apple Platform",
    bullets: [
      "CreditBalanceStore tracks user credits with balance display in Settings.",
      "Designated scorekeeper shown in the Live Game header; earns credits on game completion.",
      "Apple Watch supports full +1 / +2 / +3 scoring with team names and elapsed time.",
    ],
  },
  {
    version: "Update 043",
    date: "2026-04-08",
    headline: "Community Players and Contacts Tabs on Home",
    area: "Home",
    bullets: [
      "Home people section separates Known players (contacts matched to roster) from Community players (app-wide).",
      "Each tab includes a random spotlight row and a new-arrivals row.",
      "Contact sync runs on a background thread to avoid blocking the main thread.",
    ],
  },
  {
    version: "Update 042",
    date: "2026-04-08",
    headline: "Team IDs and Win Probability Engine",
    area: "Team Setup",
    bullets: [
      "Every unique player combination gets a deterministic SHA256-based team ID (e.g. 7F2K-9Q1M).",
      "WinPredictor calculates match probability using attributes, peer scores, and co-play history.",
      "Synergy and familiarity bonuses applied when recurring teammates run together.",
    ],
  },
  {
    version: "Update 041",
    date: "2026-04-08",
    headline: "Homepage Leaders: 11-Tab Leaderboard",
    area: "Home",
    bullets: [
      "Leaders section is now a scrollable 11-tab bar: Scoring, 3PT, Jumpshot, Layup, Put-back, Dunk, Floater, Fade, Steals, Blocks, Streaks.",
      "Steals and Blocks derived from aggregated peer-reviewed attributes.",
      "Streaks tab pulls current win streak from finished on-record games.",
    ],
  },
  {
    version: "Update 040",
    date: "2026-04-08",
    headline: "NFT and Blockchain Architecture Documented in About",
    area: "Settings",
    bullets: [
      "About section now explains the NFT identity model for players and teams.",
      "Cryptographic anchor hash generated at game completion described as the on-chain payload.",
      "Local anchor hashes stored on completed games today; on-chain IDs coming with wallet integration.",
    ],
  },
  {
    version: "Update 039",
    date: "2026-04-08",
    headline: "Offensive and Defensive Awareness as Separate Attributes",
    area: "Profiles",
    bullets: [
      "Offensive and defensive awareness are now distinct attributes with separate peer-review inputs and attribute bars.",
      "Each feeds WinPredictor and GamificationService with more granular team-strength signals.",
      "Legacy combined awareness field preserved for backward compatibility.",
    ],
  },
  {
    version: "Update 038",
    date: "2026-04-08",
    headline: "Player Defensive Responsibility — Independent Drag Per Side",
    area: "Team Setup",
    bullets: [
      "Matchup board renamed to Player Defensive Responsibility.",
      "Team A and Team B each reorder independently via long-press and drag within their column.",
      "Matchups pair row 1 vs row 1 with override available on score entry.",
    ],
  },
  {
    version: "Update 037",
    date: "2026-04-08",
    headline: "Foul Two-Step Flow: Caller Then Fouler",
    area: "Live Game",
    bullets: [
      "Foul flow now uses a clear two-step sequence: first who called the foul, then who committed it.",
      "Caller is excluded from the fouler selection pool.",
      "Both caller and fouler IDs stored on FoulEvent for full history traceability.",
    ],
  },
  {
    version: "Update 036",
    date: "2026-04-08",
    headline: "Shot Court Precision: Three-Point Line, Paint, Zone Points",
    area: "Live Game",
    bullets: [
      "Visible three-point arc drawn on the shot selection court diagram.",
      "Paint area enlarged for more accurate tap targeting.",
      "Correct 1, 2, or 3 point value derived from tap position using real arc math.",
    ],
  },
  {
    version: "Update 035",
    date: "2026-04-08",
    headline: "Stats Export and NBA 2K / NBA Live Blueprint",
    area: "Profiles",
    bullets: [
      "Export full game history as a JSON bundle from your profile.",
      "Auto-generated Create-a-Player Blueprint maps real stats to the 0–99 attribute scale used in NBA 2K and NBA Live.",
      "Archetype detection from shooting and finishing patterns (Outside Spacer, Slasher/Finisher, Balanced Wing).",
    ],
  },
  {
    version: "Update 034",
    date: "2026-04-07",
    headline: "Exact Sport Anchors, Look Around, and Amenity Mapping",
    area: "Sites",
    bullets: [
      "Parks now map the real sport area with sport-specific map anchors.",
      "Look Around and satellite context available on park sheets.",
      "Pools and field-sport amenity badges surface in site calendars.",
    ],
  },
  {
    version: "Update 033",
    date: "2026-04-07",
    headline: "Profile Identity Refresh",
    area: "Profiles",
    bullets: [
      "Profiles now show monthly record instead of season record.",
      "Instagram, TikTok, YouTube, and X social handles added to profile pages.",
      "Sport-ball tabs added across the profile shell.",
    ],
  },
  {
    version: "Update 032",
    date: "2026-04-07",
    headline: "Computed Attribute Engine and Peer-Only Reviews",
    area: "Profiles",
    bullets: [
      "Self-rating removed; attributes now lean on peer review, shot trust, and tracked outcomes.",
      "Computed 0-to-100 attribute model replaces self-declared opinion.",
      "Shot-confidence inputs feed scoring attributes.",
    ],
  },
  {
    version: "Update 031",
    date: "2026-04-07",
    headline: "Shot Chart, Matchups, and Scored-On Tracking",
    area: "Live Game",
    bullets: [
      "Live scoring now includes shot location, shot type, and pre-game defensive matchups.",
      "Who got scored on is tracked for each basket.",
      "Game summaries tell a more believable story about how scoring happened.",
    ],
  },
  {
    version: "Update 030",
    date: "2026-04-07",
    headline: "Follower Live Activities and Watch Controls",
    area: "Apple Platform",
    bullets: [
      "Followers can pin a live game to the Lock Screen and receive clutch alerts at three-point margins.",
      "Apple Watch supports deeper run status, check-in, and host launch actions.",
      "App stays useful from the Lock Screen even when the phone is in the bag.",
    ],
  },
  {
    version: "Update 029",
    date: "2026-04-07",
    headline: "Calendar Hub and Geofenced Scheduling",
    area: "Scheduling",
    bullets: [
      "Dedicated calendar tab added for planning future runs by park and sport.",
      "Recurring site scheduling with next runs generated automatically.",
      "Check-in only available when physically at the park (geofenced).",
    ],
  },
  {
    version: "Update 028",
    date: "2026-04-07",
    headline: "Site Intelligence and Nearby Player Layer",
    area: "Sites",
    bullets: [
      "Park pages surface run culture, current conditions, and nearby players.",
      "Users can compare parks by current atmosphere, recent activity, and on-site player presence.",
      "Site intelligence tied to recent games and timing patterns.",
    ],
  },
  {
    version: "Update 027",
    date: "2026-04-06",
    headline: "Map Seed Corrections and Park Address Fixes",
    area: "Maps",
    bullets: [
      "Corrected multiple Miami and Miami Beach park coordinates and addresses.",
      "Address display moved directly under the map on park detail pages.",
      "Park selection and game creation now confirm the selected park more clearly.",
    ],
  },
  {
    version: "Update 026",
    date: "2026-04-04",
    headline: "Roadmap Detail Sheets and Blueprint Taps",
    area: "Roadmap",
    bullets: [
      "Roadmap is now interactive with separate Completed and Planned tabs.",
      "Tappable feature and screen cards with stable IDs (REP-1xxx, REP-2xxx).",
      "Concept UI previews inside detail pop-up sheets.",
    ],
  },
  {
    version: "Update 025",
    date: "2026-04-02",
    headline: "Profile Splits and Site Inverse View",
    area: "Profiles",
    bullets: [
      "Profiles now break down performance by site, time, and conditions.",
      "Park pages show the inverse view: which players perform best at that specific location.",
      "Performance explorer with drill-down games added.",
    ],
  },
  {
    version: "Update 024",
    date: "2026-03-31",
    headline: "Site Intelligence and Conditions History",
    area: "Sites",
    bullets: [
      "Park pages show current conditions, conditions history, and run culture.",
      "Timing patterns and top players attached to recent runs at each site.",
      "Users can choose parks based on how they run and who shows up there.",
    ],
  },
  {
    version: "Update 023",
    date: "2026-03-28",
    headline: "Team Builder and Downs Automation",
    area: "Team Setup",
    bullets: [
      "Contact picker now shows a live player count.",
      "Random and balanced auto-build modes for fair team formation.",
      "Leftover players automatically flow into the next game queue.",
    ],
  },
  {
    version: "Update 022",
    date: "2026-03-26",
    headline: "Shot Chart Foundation",
    area: "Live Game",
    bullets: [
      "Score events now support shot location and optional shot style tagging.",
      "Game summaries show a first-pass shot map for made baskets.",
      "Shot styles include layup, floater, jumpshot, and more.",
    ],
  },
  {
    version: "Update 021",
    date: "2026-03-24",
    headline: "Court Picker UX Rework",
    area: "Game Creation",
    bullets: [
      "Selecting a court now uses clear surface choices: Full Court 1, Court 1A, Court 1B.",
      "Selected park footprint revealed immediately after choosing a surface.",
      "Sticky bottom action bar added for quicker confirmation.",
    ],
  },
  {
    version: "Update 020",
    date: "2026-03-22",
    headline: "Park Footprint Upgrade",
    area: "Courts",
    bullets: [
      "Site layouts moved from generic icons to authored park schematics.",
      "Real court arrangements, paths, bleachers, fence cues, and tappable explanations.",
      "Full-court side labels like 1A and 1B added.",
    ],
  },
  {
    version: "Update 019",
    date: "2026-03-20",
    headline: "Recurring Runs and Start-Now Flow",
    area: "Scheduling",
    bullets: [
      "Hosts can create weekly repeating runs without recreating the same game each week.",
      "Next 8 runs generated automatically from a recurring schedule.",
      "Host-only Start Now button on scheduled cards to launch the run in one tap.",
    ],
  },
  {
    version: "Update 018",
    date: "2026-03-18",
    headline: "Scheduling, RSVP, and Conflict Control",
    area: "Scheduling",
    bullets: [
      "Players can schedule future games by park and RSVP into upcoming runs.",
      "Double-booking across overlapping game times is blocked automatically.",
      "Upcoming games surface on home and park views.",
    ],
  },
];

const areaColors: Record<string, string> = {
  "Multi-Sport": "bg-violet-100 text-violet-700",
  "Community": "bg-teal-100 text-teal-700",
  "App Shell": "bg-neutral-100 text-neutral-600",
  "Apple Platform": "bg-blue-100 text-blue-700",
  "Home": "bg-orange-100 text-orange-700",
  "Team Setup": "bg-red-100 text-red-700",
  "Live Game": "bg-green-100 text-green-700",
  "Profiles": "bg-indigo-100 text-indigo-700",
  "Settings": "bg-neutral-100 text-neutral-600",
  "Sites": "bg-emerald-100 text-emerald-700",
  "Maps": "bg-sky-100 text-sky-700",
  "Roadmap": "bg-purple-100 text-purple-700",
  "Scheduling": "bg-amber-100 text-amber-700",
  "Game Creation": "bg-pink-100 text-pink-700",
  "Courts": "bg-lime-100 text-lime-700",
};

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
        <ol className="mt-12 space-y-10 border-t border-neutral-200/80 pt-12">
          {releases.map((r) => (
            <li key={r.version} className="grid gap-1 sm:grid-cols-[140px_1fr]">
              <div className="flex flex-col gap-1.5 pt-0.5">
                <span className="text-sm font-semibold text-neutral-950">{r.version}</span>
                <time className="text-xs text-neutral-400" dateTime={r.date}>
                  {new Date(r.date + "T12:00:00").toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span
                  className={`inline-flex w-fit rounded-full px-2 py-0.5 text-xs font-medium ${
                    areaColors[r.area] ?? "bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {r.area}
                </span>
              </div>
              <div>
                <h2 className="text-base font-semibold text-neutral-950">{r.headline}</h2>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-600">
                  {r.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </MarketingChrome>
  );
}
