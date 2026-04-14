"use client";

import { MotionReveal } from "@/components/motion-reveal";

const placeholders = [
  { label: "Home & courts", tone: "from-neutral-200 to-neutral-300" },
  { label: "Live scoreboard", tone: "from-red-100 to-orange-100" },
  { label: "Game detail", tone: "from-neutral-100 to-neutral-200" },
  { label: "Team setup", tone: "from-rose-100 to-red-50" },
];

export function Screenshots() {
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
            Swap these cards for real captures—horizontal scroll keeps it feeling
            like a product gallery.
          </p>
        </MotionReveal>

        <MotionReveal className="mt-14" delay={0.08}>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:gap-6 md:pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {placeholders.map((card) => (
              <article
                key={card.label}
                className="w-[72vw] shrink-0 snap-center sm:w-[320px] md:w-[360px]"
              >
                <div
                  className={`aspect-[10/19] rounded-[1.75rem] bg-gradient-to-b ${card.tone} p-1 shadow-md ring-1 ring-neutral-200/80`}
                >
                  <div className="flex h-full flex-col items-center justify-center rounded-[1.6rem] bg-white/40 p-6 text-center backdrop-blur-sm">
                    <span className="text-sm font-medium text-neutral-700">
                      {card.label}
                    </span>
                    <span className="mt-2 text-xs text-neutral-500">
                      Replace with screenshot
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
