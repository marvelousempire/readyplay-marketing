"use client";

import { MotionReveal } from "@/components/motion-reveal";
import { SportStickerStrip } from "@/components/sport-sticker";
import { brand } from "@/brand-marketing";

const steps = [
  {
    n: "1",
    title: `${brand.sitesScreenTitle} or venue`,
    body: "Pin the run to a real court or league site so everyone lands on the same map and weather context.",
  },
  {
    n: "2",
    title: "Create and recruit",
    body: "Post the game, send join requests, line up RSVPs, and watch the bench so Saturday starts on time.",
  },
  {
    n: "3",
    title: "Roles, especially scorekeeper",
    body: `${brand.scorekeeperSacred}`,
  },
  {
    n: "4",
    title: "Live run: tap to score",
    body: "Big team rows and quick taps on player tiles—optional shot spot and styles where the sport supports it, fouls on every tile, merged feed, and an undo window for honest mistakes.",
  },
  {
    n: "5",
    title: "Watch and Live Activity",
    body: "Follow from Apple Watch or the Lock Screen while the phone stays in the bag—friends on the sideline stay in sync.",
  },
  {
    n: "6",
    title: "Finish with reviews",
    body: "Close the book, rate who you played with, and lock the record everyone argued about on court.",
  },
  {
    n: "7",
    title: "Leaderboards, achievements, credits",
    body: "Home boards and Achievement Hall echo the run. Credits recognize roles like scorekeeping—the bench economy grows from real games.",
  },
  {
    n: "8",
    title: "Lock fill-ins and paid flows (vision)",
    body: "When paid flows ship, list availability, set pricing tiers, and run hires through Apple Pay and escrow—pickup stays free by default; paid scorekeepers and fill-ins are earned through trust and history, same as BrandCopy’s marketplace pitch.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            How it works
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            From pin to permanent record.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Eight beats that mirror how organizers, scorekeepers, and players already move on the
            sideline—including the marketplace layer we describe in product voice even as it lands
            in releases.
          </p>
          <SportStickerStrip className="mt-8" />
        </MotionReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <MotionReveal key={s.n} delay={0.04 * i}>
              <div className="h-full rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-neutral-950">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{s.body}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
