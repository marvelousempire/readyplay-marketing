import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "READYPLAY — Pickup sports, made simple",
  description:
    "Multi-sport pickup platform: venues, rosters, live scores, and trust. Basketball is live first—more sports on the same shell.",
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
