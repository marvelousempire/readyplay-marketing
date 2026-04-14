"use client";

import { MotionReveal } from "@/components/motion-reveal";
import { SportStickerStrip } from "@/components/sport-sticker";
import { brand } from "@/brand-marketing";

export function EarnSection() {
  return (
    <section
      id="earn"
      className="scroll-mt-20 bg-gradient-to-b from-orange-50/80 via-white to-neutral-50 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Credits & getting paid
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Earn for the bench. Grow into paid flows.
          </h2>
          <SportStickerStrip className="mt-6" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {brand.creditsEconomy} Scorekeepers and neutral roles are first-class—credits recognize
            the labor that keeps pickup honest.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
            {brand.pitchMarketplace} When Apple Pay, escrow, and hire flows ship, they ride the same
            trust graph as reviews and finished games—paid listings stay earned, not spam.
          </p>
          <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-amber-200/80 bg-amber-50/60 px-5 py-3 text-sm text-amber-950">
            Beta honesty: paid hire and wallet flows are still landing in releases—the footer on
            this site calls out what ships when. Credits and StoreKit bundles are the near-term
            on-ramp.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
