"use client";

import Image from "next/image";
import { MotionReveal } from "@/components/motion-reveal";
import { SportStickerStrip } from "@/components/sport-sticker";
import { assetPath } from "@/brand-marketing";

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="scroll-mt-20 bg-white px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <MotionReveal className="md:order-2">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Achievement Hall
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Challenges and prestige on top of real games.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            <strong className="font-semibold text-neutral-800">Achievement Hall</strong> ships in the
            app with a full catalog—profile badges, park medals, milestone trophies, timed challenges,
            activity streaks, prestige levels, board honors, and shareable calling cards. Basketball
            carries the deepest catalog today; other sports gain rows as each shell matures.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
            Every badge is grounded in finished, reviewed games—clutch stretches, consecutive win
            runs, and community contributions—so the flex is earned on court, not from grinding fake
            tasks.
          </p>
          <SportStickerStrip className="mt-8 justify-start" />
        </MotionReveal>
        <MotionReveal className="md:order-1" delay={0.08}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[2rem] bg-neutral-200 shadow-xl ring-1 ring-neutral-200/80">
            <Image
              src={assetPath("/marketing/achievements.png")}
              alt="In-app highlight overlay art paired with Achievement Hall story"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 512px"
            />
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
