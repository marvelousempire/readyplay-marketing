"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";

// Representative beta experiences — composite voices from early testers.
const voices = [
  {
    sport: "🏀",
    role: "Regular, Tuesday nights",
    quote:
      "First time we ran it, the foul log killed every argument before it started. Who called it, who committed it — right there. Nobody left heated.",
  },
  {
    sport: "🏀",
    role: "Scorekeeper, weekend pickup",
    quote:
      "I've been keeping score on paper for three years. This is the first time anyone noticed — and the first time I got something for it. Credits hit the second the game closed.",
  },
  {
    sport: "🏀",
    role: "Organizer, Thursday runs",
    quote:
      "I used to send seventeen 'you coming?' texts before every game. Now I post the run, send join requests, and the bench fills itself. Saturday starts on time.",
  },
  {
    sport: "🏀",
    role: "Player, new to the park",
    quote:
      "Showed up at a park I'd never been to. Added my name, played, got reviewed. My OVR from three other courts came with me. Didn't have to prove anything.",
  },
  {
    sport: "🏀",
    role: "Spectator, couldn't make it",
    quote:
      "I watched the whole game from my lock screen. Score, clock, who scored last. When it went to a two-point game I got a clutch-time notification. Better than being there.",
  },
  {
    sport: "🏀",
    role: "Player, six-month streak",
    quote:
      "The leaderboard at my home court is the most competitive thing I've been a part of. And nobody's getting paid. Everyone just wants to be on top.",
  },
];

const cardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function SocialProof() {
  return (
    <section
      id="voices"
      className="scroll-mt-20 bg-neutral-50 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            From the court
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            What players say after their first run.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600">
            Reactions from early beta sessions — composite voices representing
            what people actually experience the first time a run closes on record.
          </p>
        </MotionReveal>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {voices.map((v) => (
            <motion.div
              key={v.quote}
              variants={card}
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
              className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm cursor-default"
            >
              <span className="text-2xl">{v.sport}</span>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-neutral-700 italic">
                &ldquo;{v.quote}&rdquo;
              </blockquote>
              <p className="mt-5 text-xs font-medium uppercase tracking-widest text-neutral-400">
                {v.role}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <MotionReveal delay={0.15}>
          <p className="mt-10 text-center text-xs text-neutral-400">
            Beta is active. Real names and court-specific stories will replace these as the community grows.{" "}
            <a
              href="mailto:hello@readyplay.app?subject=READYPLAY%20waitlist"
              className="underline underline-offset-2 hover:text-neutral-600 transition"
            >
              Join the waitlist
            </a>{" "}
            to be first.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
