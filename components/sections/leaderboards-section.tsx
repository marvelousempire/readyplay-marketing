"use client";

import Image from "next/image";
import { MotionReveal } from "@/components/motion-reveal";
import { SportStickerStrip } from "@/components/sport-sticker";
import { assetPath } from "@/brand-marketing";

export function LeaderboardsSection() {
  return (
    <section
      id="leaderboards"
      className="scroll-mt-20 border-y border-neutral-200/80 bg-neutral-100/70 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Leaderboards
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Home boards that respect how you actually play.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Home ships a real leaderboard: scoring streaks, shot-style splits that go beyond total
            points, and social competition tied to verified games—not an engagement algorithm. Scroll
            through metrics like threes, layups, dunks, win streaks, and block grades, each ranked
            against the people you actually play with.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
            Cross-court public directories and fully networked rank-everyone-everywhere boards are on
            the roadmap. What you get today is trustworthy, sport-scoped standing that pickup culture
            has never had before.
          </p>
          <SportStickerStrip className="mt-8 justify-start" />
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[2rem] bg-neutral-200 shadow-xl ring-1 ring-neutral-200/80">
            <Image
              src={assetPath("/marketing/leaderboard.png")}
              alt="In-app shot-style overlay art used beside leaderboard messaging"
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
