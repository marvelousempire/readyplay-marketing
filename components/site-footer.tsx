import Link from "next/link";

const navColumns = [
  {
    heading: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/#sports", label: "All sports" },
      { href: "/#features", label: "Key features" },
      { href: "/#how", label: "How it works" },
      { href: "/#screens", label: "Screen gallery" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { href: "/leaderboard/", label: "Live leaderboard" },
      { href: "/find/", label: "Find a player" },
      { href: "/#achievements", label: "Achievement hall" },
      { href: "/#earn", label: "Credits & earn" },
      { href: "/#identity", label: "Digital identity" },
      { href: "/#horizon", label: "What's coming" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { href: "/#about", label: "Our story" },
      { href: "/#faq", label: "FAQ" },
      { href: "/changelog/", label: "Release notes" },
      { href: "/privacy/", label: "Privacy policy" },
      { href: "/terms/", label: "Terms of use" },
      { href: "/#cta", label: "Join the waitlist" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200/80 bg-white px-6 pt-14 pb-10 md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Top row: brand + columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold tracking-tight text-neutral-950">READYPLAY</span>
            <p className="text-sm leading-relaxed text-neutral-500">
              Peer-managed sports. Verified records. Reputation that travels.
            </p>
            <a
              href="mailto:hello@readyplay.app?subject=READYPLAY%20waitlist"
              className="mt-1 inline-flex w-fit items-center rounded-full bg-neutral-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-neutral-700"
            >
              Join the waitlist
            </a>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-neutral-500 transition hover:text-neutral-950"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row: legal */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-neutral-100 pt-6 text-xs text-neutral-400 sm:flex-row">
          <p>© {new Date().getFullYear()} READYPLAY · Wonderzoo, Inc.</p>
          <p className="text-center sm:text-right">
            Active beta — some features described here ship in upcoming releases.
          </p>
        </div>

      </div>
    </footer>
  );
}
