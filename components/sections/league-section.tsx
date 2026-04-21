"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";

/* ─────────────────────────────────────────────────────────
   Animated stat dashboard mockup (Commissioner view)
   ───────────────────────────────────────────────────────── */

type LeaguePlayer = {
  name: string;
  team: string;
  avg: number;
  highGame: number;
  strikes: string;
  conduct: string;
};

const players: LeaguePlayer[] = [
  { name: "Marcus D.",  team: "Alley Cats",   avg: 187, highGame: 234, strikes: "41%", conduct: "A+" },
  { name: "Devon T.",   team: "Pin Seekers",  avg: 172, highGame: 218, strikes: "36%", conduct: "A"  },
  { name: "James K.",   team: "Alley Cats",   avg: 168, highGame: 245, strikes: "38%", conduct: "A+" },
  { name: "Terrell A.", team: "Spare Time",   avg: 155, highGame: 201, strikes: "29%", conduct: "B+" },
  { name: "Ray M.",     team: "Pin Seekers",  avg: 148, highGame: 189, strikes: "25%", conduct: "A"  },
];

function LeagueDashboardMockup() {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    async function cycle() {
      let i = 0;
      while (alive.current) {
        await pause(1800);
        if (!alive.current) break;
        setActiveRow(i % players.length);
        await pause(1000);
        if (!alive.current) break;
        setActiveRow(null);
        i++;
      }
    }
    cycle();
    return () => { alive.current = false; };
  }, []);

  return (
    <motion.div
      className="mx-auto w-full max-w-lg select-none"
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="overflow-hidden rounded-[2rem] shadow-[0_28px_80px_-16px_rgba(0,0,0,0.4)]"
        style={{ background: "linear-gradient(160deg, #1c1c1e 0%, #111 100%)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 pb-4 pt-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
              Commissioner View
            </p>
            <p className="mt-0.5 text-base font-bold text-white">🎳 Westside Bowling League</p>
            <p className="text-[11px] text-neutral-500">Spring 2026 · Week 8 of 14</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-neutral-600">Players</p>
            <p className="text-lg font-bold text-white">24</p>
          </div>
        </div>

        {/* Stat tabs */}
        <div
          className="flex gap-1 px-5 py-2.5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
        >
          {["Season avg", "High game", "Strike %", "Conduct"].map((tab, i) => (
            <div
              key={tab}
              className="rounded-lg px-2.5 py-1 text-[10px] font-medium"
              style={{
                background: i === 0 ? "rgba(220,38,38,0.15)" : "rgba(255,255,255,0.05)",
                color: i === 0 ? "#dc2626" : "#6b7280",
              }}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Player rows */}
        <div className="px-3 py-2">
          {players.map((p, i) => (
            <motion.div
              key={p.name}
              className="flex items-center gap-3 rounded-xl px-2 py-2.5"
              animate={{
                backgroundColor: activeRow === i ? "rgba(220,38,38,0.07)" : "transparent",
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="w-4 shrink-0 text-center text-[10px] font-bold text-neutral-600">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="truncate text-[12px] font-semibold text-white">{p.name}</p>
                <p className="text-[10px] text-neutral-600">{p.team}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <motion.p
                    key={`${p.name}-avg`}
                    className="text-sm font-bold text-white"
                    animate={{ color: activeRow === i ? "#dc2626" : "#ffffff" }}
                    transition={{ duration: 0.2 }}
                  >
                    {p.avg}
                  </motion.p>
                  <p className="text-[9px] text-neutral-600">avg</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-semibold text-neutral-300">{p.highGame}</p>
                  <p className="text-[9px] text-neutral-600">high</p>
                </div>
                <div className="w-6 text-center">
                  <span
                    className="text-[10px] font-semibold"
                    style={{
                      color: p.conduct === "A+" ? "#34d399" : p.conduct === "A" ? "#6ee7b7" : "#fbbf24",
                    }}
                  >
                    {p.conduct}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer export row */}
        <div
          className="flex items-center justify-between px-5 py-3.5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-[11px] text-neutral-600">Last updated · live</p>
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-white/6 px-3 py-1.5 text-[10px] font-medium text-neutral-400">
              Export CSV
            </span>
            <span className="rounded-lg bg-white/6 px-3 py-1.5 text-[10px] font-medium text-neutral-400">
              Share link
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Sports where the league pitch lands hardest
   ───────────────────────────────────────────────────────── */

const leagueSports = [
  {
    emoji: "🎳",
    label: "Bowling",
    body: "Weekly lanes, seasonal averages, high game, high series, strike rate. Bowling leagues have been stuck in paper scorebooks for decades. READYPLAY gives every bowler a digital record — the commissioner gets a dashboard on day one.",
    badge: "Primary B2B target",
    badgeClass: "bg-brand/15 text-brand",
  },
  {
    emoji: "🏀",
    label: "Adult Rec Basketball",
    body: "Pickup meets organized. Scorekeepers already exist. Stats are wanted but hard to collect. READYPLAY closes that loop — every game produces a verified record coaches and players can point to.",
    badge: "Live experience",
    badgeClass: "bg-emerald-500/15 text-emerald-400",
  },
  {
    emoji: "🏈",
    label: "Flag Football",
    body: "Organized teams, weekly games, real rosters — and no affordable stats platform. READYPLAY brings the full game record: who played, what happened, and how each player graded out.",
    badge: "High demand",
    badgeClass: "bg-blue-500/15 text-blue-400",
  },
  {
    emoji: "🏐",
    label: "Volleyball",
    body: "Club and rec leagues share the same problem. READYPLAY's match shell, play site anchor, and peer review system give volleyball commissioners the infrastructure they've been building in spreadsheets.",
    badge: "Growing",
    badgeClass: "bg-violet-500/15 text-violet-400",
  },
];

/* ─────────────────────────────────────────────────────────
   How it works for a commissioner / coach
   ───────────────────────────────────────────────────────── */

const steps = [
  {
    number: "01",
    role: "Commissioner",
    title: "Register your league",
    body: "Create an organization profile. Name it, pick the sport and season. Set it public (anyone can find it) or private (invite only). Takes under two minutes.",
  },
  {
    number: "02",
    role: "Coach",
    title: "Register your team",
    body: "Coaches receive an invite from the Commissioner and register their roster. Players join via invite link — existing accounts link automatically, new players start a profile.",
  },
  {
    number: "03",
    role: "Player",
    title: "Play. Stats track automatically.",
    body: "Every game produces a verified stat record on each player's portable profile. No entry required after the fact — the scorekeeper's tap board is the stat sheet.",
  },
  {
    number: "04",
    role: "Commissioner",
    title: "See everything, always",
    body: "Live league dashboard: team standings, top performers, individual game logs, season averages. Exportable. Shareable via public link — no account needed to view.",
  },
];

/* ─────────────────────────────────────────────────────────
   Section
   ───────────────────────────────────────────────────────── */

export function LeagueSection() {
  return (
    <section
      id="leagues"
      className="relative scroll-mt-20 overflow-hidden px-6 py-28 md:px-10 md:py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950 via-[#07080f] to-neutral-950" />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-[8%] top-[15%] h-[360px] w-[360px] rounded-full bg-indigo-600/8 blur-[100px]" />
        <div className="absolute left-[5%] bottom-[20%] h-[280px] w-[280px] rounded-full bg-cyan-500/6 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Headline */}
        <MotionReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-500">
            For leagues & organizations
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            Your league finally has{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              a stats platform.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Most leagues track scores in notebooks, text threads, and spreadsheets that
            nobody updates after week three. READYPLAY gives every commissioner, coach,
            and player a live stat record — verified, portable, and free to start.
          </p>
        </MotionReveal>

        {/* Two-column: dashboard mockup + the problem/solution copy */}
        <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-16">
          <LeagueDashboardMockup />

          <MotionReveal delay={0.1} className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              Everything your commissioner has been asking for.
            </h3>

            {/* Problem → solution pairs */}
            {[
              {
                problem: "Scores tracked in paper scorebooks",
                solution: "Every game produces a digital record the moment the scorekeeper taps the last point.",
              },
              {
                problem: "Player stats disappear after the season",
                solution: "Stats live on each player's portable profile — they travel to next season, next league, next venue.",
              },
              {
                problem: "No way to track individual development",
                solution: "Coaches see every player's game log, attribute arc, and conduct grade across the full season.",
              },
              {
                problem: "Public standings require a separate website",
                solution: "Share a public link — anyone sees the standings and top players without downloading anything.",
              },
            ].map((item) => (
              <div
                key={item.problem}
                className="rounded-2xl border border-white/6 bg-white/3 p-4"
              >
                <p className="flex items-start gap-2 text-[13px] text-neutral-600">
                  <span className="mt-0.5 shrink-0 text-[10px]">✕</span>
                  {item.problem}
                </p>
                <p className="mt-2 flex items-start gap-2 text-[13px] font-medium text-neutral-300">
                  <span className="mt-0.5 shrink-0 text-emerald-400 text-[10px]">✓</span>
                  {item.solution}
                </p>
              </div>
            ))}

            <Link
              href="mailto:leagues@readyplay.app"
              className="mt-2 inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 shadow-sm transition hover:bg-neutral-100"
            >
              Contact us about your league →
            </Link>
          </MotionReveal>
        </div>

        {/* How it works for leagues */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-10 text-center text-2xl font-semibold text-white md:text-3xl">
            Set up in four steps. No IT required.
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="rounded-3xl border border-white/8 bg-white/4 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: 0.07 * i }}
              >
                <span
                  className="block font-mono text-3xl font-bold"
                  style={{ color: "rgba(99,102,241,0.3)" }}
                >
                  {step.number}
                </span>
                <span className="mt-2 inline-block rounded-full bg-white/8 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-neutral-500">
                  {step.role}
                </span>
                <h4 className="mt-2 text-sm font-semibold text-white">{step.title}</h4>
                <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-500">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sports where it lands first */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-8 text-center text-xl font-semibold text-white">
            Built for every league. Deepest for these four.
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leagueSports.map((sport, i) => (
              <motion.div
                key={sport.label}
                className="rounded-3xl border border-white/8 bg-white/4 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: 0.06 * i }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-2xl">{sport.emoji}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${sport.badgeClass}`}>
                    {sport.badge}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">{sport.label}</h4>
                <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-500">{sport.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 rounded-3xl border border-white/8 bg-white/4 p-10 text-center backdrop-blur-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-neutral-500">
            Ready to run your league on READYPLAY?
          </p>
          <h3 className="text-2xl font-semibold text-white md:text-3xl">
            Send us your league. We&apos;ll get you set up.
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-neutral-400">
            Tell us your sport, how many teams, and when your next season starts. We&apos;ll walk
            you through registration and make sure your first game produces a full stat record.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="mailto:leagues@readyplay.app?subject=League%20registration%20inquiry"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-neutral-950 transition hover:bg-neutral-100"
            >
              Email us about your league
            </Link>
            <Link
              href="/#cta"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-8 py-3.5 text-[15px] font-medium text-white transition hover:bg-white/12"
            >
              Or join the general waitlist
            </Link>
          </div>
          <p className="mt-5 text-[12px] text-neutral-600">
            leagues@readyplay.app · We respond within one business day
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function pause(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}
