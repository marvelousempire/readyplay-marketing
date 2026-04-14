"use client";

import { MotionReveal } from "@/components/motion-reveal";
import { brand } from "@/brand-marketing";

export function Solution() {
  return (
    <section
      id="solution"
      className="min-h-[70vh] scroll-mt-20 bg-white px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            The fix
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            {brand.fullName} is the antidote.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600">
            Structured games, finished records, reviews that stick to your identity, and leaderboards
            that reward how you actually play. {brand.parks}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base text-neutral-600">{brand.pitchExercise}</p>
        </MotionReveal>
      </div>
    </section>
  );
}
