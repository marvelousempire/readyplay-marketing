import type { Metadata } from "next";
import { MarketingChrome } from "@/components/marketing-chrome";
import { TestFlightSection } from "@/components/sections/testflight-section";
import { WaitlistCta } from "@/components/sections/waitlist-cta";

export const metadata: Metadata = {
  title: "Beta Testers — READYPLAY",
  description:
    "Everything you need to get up and running with the READYPLAY beta on TestFlight. Steps, focus areas, and how to send feedback.",
};

export default function BetaPage() {
  return (
    <MarketingChrome>
      {/* Hero banner for beta testers */}
      <section className="bg-[#1a77e5] px-6 pt-28 pb-12 text-center text-white md:px-10 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Active beta · TestFlight
          </div>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            You&apos;re in the room.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-blue-100">
            This is the hub for READYPLAY beta testers. Everything you need to get started, what
            to put through its paces, and how your feedback shapes what ships next.
          </p>
        </div>
      </section>

      {/* Full test-flight onboarding section */}
      <TestFlightSection />

      {/* Not a tester yet? Join waitlist */}
      <section className="border-t border-neutral-200 bg-white py-20">
        <div className="px-6 text-center md:px-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-neutral-500">
            Not a tester yet?
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
            Join the waitlist.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-neutral-600">
            We open new TestFlight cohorts as the platform stabilises. Drop your email and you&apos;ll be
            first to know when the next round opens.
          </p>
        </div>
        <WaitlistCta />
      </section>
    </MarketingChrome>
  );
}
