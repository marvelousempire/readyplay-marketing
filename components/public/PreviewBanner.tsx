// Renders a small, subtle banner on public pages whenever the API response
// includes seeded demo players. Disappears automatically once real activity
// crosses DEMO_HIDE_AFTER on the backend — no deploy required, because the
// banner is driven by the response itself, not a client-side flag.
//
// Visual: orange-on-soft-orange pill, quiet enough to not feel like an
// error but honest enough that nobody thinks "Marcus Rivera" is real.

export function PreviewBanner({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm ${className}`}
      role="status"
    >
      <span
        aria-hidden
        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-[10px] font-black text-white"
      >
        i
      </span>
      <p className="leading-snug text-orange-900">
        <strong className="font-semibold">Preview:</strong> some of the players
        shown here are demo profiles we use while the Miami community grows.
        They&rsquo;ll fade out automatically as real games get played.
      </p>
    </div>
  );
}
