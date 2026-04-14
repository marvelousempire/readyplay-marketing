"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#sports", label: "Sports" },
  { href: "/#every-sport", label: "Each sport" },
  { href: "/#leaderboards", label: "Boards" },
  { href: "/#achievements", label: "Hall" },
  { href: "/#earn", label: "Earn" },
  { href: "/#parts", label: "Platform" },
  { href: "/#how", label: "How" },
  { href: "/#features", label: "Features" },
  { href: "/#horizon", label: "Horizon" },
  { href: "/#identity", label: "Identity" },
  { href: "/#screens", label: "Screens" },
  { href: "/changelog/", label: "Changelog" },
  { href: "/#cta", label: "Waitlist" },
];

export function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-neutral-200/80 bg-[#fafafa]/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-6 md:h-16 md:px-10">
        <Link href="/" className="shrink-0 text-[15px] font-semibold tracking-tight text-neutral-950">
          READYPLAY
        </Link>
        <nav className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-5 gap-y-1 text-xs text-neutral-600 lg:flex xl:gap-x-6 xl:text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="whitespace-nowrap transition hover:text-neutral-950"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#cta"
          className="shrink-0 rounded-full bg-neutral-950 px-3 py-2 text-xs font-medium text-white transition hover:bg-neutral-800 md:px-4 md:text-sm"
        >
          Early access
        </Link>
      </div>
    </header>
  );
}
