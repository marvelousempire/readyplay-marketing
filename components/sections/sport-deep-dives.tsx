"use client";

import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";
import { SportSticker, SportStickerStrip } from "@/components/sport-sticker";
import { courtSportEntries } from "@/court-sport-marketing";
import { assetPath } from "@/brand-marketing";

export function SportDeepDives() {
  return (
    <section
      id="every-sport"
      className="scroll-mt-20 bg-white px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Every sport
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            One engine. Eleven shells.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Same sport hub, toolbar switcher, and scoped Home as the iOS app—basketball carries the
            richest live book today; every other sport ramps with honest MVP banners until the tap
            board catches up.
          </p>
          <div className="mt-8">
            <SportStickerStrip />
          </div>
        </MotionReveal>

        <div className="mt-16 flex flex-col gap-10">
          {courtSportEntries.map((sport, i) => (
            <MotionReveal key={sport.id} delay={0.04 * (i % 6)}>
              <article
                id={`sport-${sport.id}`}
                className="scroll-mt-24 rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8 shadow-sm md:p-10"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <SportSticker
                      emoji={sport.sticker}
                      imageSrc={assetPath(`/marketing/icons/${sport.iconFile}`)}
                      size="xl"
                      emphasized={sport.isLiveExperience}
                      title={sport.label}
                      className="shrink-0 bg-white shadow-md ring-neutral-200/90"
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
                          {sport.label}
                        </h3>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            sport.isLiveExperience
                              ? "bg-emerald-100 text-emerald-900"
                              : "bg-amber-100 text-amber-950"
                          }`}
                        >
                          {sport.isLiveExperience ? "Live experience" : "Shell + calendar"}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-neutral-500">
                        Strip: {sport.stripLabel} · {sport.venuePlural} · {sport.sessionPlural}
                      </p>
                      <p className="mt-4 text-lg font-medium text-neutral-800">{sport.hook}</p>
                      <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{sport.body}</p>
                    </div>
                  </div>
                  <Link
                    href="#sports"
                    className="shrink-0 text-sm font-medium text-brand hover:text-brand-dark"
                  >
                    ↑ Sport picker
                  </Link>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
