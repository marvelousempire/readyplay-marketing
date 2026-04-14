"use client";

import { MotionReveal } from "@/components/motion-reveal";

const attributes = [
  { label: "Speed", desc: "How quickly you move on court" },
  { label: "Awareness", desc: "Reading the game before it happens" },
  { label: "Inside shooting", desc: "Paint efficiency and layup rate" },
  { label: "3-point shooting", desc: "Arc accuracy and attempt volume" },
  { label: "Defense", desc: "Stops, contests, and positioning" },
  { label: "Steals", desc: "Grades from actual recorded steal events" },
  { label: "Blocks", desc: "Grades from actual recorded block events" },
  { label: "Screens", desc: "Setting picks that free teammates" },
  { label: "Morale", desc: "Impact on how people feel after playing with you" },
  { label: "Team play", desc: "Community reviews on being a good teammate" },
];

const ovrColors = [
  { range: "85 – 99", label: "Elite", color: "bg-blue-500" },
  { range: "75 – 84", label: "Solid", color: "bg-green-500" },
  { range: "60 – 74", label: "Developing", color: "bg-yellow-400" },
  { range: "40 – 59", label: "Coming up", color: "bg-orange-400" },
];

export function ProfileSection() {
  return (
    <section
      id="profile"
      className="scroll-mt-20 bg-white px-6 py-24 md:px-10 md:py-32"
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
            Every run you play feeds a living profile. Your OVR rating (40–99), ten sport
            attributes, split stats by court and time of day, conduct grade, and a reputation
            built solely by the people who competed beside you—not an algorithm.
          </p>
        </MotionReveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-start md:gap-14">
          {/* OVR tier card */}
          <MotionReveal>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-950">OVR rating</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                A single overall number that reflects your scoring, shooting style, defensive
                contributions, and peer reviews. It moves as you play more games—not as you
                spend more time in the app.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {ovrColors.map((tier) => (
                  <div key={tier.range} className="flex items-center gap-3">
                    <div className={`h-3 w-3 shrink-0 rounded-full ${tier.color}`} />
                    <span className="text-sm font-medium text-neutral-800 w-16">{tier.range}</span>
                    <span className="text-sm text-neutral-500">{tier.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-950">Stats split by context</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                Stats broken down by Play Site, time of day, and conditions—so you can see if
                you play differently at home courts or in evening runs. Conduct grade and a
                popularity meter surface how the community rates playing with you.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["By court", "By time of day", "By conditions", "Conduct grade", "Popularity score"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-200/80 px-3 py-1 text-xs font-medium text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </MotionReveal>

          {/* Attributes grid */}
          <MotionReveal delay={0.1}>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-950">10 core attributes</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                Each attribute is derived from real game events and peer reviews—no self-rating,
                no self-promotion.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {attributes.map((attr) => (
                  <div key={attr.label} className="rounded-2xl bg-white px-4 py-3 ring-1 ring-neutral-200/80">
                    <p className="text-sm font-medium text-neutral-900">{attr.label}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">{attr.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-950">Apple Wallet pass</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                Share your player card as an Apple Wallet pass—your OVR, top attributes, and
                court history in a format anyone can verify without opening the app.
              </p>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
