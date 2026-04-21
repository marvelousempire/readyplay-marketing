"use client";

import { MotionReveal } from "@/components/motion-reveal";
import { motion } from "framer-motion";

const pitchCards = [
  {
    emoji: "⚡️",
    label: "What it is",
    text: "A peer-managed sports platform that brings structure, accountability, and real reputation to recreational competition — starting with basketball and expanding across every sport you play.",
  },
  {
    emoji: "🔴",
    label: "The name",
    text: "READYPLAY is the intersection of ready and exercise — the moment before competition when your body is warm, your focus is sharp, and you're prepared to perform at your best.",
  },
  {
    emoji: "🔒",
    label: "The trust model",
    text: "Every result is verified by the people who competed. No disputed scores, no fading memories. Your performance record is built by the community around you, not an algorithm.",
  },
  {
    emoji: "🗺️",
    label: "The vision",
    text: "We launched with basketball because it demands the most from a platform — individual stats, team dynamics, defensive accountability, peer-reviewed attributes, and verifiable records. Proving the model there means every other sport is an informed expansion, not a gamble.",
  },
  {
    emoji: "🏅",
    label: "The larger purpose",
    text: "Every athlete deserves a record. Not just professionals — everyone who shows up, competes hard, and earns a reputation through consistent performance. READYPLAY makes that possible for recreational sports at every level.",
  },
  {
    emoji: "❤️",
    label: "Exercise + enjoyment",
    text: "READYPLAY is exercise you actually want to do: real games at real parks, with structure and gamification — runs, streaks, leaderboards, and social proof — so moving your body feels like play, not a chore.",
  },
  {
    emoji: "🚗",
    label: "On-demand play (coming)",
    text: "The long-term marketplace is on-demand play, the way you'd book a ride or a task. Everything is free by default — pickup stays pickup. Paid fill-in roles are earned: you'll need trust, history, and level before you can list.",
  },
  {
    emoji: "🪪",
    label: "Your record, cryptographically sealed",
    text: "Your games, reviews, and roles attach to one stable player identity — the same identity that carries cryptographic game fingerprints today and optional on-chain anchoring tomorrow.",
  },
];

const storyParagraphs = [
  "READYPLAY is a peer-managed sports platform built on a straightforward belief: every athlete, at every level, deserves an accurate record of how they compete.",
  "Professional athletes have sophisticated infrastructure behind them — statisticians, video review, verified performance data. Recreational athletes have almost none of that. Games are played, results are forgotten, and reputations are built entirely on word of mouth. READYPLAY changes that.",
  "The platform gives recreational competitors the same core tools that professional sports have always had: structured scoring, verified results, peer-reviewed performance ratings, and a portable identity that travels across games and seasons.",
  "We are launching with basketball. Not because this is exclusively a basketball application — it is not — but because basketball presents the most complex set of variables to solve in a recreational context. Individual shot tracking, defensive matchups, foul accountability, team chemistry, post-game peer reviews, win streaks, and player identity all need to work together seamlessly. Solving that comprehensively means every sport that follows benefits from proven, tested infrastructure rather than repeated experimentation.",
];

const multiSportParagraphs = [
  "Basketball is the starting point because it demands the most from a sports platform. Managing shot zones, defensive accountability, consensus-based foul logging, team identity across lineup variations, and peer-only reputation scoring simultaneously requires an architecture that is both flexible and precise.",
  "Once that architecture is validated, expanding to other sports is a matter of informed adaptation rather than rebuilding from scratch. The same scoring engine, peer review system, and identity infrastructure serve every sport. What changes is the language and the rules — what constitutes a scoring event, how a period is defined, what a team lineup looks like in context.",
  "Each sport on the roadmap will receive a mode that reflects how that community actually competes. Flag football operates by drives and downs. Tennis tracks games and sets. Padel pairs enclosed-court rallies with doubles-first social play. Golf follows holes and rounds. Bowling counts frames and series. Each experience is native to the sport, not borrowed from basketball.",
];

const identityParagraphs = [
  "Every player profile and every team lineup in READYPLAY carries a stable digital identity. Statistics and reputation accumulate on that identity across every game, every sport, and every season — building a longitudinal record of how you perform as a competitor.",
  "When a game concludes, the platform generates a cryptographic fingerprint of the result: final scores, rosters, and lineup identifiers. That fingerprint is stored with the game record and serves as the payload for blockchain anchoring when wallet integration is complete. Local anchor hashes are stored on completed games today.",
  "Disputed events — such as foul calls — are resolved through a crowd-sourced consensus model. When a majority of participants agree on what occurred, that outcome is recorded. This mirrors the approach used by navigation platforms to validate traffic reports: the combined signal of multiple independent observers outweighs any single account.",
  "READYPLAY is the first peer-managed, blockchain-ready recreational sports platform where reputation is constructed entirely by the people you compete with — not by an algorithm, not by self-reported data, and not by a single administrator's judgment.",
];

const cardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function PitchCard({ emoji, label, text }: { emoji: string; label: string; text: string }) {
  return (
    <motion.div
      variants={card}
      className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
    >
      <span className="text-2xl leading-none mt-0.5 flex-shrink-0">{emoji}</span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-1">
          {label}
        </p>
        <p className="text-[15px] leading-relaxed text-neutral-700 italic">{text}</p>
      </div>
    </motion.div>
  );
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-neutral-600">
          {p}
        </p>
      ))}
    </div>
  );
}

export function OurStory() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32 bg-neutral-50">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Our story
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            What READYPLAY is, and why.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            The name is intentional on three levels. <strong>Ready</strong> — the universal signal
            that competition is about to begin. <strong>Play</strong> — the commitment to compete.
            And the stylized <em>e</em> in our mark nods to{" "}
            <strong>exercise</strong> — real effort and heart rate on court.
          </p>
        </MotionReveal>

        {/* Platform pitch cards */}
        <MotionReveal>
          <h3 className="mt-20 text-2xl font-semibold text-neutral-950">
            The platform at a glance
          </h3>
          <p className="mt-2 text-neutral-600 text-[15px]">
            Eight angles on the same product — pick the one that lands for you.
          </p>
        </MotionReveal>
        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pitchCards.map((c) => (
            <PitchCard key={c.label} {...c} />
          ))}
        </motion.div>

        {/* Full story */}
        <MotionReveal>
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-neutral-950 mb-6">The full story</h3>
            <Prose paragraphs={storyParagraphs} />
          </div>
        </MotionReveal>

        {/* Every sport */}
        <MotionReveal>
          <div className="mt-16 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
              Every sport. One platform.
            </p>
            <Prose paragraphs={multiSportParagraphs} />
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-500 italic">
              Exercise through play, structured scoring, verified reputation, and portable records
              — for every sport you play.
            </p>
          </div>
        </MotionReveal>

        {/* Monetization */}
        <MotionReveal>
          <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 px-7 py-5 flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-2xl flex-shrink-0">💰</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">How we make money</p>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Pickup is free by default — always. Revenue comes from optional scorekeeper credit bundles,
                future pro-tier tools for organizers and trainers, and paid fill-in listings that unlock
                only after a player has earned enough trust and history on the platform.
              </p>
            </div>
          </div>
        </MotionReveal>

        {/* Digital identity */}
        <MotionReveal>
          <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
              Digital identity &amp; verified records
            </p>
            <Prose paragraphs={identityParagraphs} />
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
