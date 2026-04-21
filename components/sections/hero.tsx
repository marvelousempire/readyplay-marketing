"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IPhoneMockup } from "@/components/iphone-mockup";
import { SportStickerMosaic } from "@/components/sport-sticker-mosaic";
import { SportStickerStrip } from "@/components/sport-sticker";
import { assetPath } from "@/brand-marketing";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <SportStickerMosaic />
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 pb-24 pt-28 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center md:gap-12">
          <div className="rounded-3xl bg-white/75 p-6 text-center shadow-sm ring-1 ring-white/90 backdrop-blur-md md:p-8 md:text-left">
            <motion.h1
              className="text-5xl font-semibold tracking-tight text-neutral-950 md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              Real runs.
              <br />
              Real record.
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-neutral-600 md:text-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              You&apos;ve put in years at your court. Everybody there knows your game.
              Nobody outside that run has ever seen a score, a stat, or any proof it happened.
            </motion.p>
            <motion.p
              className="mt-4 text-base font-medium text-neutral-800 md:text-lg"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              READYPLAY keeps the record — a tap-to-score live board built for bright sun,
              fast possessions, and a scorekeeper who never fights the app.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-[15px] font-medium text-white shadow-sm transition hover:bg-brand-dark"
              >
                Join early access
              </Link>
              <Link
                href="#every-sport"
                className="inline-flex items-center justify-center rounded-full bg-neutral-200/80 px-7 py-3.5 text-[15px] font-medium text-neutral-900 transition hover:bg-neutral-200"
              >
                Explore every sport
              </Link>
            </motion.div>
            <motion.div
              className="mt-8 border-t border-neutral-200/60 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.24 }}
            >
              <SportStickerStrip />
            </motion.div>
          </div>
          <div className="relative flex min-h-[min(70vh,520px)] justify-center md:justify-end md:min-h-0">
            {/* Soft ambient fill so the hero never reads as a “black slab” beside the copy */}
            <div
              className="pointer-events-none absolute inset-0 -z-0 md:-right-12 md:left-auto md:w-[min(100%,420px)]"
              aria-hidden
            >
              <div className="absolute left-1/2 top-[18%] h-[min(72vw,340px)] w-[min(72vw,340px)] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-200/50 via-violet-200/35 to-amber-100/40 blur-3xl" />
              <div className="absolute bottom-[8%] right-[6%] h-40 w-40 rounded-full bg-emerald-200/25 blur-2xl" />
              <div className="absolute right-[12%] top-[38%] h-24 w-24 rounded-full bg-white/60 blur-xl" />
            </div>

            <div className="relative z-10 flex w-full max-w-[320px] flex-col items-center gap-5 md:max-w-none md:items-end">
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
                <span className="rounded-full border border-white/90 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-600 shadow-sm backdrop-blur-sm">
                  Live tap board
                </span>
                <span className="rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1 text-[11px] font-semibold text-emerald-900 shadow-sm">
                  🏀 Deepest on hoops
                </span>
              </div>

              <div className="rounded-[2.5rem] bg-white/55 p-3 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.2)] ring-1 ring-white/90 backdrop-blur-md md:p-4">
                <IPhoneMockup
                  className="md:justify-self-end"
                  imageSrc={assetPath("/marketing/hero-device.png")}
                  imageAlt="READYPLAY in-app court and score tap art"
                />
              </div>

              <p className="max-w-[260px] text-center text-[13px] leading-snug text-neutral-600 md:text-right">
                In-app art from a real pickup—sun, lines, and the score sheet you actually tap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
