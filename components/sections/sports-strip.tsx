"use client";

import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";
import { SportSticker } from "@/components/sport-sticker";
import { courtSportEntries } from "@/court-sport-marketing";

export function SportsStrip() {
  return (
    <section
      id="sports"
      className="scroll-mt-20 border-y border-neutral-200/80 bg-white px-6 py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Sports on the same engine
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
            One shell. Every sport you see here.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-600 md:text-base">
            Basketball is the deepest live vertical today—shot nuance, rich boards, and leaderboards
            that match how serious pickup is played. Other sports ramp at different depths on the
            same trusted rails. Tap a sticker to jump to that sport’s story.
          </p>
        </MotionReveal>

        <MotionReveal className="mt-10" delay={0.06}>
          <ul className="flex flex-wrap items-center gap-2.5 md:gap-3">
            {courtSportEntries.map((sport) => (
              <li key={sport.id}>
                <Link
                  href={`#sport-${sport.id}`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200 bg-neutral-50/90 py-1.5 pl-1.5 pr-3.5 text-[13px] font-medium text-neutral-800 transition hover:border-neutral-300 hover:bg-white md:text-sm"
                >
                  <SportSticker
                    emoji={sport.sticker}
                    size="sm"
                    emphasized={sport.isLiveExperience}
                    title={sport.label}
                  />
                  {sport.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-neutral-500">
            <Link href="#every-sport" className="font-medium text-brand hover:text-brand-dark">
              Read every sport in full →
            </Link>
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
