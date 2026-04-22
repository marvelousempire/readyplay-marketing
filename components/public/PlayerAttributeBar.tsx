// Pure presentational — renders one attribute row on a player's profile page.
// Intentionally not a client component so profile pages can stay fully static.

type Props = {
  label: string;
  value: number;
};

export function PlayerAttributeBar({ label, value }: Props) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="flex items-center gap-4">
      <span className="w-32 shrink-0 text-sm font-medium text-neutral-700">
        {label}
      </span>
      <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-neutral-200">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-orange-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-10 text-right text-sm font-semibold tabular-nums text-neutral-950">
        {Math.round(pct)}
      </span>
    </div>
  );
}
