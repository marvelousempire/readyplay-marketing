import { MarketingChrome } from "@/components/marketing-chrome";
import { Cta } from "@/components/sections/cta";
import { FeatureHighlights } from "@/components/sections/feature-highlights";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { IdentityRecord } from "@/components/sections/identity-record";
import { PlatformHorizon } from "@/components/sections/platform-horizon";
import { PlatformParts } from "@/components/sections/platform-parts";
import { Problem } from "@/components/sections/problem";
import { Screenshots } from "@/components/sections/screenshots";
import { Solution } from "@/components/sections/solution";
import { SportsStrip } from "@/components/sections/sports-strip";

export default function HomePage() {
  return (
    <MarketingChrome>
      <Hero />
      <SportsStrip />
      <Problem />
      <Solution />
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
