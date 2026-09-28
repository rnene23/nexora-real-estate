import Image from "next/image";
import { ArrowDown } from "lucide-react";
export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section id="home" className="hero">
      <Image
        src="/images/hero.jpg"
        alt="Modern glass residence with warm evening lights and landscaped gardens"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow">MODERN SPACES. BRIGHTER TOMORROWS.</p>
        <h1>
          Exceptional Properties.
          <br />
          <span>Stronger Futures.</span>
        </h1>
        <p className="hero-description">
          Discover premium homes and investment opportunities
          <br className="desktop-break" /> in some of the most sought-after
          locations.
        </p>
        {children}
        <div className="hero-bottom">
          <a href="#properties">
            <ArrowDown size={16} /> Discover your next chapter
          </a>
          <span>THOUGHTFULLY CURATED. EXCEPTIONALLY YOURS.</span>
        </div>
      </div>
    </section>
  );
}
