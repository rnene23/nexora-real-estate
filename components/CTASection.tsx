import { Button } from "./UI";
import EnquiryForm from "./EnquiryForm";
export default function CTASection() {
  return (
    <section id="contact" className="cta-section">
      <div className="container cta-inner">
        <p className="eyebrow">LET’S CONNECT</p>
        <h2>Ready to Find Your Next Home?</h2>
        <p>
          Our team is here to help you navigate every step
          <br className="desktop-break" /> of your real estate journey.
        </p>
        <div className="cta-buttons">
          <Button href="#properties" secondary>
            Browse Properties
          </Button>
        </div>
        <span className="contact-location">
          METRO MANILA, PHILIPPINES · A NEW PERSPECTIVE ON HOME
        </span>
        <EnquiryForm />
      </div>
    </section>
  );
}
