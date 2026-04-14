"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/** Mobile hamburger: every label uses at least two words for scan clarity. */
const links = [
  { href: "/#sports", label: "All sports" },
  { href: "/#every-sport", label: "Each sport" },
  { href: "/#leaderboards", label: "Score boards" },
  { href: "/#achievements", label: "Achievement hall" },
  { href: "/#earn", label: "Credits & earn" },
  { href: "/#parts", label: "Product platform" },
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Key features" },
  { href: "/#horizon", label: "Future horizon" },
  { href: "/#identity", label: "Digital identity" },
  { href: "/#screens", label: "Screen gallery" },
  { href: "/changelog/", label: "Release notes" },
  { href: "/#cta", label: "Join waitlist" },
];

/**
 * Desktop primary: fewer top-level items; every visible label is at least two words.
 * Neighbor sections stay one scroll away on the home page.
 */
const desktopPrimaryLinks = [
  { href: "/#sports", label: "All sports" },
  { href: "/#leaderboards", label: "Play & earn" },
  { href: "/#parts", label: "Product platform" },
  { href: "/#identity", label: "Digital identity" },
  { href: "/#screens", label: "Screen gallery" },
  { href: "/changelog/", label: "Release notes" },
] as const;

function IconMenu({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function IconClose({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 top-14 z-40 bg-neutral-950/25 backdrop-blur-[1px] md:top-16 lg:hidden"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid || menuOpen
            ? "border-b border-neutral-200/80 bg-[#fafafa]/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-6 md:h-16 md:px-10">
          <Link href="/" className="shrink-0 text-[15px] font-semibold tracking-tight text-neutral-950">
            READYPLAY
          </Link>

          <nav
            className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-1 text-xs text-neutral-600 lg:flex xl:gap-x-5 xl:text-sm"
            aria-label="Primary"
          >
            {desktopPrimaryLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="whitespace-nowrap transition hover:text-neutral-950"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              className="flex items-center justify-center rounded-lg p-2 text-neutral-800 transition hover:bg-neutral-200/80 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="site-mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
            <Link
              href="/#cta"
              className="rounded-full bg-neutral-950 px-3 py-2 text-xs font-medium text-white transition hover:bg-neutral-800 md:px-4 md:text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Early access
            </Link>
          </div>

          <nav
            id="site-mobile-nav"
            className={`absolute left-0 right-0 top-full max-h-[min(70vh,calc(100dvh-3.75rem))] overflow-y-auto border-b border-neutral-200 bg-[#fafafa] shadow-lg transition-[visibility,opacity] duration-200 lg:hidden ${
              menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
            }`}
            aria-hidden={!menuOpen}
            aria-label="Mobile"
          >
            <ul className="flex flex-col px-4 py-3 pb-5">
              {links.map((l) => (
                <li key={l.href} className="border-b border-neutral-200/80 last:border-0">
                  <Link
                    href={l.href}
                    className="block py-3.5 text-[15px] font-medium text-neutral-800 transition hover:text-neutral-950"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
