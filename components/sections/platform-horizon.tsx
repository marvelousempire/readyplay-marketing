"use client";

import { MotionReveal } from "@/components/motion-reveal";

export function PlatformHorizon() {
  return (
    <section
      id="horizon"
      className="scroll-mt-20 border-t border-neutral-200/80 bg-neutral-100/60 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Horizon
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            What we are building toward.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-neutral-600 md:text-base">
            <p>
              Push notifications that respect focus, anti-cheat signals tuned for pickup, park map
              completion, and CloudKit scale stories that keep broadcasts smooth as communities grow.
            </p>
            <p>
              Game modes across casual, ranked, and paid runs; advanced stat splits; voice score for
              hands-busy scorekeepers; fuller mdoc presentment when venues ask for real-world
              identity—each item tracked in the Feature Ledger and shipped in slices.
            </p>
            <p>
              The marketplace vision—trainers, instant booking, escrow, cancellations—rides the same
              trust graph as reviews and scorekeeping so paid play stays opt-in and earned.
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
