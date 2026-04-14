"use client";

import Image from "next/image";
import { MotionReveal } from "@/components/motion-reveal";
import { assetPath } from "@/brand-marketing";

/** Three deep-dive columns only; leaderboards, achievements, and earn have their own sections. */
const features: {
  kicker: string;
  title: string;
  body: string;
  reverse: boolean;
  image: string;
  imageAlt: string;
}[] = [
  {
    kicker: "Sideline speed",
    title: "Tap-to-score that keeps up with the run.",
    body: "Tap players on the live board to log makes, misses, and fouls—every player tile carries a foul control so the book stays honest. Merged history, quick undo, and optional shot spot and styles where basketball (and future sports) demand nuance.",
    reverse: false,
    image: "live-game-tapboard.png",
    imageAlt: "READYPLAY full-court score tap art from the shipped app",
  },
  {
    kicker: "Live truth",
    title: "Spectators, broadcast, Watch.",
    body: "CloudKit broadcast keeps followers on the same timeline as the scorekeeper. Apple Watch scoring and Live Activity put the clock and clutch moments where iOS already has your attention.",
    reverse: true,
    image: "feature-broadcast.png",
    imageAlt: "READYPLAY wood-broadcast court styling from in-app art",
  },
  {
    kicker: "Places and leagues",
    title: "Multi-sport shell, basketball depth.",
    body: "Play Sites, league standings, and discovery anchor competition to real venues. Basketball carries the richest live vertical today; volleyball, tennis, padel, pickleball, and the rest share the same rails as we deepen each shell.",
    reverse: false,
    image: "play-sites.png",
    imageAlt: "READYPLAY outdoor-style full court art from the shipped app",
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
                <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[2rem] bg-neutral-200 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.12)] ring-1 ring-neutral-200/80">
                  <Image
                    src={assetPath(`/marketing/${f.image}`)}
                    alt={f.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 512px"
                  />
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
