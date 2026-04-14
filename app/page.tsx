import { MarketingChrome } from "@/components/marketing-chrome";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { Cta } from "@/components/sections/cta";
import { EarnSection } from "@/components/sections/earn-section";
import { FeatureHighlights } from "@/components/sections/feature-highlights";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { IdentityRecord } from "@/components/sections/identity-record";
import { LeaderboardsSection } from "@/components/sections/leaderboards-section";
import { PlatformHorizon } from "@/components/sections/platform-horizon";
import { PlatformParts } from "@/components/sections/platform-parts";
import { Problem } from "@/components/sections/problem";
import { Screenshots } from "@/components/sections/screenshots";
import { Solution } from "@/components/sections/solution";
import { SportDeepDives } from "@/components/sections/sport-deep-dives";
import { SportsStrip } from "@/components/sections/sports-strip";

export default function HomePage() {
  return (
    <MarketingChrome>
      <Hero />
      <SportsStrip />
      <SportDeepDives />
      <Problem />
      <Solution />
      <LeaderboardsSection />
      <AchievementsSection />
      <EarnSection />
      <HowItWorks />
      <PlatformParts />
      <FeatureHighlights />
      <IdentityRecord />
      <PlatformHorizon />
      <Screenshots />
      <Cta />
    </MarketingChrome>
  );
}
