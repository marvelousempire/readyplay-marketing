"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IPhoneMockup } from "@/components/iphone-mockup";
import { assetPath, brand } from "@/brand-marketing";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center px-6 pb-24 pt-28 md:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center md:gap-12">
        <div className="text-center md:text-left">
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
            {brand.pitchCore}
          </motion.p>
          <motion.p
            className="mt-4 text-base font-medium text-neutral-800 md:text-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Tap players on the live board to score—built for bright sun, fast possessions, and a
            scorekeeper who never fights the app.
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
              href="#how"
              className="inline-flex items-center justify-center rounded-full bg-neutral-200/80 px-7 py-3.5 text-[15px] font-medium text-neutral-900 transition hover:bg-neutral-200"
            >
              See how it works
            </Link>
          </motion.div>
        </div>
        <IPhoneMockup
          className="md:justify-self-end"
          imageSrc={assetPath("/marketing/hero-device.png")}
          imageAlt="READYPLAY in-app court and score tap art"
        />
      </div>
    </section>
  );
}
