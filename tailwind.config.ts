import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand orange — kept in lockstep with the admin repo's
        // tailwind.config.ts so `bg-brand` resolves identically on both
        // sides. Anchor: the wordmark `▣` square in the admin's
        // PublicShell uses bg-orange-500 — the most identity-defining
        // element on the public surface.
        brand: {
          DEFAULT: "#f97316", // orange-500
          dark: "#ea580c",    // orange-600
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
