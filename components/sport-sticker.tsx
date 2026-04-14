"use client";

import { courtSportEntries } from "@/court-sport-marketing";

export type SportStickerSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeClass: Record<SportStickerSize, string> = {
  xs: "h-8 w-8 text-lg",
  sm: "h-10 w-10 text-xl",
  md: "h-12 w-12 text-2xl",
  lg: "h-14 w-14 text-3xl",
  xl: "h-20 w-20 text-4xl md:h-24 md:w-24 md:text-5xl",
};

type SportStickerProps = {
  emoji: string;
  size?: SportStickerSize;
  /** Emphasized ring (e.g. basketball “live” sport). */
  emphasized?: boolean;
  /** Native tooltip (sport name). */
  title?: string;
  className?: string;
};

/**
 * Circle “sticker” matching **SportSwitchStrip** energy (filled circle + glyph).
 * The iOS app uses `Image(systemName: CourtSport.icon)` — see `Court.swift`; on web we use emoji
 * so GitHub Pages stays zero-dependency and crisp at any DPI.
 */
export function SportSticker({
  emoji,
  size = "md",
  emphasized = false,
  title,
  className = "",
}: SportStickerProps) {
  return (
    <span
      title={title}
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[1.1em] leading-none shadow-sm ring-1 ring-neutral-200/90 ${sizeClass[size]} ${
        emphasized ? "ring-2 ring-orange-400/55 ring-offset-2 ring-offset-white" : ""
      } ${className}`.trim()}
      aria-hidden
    >
      {emoji}
    </span>
  );
}

/** Full `CourtSport` row — use under headings, above screenshots, beside CTAs. */
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
          size="sm"
          emphasized={s.isLiveExperience}
          title={s.label}
        />
      ))}
    </div>
  );
}
