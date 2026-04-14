import { MarketingChrome } from "@/components/marketing-chrome";
import { Cta } from "@/components/sections/cta";
import { FeatureHighlights } from "@/components/sections/feature-highlights";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Problem } from "@/components/sections/problem";
import { Screenshots } from "@/components/sections/screenshots";
import { Solution } from "@/components/sections/solution";

export default function HomePage() {
  return (
    <MarketingChrome>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <FeatureHighlights />
      <Screenshots />
      <Cta />
    </MarketingChrome>
  );
}
