import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "READYPLAY — Multi-sport pickup, tap scorekeeping, real reputation",
  description:
    "Peer-managed sports platform: Play Sites, tap-to-score live boards, leaderboards, Achievement Hall, credits for scorekeepers, and a marketplace vision for on-demand fill-ins. Basketball is the deepest live vertical today; more sports share the same shell.",
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
