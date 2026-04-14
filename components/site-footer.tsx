import Link from "next/link";

const anchors = [
  { href: "/#sports", label: "Sports" },
  { href: "/#parts", label: "Platform" },
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#horizon", label: "Horizon" },
  { href: "/#identity", label: "Identity" },
  { href: "/#screens", label: "Screens" },
  { href: "/#cta", label: "Waitlist" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200/80 px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <p className="text-center text-xs text-neutral-500 md:text-left">
          READYPLAY is in active beta—capabilities roll out by release. Marketplace, Apple Pay, and
          escrow flows ship when the trust graph and binaries catch up; this site describes the full
          vision in places ahead of the store listing.
        </p>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} READYPLAY</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/" className="transition hover:text-neutral-950">
              Home
            </Link>
            {anchors.map((a) => (
              <Link key={a.href} href={a.href} className="transition hover:text-neutral-950">
                {a.label}
              </Link>
            ))}
            <Link href="/changelog/" className="transition hover:text-neutral-950">
              Changelog
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
