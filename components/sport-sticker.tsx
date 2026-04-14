"use client";

import { useState } from "react";
import { courtSportEntries } from "@/court-sport-marketing";
import { assetPath } from "@/brand-marketing";

export type SportStickerSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeClass: Record<SportStickerSize, string> = {
  xs: "h-8 w-8 text-lg",
  sm: "h-10 w-10 text-xl",
  md: "h-12 w-12 text-2xl",
  lg: "h-14 w-14 text-3xl",
  xl: "h-20 w-20 text-4xl md:h-24 md:w-24 md:text-5xl",
};

/** Inner image size in px — slightly smaller than the circle so it breathes */
const imgPx: Record<SportStickerSize, number> = {
  xs: 18,
  sm: 22,
  md: 28,
  lg: 32,
  xl: 48,
};

type SportStickerProps = {
  emoji: string;
  /** Path to SF Symbol PNG export. Shows emoji fallback on load error or when absent. */
  imageSrc?: string;
  size?: SportStickerSize;
  /** Emphasized ring for the live sport (basketball). */
  emphasized?: boolean;
  title?: string;
  className?: string;
};

/**
 * Circle sticker — renders the exported SF Symbol PNG when available,
 * coloured to match the brand palette. Falls back to emoji silently.
 */
export function SportSticker({
  emoji,
  imageSrc,
  size = "md",
  emphasized = false,
  title,
  className = "",
}: SportStickerProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = !!imageSrc && !imgFailed;
  const px = imgPx[size];

  return (
    <span
      title={title}
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-neutral-100 leading-none shadow-sm ring-1 ring-neutral-200/90 ${sizeClass[size]} ${
        emphasized ? "ring-2 ring-brand/50 ring-offset-2 ring-offset-white" : ""
      } ${className}`.trim()}
      aria-hidden
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt=""
          width={px}
          height={px}
          onError={() => setImgFailed(true)}
          draggable={false}
        />
      ) : (
        <span className="text-[1.1em]">{emoji}</span>
      )}
    </span>
  );
}

/** Full sport row — strips, mosaic, section headers. */
export function SportStickerStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 md:gap-3 ${className}`.trim()}
      aria-label="Sports supported on READYPLAY"
    >
      {courtSportEntries.map((s) => (
        <SportSticker
          key={s.id}
          emoji={s.sticker}
          imageSrc={assetPath(`/marketing/icons/${s.iconFile}`)}
          size="sm"
          emphasized={s.isLiveExperience}
          title={s.label}
        />
      ))}
    </div>
  );
}
