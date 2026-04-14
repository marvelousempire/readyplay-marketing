"use client";

import { MotionReveal } from "@/components/motion-reveal";

const parts = [
  {
    title: "Trust and identity",
    body: "Sign in with Apple, optional verification, post-game reviews, and fairness built for real communities. Your record is what people who actually played with you say it is.",
  },
  {
    title: "Live competition",
    body: "Tap-to-score on the live board—big team rows, quick taps, optional shot spot and styles where the sport supports it, fouls on every player tile, merged history, and an undo window for honest mistakes. Apple Watch and Live Activity keep friends in sync; CloudKit broadcast brings spectators along.",
  },
  {
    title: "Profile and the board",
    body: "OVR-style presence, stats that reflect real games, home leaderboards, Achievement Hall, challenges, and prestige—so pickup carries the same respect as the score.",
  },
  {
    title: "Venues and leagues",
    body: "Play Sites anchor runs to real courts. Create games, recruit with join requests, league standings, and discovery so Saturday starts on time instead of in seventeen “you coming?” texts.",
  },
  {
    title: "Credits and roles",
    body: "Earn credits for roles like scorekeeping—neutral book is sacred work. StoreKit bundles are on deck when you want more in-app points; the economy stays play-first, not pretend crypto.",
  },
  {
    title: "The marketplace layer",
    body: "On-demand play in the Uber / TaskRabbit spirit: book players and fill-in roles, availability and pricing tiers, Apple Pay and escrow when paid flows ship, cancellations that respect everyone’s time—free by default, paid listings earned through trust and history.",
  },
];

export function PlatformParts() {
  return (
    <section
      id="parts"
      className="scroll-mt-20 bg-[#fafafa] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Parts of READYPLAY
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Platform, not a single feature.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Six surfaces players feel every week—trust, live runs, reputation, places, economy, and
            the hiring layer we are marching toward.
          </p>
        </MotionReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {parts.map((p, i) => (
            <MotionReveal key={p.title} delay={0.05 * i}>
              <article className="h-full rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-950">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{p.body}</p>
              </article>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal className="mt-10" delay={0.2}>
          <p className="text-center text-sm text-neutral-500">
            Surfaces on the roadmap—Newspaper digest, spectator live video, messaging, follow, and
            waitlist queues—land as the feed matures.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
