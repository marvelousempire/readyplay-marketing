import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200/80 px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
        <p>© {new Date().getFullYear()} READYPLAY</p>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link href="/" className="transition hover:text-neutral-950">
            Home
          </Link>
          <Link href="/changelog/" className="transition hover:text-neutral-950">
            Changelog
          </Link>
          <Link href="/#cta" className="transition hover:text-neutral-950">
            Early access
          </Link>
        </nav>
      </div>
    </footer>
  );
}
