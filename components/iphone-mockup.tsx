"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { assetPath } from "@/brand-marketing";

type IPhoneMockupProps = {
  children?: ReactNode;
  /** Static image shown inside the screen when not using animated cycling. */
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  /** `light` = soft metallic silver bezel. `dark` = Space Black / titanium. */
  frame?: "light" | "dark";
  /** objectPosition for static image. */
  imageObjectPosition?: string;
  /**
   * When provided, cycles through these screenshots with tap animations.
   * Each entry: { src, tapX, tapY } where tapX/tapY are percentages (0-100).
   */
  screens?: Array<{ src: string; tapX?: number; tapY?: number; label?: string }>;
};

/** Tap ripple shown on the screen surface at a given position. */
function TapRipple({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full border-2 border-white/70 bg-white/20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{ width: 0, height: 0, opacity: 0.9 }}
      animate={{ width: 48, height: 48, opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    />
  );
}

/** Small status bar at the top of the screen (left = time, right = icons). */
function StatusBar({ dark = false }: { dark?: boolean }) {
  const color = dark ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.6)";
  return (
    <div
      className="flex items-center justify-between px-5"
      style={{ paddingTop: 14, paddingBottom: 2, fontSize: 10, fontWeight: 600, color }}
    >
      <span>9:41</span>
      <div className="flex items-center gap-1" style={{ opacity: 0.8 }}>
        {/* Signal bars */}
        <svg width="13" height="9" viewBox="0 0 13 9" fill="currentColor">
          <rect x="0" y="5" width="2" height="4" rx="0.5" />
          <rect x="3.5" y="3" width="2" height="6" rx="0.5" />
          <rect x="7" y="1" width="2" height="8" rx="0.5" />
          <rect x="10.5" y="0" width="2" height="9" rx="0.5" opacity="0.35" />
        </svg>
        {/* WiFi */}
        <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor">
          <path d="M6.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
          <path d="M3.5 6C4.5 5 5.4 4.5 6.5 4.5S8.5 5 9.5 6" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" />
          <path d="M1 3.5C2.8 1.7 4.5 1 6.5 1s3.7.7 5.5 2.5" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="round" />
        </svg>
        {/* Battery */}
        <svg width="22" height="10" viewBox="0 0 22 10" fill="currentColor">
          <rect x="0.5" y="0.5" width="18" height="9" rx="2.5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
          <rect x="2" y="2" width="13" height="6" rx="1.5" />
          <path d="M19.5 3.5v3a1.5 1.5 0 0 0 0-3Z" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

/** Dynamic Island — the pill/capsule cutout at the top of iPhone 14 Pro+ */
function DynamicIsland() {
  return (
    <div
      className="absolute left-1/2 z-10 -translate-x-1/2"
      style={{ top: 8, width: 88, height: 26, borderRadius: 14, background: "#000" }}
    />
  );
}

/** Home indicator bar at the bottom of Face ID iPhones. */
function HomeIndicator({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-end justify-center pb-2" style={{ paddingTop: 6 }}>
      <div
        className="rounded-full"
        style={{
          width: 100,
          height: 4,
          background: dark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.18)",
        }}
      />
    </div>
  );
}

// Default animated screens used when the `screens` prop is not provided
const DEFAULT_ANIMATED_SCREENS = [
  { src: "/marketing/hero-device.png", tapX: 55, tapY: 70, label: "Court view" },
  { src: "/marketing/live-game-tapboard.png", tapX: 50, tapY: 62, label: "Tap board" },
  { src: "/marketing/leaderboard.png", tapX: 50, tapY: 55, label: "Leaderboard" },
  { src: "/marketing/achievements.png", tapX: 50, tapY: 60, label: "Achievements" },
];

function pause(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

export function IPhoneMockup({
  children,
  imageSrc,
  imageAlt = "READYPLAY app preview",
  className = "",
  frame = "light",
  imageObjectPosition = "50% 42%",
  screens,
}: IPhoneMockupProps) {
  const isDark = frame === "dark";

  /* ── Static / children mode ── */
  if (!screens && (imageSrc || children)) {
    const frameShell = isDark
      ? "rounded-[2.4rem] border border-neutral-700/80 bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 p-[10px] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.5)]"
      : "rounded-[2.4rem] border border-white/95 bg-gradient-to-b from-neutral-100 via-neutral-200/95 to-neutral-300/90 p-[10px] shadow-[0_28px_72px_-20px_rgba(15,23,42,0.28)]";

    return (
      <motion.div
        className={`relative mx-auto w-[min(100%,280px)] ${className}`}
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={`relative aspect-[9/19.5] ${frameShell}`}>
            <DynamicIsland />
            <div
              className={`relative h-full w-full overflow-hidden rounded-[1.85rem] ${
                isDark ? "bg-neutral-950" : "bg-gradient-to-b from-sky-50/80 via-neutral-50 to-neutral-100"
              }`}
            >
              <StatusBar dark={isDark} />
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: imageObjectPosition }}
                  sizes="280px"
                  priority
                />
              ) : (
                children ?? <MockScreen />
              )}
              <HomeIndicator dark={isDark} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  /* ── Animated screen-cycling mode ── */
  return (
    <AnimatedIPhoneMockup
      className={className}
      frame={frame}
      screens={screens ?? DEFAULT_ANIMATED_SCREENS}
    />
  );
}

