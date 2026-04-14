"use client";

import { motion } from "framer-motion";
import { SportSticker } from "@/components/sport-sticker";
import { courtSportEntries, mosaicExtraStickers } from "@/court-sport-marketing";

type Slot = {
  sticker: string;
  leftPct: number;
  topPct: number;
  size: number;
  rot: number;
  delay: number;
};

/** Deterministic “sticker field” inspired by `LaunchSportGlyphBackdrop` + sport hub circles. */
function buildSlots(): Slot[] {
  const sportStickers = courtSportEntries.map((s) => s.sticker);
  const pool = [...sportStickers, ...mosaicExtraStickers];
  const cols = 10;
  const rows = 6;
  const slots: Slot[] = [];
  let i = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const baseX = ((col + 0.5) / cols) * 100;
      const baseY = ((row + 0.5) / rows) * 100;
      const jitterX = Math.sin(i * 2.17 + 0.55) * 5.8;
      const jitterY = Math.cos(i * 1.91 + 0.33) * 5.2;
      const tier = i % 7;
      const size =
        tier === 2 || tier === 0 ? 34 + (i % 4) * 5 : tier === 3 || tier === 4 ? 22 + (i % 5) * 3 : 26 + (i % 3) * 4;
      slots.push({
        sticker: pool[i % pool.length]!,
        leftPct: Math.min(96, Math.max(2, baseX + jitterX)),
        topPct: Math.min(96, Math.max(2, baseY + jitterY)),
        size,
        rot: ((i * 41) % 110) - 55,
        delay: (i % 20) * 0.04,
      });
      i += 1;
    }
  }
  return slots;
}

const SLOTS = buildSlots();

export function SportStickerMosaic() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.34]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-orange-50/40 to-amber-100/30" />
      {SLOTS.map((s, idx) => {
        const scale = 0.42 + s.size / 220;
        return (
          <motion.div
            key={`${idx}-${s.leftPct}-${s.topPct}`}
            className="absolute flex select-none items-center justify-center"
            style={{
              left: `${s.leftPct}%`,
              top: `${s.topPct}%`,
              transform: `translate(-50%, -50%) rotate(${s.rot}deg) scale(${scale})`,
            }}
            initial={{ opacity: 0.45 }}
            animate={{
              opacity: [0.38, 0.55, 0.4],
            }}
            transition={{
              duration: 5 + (idx % 5) * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: s.delay,
            }}
          >
            <SportSticker
              emoji={s.sticker}
              size="xs"
              className="border border-white/60 bg-white/45 shadow-[0_6px_20px_rgba(0,0,0,0.06)] backdrop-blur-[2px]"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
