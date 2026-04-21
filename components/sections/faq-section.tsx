"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";

const APP = "READYPLAY";

const sections = [
  {
    title: "Games, scoring & credits",
    items: [
      {
        q: "What makes the score trustworthy?",
        a: "Games are built around structured scorekeeping and peer-visible records. Basketball fouls use a clear two-step flow: first who called the foul, then who committed it—so every entry has better context than a single anonymous tap.",
      },
      {
        q: "What are credits, and who earns them?",
        a: `${APP} credits reward designated scorekeepers when on-record games finish, with extra credit when you keep book without being on either roster—because helping track someone else's game deserves a real perk. Your spendable balance is shown in Settings and on your profile; more redemption options roll out over time.`,
      },
      {
        q: "What is a designated scorekeeper?",
        a: "Games record who held the scorekeeper role. That person's contribution shows in the live game view, in your profile's Book kept / Helper runs stats, and in the credit payout when the run finishes on record—neutral scoring is visible work, not hidden labor.",
      },
      {
        q: "Can I tag makes by shot type?",
        a: `Yes. In Settings → Scorekeeping, turn on "Prompt for shot style on makes." When enabled, scoring can tag makes with basketball shot types such as layup, fade-away, running floater, put-back, and jumpshot—so leaderboards and your record reflect how you score, not just how much.`,
      },
      {
        q: "Why basketball first? Will other sports ship?",
        a: "Basketball is the launch sport because it stresses almost every dimension of the platform—teams, fouls, shot context, reviews, and reputation—at once. The architecture is built to expand responsibly; the in-app Product roadmap explains how we think about additional sports and features.",
      },
      {
        q: "Can I glance at a live game without unlocking my phone?",
        a: `When you have a live game, Home shows "Pin This Game Live to Lock Screen," which starts a Live Activity when the system allows it. The Dynamic Island / Lock Screen presentation includes team scores, progress toward the game total, elapsed time, last scorer context, and a clutch-time style hint when the margin is three points or less.`,
      },
      {
        q: "Why record fouls in two steps?",
        a: `Separating "who called it" from "who committed it" mirrors how real arguments get resolved on the blacktop and produces a clearer audit trail than a single anonymous foul button.`,
      },
    ],
  },
  {
    title: "Creating & joining games",
    items: [
      {
        q: "How do I start a pickup run?",
        a: "From Home, tap Create Game and walk through court selection, teams, rules, and roster options. You can also reach deeper flows from the Games tab depending on how you navigate.",
      },
      {
        q: "How do I join someone else's game?",
        a: "Use Join Game from Home or the games flows your host shares. You'll land in the join experience that matches the session type—scheduled or live—so you're not guessing codes in group text.",
      },
      {
        q: "What's the difference between scheduled and live games?",
        a: "Scheduled games carry time and recruiting context—invites, watchers, RSVPs—while live games focus on scorekeeping, fouls, and the in-run experience including Watch and Live Activities.",
      },
      {
        q: "Can games have roster limits?",
        a: "Yes. Coordinators can work with roster limits so recruiting and join requests respect how many bodies the run actually needs.",
      },
      {
        q: "How do I add a guest player?",
        a: "When you add players to a game or pool, Quick Guest Add asks for a name and optional U.S. phone digits. Orange boxes mark the minimum digits used to recognize the same guest next time: the first digit of the area code plus the last four. Middle digits are optional—someone can skip them if they don't want to share their full number with people they just met at the run.",
      },
    ],
  },
  {
    title: "Runs, scheduling & recruiting",
    items: [
      {
        q: "Can I invite specific people to a scheduled run?",
        a: "Coordinators can send join requests to chosen players for a game. Recipients get a time-limited invite (commonly about an hour to respond) and can accept or decline; accepting can add them to the game's RSVP list depending on flow.",
      },
      {
        q: `What does "watching" a park do?`,
        a: "You can mark interest in parks and courts so recruiting signals—like needing players for a run—surface to people who actually care about that spot instead of spamming everyone city-wide.",
      },
      {
        q: "Is there an availability schedule?",
        a: "Players can maintain availability windows tied to watched parks so coordinators know when you're realistically free to run—not just that you exist in the app.",
      },
      {
        q: "What is the run ledger?",
        a: "The run ledger (Community on Home) is the structured list of scheduled and completed runs—useful when you want history and status instead of only the social-style activity feed.",
      },
    ],
  },
  {
    title: "Apple Watch & health",
    items: [
      {
        q: `Does ${APP} work with Apple Watch?`,
        a: `Yes. ${APP} includes a companion Apple Watch app. During a live game you can tap +1, +2, or +3 from your wrist, see both team names and scores, the game-to target, a running clock, and recent scoring context. Scores are sent to your iPhone when the watch is paired and reachable—ideal when your phone is in a bag or on the bench.`,
      },
      {
        q: "Do I need an Apple Watch to use the app?",
        a: "No. The iPhone app is the full experience. Apple Watch is an optional convenience for live scoring and pairs with calibration for better effort and distance modeling when you use it.",
      },
      {
        q: `Does ${APP} connect to Apple Health?`,
        a: `With your permission, HealthKit supplies heart rate, resting heart rate, height, and weight for calibration. ${APP} is not trying to replace the Health app as your full wellness dashboard—it uses a focused slice of data so on-court effort and distance modeling match how you actually play.`,
      },
      {
        q: "Where do I set up Watch and health calibration?",
        a: "Go to Settings → Player Calibration → Apple Watch & Health Calibration. Authorize Health and motion, start a calibration session on court, then apply the measured values to your profile measurables.",
      },
    ],
  },
  {
    title: "Profile, ratings & measurables",
    items: [
      {
        q: "How does the OVR rating work?",
        a: "Your OVR is built from peer-reviewed stats—win rate, assists, consistency, and conduct signals from players who competed with you. It reflects how people experience playing with you, not only counting stats.",
      },
      {
        q: "How do teammate reviews work?",
        a: "After games, flows prompt attribute and fairness ratings so your public profile reflects how people experience competing with you, not only counting stats.",
      },
      {
        q: "What is a fairness profile?",
        a: `The fairness system tracks how consistently people rate your sportsmanship and rule respect alongside skill attributes—${APP} cares about how you win, not just that you scored.`,
      },
      {
        q: "What are measurables on my profile?",
        a: "Measurables include height, weight, stride length, and heart-rate baselines used to calibrate effort and distance. Height and weight stay private to calculations—they're not flex fields for the timeline.",
      },
    ],
  },
  {
    title: "Home, leaderboards & activity",
    items: [
      {
        q: "Is there a leaderboard?",
        a: "Yes. Home includes leaderboards across many metrics—total scoring, three-pointers, shot-style makes (jumpshot, layup, put-back, dunk, floater, fade-away), steals and blocks (from peer-reviewed attribute signals), and current win streaks from on-record finished games.",
      },
      {
        q: "Where do steals and blocks on the leaderboard come from?",
        a: "Those columns are tied to peer-reviewed attribute ratings—not guesses from box score text—so they reflect how people who play with you rate your game.",
      },
      {
        q: "What is the activity feed?",
        a: "On Home, open the Community section and tap Activity feed. It lists finished games and achievements from people you follow; pull to refresh to sync the latest.",
      },
    ],
  },
  {
    title: "Parks, courts & maps",
    items: [
      {
        q: "Why does the app ask for location?",
        a: `Location powers finding courts and parks, contextual information on Home, and optional live location sharing with people you trust. If iOS Location is set to "Allow Once," the system will ask again each session—that is standard iOS behavior, not the app nagging on every screen.`,
      },
      {
        q: "Can friends see where I am on a map?",
        a: "Only if you opt in. Settings → Friends & location privacy lets you share live location with mutual followers.",
      },
      {
        q: "What are Play Sites / courts in the app?",
        a: "The map and court flows center on real places where pickup happens—parks, outdoor courts, and programmed sites—so games anchor to an actual spot, not a floating chat thread.",
      },
    ],
  },
  {
    title: "Account & verification",
    items: [
      {
        q: "Do I have to create an account?",
        a: "You can explore with a guest ID or sign in with Apple from Settings → Account for a persistent identity path. Profile Setup walks through the fields that make matchups and scorekeeping smoother for everyone.",
      },
      {
        q: "What is identity verification?",
        a: "Settings → Identity & Verification explains in-person verification: show up to a pickup session with government ID, get checked by staff, and receive a verified badge on your profile. The goal is one real person per account so reputation and stats are harder to game by spinning up new profiles.",
      },
      {
        q: "What if I play on guest mode?",
        a: "Guest IDs let you try the product immediately, but long-term reputation, sync, and verification paths work best with Sign in with Apple so your identity persists across devices and seasons.",
      },
      {
        q: "Can I delete my account from inside the app?",
        a: "Use Sign Out and profile controls for the current MVP path; full remote account deletion policies will follow App Store guidelines as the product hardens.",
      },
    ],
  },
  {
    title: "Data, privacy & trust",
    items: [
      {
        q: "What data leaves my phone?",
        a: "Health metrics are read only with permission; location sharing is opt-in; CloudKit payloads follow Apple's privacy model for the containers you authorize. Review Settings toggles for location granularity.",
      },
      {
        q: "Who verifies games if there's a dispute?",
        a: "The model favors participant-visible records and structured foul flows today, with roadmap items for richer consensus and review—peer signal beats a single admin guessing later.",
      },
      {
        q: "Is my performance record on-chain today?",
        a: "Not yet. When a run is archived, the app computes a SHA-256 fingerprint of the game result—a tamper-evident anchor tied to that exact score. Blockchain anchoring is planned as wallet integration completes.",
      },
      {
        q: "Are credits cryptocurrency?",
        a: "No. Credits are in-app points: a balance stored for your account with earn rules like scorekeeping rewards. They are not transferable crypto, not mined, and not a blockchain token unless the product explicitly adds that later under law and platform rules.",
      },
    ],
  },
  {
    title: "About READYPLAY",
    items: [
      {
        q: `What does "READYPLAY" mean?`,
        a: `"Ready," "red exercise" (effort and heart rate), and "Ready? Play." spoken aloud—preparation, effort, and competition in one phrase.`,
      },
      {
        q: "Is READYPLAY about exercise or only basketball stats?",
        a: `Both. The name literally encodes "red exercise" (effort and heart rate) plus "Ready? Play." The app uses real games, streaks, leaderboards, and social competition so pickup stays enjoyable—when play is fun, people move more. Basketball is the first deep vertical; the same idea extends to other sports.`,
      },
      {
        q: "Will I have to pay people to play? Is this like Uber?",
        a: "Pickup stays free by default—the paid marketplace is optional future infrastructure for on-demand fill-ins. When paid listings exist, the plan is to gate them behind trust, history, and level so only players who've earned reputation can charge—not open gig spam on day one.",
      },
      {
        q: "Why basketball first?",
        a: "Basketball stresses almost every dimension of the platform at once—teams, fouls, shot context, reviews, and reputation. The architecture is built to expand to other sports responsibly once the core trust system is proven.",
      },
    ],
  },
  {
    title: "Tips & troubleshooting",
    items: [
      {
        q: "I'm new—what's the fastest path to my first game?",
        a: `Allow location for nearby courts, create or join a game from Home, add a couple roster names, start the live session, and pin the Live Activity if you're scorekeeping—then finish through post-game review to light up your profile.`,
      },
      {
        q: "Live Activity didn't show up—why?",
        a: `Live Activities can be disabled per-app in Settings, Focus modes can suppress them, and Low Power Mode may affect updates. Tap "Pin This Game Live to Lock Screen" while a game is live after allowing permissions.`,
      },
      {
        q: "Health permission denied—can I retry?",
        a: `Open the iOS Settings app → Privacy → Health → ${APP} and enable read access for the types you're comfortable with, then return to the calibration screen and authorize again.`,
      },
      {
        q: `Location feels "broken" but I chose Allow Once?`,
        a: "iOS intentionally re-prompts Allow Once each launch; switch to While Using or Always (if appropriate) for fewer interruptions during a long gym or park day.",
      },
      {
        q: "My Watch taps don't seem to update the score—what should I check?",
        a: "Scoring messages require the watch and phone to be paired and the session to be reachable over WatchConnectivity. Keep the phone nearby and ensure both apps are up to date.",
      },
    ],
  },
  {
    title: "During a Live Game",
    items: [
      {
        q: "Where is the score pad during a live game?",
        a: "Tap the live score banner on Home or open Games and tap your active game. The tap board fills the screen — one tap per basket, foul button always visible, undo available for mistakes.",
      },
      {
        q: "Can I see who scored last?",
        a: "Yes. The live game view shows the last scoring event with the player name and point value. The Lock Screen Live Activity also shows last scorer context when the game is pinned.",
      },
      {
        q: "What is the clutch alert?",
        a: `When the margin between teams drops to three points or less, a clutch-time indicator fires in the Live Activity and on Apple Watch. It's a visual signal — not a sound — that the game is close.`,
      },
      {
        q: "Does the app predict who might win before tipoff?",
        a: "Yes. READYPLAY runs a win probability estimate on both lineups before the game starts, blending peer-reviewed attributes, finishing rates, discipline signals from foul history, and familiarity bonuses from prior games those teammates have played together.",
      },
      {
        q: "Can someone follow the game without being on the court?",
        a: `Share the spectate link from the live game. Anyone who taps it opens the full live scoreboard — score, time, last basket — without needing to be on either roster. Works from a group chat link.`,
      },
    ],
  },
  {
    title: "Shortcuts, Widgets & System Integrations",
    items: [
      {
        q: "Does READYPLAY support Apple Shortcuts?",
        a: "Yes. READYPLAY ships with App Intents so you can trigger quick actions from the Shortcuts app or Siri — like jumping to your current game or submitting a score event. Build a shortcut once and run it from anywhere.",
      },
      {
        q: "Is there a Home Screen widget?",
        a: "Yes. A READYPLAY widget is available for your iPhone Home Screen and Lock Screen showing your current game status, upcoming scheduled runs, or recent leaderboard position.",
      },
      {
        q: "Can I use Siri with READYPLAY?",
        a: "Via Shortcuts, yes. Set up a Shortcuts phrase and Siri will trigger the linked App Intent — useful for hands-free moments on court when you need to check or update game state quickly.",
      },
    ],
  },
  {
    title: "Settings & Customization",
    items: [
      {
        q: "How do I switch between Fahrenheit and Celsius?",
        a: "Settings → Display → Temperature Unit. The weather label on Home switches immediately. The app uses Apple WeatherKit to show court-condition context like Humid or Mild alongside the number.",
      },
      {
        q: "Where is the release changelog?",
        a: "Settings → App → Release notes, or Settings → About This App → Release notes. The same history is published at readyplay.app/changelog.",
      },
      {
        q: "How do I turn on shot-style tagging?",
        a: `Settings → Scorekeeping → Prompt for shot style on makes. When on, scoring a basket opens a quick picker for shot type (layup, jumpshot, floater, fade-away, put-back, dunk) before logging the point.`,
      },
      {
        q: "What is Internal Tools?",
        a: "Internal Tools (Settings → Internal Tools) is a developer and park-operator panel for seeding test data, inspecting CloudKit sync state, and managing court configurations. It is not intended for general use.",
      },
    ],
  },
  {
    title: "Notifications",
    items: [
      {
        q: "What kinds of notifications does READYPLAY send?",
        a: "Join request alerts when someone asks to join your game, recruiting signals when a park run needs players and you watch that park, and clutch-game moments for live games you follow. READYPLAY does not send marketing push notifications.",
      },
      {
        q: "How do I control which notifications I receive?",
        a: "Settings → Notifications lets you toggle each category independently. You can allow join-request alerts while silencing recruiting nudges, for example. iOS notification permissions apply on top of in-app toggles.",
      },
      {
        q: "Why did I get a notification for a park I don't play at?",
        a: "Recruiting notifications are tied to parks you have marked as watched. Un-watch a park from its detail page and that park's recruiting signals will stop.",
      },
    ],
  },
  {
    title: "Game Fingerprints, Identity & Blockchain",
    items: [
      {
        q: "What is the long hex string on a finished game?",
        a: "That is the game's cryptographic fingerprint — a SHA-256 hash of the exact game record: game ID, both team stable lineup identifiers, final scores, sorted roster player IDs, end time, and counts of score and foul events. It is a tamper-evident seal for that specific outcome.",
      },
      {
        q: "Where do I find and copy the fingerprint?",
        a: "Open any finished game → scroll to Proof & integrity → tap the hash string to copy it. You can share it as evidence that the record has not been altered.",
      },
      {
        q: "What is a stable team or lineup ID?",
        a: "Every unique combination of players generates a deterministic team ID (e.g. 7F2K-9Q1M) encoded as a short Crockford Base32 string. The same group of players always produces the same ID regardless of order, so recurring lineups are recognized automatically across games and seasons.",
      },
      {
        q: "Is my player profile an NFT?",
        a: `Not yet minted on a public chain, but the architecture mirrors it: your profile and each team lineup carry stable, deterministic digital identities that accumulate stats across games and seasons. The post-game hash is the integrity seal; on-chain anchoring of that payload is the next step.`,
      },
      {
        q: "What is the 'chain transaction' field on a game?",
        a: "Currently empty — it is the placeholder for the on-chain transaction ID that will be written when blockchain anchoring goes live. The local hash is stored today; the public chain record follows when wallet integration ships.",
      },
      {
        q: "Are READYPLAY credits cryptocurrency?",
        a: "No. Credits are in-app points: a balance tied to your account with earn rules like scorekeeper rewards. They are not transferable crypto, not mined, and not a blockchain token unless the product explicitly adds that later under applicable law and platform rules.",
      },
      {
        q: "How does the win probability model work?",
        a: "WinPredictor blends four signals: 55% computed attribute algorithm (peer-reviewed speed, defense, finishing), 30% peer review average, 10% shot-event finishing rate, and 5% discipline score from foul patterns. Familiarity and synergy bonuses apply when the same teammates have played together before.",
      },
      {
        q: "What makes the records trustworthy without a central referee?",
        a: "Disputed events like foul calls use a crowd-sourced consensus model: when a majority of participants agree, that outcome is recorded. The combined signal of multiple independent observers outweighs any single account — the same principle navigation platforms use to validate traffic reports.",
      },
      {
        q: "Will player records ever be publicly verifiable on a blockchain?",
        a: "Yes, that is the roadmap. Each completed game already generates a hash payload ready for on-chain anchoring. When wallet integration ships, the transaction ID will be written back to the game record so anyone can verify the result against the public ledger independently.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-neutral-950 leading-snug">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-0.5 flex-shrink-0 text-xl leading-none text-neutral-400 select-none"
          aria-hidden
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[15px] leading-relaxed text-neutral-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FaqGroup({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      <h3 className="mb-1 text-xs font-semibold uppercase tracking-widest text-neutral-400">
        {title}
      </h3>
      <div>
        {items.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl">
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Questions, answered.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600">
            Everything you need to know about getting on the court, keeping score, and building
            your record.
          </p>
        </MotionReveal>

        <div className="mt-16 flex flex-col gap-6">
          {sections.map((section) => (
            <FaqGroup key={section.title} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
