"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";

const steps = [
  {
    time: "Thursday 8pm",
    actor: "Marcus",
    icon: "📍",
    title: "Posts the run",
    body: "Marcus opens READYPLAY, picks Lincoln Park Court 2, sets tip-off for Saturday 10am, caps the roster at 10. Done in under a minute.",
  },
  {
    time: "Thursday 8:03pm",
    actor: "Marcus",
    icon: "📣",
    title: "Sends join requests",
    body: "He taps six regulars. They each get a notification with the court, time, and a one-tap accept. No group chat thread. No \"you coming?\" follow-ups.",
  },
  {
    time: "Friday night",
    actor: "Everyone",
    icon: "✅",
    title: "Bench is confirmed",
    body: "Five accepted, one declined — Marcus adds a fill from the park's watcher list. Saturday starts on time because the bench was locked the night before.",
  },
  {
    time: "Saturday 10:02am",
    actor: "Deja",
    icon: "📋",
    title: "Keeps the book",
    body: "Deja volunteers as scorekeeper. She's not on either team — just the most organized person at the court. Big player tiles, one tap per basket, fouls tracked with who-called / who-committed. She never looks up.",
  },
  {
    time: "During the run",
    actor: "On the sideline",
    icon: "📱",
    title: "Friends follow from the lock screen",
    body: "Two players who couldn't make it watch the score on their Lock Screen — real-time, no app open required. When the margin hits 2 with one possession left, the Live Activity shows a clutch-time indicator.",
  },
  {
    time: "Saturday 11:40am",
    actor: "Both teams",
    icon: "⭐",
    title: "Close with reviews",
    body: "Game ends 21–17. Everyone rates the players they guarded. Speed, defense, morale, teamwork — each attribute goes to the profile of the person who earned it. The score locks. No one disputes it.",
  },
  {
    time: "Saturday 11:45am",
    actor: "The platform",
    icon: "🏅",
    title: "Records land, reputation updates",
    body: "Everyone's OVR shifts. Marcus climbs the Lincoln Park leaderboard. Deja earns scorekeeper credits automatically — no claim required. The game fingerprint is stored. That run now has a permanent record.",
  },
];

const stepVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const stepItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function RunScenario() {
  return (
    <section
      id="run-story"
      className="scroll-mt-20 bg-white px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            A real run, start to finish
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Saturday at Lincoln Park.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            One court. One organizer. Ten players. Here&apos;s how a pickup run goes from
            idea to permanent record — and how READYPLAY gets its first foothold at a new park.
          </p>
        </MotionReveal>

        {/* Bootstrap callout */}
        <MotionReveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-blue-200/80 bg-blue-50/60 px-6 py-4 text-center">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">How does a court get started?</span>{" "}
              One person posts one run. That&apos;s it. The leaderboard, the history, the reputation —
              all of it builds from the first game. Marcus is that person at Lincoln Park.
            </p>
          </div>
        </MotionReveal>

        {/* Timeline */}
        <motion.div
          className="mt-14 flex flex-col gap-0"
          variants={stepVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, i) => (
            <motion.div key={step.title} variants={stepItem} className="flex gap-5">
              {/* Left: timeline spine */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-950 text-lg shadow-sm">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-1 w-px flex-1 bg-neutral-200" style={{ minHeight: 32 }} />
                )}
              </div>

              {/* Right: content */}
              <div className={`pb-8 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    {step.time}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-500">
                    {step.actor}
                  </span>
                </div>
                <h3 className="mt-1.5 text-base font-semibold text-neutral-950">{step.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-neutral-600">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing callout */}
        <MotionReveal delay={0.15}>
          <div className="mt-12 rounded-3xl border border-neutral-200 bg-neutral-50 p-7 text-center shadow-sm">
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-400 mb-3">
              Next Saturday
            </p>
            <p className="text-[15px] leading-relaxed text-neutral-700">
              Marcus posts the run again. Three new players show up. The leaderboard has
              two weeks of history. By month two, Lincoln Park Court 2 has its own standings,
              its own regulars, its own streak holders. The community built itself — one run at a time.
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
