"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";
import { SportStickerStrip } from "@/components/sport-sticker";
import { assetPath } from "@/brand-marketing";

/* ─────────────────────────────────────────────────────────
   Badge catalog — organized by rarity tier
   ───────────────────────────────────────────────────────── */

type Badge = {
  icon: string;
  name: string;
  earn: string;
};

type Tier = {
  id: string;
  label: string;
  description: string;
  ringClass: string;
  labelClass: string;
  dotClass: string;
  badges: Badge[];
};

const tiers: Tier[] = [
  {
    id: "common",
    label: "Common",
    description: "Earned by showing up and competing.",
    ringClass: "ring-neutral-200",
    labelClass: "bg-neutral-100 text-neutral-600",
    dotClass: "bg-neutral-400",
    badges: [
      { icon: "🎮", name: "First Drop", earn: "Played and closed your first recorded game" },
      { icon: "📍", name: "On the Board", earn: "First points logged in a verified game" },
      { icon: "✅", name: "W on Record", earn: "First peer-verified team win" },
      { icon: "🏠", name: "Home Court", earn: "5 games played at the same court" },
      { icon: "🌙", name: "Night Run", earn: "Played after 8 pm" },
      { icon: "💪", name: "Weekend Warrior", earn: "3 verified games in a single weekend" },
      { icon: "🤝", name: "Good Sport", earn: "Zero conduct flags across 10 games" },
      { icon: "📱", name: "Tap Keeper", earn: "First game kept using the tap board" },
    ],
  },
  {
    id: "rare",
    label: "Rare",
    description: "Requires consistency and peer validation.",
    ringClass: "ring-blue-200",
    labelClass: "bg-blue-50 text-blue-700",
    dotClass: "bg-blue-400",
    badges: [
      { icon: "⚡", name: "Clutch", earn: "4-run win streak, all peer-verified" },
      { icon: "📋", name: "Honest Book", earn: "Kept score for 10 complete games" },
      { icon: "🏡", name: "Park Regular", earn: "20 verified games at the same court" },
      { icon: "🔥", name: "Streak Runner", earn: "10 games played within 30 days" },
      { icon: "🎯", name: "Clean Record", earn: "Conduct A+ across 20 consecutive games" },
      { icon: "👟", name: "Court Rat", earn: "Played at 5 different courts on record" },
      { icon: "🧠", name: "The Setup", earn: "Top-rated playmaker in peer reviews for a season" },
      { icon: "📣", name: "Bench Filler", earn: "Filled a GM-posted roster spot 5 times" },
    ],
  },
  {
    id: "elite",
    label: "Elite",
    description: "Rare performance over a full season.",
    ringClass: "ring-amber-200",
    labelClass: "bg-amber-50 text-amber-700",
    dotClass: "bg-amber-400",
    badges: [
      { icon: "🔒", name: "Lockdown", earn: "Consistent top-graded defensive stops across a season" },
      { icon: "🎯", name: "Sharpshooter", earn: "Arc accuracy tracked in the top tier all season" },
      { icon: "🦾", name: "Ironman", earn: "50 verified games in a single calendar year" },
      { icon: "👑", name: "Court Favorite", earn: "Highest popularity rating at your home court" },
      { icon: "📊", name: "Season High", earn: "Reached 85+ OVR in any single-season window" },
      { icon: "💎", name: "Double Threat", earn: "Two elite-tier attributes earned in same season" },
      { icon: "🏆", name: "Win Machine", earn: "70%+ win rate over 30+ games on record" },
      { icon: "⭐", name: "Reputation Built", earn: "Reviewed by 25+ unique players across 3+ courts" },
    ],
  },
  {
    id: "prestige",
    label: "Prestige",
    description: "The hardest to earn. These require years, not sessions.",
    ringClass: "ring-violet-300",
    labelClass: "bg-violet-50 text-violet-700",
    dotClass: "bg-violet-500",
    badges: [
      { icon: "📚", name: "The Book", earn: "100 games kept as neutral scorekeeper" },
      { icon: "🗺", name: "Court Legend", earn: "200 verified games at a single court" },
      { icon: "🏛", name: "Hall of Fame", earn: "Community-nominated and voted in by peers" },
      { icon: "💠", name: "Diamond Run", earn: "10 straight wins, every game peer-verified" },
    ],
  },
];

/* ── badge card variants ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
};

function BadgeCard({ badge, tier }: { badge: Badge; tier: Tier }) {
  return (
    <motion.div
      variants={badgeVariant}
      whileHover={{ scale: 1.04, y: -3, transition: { duration: 0.2 } }}
      className={`cursor-default rounded-2xl bg-white p-4 ring-1 shadow-sm ${tier.ringClass}`}
    >
      <span className="text-xl">{badge.icon}</span>
      <p className="mt-2 text-sm font-semibold text-neutral-900">{badge.name}</p>
      <p className="mt-0.5 text-[11px] leading-snug text-neutral-500">{badge.earn}</p>
    </motion.div>
  );
}

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="scroll-mt-20 bg-white px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* ── Hero row: copy + screenshot ── */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <MotionReveal className="md:order-2">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Achievement Hall
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
              The only flex that requires witnesses.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              A Clutch badge means you held a 4-run win streak — and your peers verified
              every game in it. Not a participation trophy. Not grinding fake tasks.
              Every badge is grounded in finished, reviewed runs.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
              Four rarity tiers — Common through Prestige — across profile badges,
              park medals, milestone trophies, timed challenges, activity streaks,
              and shareable calling cards. Basketball carries the deepest catalog
              today; every other sport earns its own rows as each shell matures.
            </p>
            <SportStickerStrip className="mt-8 justify-start" />
          </MotionReveal>

          <MotionReveal className="md:order-1" delay={0.08}>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[2rem] bg-neutral-200 shadow-xl ring-1 ring-neutral-200/80">
              <Image
                src={assetPath("/marketing/achievements.png")}
                alt="In-app Achievement Hall from READYPLAY"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 512px"
              />
            </div>
          </MotionReveal>
        </div>

        {/* ── Full badge catalog ── */}
        <MotionReveal delay={0.05} className="mt-24">
          <div className="mb-3 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Badge catalog
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
              Every badge you can earn.
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-neutral-600">
              28 badges across four tiers. Basketball has the most today. Other sports unlock
              their own catalog as each shell matures on the platform.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-14 flex flex-col gap-12">
          {tiers.map((tier) => (
            <MotionReveal key={tier.id}>
              {/* Tier header */}
              <div className="mb-5 flex items-center gap-3">
                <div className={`h-2.5 w-2.5 rounded-full ${tier.dotClass}`} />
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tier.labelClass}`}>
                  {tier.label}
                </span>
                <span className="text-sm text-neutral-500">{tier.description}</span>
              </div>

              {/* Badge grid */}
              <motion.div
                className="grid grid-cols-2 gap-3 sm:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {tier.badges.map((badge) => (
                  <BadgeCard key={badge.name} badge={badge} tier={tier} />
                ))}
              </motion.div>
            </MotionReveal>
          ))}
        </div>

        {/* Disclaimer */}
        <MotionReveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-xl rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-center text-sm text-neutral-500">
            Badge designs and additional sport-specific tiers are still being finalized.
            If you&apos;re in the beta, you&apos;re earning toward these right now — even before
            they fully render in the UI.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
