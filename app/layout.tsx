import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "READYPLAY — Multi-sport pickup, tap scorekeeping, real reputation",
  description:
    "Eleven sports on one engine—hero sticker mosaic, per-sport deep dives, tap-to-score live boards, home leaderboards, Achievement Hall, credits, and a marketplace path for paid fill-ins. Basketball ships deepest today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
