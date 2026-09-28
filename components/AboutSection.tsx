import Image from "next/image";
import { Button, StatItem } from "./UI";
export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">MORE THAN PROPERTIES</p>
          <h2>
            We Build
            <br />
            <span>Better Lives.</span>
          </h2>
          <p>
            Nexora Real Estate connects people to extraordinary spaces —
            creating value, community, and opportunity for a brighter tomorrow.
          </p>
          <p>
            From a first home to a lasting investment, we bring local
            perspective and personal attention to every move.
          </p>
          <Button href="#expertise" secondary>
            Learn More
          </Button>
        </div>
        <div className="about-visual">
          <div className="about-image">
            <Image
              src="/images/condo.jpg"
              alt="Refined residence with natural light, warm timber floors and considered furnishings"
              fill
              sizes="(max-width: 767px) 100vw, 55vw"
            />
            <span className="image-caption">SPACES TO LIVE. ROOM TO GROW.</span>
          </div>
          <div className="stats-grid">
            <StatItem value="1,200+" label="Properties Sold" />
            <StatItem value="500+" label="Happy Clients" />
            <StatItem value="15+" label="Years of Experience" />
            <StatItem value="98%" label="Client Satisfaction" />
          </div>
          <p className="stats-note">
            Illustrative brand figures for this concept.
          </p>
        </div>
      </div>
    </section>
  );
}
