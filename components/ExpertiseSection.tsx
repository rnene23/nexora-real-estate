import {
  House,
  KeyRound,
  ChartNoAxesCombined,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeader } from "./UI";
export default function ExpertiseSection() {
  return (
    <section id="expertise" className="container section expertise">
      <SectionHeader
        eyebrow="YOUR NEXT CHAPTER, OUR EXPERTISE"
        title="Expertise Across Every Move"
      />
      <div className="expertise-grid">
        {[
          {
            icon: House,
            title: "Buy",
            text: "Find a property that matches your lifestyle, priorities, and long-term goals.",
            cta: "Explore Homes",
            href: "#properties",
          },
          {
            icon: KeyRound,
            title: "Sell",
            text: "Position your property effectively with strategic pricing, presentation, and marketing.",
            cta: "Sell With Us",
            href: "mailto:hello@nexorarealestate.com?subject=Sell%20my%20property",
          },
          {
            icon: ChartNoAxesCombined,
            title: "Invest",
            text: "Discover high-potential property opportunities supported by local market insights.",
            cta: "Explore Investments",
            href: "#properties",
          },
        ].map(({ icon: Icon, ...item }, i) => (
          <article key={item.title}>
            <div className="expertise-label">
              <Icon size={29} strokeWidth={1.25} />
              <span>0{i + 1}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a className="text-link" href={item.href}>
              {item.cta}
              <ArrowUpRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
