"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/brand-marketing";

const screens = [
  { src: "/marketing/leaderboard.png", label: "Leaderboards" },
  { src: "/marketing/achievements.png", label: "Achievements" },
  { src: "/marketing/feature-broadcast.png", label: "Broadcast" },
  { src: "/marketing/live-game-tapboard.png", label: "Live tap board" },
];

/**
 * iPad Pro 11" (M4) style portrait mockup with cycling app screenshots.
 * Very thin bezels, no home button, USB-C, power button on top right edge.
 */
export function IPadMockup({ className = "" }: { className?: string }) {
  const [idx, setIdx] = useState(0);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    const timer = setInterval(() => {
      if (alive.current) setIdx((i) => (i + 1) % screens.length);
    }, 4200);
    return () => {
      alive.current = false;
      clearInterval(timer);
    };
  }, []);

  return (
    <motion.div
      className={`relative mx-auto select-none ${className}`}
      style={{ width: 220, height: 296 }}
      initial={{ opacity: 0, y: 28, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        {/* iPad body — silver aluminium */}
        <div
          className="relative shadow-[0_28px_80px_-16px_rgba(0,0,0,0.32)]"
          style={{
            width: 220,
            height: 296,
            borderRadius: 18,
            background: "linear-gradient(160deg, #e5e5ea 0%, #d1d1d6 60%, #c7c7cc 100%)",
            padding: 7,
          }}
        >
          {/* Case highlight */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: 18,
              boxShadow:
                "inset 0 1px 1px rgba(255,255,255,0.7), inset 0 -1px 1px rgba(0,0,0,0.15)",
            }}
          />

          {/* Power / top button — top right edge */}
          <div
            className="absolute"
            style={{
              top: -4,
              right: "18%",
              width: 28,
              height: 4,
              borderRadius: "3px 3px 0 0",
              background: "linear-gradient(90deg, #c7c7cc 0%, #d1d1d6 50%, #c7c7cc 100%)",
              boxShadow: "0 -1px 2px rgba(0,0,0,0.15)",
            }}
          />

          {/* Volume up */}
          <div
            className="absolute"
            style={{
              left: -4,
              top: "20%",
              width: 4,
              height: 20,
              borderRadius: "3px 0 0 3px",
              background: "linear-gradient(180deg, #c7c7cc 0%, #d1d1d6 100%)",
            }}
          />

          {/* Volume down */}
          <div
            className="absolute"
            style={{
              left: -4,
              top: "30%",
              width: 4,
              height: 20,
              borderRadius: "3px 0 0 3px",
              background: "linear-gradient(180deg, #c7c7cc 0%, #d1d1d6 100%)",
            }}
          />

          {/* Mute / rotation lock */}
          <div
            className="absolute"
            style={{
              left: -4,
              top: "42%",
              width: 4,
              height: 12,
              borderRadius: "3px 0 0 3px",
              background: "linear-gradient(180deg, #c7c7cc 0%, #d1d1d6 100%)",
            }}
          />

          {/* Screen */}
          <div
            className="relative h-full w-full overflow-hidden bg-black"
            style={{ borderRadius: 12 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={assetPath(screens[idx].src)}
                  alt={screens[idx].label}
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Screen label badge */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur-sm">
              {screens.map((_, i) => (
                <motion.div
                  key={i}
                  className="rounded-full bg-white"
                  animate={{
                    width: i === idx ? 12 : 4,
                    opacity: i === idx ? 0.9 : 0.3,
                  }}
                  style={{ height: 4 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            {/* Top camera bar (Face ID strip) */}
            <div
              className="absolute left-1/2 top-0 -translate-x-1/2"
              style={{
                width: 60,
                height: 6,
                background: "rgba(0,0,0,0.9)",
                borderRadius: "0 0 4px 4px",
              }}
            >
              {/* TrueDepth camera dot */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-800"
                style={{ width: 5, height: 5 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
