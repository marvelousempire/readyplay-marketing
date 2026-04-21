"use client";

import { MotionReveal } from "@/components/motion-reveal";

const layers = [
  {
    icon: "🔐",
    status: "Ships now",
    statusColor: "bg-green-100 text-green-700",
    title: "Cryptographic game fingerprint",
    body: "Every finished run generates a SHA-256 hash of the final lineups, scores, and roster — a tamper-evident seal on that exact result. Copy it from any completed game summary under \"Proof & integrity.\"",
  },
  {
    icon: "🪪",
    status: "Ships now",
    statusColor: "bg-green-100 text-green-700",
    title: "Stable player & team identity",
    body: "Your profile carries a persistent digital ID across every game and season. The same five players always produce the same lineup fingerprint — deterministic identity for your squad, not a disposable group chat.",
  },
  {
    icon: "📱",
    status: "iOS 26+ infrastructure built",
    statusColor: "bg-blue-100 text-blue-700",
    title: "ISO 18013 digital credential",
    body: "READYPLAY includes a full ExtensionKit identity document provider built to the ISO 18013-7 standard — the same spec used for mobile driver's licenses. When issuer credentials are live, your verified player profile becomes presentable to any venue or league that supports the standard. No app required on their end.",
  },
  {
    icon: "⛓️",
    status: "Coming soon",
    statusColor: "bg-amber-100 text-amber-700",
    title: "On-chain anchoring",
    body: "The fingerprint payload is already structured for blockchain submission. When wallet signing ships, you'll be able to anchor any finished game's hash on-chain — optional, permanent, verifiable by anyone. Your pickup stats deserve that upgrade path.",
  },
];

export function IdentityRecord() {
  return (
    <section
      id="identity"
      className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <MotionReveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Identity and record
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Your record, sealed and portable.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Your games, reviews, and roles attach to one stable player identity — the same
            identity that carries cryptographic fingerprints today and optional on-chain
            anchoring tomorrow. Here&apos;s exactly what ships when.
          </p>
        </MotionReveal>

        <div className="mt-14 flex flex-col gap-5">
          {layers.map((l) => (
            <MotionReveal key={l.title}>
              <div className="flex gap-5 rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                <span className="text-2xl flex-shrink-0 mt-0.5">{l.icon}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold text-neutral-950">{l.title}</h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${l.statusColor}`}>
                      {l.status}
                    </span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-neutral-600">{l.body}</p>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-neutral-500">
            On-chain minting and wallet signing are a deliberate next chapter — not something
            claimed live in the app today. The infrastructure is there when the chapter opens.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
