import Link from "next/link";

import { initials, ovrTone, type PublicLeaderboard } from "@/lib/public-api";

// Shared leaderboard body used by /leaderboard and /leaderboard/[state].
// Top-3 spotlight + full table; no client-only deps so it can stay inside
// a Server Component for pre-rendering.

const DEFAULT_STATES = ["TX", "CA", "NY", "FL", "GA", "IL"];

type Props = {
  board: PublicLeaderboard;
  state: string | null;
  title: string;
  description: string;
};

export function LeaderboardTable({ board, state, title, description }: Props) {
  return (
    <>
      <header className="flex flex-col gap-3 pb-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">
            Leaderboard
          </p>
          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{title}</h1>
          <p className="mt-2 max-w-xl text-sm text-neutral-600">{description}</p>
        </div>

        <StateFilter active={state} />
      </header>

      {board.entries.length >= 3 && (
        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          {board.entries.slice(0, 3).map((p, i) => (
            <Link
              key={p.id}
              href={`/p/${p.id}/`}
              className="group flex flex-col gap-3 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
                  #{p.rank}
                </span>
                {i === 0 && (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold tracking-widest text-amber-700">
                    🏆 TOP
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-neutral-200 bg-orange-50">
                  {p.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.avatarUrl}
                      alt={p.displayName}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm font-bold text-orange-600">
                      {initials(p.displayName)}
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-bold">{p.displayName}</p>
                  {(p.homeCity || p.homeState) && (
                    <p className="mt-0.5 truncate text-xs text-neutral-500">
                      {[p.homeCity, p.homeState].filter(Boolean).join(", ")}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <span
                  className={`text-4xl font-black tabular-nums ${ovrTone(p.ovr)}`}
                >
                  {p.ovr}
                </span>
                <div className="text-right">
                  <p className="text-xs font-semibold text-neutral-500">
                    {p.gamesPlayed.toLocaleString()} runs
                  </p>
                  <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    {p.topAttributes[0] ?? "—"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      )}

      <section className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-neutral-50 text-left text-[10px] font-black uppercase tracking-widest text-neutral-500">
            <tr>
              <th className="px-5 py-3">#</th>
              <th className="px-5 py-3">Player</th>
              <th className="px-5 py-3 hidden sm:table-cell">Location</th>
              <th className="px-5 py-3 hidden md:table-cell">Top Skill</th>
              <th className="px-5 py-3 text-right">Runs</th>
              <th className="px-5 py-3 text-right">OVR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-sm">
            {board.entries.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-5 py-12 text-center text-sm text-neutral-500"
                >
                  No ranked players yet{state ? ` for ${state}` : ""}.
                </td>
              </tr>
            )}
            {board.entries.map((p) => (
              <tr key={p.id} className="transition hover:bg-orange-50/40">
                <td className="px-5 py-3 text-xs font-bold tabular-nums text-neutral-400">
                  {p.rank}
                </td>
                <td className="px-5 py-3">
                  <Link
                    href={`/p/${p.id}/`}
                    className="flex items-center gap-3 font-semibold text-neutral-950 hover:text-orange-600"
                  >
                    <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-orange-50">
                      {p.avatarUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.avatarUrl}
                          alt={p.displayName}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-orange-600">
                          {initials(p.displayName)}
                        </div>
                      )}
                    </div>
                    <span className="flex flex-col">
                      <span>{p.displayName}</span>
                      {p.parkNickname && (
                        <span className="text-[11px] font-normal italic text-neutral-500">
                          “{p.parkNickname}”
                        </span>
                      )}
                    </span>
                    {p.verified && (
                      <span
                        title="Verified"
                        aria-label="Verified"
                        className="ml-1 text-[10px] font-bold text-sky-600"
                      >
                        ✓
                      </span>
                    )}
                  </Link>
                </td>
                <td className="hidden px-5 py-3 text-neutral-600 sm:table-cell">
                  {[p.homeCity, p.homeState].filter(Boolean).join(", ") || "—"}
                </td>
                <td className="hidden px-5 py-3 text-neutral-600 md:table-cell">
                  {p.topAttributes[0] ?? "—"}
                </td>
                <td className="px-5 py-3 text-right tabular-nums text-neutral-700">
                  {p.gamesPlayed.toLocaleString()}
                </td>
                <td
                  className={`px-5 py-3 text-right text-base font-black tabular-nums ${ovrTone(
                    p.ovr
                  )}`}
                >
                  {p.ovr}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <p className="mt-4 text-xs text-neutral-500">
        Updated{" "}
        <time dateTime={board.generatedAt}>
          {new Date(board.generatedAt).toLocaleString()}
        </time>
        . Looking for someone specific?{" "}
        <Link
          href="/find/"
          className="font-semibold text-orange-600 hover:text-orange-700"
        >
          Search for a player →
        </Link>
      </p>
    </>
  );
}

function StateFilter({ active }: { active: string | null }) {
  return (
    <nav className="flex flex-wrap gap-1.5">
      <Link
        href="/leaderboard/"
        className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
          active == null
            ? "border-orange-500 bg-orange-500 text-white"
            : "border-neutral-200 bg-white text-neutral-700 hover:border-orange-400"
        }`}
      >
        All
      </Link>
      {DEFAULT_STATES.map((s) => (
        <Link
          key={s}
          href={`/leaderboard/${s.toLowerCase()}/`}
          className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
            active === s
              ? "border-orange-500 bg-orange-500 text-white"
              : "border-neutral-200 bg-white text-neutral-700 hover:border-orange-400"
          }`}
        >
          {s}
        </Link>
      ))}
    </nav>
  );
}
