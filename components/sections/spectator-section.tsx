"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";

const steps = [
  {
    icon: "📤",
    title: "Share the code",
    desc: "Host or scorekeeper taps Share from the live game. One link, one tap.",
  },
  {
    icon: "📱",
    title: "Anyone opens it",
    desc: "Recipient taps the link. Full live scoreboard opens instantly.",
  },
  {
    icon: "⚡",
    title: "Real-time everything",
    desc: "Score updates, clutch alerts at 3-point margin, last scorer shown.",
  },
];

const stepsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const stepItem = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SpectatorSection() {
  return (
    <section
      id="spectator"
      className="scroll-mt-20 bg-white px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        {/* Left: text */}
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Follow live. No invite required.
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Couldn&apos;t make it? You&apos;re still watching.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            The scorekeeper shares one link. Anyone who taps it opens the live
            scoreboard — score, time, last basket, clutch-time alert — without
            needing to be on either roster. Share it in the group chat and the
            whole crew follows the run.
          </p>
        </MotionReveal>

        {/* Right: step cards */}
        <motion.div
          className="flex flex-col gap-4"
          variants={stepsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={stepItem}
              className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-5 ring-1 ring-neutral-200/80"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm ring-1 ring-neutral-200/80">
                {step.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  <span className="mr-2 text-xs font-bold text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
