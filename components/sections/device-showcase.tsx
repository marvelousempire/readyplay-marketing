"use client";

import { motion } from "framer-motion";
import { AppleWatchMockup } from "@/components/apple-watch-mockup";
import { IPadMockup } from "@/components/ipad-mockup";
import { IPhoneMockup } from "@/components/iphone-mockup";

const platformCards = [
  {
    icon: "⌚",
    title: "Apple Watch",
    body: "Score from your wrist. +1, +2, +3 without touching your phone.",
  },
  {
    icon: "📱",
    title: "iPhone",
    body: "Full tap board, live scores, leaderboards, and your player record.",
  },
  {
    icon: "🖥",
    title: "iPad",
    body: "Spectate in broadcast mode. Wide-screen stats for the whole crew.",
  },
];

export function DeviceShowcase() {
  return (
    <section
      id="devices"
      className="relative scroll-mt-20 overflow-hidden px-6 py-28 md:px-10 md:py-36"
    >
      {/* Background gradient — Apple-style deep blue-violet */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950 via-[#0d0d1a] to-neutral-950" />

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[10%] top-[15%] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute right-[8%] top-[30%] h-[300px] w-[300px] rounded-full bg-sky-500/8 blur-[80px]" />
        <div className="absolute bottom-[10%] left-[35%] h-[250px] w-[250px] rounded-full bg-brand/8 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Headline */}
        <motion.div
          className="mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-500">
            Every Apple platform
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            One run.{" "}
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-brand bg-clip-text text-transparent">
              Every device.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Whether you&apos;re keeping score on your Watch, sharing the live board on iPhone, or watching
            the broadcast on iPad — READYPLAY keeps the whole crew in the game.
          </p>
        </motion.div>

        {/* Device trio */}
        <div className="mt-16 flex flex-col items-end justify-center gap-6 md:flex-row md:items-end md:gap-8 lg:gap-12">
          {/* Apple Watch — left, smallest, aligned to bottom */}
          <motion.div
            className="hidden md:flex md:flex-col md:items-center md:gap-4"
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs font-medium text-neutral-400">⌚ Apple Watch</span>
            </div>
            <AppleWatchMockup />
          </motion.div>

          {/* iPhone — center, tallest */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs font-medium text-neutral-400">📱 iPhone</span>
            </div>
            <IPhoneMockup frame="dark" screens={undefined} />
          </motion.div>

          {/* iPad — right, medium */}
          <motion.div
            className="hidden md:flex md:flex-col md:items-center md:gap-4"
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs font-medium text-neutral-400">🖥 iPad</span>
            </div>
            <IPadMockup />
          </motion.div>
        </div>

        {/* Platform cards */}
        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {platformCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/8 bg-white/4 p-5 backdrop-blur-sm"
            >
              <div className="mb-3 text-2xl">{card.icon}</div>
              <h3 className="text-sm font-semibold text-white">{card.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-400">{card.body}</p>
            </div>
          ))}
        </motion.div>

        {/* App Store / TestFlight CTA badge */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.25 }}
        >
          <a
            href="/beta"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-6 py-4 backdrop-blur-sm transition hover:bg-white/10"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1a77e5]">
              <span className="text-base font-bold text-white">T</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-neutral-500">Now in beta</p>
              <p className="text-sm font-semibold text-white">TestFlight early access →</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
