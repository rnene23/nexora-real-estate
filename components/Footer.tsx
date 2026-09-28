"use client";
import { useEffect, useRef, useState } from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  X,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { Logo } from "./UI";
const info: Record<string, { title: string; body: string }> = {
  Agents: {
    title: "Personal guidance, from the first conversation.",
    body: "Tell us where you want to live, your budget, and your priorities. Contact hello@nexorarealestate.com to discuss your property journey. Nexora is a fictional brand concept; agent profiles will be added before a commercial launch.",
  },
  Careers: {
    title: "Build a brighter future with us.",
    body: "Career opportunities will be announced here. This concept site is not currently accepting applications.",
  },
  "Property Guide": {
    title: "A considered approach to buying.",
    body: "Start with your location, lifestyle needs, and total budget. Compare properties, arrange viewings, and ask qualified local professionals to review ownership documents, financing, and transaction costs before making a commitment.",
  },
  "Market Insights": {
    title: "Local perspective. Informed decisions.",
    body: "Our future market journal will explore neighborhoods, property trends, and investment considerations across the Philippines. Research articles are coming soon.",
  },
  FAQs: {
    title: "A few helpful answers.",
    body: "Are these properties available? These are illustrative listings for a fictional brand. Can I save a property? Yes, tap the heart; your favorites are saved on this device. How do I get in touch? The contact buttons open your email app. Rental, land, and commercial collections will be added later.",
  },
  "Privacy Policy": {
    title: "Your privacy",
    body: "This demonstration site has no account system or analytics. The enquiry form is a preview only: entered details remain in the current page and are not sent or saved. Favorite properties are stored locally in your browser. Search terms stay in the page and are not submitted to a server. Email links open your own email provider. Hosting may process technical request data. Replace this notice with an approved policy before commercial launch.",
  },
  Terms: {
    title: "Website terms",
    body: "Nexora Real Estate is a fictional brand concept. Property descriptions, prices, contact details, and company statistics are illustrative, not offers or verified business claims. Photography illustrates the design and does not depict the stated listings. Property detail routes are reserved for future development.",
  },
  Social: {
    title: "Stay connected",
    body: "Nexora’s social profiles will be linked here when the brand launches. This concept has no active social accounts.",
  },
};
export default function Footer({
  onIntent,
}: {
  onIntent: (v: "Buy" | "Rent" | "Invest") => void;
}) {
  const [active, setActive] = useState<string | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (active) dialog.current?.showModal();
    else dialog.current?.close();
  }, [active]);
  const open = (key: string) => setActive(key);
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Premium properties. Trusted guidance.
            <br />
            Smarter real estate decisions.
          </p>
          <div className="socials">
            {[
              [Instagram, "Instagram"],
              [Facebook, "Facebook"],
              [Linkedin, "LinkedIn"],
            ].map(([Icon, label]) => {
              const SocialIcon = Icon as typeof Instagram;
              return (
                <button
                  key={String(label)}
                  aria-label={String(label)}
                  onClick={() => open("Social")}
                >
                  <SocialIcon size={17} />
                </button>
              );
            })}
          </div>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#properties">Properties</a>
          {(["Buy", "Rent", "Invest"] as const).map((x) => (
            <a key={x} href="#properties" onClick={() => onIntent(x)}>
              {x}
            </a>
          ))}
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <a href="#about">About</a>
          {["Agents", "Careers"].map((x) => (
            <button key={x} onClick={() => open(x)}>
              {x}
            </button>
          ))}
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          {["Property Guide", "Market Insights", "FAQs", "Privacy Policy"].map(
            (x) => (
              <button key={x} onClick={() => open(x)}>
                {x}
              </button>
            ),
          )}
        </div>
        <div className="footer-column footer-contact">
          <h3>Get in touch</h3>
          <span>
            <MapPin />
            Metro Manila, Philippines
          </span>
          <a href="mailto:hello@nexorarealestate.com">
            <Mail />
            hello@nexorarealestate.com
          </a>
          <a href="tel:+63281234567">
            <Phone />
            +63 2 8123 4567
          </a>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <span>© 2026 Nexora Real Estate. All rights reserved.</span>
          <div>
            <button onClick={() => open("Privacy Policy")}>
              Privacy Policy
            </button>
            <button onClick={() => open("Terms")}>Terms</button>
          </div>
        </div>
      </div>
      <dialog
        ref={dialog}
        onCancel={() => setActive(null)}
        onClick={(e) => {
          if (e.target === dialog.current) setActive(null);
        }}
        aria-labelledby="info-title"
      >
        <button
          className="dialog-close"
          aria-label="Close information"
          onClick={() => setActive(null)}
        >
          <X />
        </button>
        {active && (
          <>
            <p className="eyebrow">NEXORA REAL ESTATE</p>
            <h2 id="info-title">{info[active].title}</h2>
            <p>{info[active].body}</p>
          </>
        )}
      </dialog>
    </footer>
  );
}

