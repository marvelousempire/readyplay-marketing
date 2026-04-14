"use client";

import { MotionReveal } from "@/components/motion-reveal";
import { brand } from "@/brand-marketing";

export function IdentityRecord() {
  return (
    <section
      id="identity"
      className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Identity and record
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            NFT-ready without the hype.
          </h2>
          <p className="mx-auto mt-6 text-lg leading-relaxed text-neutral-600">
            {brand.pitchNFTBridge}
          </p>
          <p className="mx-auto mt-6 text-base leading-relaxed text-neutral-600">
            {brand.proofFingerprint} On-chain minting and wallets are a deliberate next chapter—not
            something we claim is live in the binary today.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
