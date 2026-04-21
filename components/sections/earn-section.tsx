"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";
import { SportStickerStrip } from "@/components/sport-sticker";

const featuredRoles = [
  {
    icon: "📋",
    label: "Ships now",
    title: "Scorekeeper",
    body: "Kept an honest book all season. Credits land automatically when the run closes on record. The entire platform runs on this role — it gets recognized first.",
    highlight: true,
    comingSoon: false,
  },
  {
    icon: "🏀",
    label: "Ships now",
    title: "Player",
    body: "Win streaks, clutch runs, personal milestones. Every finished, reviewed game feeds your credits and your record. Showing up and competing is enough.",
    highlight: false,
    comingSoon: false,
  },
  {
    icon: "🟡",
    label: "Coming soon",
    title: "Referee / Official",
    body: "Call the fouls. Keep the peace. A verified ref with a conduct grade and game history is worth hiring — and the platform knows it.",
    highlight: false,
    comingSoon: true,
  },
  {
    icon: "📣",
    label: "Coming soon",
    title: "Paid Organizer",
    body: "Post games, fill benches, run the league. Every Saturday that starts on time is because someone did this work. Paid organizer roles unlock through the trust graph.",
    highlight: false,
    comingSoon: true,
  },
];

const professionalRoles: { icon: string; title: string; desc: string }[] = [
  { icon: "💪", title: "Personal Trainer", desc: "Court-side conditioning programs linked to verified player profiles" },
  { icon: "📣", title: "Performance Coach", desc: "Game film, skill development, measurable improvement on record" },
  { icon: "🩺", title: "Sports Medicine Pro", desc: "Injury prevention and recovery tied to real activity history" },
  { icon: "🦴", title: "Physical Therapist", desc: "Return-to-play protocols with play history as context" },
  { icon: "🧠", title: "Sports Therapist", desc: "Mental performance and recovery support for serious competitors" },
  { icon: "🎙️", title: "Coach", desc: "Run clinics, lead sessions, build a roster from verified players" },
  { icon: "🏃", title: "Fill-in", desc: "Verified availability, real OVR, conduct grade — the run finds you" },
  { icon: "🎥", title: "Film Analyst", desc: "Court-side breakdown linked to live game records and shot data" },
];

const cardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.1 } },
};

const pillItem = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
};

export function EarnSection() {
  return (
    <section
      id="earn"
      className="scroll-mt-20 bg-gradient-to-b from-orange-50/60 via-white to-neutral-50 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Credits &amp; getting paid
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Everyone at the court can earn.
          </h2>
          <SportStickerStrip className="mt-6" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Not just the players who win. The scorekeeper who kept the honest book.
            The trainer who showed up at 7am. The ref who called it straight.
            The organizer who filled the bench by Friday night. READYPLAY sees the
            whole court — and credits everyone who makes it run.
          </p>
        </MotionReveal>

        {/* Featured role cards */}
        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {featuredRoles.map((r) => (
            <motion.div
              key={r.title}
              variants={cardItem}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className={`flex flex-col rounded-3xl border p-7 shadow-sm cursor-default ${
                r.highlight
                  ? "border-orange-200/80 bg-orange-50/60"
                  : r.comingSoon
                  ? "border-neutral-200 bg-white opacity-70"
                  : "border-neutral-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{r.icon}</span>
                <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider ${
                  r.comingSoon
                    ? "bg-amber-100 text-amber-700"
                    : "bg-neutral-100 text-neutral-500"
                }`}>
                  {r.label}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-neutral-950">{r.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-600 flex-1">{r.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional ecosystem */}
        <MotionReveal delay={0.15} className="mt-16">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
                Court ecosystem
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
                The whole performance world, on one verified graph.
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-neutral-600">
                Trainers, coaches, therapists, and sports medicine professionals connect
                to real player profiles with real game history. No cold outreach.
                No unverifiable claims.
              </p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-3"
              variants={pillVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {professionalRoles.map((role) => (
                <motion.div
                  key={role.title}
                  variants={pillItem}
                  whileHover={{
                    scale: 1.06,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative cursor-default"
                >
                  <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 shadow-sm transition-colors group-hover:border-orange-200/80 group-hover:bg-orange-50/40">
                    <span className="text-base">{role.icon}</span>
                    <span className="text-sm font-medium text-neutral-800">{role.title}</span>
                  </div>
                  {/* Tooltip on hover */}
                  <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-52 -translate-x-1/2 rounded-xl bg-neutral-950 px-3 py-2 text-center text-xs text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                    {role.desc}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-neutral-950" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </MotionReveal>

        {/* Disclaimer */}
        <MotionReveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl rounded-2xl border border-amber-200/80 bg-amber-50/60 px-5 py-3 text-center text-sm text-amber-950">
            Credits and scorekeeper recognition ship in the current build. Paid hire,
            wallet flows, and professional marketplace listings are still landing —
            every listing will be earned through the verified trust graph, not spam.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
