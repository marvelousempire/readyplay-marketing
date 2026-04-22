"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Global 404 for the statically-exported marketing site. GitHub Pages
// serves the emitted `out/404.html` for every unresolved path, so this
// component is where we quietly recover the cases that matter:
//
//   /p/<uuid>    — a profile that wasn't in the top-5k pre-render batch.
//                  Forward to admin.readyplay.app/p/<uuid> where the page
//                  is SSR'd live against the public API.
//   /find        — always pre-rendered, here for belt-and-suspenders.
//   /leaderboard — always pre-rendered, ditto.
//
// Everything else shows a real 404 so bogus URLs don't silently teleport.

const ADMIN_ORIGIN = "https://admin.readyplay.app";

export default function NotFound() {
  const [redirecting, setRedirecting] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const { pathname } = window.location;

    // Match /p/<anything-non-slash>(/)
    const profileMatch = pathname.match(/^\/p\/([^/]+)\/?$/);
    if (profileMatch) {
      const target = `${ADMIN_ORIGIN}/p/${profileMatch[1]}`;
      setRedirecting(target);
      // Small delay so the "redirecting" message has a frame to paint —
      // feels intentional, not broken.
      const t = setTimeout(() => {
        window.location.replace(target);
      }, 120);
      return () => clearTimeout(t);
    }

    // Leaderboard edge case: unknown state slug. /leaderboard/<slug>
    const boardMatch = pathname.match(/^\/leaderboard\/([^/]+)\/?$/);
    if (boardMatch) {
      const target = `${ADMIN_ORIGIN}/leaderboard/${boardMatch[1]}`;
      setRedirecting(target);
      const t = setTimeout(() => {
        window.location.replace(target);
      }, 120);
      return () => clearTimeout(t);
    }
  }, []);

  if (redirecting) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-neutral-50 p-6">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500" />
          <p className="mt-5 text-sm text-neutral-600">Loading player card…</p>
          <p className="mt-1 text-xs text-neutral-400">{redirecting}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-neutral-50 px-6 text-center">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">
        404
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
        That page isn&rsquo;t here.
      </h1>
      <p className="max-w-md text-sm text-neutral-600">
        It might have moved, or it might never have existed. Try searching for
        a player or heading back to the home page.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm font-semibold">
        <Link
          href="/"
          className="rounded-full bg-neutral-950 px-4 py-2 text-white transition hover:bg-neutral-800"
        >
          Home
        </Link>
        <Link
          href="/find/"
          className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-neutral-800 transition hover:border-orange-400 hover:text-orange-700"
        >
          Find a player
        </Link>
        <Link
          href="/leaderboard/"
          className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-neutral-800 transition hover:border-orange-400 hover:text-orange-700"
        >
          Leaderboard
        </Link>
      </div>
    </main>
  );
}
