"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
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
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:h-16 md:px-10">
        <Link href="/" className="text-[15px] font-semibold tracking-tight text-neutral-950">
          READYPLAY
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition hover:text-neutral-950"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#cta"
          className="rounded-full bg-neutral-950 px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-800 md:text-sm"
        >
          Early access
        </Link>
      </div>
    </header>
  );
}
