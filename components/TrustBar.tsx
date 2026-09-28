import { House, UsersRound, ChartNoAxesCombined } from "lucide-react";
import { FeatureItem } from "./UI";
export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="The Nexora difference">
      <div className="container trust-grid">
        <FeatureItem
          icon={House}
          title="Premium Listings"
          description="Curated, high-quality properties"
        />
        <FeatureItem
          icon={UsersRound}
          title="Trusted Experts"
          description="Guidance from local professionals"
        />
        <FeatureItem
          icon={ChartNoAxesCombined}
          title="Smart Investments"
          description="Opportunities for long-term value"
        />
      </div>
    </section>
  );
}
