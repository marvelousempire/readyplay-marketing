"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  searchPublicPlayers,
  initials,
  ovrTone,
  type PublicPlayer,
} from "@/lib/public-api";

// Debounced fuzzy search over the /public/players/search endpoint. Rendered
// on top of whatever SSR-seeded results the server gave us so the page is
// never empty on first paint.

function useDebounce<T>(value: T, ms = 200): T {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return v;
}

type Props = {
  initialResults?: PublicPlayer[];
  initialTotal?: number;
};

export function PlayerSearchBox({
  initialResults = [],
  initialTotal = 0,
}: Props) {
  const [q, setQ] = useState("");
  const debounced = useDebounce(q, 200);
  const [results, setResults] = useState<PublicPlayer[]>(initialResults);
  const [total, setTotal] = useState(initialTotal);
  const [loading, setLoading] = useState(false);
  const reqId = useRef(0);

  useEffect(() => {
    const id = ++reqId.current;
    let cancelled = false;

    async function run() {
      setLoading(true);
      const res = await searchPublicPlayers({ q: debounced, limit: 30 });
      if (cancelled || id !== reqId.current) return;
      setResults(res.entries);
      setTotal(res.total);
      setLoading(false);
    }
    run();

    return () => {
      cancelled = true;
    };
  }, [debounced]);

  const hint = useMemo(() => {
    if (loading) return "Searching…";
    if (q && results.length === 0) return `No players match "${q}".`;
    if (q) return `${total.toLocaleString()} match${total === 1 ? "" : "es"}`;
    return `${total.toLocaleString()} players on READYPLAY`;
  }, [loading, q, results.length, total]);

  return (
    <div>
      <div className="relative">
        <span
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
        >
          🔍
        </span>
        <input
          type="search"
          inputMode="search"
          autoComplete="off"
          spellCheck={false}
          placeholder="Search players by name or park nickname…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full rounded-2xl border border-neutral-200 bg-white px-11 py-4 text-base shadow-sm transition focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100"
        />
      </div>
      <p className="mt-2 text-xs text-neutral-500">{hint}</p>

      <ul className="mt-6 divide-y divide-neutral-100 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        {results.length === 0 && !loading && (
          <li className="px-5 py-12 text-center text-sm text-neutral-500">
            {q
              ? "Try a different name or remove filters."
              : "Start typing to find a player, or browse the leaderboard."}
          </li>
        )}
        {results.map((p) => (
          <li key={p.id}>
            <Link
              href={`/p/${p.id}/`}
              className="flex items-center gap-3 px-5 py-3 transition hover:bg-orange-50/50"
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-orange-50">
                {p.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.avatarUrl}
                    alt={p.displayName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs font-bold text-orange-600">
                    {initials(p.displayName)}
                  </div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-neutral-950">
                  {p.displayName}
                  {p.verified && !p.isDemo && (
                    <span
                      title="Verified"
                      aria-label="Verified"
                      className="ml-1 text-[10px] font-bold text-sky-600"
                    >
                      ✓
                    </span>
                  )}
                  {p.isDemo && (
                    <span
                      title="Demo profile"
                      aria-label="Demo profile"
                      className="ml-1.5 rounded-full bg-orange-500 px-1.5 py-0.5 text-[9px] font-black tracking-widest text-white"
                    >
                      DEMO
                    </span>
                  )}
                </p>
                <p className="mt-0.5 truncate text-xs text-neutral-500">
                  {[
                    p.parkNickname ? `“${p.parkNickname}”` : null,
                    [p.homeCity, p.homeState].filter(Boolean).join(", ") ||
                      null,
                    `${p.gamesPlayed} runs`,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
              <span
                className={`text-lg font-black tabular-nums ${ovrTone(p.ovr)}`}
              >
                {p.ovr}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
