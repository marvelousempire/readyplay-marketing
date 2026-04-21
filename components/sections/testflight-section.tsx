"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Get TestFlight",
    body: "Download the free TestFlight app from the App Store on your iPhone or iPad.",
    cta: { label: "App Store →", href: "https://apps.apple.com/us/app/testflight/id899247664" },
  },
  {
    number: "02",
    title: "Accept your invite",
    body: "Check the email you used to sign up. Tap the invitation link to join the READYPLAY beta.",
    cta: { label: "Join waitlist →", href: "/#cta" },
  },
  {
    number: "03",
    title: "Install & play",
    body: "TestFlight installs the latest READYPLAY beta automatically. Open it and start your first run.",
    cta: null,
  },
];

const focusAreas = [
  {
    icon: "🏀",
    title: "Live tap board",
    body: "Score a full game — +1, +2, +3 buttons in bright sunlight conditions. Report any missed taps or latency.",
  },
  {
    icon: "⌚",
    title: "Apple Watch scoring",
    body: "Pair your Watch and score from your wrist. We want to know: does it stay in sync? Does it feel fast enough?",
  },
  {
    icon: "📊",
    title: "Leaderboards & records",
    body: "Check that your stats appear after a game. Verify your player OVR reflects your actual performance.",
  },
  {
    icon: "🗺",
    title: "Play Sites (court maps)",
    body: "Tag your court and confirm the pin lands in the right place. Missing a court? Report the address.",
  },
  {
    icon: "🔴",
    title: "Live Activity & Lock Screen",
    body: "Pin the score to your Lock Screen. Tell us if the clutch alert fires correctly at a 3-point margin.",
  },
  {
    icon: "❤️",
    title: "HealthKit sync",
    body: "After a run, check that your workout shows distance, heart-rate zones, and active energy — not a blank event.",
  },
];

export function TestFlightSection() {
  return (
    <section
      id="beta"
      className="scroll-mt-20 bg-[#f2f2f7] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* TestFlight badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-sm ring-1 ring-neutral-200/80">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1a77e5] shadow-sm">
              <span className="text-lg font-bold text-white">T</span>
            </div>
            <div className="text-left">
              <p className="text-[11px] font-medium uppercase tracking-widest text-neutral-500">
                Beta program
              </p>
              <p className="text-sm font-semibold text-neutral-900">TestFlight — READYPLAY</p>
            </div>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Beta testers, welcome.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            You&apos;re helping build the platform. Here&apos;s everything you need to get up
            and running — and what we most want you to put through its paces.
          </p>
        </motion.div>

        {/* 3-step getting started */}
        <motion.div
          className="mt-16 grid gap-4 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200/80"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="mb-4 block font-mono text-3xl font-bold tracking-tight"
                style={{ color: "#1a77e5", opacity: 0.25 }}
              >
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-neutral-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.body}</p>
              {step.cta && (
                <Link
                  href={step.cta.href}
                  className="mt-4 inline-flex items-center text-sm font-medium text-[#1a77e5] transition hover:opacity-75"
                  {...(step.cta.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {step.cta.label}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* What to test */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="mb-2 text-center text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
            What to focus on
          </h3>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm text-neutral-500">
            These are the six areas where your feedback moves the needle most right now.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200/80"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-xl">
                  {area.icon}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">{area.title}</h4>
                  <p className="mt-0.5 text-sm leading-relaxed text-neutral-500">{area.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feedback box */}
        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="rounded-3xl bg-neutral-950 p-8 text-white">
            <div className="mb-4 text-2xl">📳</div>
            <h4 className="text-lg font-semibold">Shake to report</h4>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              Found a bug mid-run? Shake your iPhone to open an instant report. A screenshot
              attaches automatically — add a note and hit send. We read every one.
            </p>
          </div>

          <div className="rounded-3xl bg-[#1a77e5] p-8 text-white">
            <div className="mb-4 text-2xl">T</div>
            <h4 className="text-lg font-semibold">TestFlight feedback</h4>
            <p className="mt-2 text-sm leading-relaxed text-blue-100">
              You can also tap <strong className="text-white">Send Beta Feedback</strong> inside TestFlight at any time.
              Rate your experience and leave notes — those go directly to the team.
            </p>
          </div>
        </motion.div>

        {/* Direct contact */}
        <motion.p
          className="mt-8 text-center text-sm text-neutral-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Questions or blockers?{" "}
          <a
            href="mailto:beta@readyplay.app"
            className="font-medium text-neutral-900 underline underline-offset-2 hover:text-brand"
          >
            beta@readyplay.app
          </a>
          {" "}— we&apos;ll get back to you same day.
        </motion.p>
      </div>
    </section>
  );
}
