import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "READYPLAY — Exercise through play. Verified reputation.",
  description:
    "Exercise through play, structured scoring, verified reputation, and portable records — for every sport you play.",
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
