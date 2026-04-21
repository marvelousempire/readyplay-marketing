"use client";

import { useState } from "react";
import { MotionReveal } from "@/components/motion-reveal";

// Override via `NEXT_PUBLIC_API_URL` in `.env.local` to test against a local
// backend (e.g. `http://localhost:3000`) without editing this file.
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "https://api.readyplay.app";

// Optional: TestFlight public invite URL (set as repo variable in GitHub
// Actions so the build bakes it in). When present, the success state shows
// a direct "Open TestFlight →" button so users can self-serve into the
// beta immediately — no waiting for a manual invite email.
const TESTFLIGHT_URL = process.env.NEXT_PUBLIC_TESTFLIGHT_URL;

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistCta({ id }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || status === "submitting") return;

    setStatus("submitting");

    try {
      const res = await fetch(`${API_BASE}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, referral: "readyplay.app" }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id={id} className="scroll-mt-20 px-6 py-16 text-center md:px-10">
      <div className="mx-auto max-w-xl">
        <MotionReveal>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
            Be first on the list.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-neutral-600">
            Drop your email and we&apos;ll send you a TestFlight invite when the
            next cohort opens.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          {status === "success" ? (
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-6 py-4 text-sm font-medium text-green-700 ring-1 ring-green-200">
                <span>✓</span>
                <span>
                  {TESTFLIGHT_URL
                    ? "You're in. Install the app with one tap."
                    : "You're on the list — we'll be in touch!"}
                </span>
              </div>

              {TESTFLIGHT_URL && (
                <>
                  <a
                    href={TESTFLIGHT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1a77e5] px-8 py-4 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#1665c7]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15 text-[11px] font-bold">
                      T
                    </span>
                    Open TestFlight invite
                    <span aria-hidden>→</span>
                  </a>
                  <p className="max-w-sm text-center text-xs text-neutral-500">
                    Tap on your iPhone or iPad. TestFlight will install READYPLAY automatically — no App Store needed.
                  </p>
                </>
              )}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "submitting"}
                className="w-full max-w-xs rounded-full border border-neutral-300 bg-white px-5 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm outline-none ring-0 transition focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:opacity-50 sm:w-72"
              />
              <button
                type="submit"
                disabled={status === "submitting" || !email}
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-brand px-8 py-3.5 text-[15px] font-medium text-white shadow-sm transition hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? "Sending…" : "Get early access"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-red-500">
              Something went wrong — try emailing us directly at{" "}
              <a href="mailto:hello@readyplay.app" className="underline">
                hello@readyplay.app
              </a>
            </p>
          )}

          {status !== "success" && (
            <p className="mt-4 text-xs text-neutral-400">
              TestFlight invite · No spam · Unsubscribe any time
            </p>
          )}
        </MotionReveal>
      </div>
    </div>
  );
}
