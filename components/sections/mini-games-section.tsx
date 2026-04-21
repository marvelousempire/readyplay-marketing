"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";

const games = [
  {
    icon: "🔤",
    name: "H-O-R-S-E",
    desc: "Shot-by-shot side game. Match shots or earn a letter.",
  },
  {
    icon: "🎯",
    name: "3-Point Contest",
    desc: "Solo rack challenge. Five spots, five balls, beat your last score.",
  },
  {
    icon: "👥",
    name: "2-on-2 3-Point",
    desc: "Team three-point competition. Short game, big bragging rights.",
  },
  {
    icon: "⭕",
    name: "Free Throw Competition",
    desc: "Pressure rounds and percentage totals.",
  },
  {
    icon: "👑",
    name: "King of the Court",
    desc: "Win and stay. Challengers rotate in until someone's dethroned.",
  },
  {
    icon: "🏀",
    name: "Solo Drills",
    desc: "Warm-up mode. Streaks, makes, timed reps — before the run starts.",
  },
];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

export function MiniGamesSection() {
  return (
    <section
      id="mini-games"
      className="scroll-mt-20 bg-neutral-950 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">
            Mini-Games Hub
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Six ways to play when the full run isn&apos;t on.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            READYPLAY isn&apos;t just five-on-five. Launch a solo drill session,
            challenge a friend to H-O-R-S-E, or run a 3-Point Contest between
            games. Every mode tracks sessions, shows recap, and feeds your
            activity history.
          </p>
        </MotionReveal>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {games.map((game) => (
            <motion.div
              key={game.name}
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.18 } }}
              className="relative flex flex-col rounded-2xl bg-neutral-800 p-4 ring-1 ring-neutral-700 cursor-default"
            >
              <span className="absolute right-3 top-3 rounded-full bg-neutral-700 px-2 py-0.5 text-xs font-medium text-neutral-300">
                Preview
              </span>
              <span className="text-2xl">{game.icon}</span>
              <p className="mt-3 text-sm font-semibold text-white">{game.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-400">{game.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
