import { MarketingChrome } from "@/components/marketing-chrome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — READYPLAY",
  description: "End User License Agreement for the READYPLAY app.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-neutral-950">{title}</h2>
      <div className="mt-3 space-y-3 text-neutral-700">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <MarketingChrome>
      <main className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-950">
          Terms of Use
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          End User License Agreement &mdash; Last updated: April 16, 2026
        </p>
        <p className="mt-6 text-neutral-700">
          This End User License Agreement (&ldquo;Agreement&rdquo;) is a legal agreement between
          you (&ldquo;User&rdquo;) and Wonderzoo, Inc., a Florida corporation
          (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), for
          use of the READYPLAY mobile application (&ldquo;App&rdquo;). By downloading, installing,
          or using the App you agree to be bound by these terms. If you do not agree, do not
          download or use the App.
        </p>

        <Section title="1. License Grant">
          <p>
            Wonderzoo, Inc. grants you a limited, non-exclusive, non-transferable, revocable
            license to download and use the App on any Apple-branded device you own or control,
            solely for your personal, non-commercial recreational purposes, subject to the Apple
            Media Services Terms and Conditions.
          </p>
        </Section>

        <Section title="2. Restrictions">
          <p>You may not:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Copy, modify, or distribute the App or any portion of it</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Rent, lease, lend, sell, or sublicense the App to any third party</li>
            <li>Use the App for any unlawful purpose or in violation of applicable laws</li>
            <li>Use the App to harass, abuse, or harm other users</li>
            <li>
              Attempt to gain unauthorized access to any part of the App or its related systems
            </li>
          </ul>
        </Section>

        <Section title="3. Ownership">
          <p>
            The App and all content, features, and functionality within it — including text,
            graphics, logos, game data, and player statistics — are owned by Wonderzoo, Inc. and
            protected by United States and international intellectual property laws. This Agreement
            does not transfer any ownership rights to you.
          </p>
        </Section>

        <Section title="4. User Content">
          <p>
            You retain ownership of content you submit (player profiles, game records, reviews).
            By submitting content you grant Wonderzoo, Inc. a non-exclusive, royalty-free license
            to use, store, and display that content solely to operate the App and provide its
            features. You are solely responsible for content you submit and represent that you have
            the right to submit it.
          </p>
        </Section>

        <Section title="5. Privacy">
          <p>
            Your use of the App is governed by our{" "}
            <a href="/privacy/" className="text-brand underline">
              Privacy Policy
            </a>
            , incorporated here by reference. The App may collect location, health/fitness
            activity, and device data to provide its features. We do not sell your personal data.
          </p>
        </Section>

        <Section title="6. Health & Fitness Data">
          <p>
            The App may request access to Apple HealthKit to track physical activity during games.
            This data is used solely to provide fitness tracking features and is not shared with
            third parties without your explicit consent.
          </p>
        </Section>

        <Section title="7. Third-Party Services">
          <p>
            The App uses Apple services including CloudKit, Sign in with Apple, and Wallet. Your
            use of those services is subject to Apple&apos;s own terms. Wonderzoo, Inc. is not
            responsible for the availability or content of any third-party services.
          </p>
        </Section>

        <Section title="8. Beta Testing">
          <p>
            If you are using a beta or pre-release version distributed through Apple TestFlight,
            you acknowledge the software may contain bugs or incomplete features. Beta builds
            expire after 90 days and may stop functioning. You agree to provide feedback to
            Wonderzoo, Inc. during the beta period.
          </p>
        </Section>

        <Section title="9. Disclaimer of Warranties">
          <p className="uppercase text-sm">
            The app is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, express or implied, including warranties of merchantability,
            fitness for a particular purpose, or non-infringement. Wonderzoo, Inc. does not
            warrant that the app will be uninterrupted, error-free, or free of harmful components.
          </p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p className="uppercase text-sm">
            To the maximum extent permitted by law, Wonderzoo, Inc. shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your
            use of the app, even if advised of the possibility of such damages. Our total
            liability for any claims shall not exceed $100 USD.
          </p>
        </Section>

        <Section title="11. Indemnification">
          <p>
            You agree to indemnify and hold harmless Wonderzoo, Inc. and its officers, directors,
            employees, and agents from any claims, damages, losses, or expenses (including
            reasonable attorneys&apos; fees) arising from your use of the App or violation of
            this Agreement.
          </p>
        </Section>

        <Section title="12. Termination">
          <p>
            This Agreement is effective until terminated. Your rights terminate automatically if
            you fail to comply with its terms. Upon termination, cease all use and delete the App
            from your devices. Wonderzoo, Inc. may terminate or suspend your access at any time,
            with or without cause or notice.
          </p>
        </Section>

        <Section title="13. Governing Law">
          <p>
            This Agreement is governed by the laws of the State of Florida, without regard to
            conflict-of-law provisions. Disputes shall be resolved exclusively in state or federal
            courts located in Florida.
          </p>
        </Section>

        <Section title="14. Apple — Third-Party Beneficiary">
          <p>
            Apple is a third-party beneficiary of this Agreement and has the right to enforce it
            against you. Wonderzoo, Inc., not Apple, is solely responsible for the App and its
            content. Apple has no obligation to provide maintenance or support for the App.
          </p>
        </Section>

        <Section title="15. Changes to This Agreement">
          <p>
            We reserve the right to modify this Agreement at any time. We will notify users of
            material changes through the App or by email. Continued use after changes are posted
            constitutes acceptance of the revised Agreement.
          </p>
        </Section>

        <Section title="16. Contact">
          <p>
            Questions about this Agreement:{" "}
            <a href="mailto:hello@readyplay.app" className="text-brand underline">
              hello@readyplay.app
            </a>
          </p>
        </Section>
      </main>
    </MarketingChrome>
  );
}
