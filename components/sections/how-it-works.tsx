"use client";

import { MotionReveal } from "@/components/motion-reveal";

const steps = [
  {
    n: "1",
    title: "Pick a court",
    body: "Choose where the run lives so everyone lands on the same map pin.",
  },
  {
    n: "2",
    title: "Join the game",
    body: "See who is in, who is next, and when things start—without the noise.",
  },
  {
    n: "3",
    title: "Play",
    body: "Keep score, history, and reviews on the phone built for the sideline.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            How it works
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Three steps. One story.
          </h2>
        </MotionReveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <MotionReveal key={s.n} delay={0.08 * i}>
              <div className="h-full rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
                  {s.n}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-neutral-950">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                  {s.body}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
