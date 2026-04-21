"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";

const scenarios = [
  {
    icon: "🪪",
    title: "Apple Wallet pass",
    description:
      "Every READYPLAY player has a shareable Wallet card with their QR. No app needed to show it — it lives right on their phone.",
  },
  {
    icon: "📸",
    title: "Scan at the park",
    description:
      "Open the scanner, point at their card. Their full public profile loads in one second — ready before you even pick sides.",
  },
  {
    icon: "⭐",
    title: "Real reputation",
    description:
      "OVR rating, peer-reviewed attributes, win streak, and conduct grade — all right there before you pick teams.",
  },
];

const cardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function QrScannerSection() {
  return (
    <section
      id="qr-scanner"
      className="scroll-mt-20 bg-neutral-100/80 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Scan &amp; Connect
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Meet a hooper.{" "}
            <span className="text-brand">Know their game in seconds.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            New face at the park? Scan their READYPLAY card from Apple Wallet or
            share sheet. Their public profile opens instantly — OVR rating, win
            record, attributes, recent games. Follow them, add them to a roster,
            and their reputation travels with them.
          </p>
        </MotionReveal>

        {/* Scanner mockup */}
        <MotionReveal delay={0.08} className="mt-14 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="relative flex aspect-square w-full max-w-[220px] items-center justify-center overflow-hidden rounded-3xl bg-neutral-900 shadow-xl ring-1 ring-white/10"
          >
            {/* Viewfinder corners */}
            <div className="absolute inset-6">
              <div className="absolute left-0 top-0 h-7 w-7 rounded-tl-lg border-l-[3px] border-t-[3px] border-brand" />
              <div className="absolute right-0 top-0 h-7 w-7 rounded-tr-lg border-r-[3px] border-t-[3px] border-brand" />
              <div className="absolute bottom-0 left-0 h-7 w-7 rounded-bl-lg border-b-[3px] border-l-[3px] border-brand" />
              <div className="absolute bottom-0 right-0 h-7 w-7 rounded-br-lg border-b-[3px] border-r-[3px] border-brand" />
            </div>
            {/* Scan line animation */}
            <motion.div
              className="absolute left-8 right-8 h-[2px] rounded-full bg-brand/70"
              animate={{ top: ["30%", "70%", "30%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute" }}
            />
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="text-4xl">📸</span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                READYPLAY
              </span>
              <span className="text-[10px] text-neutral-600">
                Point at QR card
              </span>
            </div>
          </motion.div>
        </MotionReveal>

        {/* Scenario cards */}
        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-3"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {scenarios.map((s) => (
            <motion.div
              key={s.title}
              variants={cardItem}
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
              className="rounded-2xl bg-white p-5 ring-1 ring-neutral-200 cursor-default"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-xl"
                aria-hidden="true"
              >
                {s.icon}
              </span>
              <h3 className="mt-4 text-sm font-semibold text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
