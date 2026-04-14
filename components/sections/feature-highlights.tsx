"use client";

import { MotionReveal } from "@/components/motion-reveal";

const features: { kicker: string; title: string; body: string; reverse: boolean }[] = [
  {
    kicker: "Sideline speed",
    title: "Tap-to-score that keeps up with the run.",
    body: "Tap players on the live board to log makes, misses, and fouls—every player tile carries a foul control so the book stays honest. Merged history, quick undo, and optional shot spot and styles where basketball (and future sports) demand nuance.",
    reverse: false,
  },
  {
    kicker: "Reputation you keep",
    title: "Leaderboards and Achievement Hall.",
    body: "Home leaderboards, streak-friendly stats, Achievement Hall, challenges, and prestige—social competition that still traces back to verified games and peer reviews.",
    reverse: true,
  },
  {
    kicker: "Bench economy",
    title: "Credits for the roles that matter.",
    body: "Earn credits for scorekeeping and other neutral work. StoreKit bundles are on deck when you want more in-app points—real rewards, not pretend crypto.",
    reverse: false,
  },
  {
    kicker: "Live truth",
    title: "Spectators, broadcast, Watch.",
    body: "CloudKit broadcast keeps followers on the same timeline as the scorekeeper. Apple Watch scoring and Live Activity put the clock and clutch moments where iOS already has your attention.",
    reverse: true,
  },
  {
    kicker: "Places and leagues",
    title: "Multi-sport shell, basketball depth.",
    body: "Play Sites, league standings, and discovery anchor competition to real venues. Basketball carries the richest live vertical today; volleyball, tennis, padel, pickleball, and the rest share the same rails as we deepen each shell.",
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
    "from-amber-50 to-yellow-50 ring-amber-100",
    "from-slate-100 to-neutral-200 ring-slate-200",
  ];
  const labels = [
    "Live tap board",
    "Leaderboards",
    "Credits + bench",
    "Watch + broadcast",
    "Courts + leagues",
  ];
  const hue = hues[index % hues.length];
  const label = labels[index % labels.length];
  return (
    <div
      className={`relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[2rem] bg-gradient-to-br ${hue} shadow-[0_24px_60px_-20px_rgba(0,0,0,0.12)] ring-1 ring-inset`}
    >
      <div className="absolute inset-8 rounded-2xl bg-white/60 backdrop-blur-sm" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-12">
        <div className="h-40 w-28 rounded-2xl border border-neutral-200/80 bg-white/90 shadow-lg" />
        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
          {label}
        </span>
        <span className="text-center text-[11px] text-neutral-400">Drop a PNG in public/marketing</span>
      </div>
    </div>
  );
}
