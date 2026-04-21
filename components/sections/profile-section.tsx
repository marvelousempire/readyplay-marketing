"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { MotionReveal } from "@/components/motion-reveal";

/* ── OVR counter (spring-animated on scroll-in) ── */
function OVRCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(40);
  const spring = useSpring(motionVal, { stiffness: 45, damping: 14 });

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString();
    });
    return unsub;
  }, [spring]);

  useEffect(() => {
    if (isInView) motionVal.set(78);
  }, [isInView, motionVal]);

  return (
    <div ref={containerRef} className="flex items-end gap-1.5 leading-none">
      <span ref={ref} className="text-5xl font-bold tabular-nums text-white">40</span>
      <span className="mb-1 text-lg font-semibold text-white/40">OVR</span>
    </div>
  );
}

/* ── Animated attribute bar (fills from 0 on scroll-in) ── */
function AttrBar({
  label,
  value,
  delay,
}: {
  label: string;
  value: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const tierColor =
    value >= 85
      ? "bg-emerald-400"
      : value >= 75
      ? "bg-brand"
      : value >= 65
      ? "bg-amber-400"
      : "bg-neutral-500";

  return (
    <div ref={ref} className="flex items-center gap-2.5">
      <span className="w-[108px] shrink-0 text-[10.5px] text-neutral-400">{label}</span>
      <div className="relative h-[5px] flex-1 overflow-hidden rounded-full bg-white/8">
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full ${tierColor}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="w-5 text-right text-[10.5px] font-semibold tabular-nums text-white/70">
        {value}
      </span>
    </div>
  );
}

const attributes = [
  { label: "Speed", value: 82 },
  { label: "Awareness", value: 71 },
  { label: "Inside shooting", value: 88 },
  { label: "3-point shooting", value: 64 },
  { label: "Defense", value: 75 },
  { label: "Steals", value: 80 },
  { label: "Blocks", value: 65 },
  { label: "Screens", value: 87 },
  { label: "Morale", value: 82 },
  { label: "Team play", value: 85 },
];

const ovrTiers = [
  { range: "85–99", label: "Elite", dot: "bg-blue-400" },
  { range: "75–84", label: "Solid", dot: "bg-emerald-400" },
  { range: "60–74", label: "Developing", dot: "bg-amber-400" },
  { range: "40–59", label: "Coming up", dot: "bg-neutral-500" },
];

/* ── Profile card that looks like the real app ── */
function ProfileCard() {
  return (
    <motion.div
      className="mx-auto w-full max-w-sm select-none"
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Card shell — matches the app's dark-mode profile style */}
      <div
        className="overflow-hidden rounded-[2rem] shadow-[0_24px_80px_-16px_rgba(0,0,0,0.45)]"
        style={{ background: "linear-gradient(160deg, #1c1c1e 0%, #111 100%)" }}
      >
        {/* Header band */}
        <div
          className="px-6 pb-5 pt-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(220,38,38,0.18) 0%, rgba(220,38,38,0.04) 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
                  READYPLAY
                </span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-400">
                  Verified
                </span>
              </div>
              <p className="text-xl font-bold text-white truncate">Marcus D.</p>
              <p className="mt-0.5 text-[12px] text-neutral-500">
                🏀 Basketball · Hillcrest Park
              </p>
            </div>

            <div className="flex flex-col items-center shrink-0">
              <OVRCounter />
              <span className="mt-1 text-[9px] font-medium uppercase tracking-widest text-neutral-600">
                overall
              </span>
            </div>
          </div>

          {/* Micro stats row */}
          <div className="mt-4 flex gap-4">
            {[
              { value: "147", label: "Games" },
              { value: "68%", label: "Win rate" },
              { value: "A+", label: "Conduct" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-sm font-bold text-white">{s.value}</p>
                <p className="text-[9px] text-neutral-500">{s.label}</p>
              </div>
            ))}
            <div className="flex items-end ml-auto">
              <span className="text-[10px] text-neutral-600">
                Reviewed by{" "}
                <span className="text-neutral-400 font-semibold">14 players</span>
              </span>
            </div>
          </div>
        </div>

        {/* Attributes */}
        <div className="px-6 py-5">
          <p className="mb-3.5 text-[9px] font-semibold uppercase tracking-widest text-neutral-600">
            10 Core Attributes
          </p>
          <div className="flex flex-col gap-2.5">
            {attributes.map((attr, i) => (
              <AttrBar
                key={attr.label}
                label={attr.label}
                value={attr.value}
                delay={0.04 * i}
              />
            ))}
          </div>
        </div>

        {/* Booking footer */}
        <div
          className="flex items-center justify-between gap-3 px-6 py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-medium text-neutral-300">
              Open to bookings
            </span>
          </div>
          <span className="rounded-full bg-brand/20 px-3 py-1 text-[11px] font-semibold text-brand">
            $40 / game
          </span>
        </div>

        {/* Apple Wallet pass teaser */}
        <div
          className="flex items-center gap-3 px-6 py-3.5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-800">
            <span className="text-xs">🪪</span>
          </div>
          <p className="text-[11px] leading-tight text-neutral-500">
            Add to Apple Wallet — tap to verify without opening the app
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function ProfileSection() {
  return (
    <section
      id="profile"
      className="scroll-mt-20 bg-[#fafafa] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Player identity
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Your reputation, carried everywhere you play.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            You&apos;re a 78 overall — not because the app calculated it, but because
            fourteen people you competed against said so. Your OVR is a community
            vote, backed by finished games. No self-rating. No self-promotion.
          </p>
        </MotionReveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
          {/* Left — profile card (looks like the real app) */}
          <ProfileCard />

          {/* Right — supporting detail */}
          <MotionReveal delay={0.1} className="flex flex-col gap-6">
            {/* OVR tiers */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3 className="text-base font-semibold text-neutral-950">OVR tiers</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
                A single number that moves when you play — not when you
                spend more time in the app. Scoring, shot style, defensive
                contributions, and peer reviews all feed it.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {ovrTiers.map((tier) => (
                  <div key={tier.range} className="flex items-center gap-3">
                    <div className={`h-2.5 w-2.5 shrink-0 rounded-full ${tier.dot}`} />
                    <span className="w-14 text-sm font-semibold text-neutral-800 tabular-nums">
                      {tier.range}
                    </span>
                    <span className="text-sm text-neutral-500">{tier.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Attribute system */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3 className="text-base font-semibold text-neutral-950">
                10 attributes, all earned
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
                Each one built from real game events and peer reviews.
                Your Screens grade comes from teammates who noticed the
                pick. Your Morale grade comes from people who actually
                played with you — not from a form you filled out.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {attributes.map((a) => (
                  <span
                    key={a.label}
                    className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
                  >
                    {a.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats by context */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3 className="text-base font-semibold text-neutral-950">
                Stats split by context
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
                See whether you play better at home or away, evenings
                versus mornings, full court versus half. Conduct grade
                and popularity meter surface how the community rates
                competing <em>alongside</em> you — not just against you.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["By court", "By time of day", "By conditions", "Conduct grade", "Popularity score"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