function AnimatedIPhoneMockup({
  className,
  frame,
  screens,
}: {
  className: string;
  frame: "light" | "dark";
  screens: NonNullable<IPhoneMockupProps["screens"]>;
}) {
  const isDark = frame === "dark";
  const [idx, setIdx] = useState(0);
  const [tapPos, setTapPos] = useState<{ x: number; y: number; key: number } | null>(null);
  const alive = useRef(true);

  const frameShell = isDark
    ? "rounded-[2.4rem] border border-neutral-700/80 bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 p-[10px] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.5)]"
    : "rounded-[2.4rem] border border-white/95 bg-gradient-to-b from-neutral-100 via-neutral-200/95 to-neutral-300/90 p-[10px] shadow-[0_28px_72px_-20px_rgba(15,23,42,0.28)]";

  useEffect(() => {
    alive.current = true;

    async function loop() {
      while (alive.current) {
        // Show tap ripple on current screen
        await pause(2200);
        if (!alive.current) break;

        const current = screens[idx];
        setTapPos({
          x: current.tapX ?? 50,
          y: current.tapY ?? 55,
          key: Date.now(),
        });

        await pause(600);
        if (!alive.current) break;

        // Advance to next screen
        setIdx((i) => (i + 1) % screens.length);
        setTapPos(null);

        await pause(600);
      }
    }

    loop();
    return () => {
      alive.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className={`relative mx-auto w-[min(100%,280px)] select-none ${className}`}
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={`relative aspect-[9/19.5] ${frameShell}`}>
          <DynamicIsland />
          <div
            className={`relative h-full w-full overflow-hidden rounded-[1.85rem] ${
              isDark ? "bg-neutral-950" : "bg-neutral-100"
            }`}
          >
            <StatusBar dark={isDark} />

            {/* Cycling screenshots */}
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={assetPath(screens[idx].src)}
                  alt={screens[idx].label ?? `App screen ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="280px"
                  priority={idx === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Tap ripple */}
            <AnimatePresence>
              {tapPos && (
                <TapRipple key={tapPos.key} x={tapPos.x} y={tapPos.y} />
              )}
            </AnimatePresence>

            {/* Screen label */}
            {screens[idx].label && (
              <motion.div
                key={`label-${idx}`}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 backdrop-blur-sm"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-[10px] font-medium text-white/90">
                  {screens[idx].label}
                </span>
              </motion.div>
            )}

            <HomeIndicator dark />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MockScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-white to-neutral-100 p-6">
      <div className="mx-auto mt-8 h-2 w-12 rounded-full bg-neutral-300" />
      <div className="mt-10 space-y-3">
        <div className="h-4 w-[72%] rounded-full bg-neutral-200" />
        <div className="h-4 w-[48%] rounded-full bg-neutral-200" />
      </div>
      <div className="mt-8 grid flex-1 grid-cols-2 gap-3">
        <div className="rounded-2xl bg-brand/10 ring-1 ring-brand/20" />
        <div className="rounded-2xl bg-neutral-200/80" />
        <div className="col-span-2 rounded-2xl bg-neutral-200/60" />
      </div>
      <div className="mt-6 h-12 w-full rounded-full bg-brand shadow-sm" />
    </div>
  );
}
