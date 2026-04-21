import { MarketingChrome } from "@/components/marketing-chrome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — READYPLAY",
  description: "How READYPLAY collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <MarketingChrome>
      <main className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-950">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-neutral-500">
          Last updated: April 2026
        </p>

        <div className="prose prose-neutral mt-12 max-w-none text-neutral-700">

          <h2>What we collect</h2>
          <p>
            READYPLAY collects only what is needed to run your games and build your reputation:
          </p>
          <ul>
            <li>
              <strong>Account identity</strong> — When you sign in with Apple, we receive a stable
              anonymous identifier and, if you choose, your name and email. We never see your Apple
              ID password.
            </li>
            <li>
              <strong>Game data</strong> — Scores, rosters, shot events, fouls, and post-game
              reviews you participate in or create.
            </li>
            <li>
              <strong>Location</strong> — Used for court discovery, weather context on the Home
              screen, and optional check-in confirmation when you are physically at a play site.
              Precise location is never stored on our servers without your explicit consent.
            </li>
            <li>
              <strong>Health &amp; fitness</strong> — The Apple Watch app can record an active
              workout to Apple Health while a game is live. This data stays on your device and in
              your iCloud Health store; READYPLAY does not transmit it externally.
            </li>
            <li>
              <strong>Contacts</strong> — Used only to help you add players to a game by name. We
              read contact names locally; we do not upload your address book.
            </li>
            <li>
              <strong>Analytics</strong> — Anonymized crash reports and feature-usage events (via
              PostHog, self-hosted) to improve the app. No ad-targeting data is collected.
            </li>
          </ul>

          <h2>How we use it</h2>
          <p>
            Your data is used to operate the platform: running games, building leaderboards,
            calculating your OVR rating, and delivering peer reviews. We do not sell your data,
            share it with advertisers, or use it to build targeting profiles.
          </p>
          <p>
            Game records are stored in iCloud (CloudKit) under your Apple ID. Public game data
            (scores, leaderboards) may be visible to other READYPLAY users who played in the same
            run or follow your profile.
          </p>

          <h2>iCloud and CloudKit</h2>
          <p>
            READYPLAY uses Apple&apos;s CloudKit infrastructure. Your private game history and
            profile are stored in your private iCloud container and are not accessible to other
            users. Spectator broadcasts and league discovery use CloudKit&apos;s public database;
            only the game score and invite code are shared, not personal details.
          </p>

          <h2>Verification</h2>
          <p>
            Optional identity verification (face photo review) is used solely to confirm you are a
            real person before hosting on-record games. Verification photos are reviewed by the
            READYPLAY team and are not shared with third parties or used for facial recognition.
          </p>
          <p>
            The Digital ID verification feature (iOS 26+) uses Apple&apos;s Identity Document
            Services to request a government-issued credential from your Apple Wallet. READYPLAY
            receives only the verification result (pass/fail), not a copy of your ID document.
          </p>

          <h2>Data retention</h2>
          <p>
            Your game history and profile data are retained for as long as your account is active.
            You may request deletion of your account and associated data by contacting us at the
            address below. Local device data can be removed by deleting the app.
          </p>

          <h2>Children</h2>
          <p>
            READYPLAY is not directed at children under 13. We do not knowingly collect personal
            information from users under 13. If you believe a child has provided personal
            information, contact us and we will delete it promptly.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We will update this page when the policy changes. The &ldquo;Last updated&rdquo; date
            at the top reflects the most recent revision. Continued use of the app after a change
            constitutes acceptance of the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy or requests to delete your data:{" "}
            <a href="mailto:hello@readyplay.app" className="text-brand underline">
              hello@readyplay.app
            </a>
          </p>
        </div>
      </main>
    </MarketingChrome>
  );
}
