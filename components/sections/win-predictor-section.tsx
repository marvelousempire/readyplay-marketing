"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";

const signals = [
  {
    icon: "⭐",
    name: "Peer Attributes",
    desc: "Defense, finishing, shot-making — rated by people you actually played against.",
  },
  {
    icon: "🤝",
    name: "Familiarity Bonus",
    desc: "Teammates who've run together before get a synergy multiplier.",
  },
  {
    icon: "🎯",
    name: "Finishing Rate",
    desc: "Your real shooting conversion from tracked shot events.",
  },
  {
    icon: "⚖️",
    name: "Discipline Signal",
    desc: "Foul patterns and conduct from peer post-game reviews.",
  },
];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.91, y: 14 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WinPredictorSection() {
  return (
    <section
      id="win-predictor"
      className="scroll-mt-20 bg-neutral-100/80 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="md:max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Win Predictor
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            The app calls it before tipoff.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Before the game starts, READYPLAY runs a win probability model on
            both lineups — blending peer-reviewed attributes, finishing rates,
            discipline signals, and familiarity bonuses from every prior game
            those exact teammates have played together. It&apos;s not a guess.
            It&apos;s pattern recognition from your actual history.
          </p>
        </MotionReveal>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {signals.map((signal) => (
            <motion.div
              key={signal.name}
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.18 } }}
              className="flex items-start gap-4 rounded-2xl bg-white p-4 ring-1 ring-neutral-200 cursor-default"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-xl ring-1 ring-neutral-200/80">
                {signal.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">{signal.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">{signal.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
