"use client";

import Image from "next/image";
import { MotionReveal } from "@/components/motion-reveal";
import { assetPath } from "@/brand-marketing";

export type ScreenshotStripItem = {
  file: string;
  alt: string;
  caption: string;
  imageSrc: string | null;
};

export function ScreenshotsStrip({ items }: { items: ScreenshotStripItem[] }) {
  return (
    <section
      id="screens"
      className="scroll-mt-20 bg-white px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            In the app
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Built for the sideline.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-neutral-600">
            Real captures from Simulator or device replace placeholders automatically when you drop
            PNGs into <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm">web/public/marketing/</code>.
          </p>
        </MotionReveal>

        <MotionReveal className="mt-14" delay={0.08}>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:gap-6 md:pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((card) => (
              <article
                key={card.file}
                className="w-[72vw] shrink-0 snap-center sm:w-[320px] md:w-[360px]"
              >
                <div className="aspect-[10/19] overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-neutral-200 to-neutral-300 p-1 shadow-md ring-1 ring-neutral-200/80">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-neutral-900/5">
                    {card.imageSrc ? (
                      <Image
                        src={assetPath(card.imageSrc)}
                        alt={card.alt}
                        fill
                        className="object-cover object-top"
                        sizes="360px"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center bg-white/50 p-6 text-center backdrop-blur-sm">
                        <span className="text-sm font-medium text-neutral-700">{card.file}</span>
                        <span className="mt-2 text-xs text-neutral-500">Add PNG to public/marketing</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-3 px-1 text-left text-sm text-neutral-600">{card.caption}</p>
              </article>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
