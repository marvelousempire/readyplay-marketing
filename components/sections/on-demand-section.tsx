"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MotionReveal } from "@/components/motion-reveal";

/* ─────────────────────────────────────────────────────────
   Team Builder mockup — animated roster slots
   ───────────────────────────────────────────────────────── */

type RosterSlot = {
  position: string;
  name: string | null;
  ovr: number | null;
  conduct: string | null;
  rate: string | null;   // "$40/game" | "FREE" | null
  status: "confirmed" | "pending" | "open";
};

const initialRoster: RosterSlot[] = [
  { position: "PG", name: "Marcus D.", ovr: 78, conduct: "A+", rate: "$40/game", status: "confirmed" },
  { position: "SG", name: "Devon T.",  ovr: 71, conduct: "A",  rate: "FREE",     status: "confirmed" },
  { position: "SF", name: "James K.",  ovr: 83, conduct: "A+", rate: "$55/game", status: "pending"   },
  { position: "PF", name: "Terrell A.",ovr: 75, conduct: "B+", rate: "$35/game", status: "pending"   },
  { position: "C",  name: null,        ovr: null,conduct: null,rate: null,       status: "open"      },
];

const conductColor = (c: string) =>
  c === "A+" ? "text-emerald-400" : c === "A" ? "text-emerald-300" : "text-amber-400";

