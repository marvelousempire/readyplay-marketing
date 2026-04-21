"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MotionReveal } from "@/components/motion-reveal";
import { assetPath } from "@/brand-marketing";

const features: {
  kicker: string;
  title: string;
  body: string;
  reverse: boolean; // layout direction for text/image columns
  image: string;
  imageAlt: string;
}[] = [
  {
    kicker: "Sideline speed",
    title: "Tap to score. Never look up.",
    body: "One tap per basket. The scorekeeper stays in the game — not buried in a menu. Fouls on every player tile, quick undo for honest mistakes, optional shot spots where the sport demands nuance. The book closes before the last player leaves the court.",
    reverse: false,
    image: "live-game-tapboard.png",
    imageAlt: "READYPLAY full-court score tap board from the shipped app",
  },
  {
    kicker: "Live everywhere",
    title: "Your friends couldn't make it. They're watching anyway.",
    body: "CloudKit broadcasts the score the moment it changes — no invite required to follow a live game. Apple Watch puts the live board on the wrist. Lock Screen Live Activity keeps the clock front-and-center with the phone in the bag. When the margin hits two, a clutch-time indicator fires. Nobody has to ask 'what's the score?' in a group chat again.",
    reverse: true,
    image: "feature-broadcast.png",
    imageAlt: "READYPLAY broadcast court styling from in-app art",
  },
  {
    kicker: "Real places",
    title: "Every game pinned to the actual court.",
    body: "Stats attach to the park they happened at. Your leaderboard is everyone who runs at that same spot. Play Sites anchor the run to a real map pin — not a vague thread — so history, weather context, and court standings all point to the same place.",
    reverse: false,
    image: "play-sites.png",
    imageAlt: "READYPLAY outdoor-style full court art from the shipped app",
  },
];

function ParallaxImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <MotionReveal delay={0.12}>
      <div
        ref={ref}
        className="relative mx-auto w-full max-w-lg rounded-[2rem] bg-neutral-200 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.14)] ring-1 ring-neutral-200/80 overflow-hidden"
      >
        <motion.div style={{ y }}>
          <Image
            src={src}
            alt={alt}
            width={512}
            height={384}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 512px"
          />
        </motion.div>
      </div>
    </MotionReveal>
  );
}

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
            <div className={`${f.reverse ? "md:order-2 md:text-right" : "md:order-1"}`}>
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
              <ParallaxImage src={assetPath(`/marketing/${f.image}`)} alt={f.imageAlt} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
