"use client";

import { MotionReveal } from "@/components/motion-reveal";

const features: { kicker: string; title: string; body: string; reverse: boolean }[] = [
  {
    kicker: "Courts first",
    title: "Know where the run lives.",
    body: "Pin the game to a real court so nobody wanders to the wrong side of the park.",
    reverse: false,
  },
  {
    kicker: "Live board",
    title: "Score that keeps up with the run.",
    body: "Tap-friendly scoring built for bright sun, fast possessions, and real pickup chaos.",
    reverse: true,
  },
  {
    kicker: "Everyone in sync",
    title: "One thread of truth.",
    body: "Roster, clock, and plays stay aligned—less group-chat noise, more time playing.",
    reverse: false,
  },
];

export function FeatureHighlights() {
  return (
    <div id="features" className="scroll-mt-20">
      {features.map((f, i) => (
        <section
          key={f.title}
          className={`flex min-h-screen items-center px-6 py-24 md:px-10 md:py-32 ${
            i % 2 === 0 ? "bg-neutral-100/80" : "bg-[#fafafa]"
          }`}
        >
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div
              className={`${f.reverse ? "md:order-2 md:text-right" : "md:order-1"}`}
            >
              <MotionReveal>
                <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
                  {f.kicker}
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
                  {f.title}
                </h2>
                <p
                  className={`mt-6 max-w-md text-lg text-neutral-600 ${f.reverse ? "md:ml-auto" : ""}`}
                >
                  {f.body}
                </p>
              </MotionReveal>
            </div>
            <div className={f.reverse ? "md:order-1" : "md:order-2"}>
              <MotionReveal delay={0.12}>
                <FeatureVisual index={i} />
              </MotionReveal>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

function FeatureVisual({ index }: { index: number }) {
  const hues = [
    "from-red-50 to-orange-50 ring-red-100",
    "from-neutral-100 to-neutral-200 ring-neutral-200",
    "from-rose-50 to-red-50 ring-rose-100",
  ];
  const hue = hues[index % hues.length];
  return (
    <div
      className={`relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[2rem] bg-gradient-to-br ${hue} shadow-[0_24px_60px_-20px_rgba(0,0,0,0.12)] ring-1 ring-inset`}
    >
      <div className="absolute inset-8 rounded-2xl bg-white/60 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="h-40 w-28 rounded-2xl border border-neutral-200/80 bg-white/90 shadow-lg" />
      </div>
    </div>
  );
}