function TeamBuilderMockup() {
  const [pendingIdx, setPendingIdx] = useState<number | null>(null);
  const [confirmedIdxs, setConfirmedIdxs] = useState<number[]>([0, 1]);
  const alive = useRef(true);

  // Animate: sequentially confirm pending slots, loop
  useEffect(() => {
    alive.current = true;

    async function run() {
      const pending = [2, 3]; // indices of "pending" slots
      let i = 0;
      while (alive.current) {
        await pause(2000);
        if (!alive.current) break;
        const idx = pending[i % pending.length];
        setPendingIdx(idx);
        await pause(700);
        if (!alive.current) break;
        setConfirmedIdxs((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
        setPendingIdx(null);
        i++;
        if (i === pending.length) {
          // reset after a pause
          await pause(4000);
          if (!alive.current) break;
          setConfirmedIdxs([0, 1]);
          i = 0;
        }
      }
    }

    run();
    return () => { alive.current = false; };
  }, []);

  const totalCost = [40, 0, 55, 35]
    .filter((_, i) => confirmedIdxs.includes(i))
    .reduce((a, b) => a + b, 0);

  return (
    <motion.div
      className="mx-auto w-full max-w-md select-none"
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="overflow-hidden rounded-[2rem] shadow-[0_28px_80px_-16px_rgba(0,0,0,0.45)]"
        style={{ background: "linear-gradient(160deg, #1c1c1e 0%, #111 100%)" }}
      >
        {/* Header */}
        <div
          className="px-5 pb-4 pt-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                GM View — Team Builder
              </p>
              <p className="mt-0.5 text-base font-bold text-white">🏀 5v5 · Hillcrest Park</p>
              <p className="text-[11px] text-neutral-500">Saturday 2 pm · Posted by Ray M. (GM)</p>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
              Live
            </span>
          </div>
        </div>

        {/* Roster slots */}
        <div className="px-5 py-3">
          {initialRoster.map((slot, i) => {
            const isConfirmed = confirmedIdxs.includes(i) || slot.status === "confirmed";
            const isPending = pendingIdx === i || (!isConfirmed && slot.status === "pending");
            const isOpen = slot.status === "open";

            return (
              <motion.div
                key={slot.position}
                className="flex items-center gap-3 rounded-xl px-2 py-2.5"
                animate={{
                  backgroundColor:
                    pendingIdx === i
                      ? "rgba(220,38,38,0.08)"
                      : "transparent",
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Position badge */}
                <span
                  className="flex h-7 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold"
                  style={{ background: "rgba(255,255,255,0.06)", color: "#9ca3af" }}
                >
                  {slot.position}
                </span>

                {/* Player info or open slot */}
                {isOpen ? (
                  <div className="flex flex-1 items-center gap-2">
                    <span className="text-[12px] text-neutral-600 italic">Open slot</span>
                    <span className="ml-auto rounded-full border border-dashed border-neutral-700 px-2.5 py-0.5 text-[10px] text-neutral-600">
                      + Post open
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-1 flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="truncate text-[12px] font-semibold text-white">
                          {slot.name}
                        </span>
                        {slot.ovr !== null && (
                          <span className="shrink-0 rounded bg-white/8 px-1.5 py-0.5 text-[9px] font-bold text-neutral-400">
                            {slot.ovr} OVR
                          </span>
                        )}
                        {slot.conduct && (
                          <span className={`shrink-0 text-[9px] font-bold ${conductColor(slot.conduct)}`}>
                            {slot.conduct}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Rate */}
                    {slot.rate && (
                      <span
                        className={`shrink-0 text-[11px] font-semibold ${
                          slot.rate === "FREE" ? "text-emerald-400" : "text-neutral-300"
                        }`}
                      >
                        {slot.rate}
                      </span>
                    )}

                    {/* Status indicator */}
                    <AnimatePresence mode="wait">
                      {isConfirmed ? (
                        <motion.span
                          key="confirmed"
                          initial={{ scale: 0.6, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.25, type: "spring" }}
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20"
                        >
                          <span className="text-[9px] text-emerald-400">✓</span>
                        </motion.span>
                      ) : isPending && pendingIdx === i ? (
                        <motion.span
                          key="confirming"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          className="h-5 w-5 shrink-0 rounded-full border border-brand/50"
                        />
                      ) : (
                        <motion.span
                          key="pending"
                          className="h-5 w-5 shrink-0 rounded-full border border-dashed border-neutral-700"
                        />
                      )}
                    </AnimatePresence>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Coach row */}
        <div
          className="flex items-center justify-between gap-3 px-5 py-3"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-7 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold"
              style={{ background: "rgba(255,255,255,0.06)", color: "#9ca3af" }}
            >
              🎙
            </span>
            <div>
              <p className="text-[12px] font-semibold text-white">Ray M.</p>
              <p className="text-[10px] text-neutral-500">Coach / session lead</p>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-neutral-300">$75/session</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">
            <span className="text-[9px] text-emerald-400">✓</span>
          </span>
        </div>

        {/* Total + Apple Pay */}
        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <div>
            <p className="text-[10px] text-neutral-500">Squad total</p>
            <motion.p
              key={totalCost}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-bold text-white"
            >
              ${totalCost + 75}
            </motion.p>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-white/6 px-4 py-2.5">
            <span className="text-sm">⬆</span>
            <span className="text-[12px] font-semibold text-white">Pay with Apple Pay</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   The three play modes
   ───────────────────────────────────────────────────────── */

const modes = [
  {
    icon: "🏀",
    title: "Play for the love of it",
    badge: "Always free",
    badgeClass: "bg-emerald-50 text-emerald-700",
    body: "Mark yourself available, join a posted run, and play. No money changes hands. The classic pickup experience — but now your stats, your OVR, and your conduct grade follow you.",
    bullets: [
      "No payment required",
      "OVR and record still tracked",
      "Conduct grade still earned",
    ],
  },
  {
    icon: "💵",
    title: "Set your own rate",
    badge: "Player-controlled",
    badgeClass: "bg-blue-50 text-blue-700",
    body: "You decide what you're worth. Set a per-game rate, mark yourself open to bookings, and let GMs find you. Accept or decline each request. Your OVR and conduct grade are the resume — no pitch required.",
    bullets: [
      "You set the rate",
      "Accept or decline any booking",
      "Paid via Apple Pay (when live)",
    ],
  },
  {
    icon: "👔",
    title: "Run it as GM",
    badge: "General Manager",
    badgeClass: "bg-violet-50 text-violet-700",
    body: "Post a game, fill every roster spot, and pay the whole court through the app. Hire a coach per session, book players individually, or mix paid and free slots however you want. You run the run.",
    bullets: [
      "Pay players and coach separately",
      "Mix paid + free roster spots",
      "Escrow protects all parties",
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   Section
   ───────────────────────────────────────────────────────── */

export function OnDemandSection() {
  return (
    <section
      id="squad"
      className="relative scroll-mt-20 overflow-hidden px-6 py-28 md:px-10 md:py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950 via-[#0a0a12] to-neutral-950" />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[5%] top-[20%] h-[350px] w-[350px] rounded-full bg-brand/8 blur-[100px]" />
        <div className="absolute right-[10%] top-[40%] h-[280px] w-[280px] rounded-full bg-violet-600/8 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Headline */}
        <MotionReveal className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-500">
            On-demand play
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            Your squad.{" "}
            <span className="bg-gradient-to-r from-brand via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Your terms.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Play for free, set a rate, or build and pay a full roster — the platform
            supports all three. Every transaction is backed by verified OVRs, clean
            conduct grades, and a trust graph built from real finished games.
          </p>
        </MotionReveal>

        {/* Two-column: team builder visual + copy */}
        <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-16">
          <TeamBuilderMockup />

          <MotionReveal delay={0.1} className="flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                The whole court, managed in one place.
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
                A General Manager posts a game and sets a budget. Players who have
                listed themselves as available — with their rate or free — show up in
                the booking list, sorted by OVR, conduct grade, and court history.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-400">
                The GM picks the squad, including a coach if the run needs one.
                Each player accepts or declines. Confirmed slots lock in. When the
                run closes and the game is peer-verified, payment flows.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { icon: "🔐", label: "Trust-gated booking", desc: "Players and coaches can only list through verified history. No cold spam." },
                { icon: "📋", label: "Mixed rosters", desc: "Free and paid slots can coexist on the same team. A player's choice, not the GM's override." },
                { icon: "💳", label: "Apple Pay + escrow", desc: "Payment holds until the run closes. Nobody gets stiffed. Nobody ghosts." },
                { icon: "⚖️", label: "Cancellation rules", desc: "Late cancellations cost something. The platform respects everyone's time — including the player who already showed up." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-2xl border border-white/6 bg-white/3 p-4 backdrop-blur-sm"
                >
                  <span className="mt-0.5 text-lg">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-0.5 text-[13px] leading-snug text-neutral-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="rounded-2xl border border-amber-500/20 bg-amber-500/6 px-4 py-3 text-[12px] leading-relaxed text-amber-300/80">
              Paid bookings and Apple Pay escrow are still landing. Players can already
              mark availability and set rates. GMs can post runs and fill rosters now.
              Payment flows follow as the trust graph matures.
            </p>
          </MotionReveal>
        </div>

        {/* Three-mode cards */}
        <motion.div
          className="mt-20 grid gap-5 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {modes.map((mode, i) => (
            <motion.div
              key={mode.title}
              className="rounded-3xl border border-white/8 bg-white/4 p-7 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{mode.icon}</span>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${mode.badgeClass}`}>
                  {mode.badge}
                </span>
              </div>
              <h4 className="mt-4 text-base font-semibold text-white">{mode.title}</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-400">{mode.body}</p>
              <ul className="mt-5 flex flex-col gap-1.5">
                {mode.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-[12px] text-neutral-500">
                    <span className="text-[9px] text-neutral-600">●</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function pause(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}
