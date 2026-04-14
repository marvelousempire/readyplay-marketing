"use client";

import { MotionReveal } from "@/components/motion-reveal";
import { courtSports } from "@/brand-marketing";

export function SportsStrip() {
  return (
    <section
      id="sports"
      className="scroll-mt-20 border-y border-neutral-200/80 bg-white px-6 py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Sports on the same engine
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
            One shell. Every sport you see here.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-600 md:text-base">
            Basketball is the deepest live vertical today—shot nuance, rich boards, and leaderboards
            that match how serious pickup is played. Other sports ramp at different depths on the
            same trusted rails.
          </p>
        </MotionReveal>

        <MotionReveal className="mt-10" delay={0.06}>
          <ul className="flex flex-wrap gap-2 md:gap-2.5">
            {courtSports.map((name) => (
              <li
                key={name}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-[13px] font-medium text-neutral-800 md:text-sm"
              >
                {name}
              </li>
            ))}
          </ul>
        </MotionReveal>
      </div>
    </section>
  );
}
