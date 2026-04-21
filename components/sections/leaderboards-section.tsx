"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { MotionReveal } from "@/components/motion-reveal";
import { SportStickerStrip } from "@/components/sport-sticker";
import { assetPath } from "@/brand-marketing";

const stats = [
  { label: "Win streak", value: 8 },
  { label: "Threes this season", value: 47 },
  { label: "Blocks graded", value: 12 },
];

function AnimatedStat({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(v).toString();
      }
    });
    return unsub;
  }, [spring]);

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [isInView, motionVal, value]);

  return (
    <div ref={ref} className="rounded-2xl bg-white px-5 py-4 ring-1 ring-neutral-200/80 text-center">
      <p className="text-3xl font-bold tabular-nums text-neutral-950">
        <span ref={displayRef}>0</span>
      </p>
      <p className="mt-1 text-xs font-medium text-neutral-500 uppercase tracking-wider">{label}</p>
    </div>
  );
}

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
            The person who locked down the paint all winter finally shows up here.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Home ships a real leaderboard — not followers, not likes. Scoring
            streaks, shot-style splits, win runs, block grades. Ranked against
            the specific people you actually play with at your court.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
            No engagement algorithm. No sponsored positions. The order is
            determined by finished, reviewed games — and nothing else.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <AnimatedStat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>

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
