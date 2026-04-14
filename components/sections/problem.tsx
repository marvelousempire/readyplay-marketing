"use client";

import { MotionReveal } from "@/components/motion-reveal";

export function Problem() {
  return (
    <section
      id="problem"
      className="min-h-[85vh] scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            The problem
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Pickup is messy.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600">
            Group chats sprawl. Nobody knows who is in. The run starts late—and
            energy drops before the first whistle.
          </p>
        </MotionReveal>

        <MotionReveal className="mt-16 w-full max-w-lg" delay={0.1}>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-3">
              {["Who is playing?", "Which court?", "What time?", "Is it full?"].map(
                (line, i) => (
                  <div
                    key={line}
                    className="flex items-center gap-3 rounded-2xl bg-neutral-50 px-4 py-3 text-left text-neutral-600"
                    style={{ opacity: 1 - i * 0.12 }}
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-neutral-300" />
                    <span className="text-[15px]">{line}</span>
                  </div>
                ),
              )}
            </div>
            <p className="mt-6 text-sm text-neutral-500">
              Same questions. Different threads. Every week.
            </p>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
