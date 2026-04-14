/**
 * Short marketing strings aligned with BrandCopy.swift (paraphrase, not a full mirror).
 */

export const brand = {
  fullName: "READYPLAY",
  pitchCore:
    "A peer-managed sports platform that brings structure, accountability, and real reputation to recreational competition—starting with basketball and expanding across the sports you already play.",
  pitchTrust:
    "Every result is verified by the people who competed. Your performance record is built by the community around you—not an algorithm.",
  pitchVision:
    "Basketball shipped first because it demands the most from a platform. Proving the model there means every other sport is an informed expansion on the same rails.",
  pitchMarketplace:
    "The long-term marketplace is on-demand play: find or invite someone for a run, agree on the spot, and keep money in the app when paid flows ship. Pickup stays free by default; paid fill-in roles are earned through trust and history.",
  pitchNFTBridge:
    "Your games, reviews, roles, and marketplace reputation attach to one stable player identity—the same identity that carries cryptographic game fingerprints today and optional on-chain anchoring tomorrow.",
  pitchExercise:
    "Real games at real parks, with structure and gamification—runs, streaks, leaderboards, and social proof—so moving your body feels like play.",
  proofFingerprint:
    "Every finished run can carry a SHA-256 fingerprint of the final lineups and score—your tamper-evident receipt before blockchains enter the story.",
  scorekeeperSacred:
    "Neutral scorekeeping is the spine of the platform. Someone keeps an honest book, everyone competes harder because the record is real—and that role deserves recognition.",
  creditsEconomy:
    "Earn credits for roles like scorekeeping—real in-app points with StoreKit bundles on deck when you want more.",
  parks:
    "Games attach to actual parks and courts—Play Sites keep the run anchored to a real pin, not a vague thread.",
  sitesScreenTitle: "Play Sites",
} as const;

export function assetPath(relative: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!relative.startsWith("/")) return `${base}/${relative}`;
  return `${base}${relative}`;
}
