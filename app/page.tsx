import { MarketingChrome } from "@/components/marketing-chrome";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { Cta } from "@/components/sections/cta";
import { DeviceShowcase } from "@/components/sections/device-showcase";
import { EarnSection } from "@/components/sections/earn-section";
import { LeagueSection } from "@/components/sections/league-section";
import { OnDemandSection } from "@/components/sections/on-demand-section";
import { FeatureHighlights } from "@/components/sections/feature-highlights";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { IdentityRecord } from "@/components/sections/identity-record";
import { LeaderboardsSection } from "@/components/sections/leaderboards-section";
import { MiniGamesSection } from "@/components/sections/mini-games-section";
import { PlatformHorizon } from "@/components/sections/platform-horizon";
import { PlatformParts } from "@/components/sections/platform-parts";
import { Problem } from "@/components/sections/problem";
import { ProfileSection } from "@/components/sections/profile-section";
import { QrScannerSection } from "@/components/sections/qr-scanner-section";
import { Screenshots } from "@/components/sections/screenshots";
import { Solution } from "@/components/sections/solution";
import { SpectatorSection } from "@/components/sections/spectator-section";
import { SportDeepDives } from "@/components/sections/sport-deep-dives";
import { SportsStrip } from "@/components/sections/sports-strip";
import { TestFlightSection } from "@/components/sections/testflight-section";
import { WaitlistCta } from "@/components/sections/waitlist-cta";
import { WatchSection } from "@/components/sections/watch-section";
import { WinPredictorSection } from "@/components/sections/win-predictor-section";
import { FaqSection } from "@/components/sections/faq-section";
import { OurStory } from "@/components/sections/our-story";
import { RunScenario } from "@/components/sections/run-scenario";
import { SocialProof } from "@/components/sections/social-proof";

export default function HomePage() {
  return (
    <MarketingChrome>
      <Hero />
      <SportsStrip />
      <Problem />
      <Solution />
      <FeatureHighlights />
      <LeaderboardsSection />
      <AchievementsSection />
      <ProfileSection />
      <WatchSection />
      <DeviceShowcase />
      <HowItWorks />
      <RunScenario />
      <MiniGamesSection />
      <SpectatorSection />
      <WinPredictorSection />
      <QrScannerSection />
      <SocialProof />
      <TestFlightSection />
      <WaitlistCta id="mid-cta" />
      <SportDeepDives />
      <OnDemandSection />
      <LeagueSection />
      <EarnSection />
      <PlatformParts />
      <IdentityRecord />
      <Screenshots />
      <OurStory />
      <FaqSection />
      <Cta />
      <PlatformHorizon />
    </MarketingChrome>
  );
}
