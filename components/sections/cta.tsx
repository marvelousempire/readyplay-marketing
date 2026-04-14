"use client";

import { MotionReveal } from "@/components/motion-reveal";

export function Cta() {
  return (
    <section
      id="cta"
      className="scroll-mt-20 px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-3xl text-center">
        <MotionReveal>
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Be first on the list.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-neutral-600">
            Join the waitlist for early access and TestFlight invites when the
            next cohort opens.
          </p>
        </MotionReveal>
        <MotionReveal className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center" delay={0.1}>
          <a
            href="mailto:team@example.com?subject=READYPLAY%20waitlist"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-brand px-8 py-4 text-[15px] font-medium text-white shadow-sm transition hover:bg-brand-dark sm:w-auto"
          >
            Join the waitlist
          </a>
          <span className="text-sm text-neutral-500">TestFlight when ready</span>
        </MotionReveal>
      </div>
    </section>
  );
}
