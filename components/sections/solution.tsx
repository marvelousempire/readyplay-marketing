"use client";

import { MotionReveal } from "@/components/motion-reveal";

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
            READYPLAY fixes that.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600">
            One calm place to see the venue, the run, and who is in—so you spend
            less time coordinating and more time playing.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
