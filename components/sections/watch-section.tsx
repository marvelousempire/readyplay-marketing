"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";
import { AppleWatchMockup } from "@/components/apple-watch-mockup";

const features = [
  {
    icon: "⌚",
    iconBg: "bg-neutral-800",
    title: "Wrist scoring",
    description:
      "+1, +2, and +3 buttons with both team names and the live score shown directly on the Apple Watch face — no phone required.",
  },
  {
    icon: "🔴",
    iconBg: "bg-red-100",
    title: "Lock Screen / Live Activity",
    description:
      "Pin the live game to your Lock Screen. A clutch alert fires automatically when the margin hits three.",
  },
  {
    icon: "❤️",
    iconBg: "bg-rose-100",
    title: "HealthKit integration",
    description:
      "Heart rate, resting HR, VO2 max, and active energy are fed from Apple Health into your player profile after every session.",
  },
  {
    icon: "📐",
    iconBg: "bg-blue-100",
    title: "Core Motion calibration",
    description:
      "Run a calibration session on court. Stride length and effort baseline are measured by Core Motion and stored to your profile.",
  },
  {
    icon: "🏃",
    iconBg: "bg-green-100",
    title: "Effort context",
    description:
      `After games, workouts show real distance, heart-rate zones, and an effort rating — not a generic "workout" event.`,
  },
];

const featureVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const featureItem = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WatchSection() {
  return (
    <section
      id="watch"
      className="scroll-mt-20 bg-white px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center md:gap-20">
        {/* Left column — text + feature list */}
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Apple Watch
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Score from your wrist.{" "}
            <span className="text-brand">Know your effort.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            The READYPLAY Watch app puts the full scoreboard on your wrist
            during live games — tap +1, +2, or +3 without touching your phone.
            After your run, it knows how hard you worked: HealthKit feeds heart
            rate and active energy, Core Motion calibration models your stride
            and effort so your fitness data actually reflects what happened on
            court.
          </p>

          <motion.ul
            className="mt-10 flex flex-col gap-5"
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            role="list"
          >
            {features.map((f) => (
              <motion.li
                key={f.title}
                variants={featureItem}
                className="flex items-start gap-4"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${f.iconBg}`}
                  aria-hidden="true"
                >
                  {f.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {f.title}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-neutral-600">
                    {f.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </MotionReveal>

        {/* Right column — Apple Watch mockup (animated) */}
        <MotionReveal delay={0.1} className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
            className="flex flex-col items-center gap-5"
          >
            <AppleWatchMockup />
            <p className="max-w-[180px] text-center text-[12px] leading-snug text-neutral-500">
              Tap +1, +2, or +3 — the score updates live on both Watch and iPhone.
            </p>
          </motion.div>
        </MotionReveal>
      </div>
    </section>
  );
}
