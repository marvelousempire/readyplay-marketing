"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";
import { SportStickerStrip } from "@/components/sport-sticker";

const steps = [
  {
    n: "1",
    title: "Pin the court",
    body: "Drop the run at a real Play Site — a named court with a map pin, weather context, and its own leaderboard. No more 'same spot as last week.'",
  },
  {
    n: "2",
    title: "Post, invite, fill the bench",
    body: "Open the game, send join requests, watch RSVPs come in. Saturday starts on time because the bench was confirmed Friday night.",
  },
  {
    n: "3",
    title: "Assign the scorekeeper",
    body: "Someone keeps an honest book and everyone competes harder because the record is real. That role gets recognized — credits, reputation, the whole system runs on it.",
  },
  {
    n: "4",
    title: "Tap to score live",
    body: "Big player tiles, one tap per basket, fouls on every row, quick undo. The scorekeeper never looks up from the game.",
  },
  {
    n: "5",
    title: "Watch and Lock Screen",
    body: "Apple Watch and Live Activity put the score exactly where attention already is — on the wrist and the lock screen. The phone stays in the bag.",
  },
  {
    n: "6",
    title: "Close with reviews",
    body: "Rate who you played with. Lock the score everyone saw. The record is signed, sealed, and attached to your profiles before anyone leaves the court.",
  },
  {
    n: "7",
    title: "Leaderboards and Achievement Hall",
    body: "Home boards update. Clutch badges land. Streak milestones get marked. Credits go to the scorekeeper automatically when the run finishes on record.",
  },
  {
    n: "8",
    title: "Paid fill-ins (coming)",
    body: "When hire flows ship, your reputation from steps 1–7 is what earns you a listing. Paid pickup stays earned, not spam. Pickup itself stays free by default.",
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const stepCard = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            How it works
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            From pin to permanent record.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Eight beats. Every Saturday run you&apos;ve ever played already follows this arc.
            Now it leaves a record.
          </p>
          <SportStickerStrip className="mt-8" />
        </MotionReveal>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={stepCard}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className="h-full rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm cursor-default"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-neutral-950">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
