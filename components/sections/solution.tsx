"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";

const pillars = [
  {
    icon: "📋",
    title: "Finished records",
    body: "Every game closes with a reviewed score and signed-off lineups. No more disputed finishes.",
  },
  {
    icon: "⭐",
    title: "Peer reviews",
    body: "The people you played with rate your game — speed, D, morale. Nobody self-promotes.",
  },
  {
    icon: "📍",
    title: "Pinned to real courts",
    body: "Stats attach to the park they happened at. Your leaderboard is everyone who runs there.",
  },
  {
    icon: "🏅",
    title: "Reputation that travels",
    body: "Show up at a new court. Your OVR and run history come with you — already earned.",
  },
];

const cardVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Solution() {
  return (
    <section
      id="solution"
      className="min-h-[70vh] scroll-mt-20 bg-white px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            The fix
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            One run. Permanent record.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600">
            The run you played last Saturday — scores, who kept the book,
            who locked down the paint — it&apos;s all there. Next Saturday at a
            different park, it still is.
          </p>
        </MotionReveal>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={cardItem}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7 shadow-sm"
            >
              <span className="text-2xl">{p.icon}</span>
              <h3 className="mt-4 text-base font-semibold text-neutral-950">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
