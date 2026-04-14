"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

type IPhoneMockupProps = {
  children?: ReactNode;
  /** When set, shows static image inside the device frame. */
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  /** `light` = soft metallic bezel (marketing hero). `dark` = OLED-style frame. */
  frame?: "light" | "dark";
};

export function IPhoneMockup({
  children,
  imageSrc,
  imageAlt = "READYPLAY app preview",
  className = "",
  frame = "light",
}: IPhoneMockupProps) {
  const frameShell =
    frame === "light"
      ? "rounded-[2.4rem] border border-white/95 bg-gradient-to-b from-neutral-100 via-neutral-200/95 to-neutral-300/90 p-[10px] shadow-[0_28px_72px_-20px_rgba(15,23,42,0.28)]"
      : "rounded-[2.4rem] border border-neutral-200 bg-neutral-900 p-[10px] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.35)]";
  const islandClass =
    frame === "light"
      ? "bg-neutral-800/85 shadow-inner shadow-white/10"
      : "bg-neutral-950";
  const screenMat =
    frame === "light"
      ? "bg-gradient-to-b from-sky-50/80 via-neutral-50 to-neutral-100"
      : "bg-neutral-100";

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
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className={`relative aspect-[9/19.5] ${frameShell}`}>
          <div className={`absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full ${islandClass}`} />
          <div className={`relative h-full w-full overflow-hidden rounded-[1.85rem] ${screenMat}`}>
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                sizes="280px"
                priority
              />
            ) : (
              children ?? <MockScreen />
            )}
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
