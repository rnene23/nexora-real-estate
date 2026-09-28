import { ArrowUpRight, type LucideIcon } from "lucide-react";
export function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Nexora Real Estate home">
      <svg viewBox="0 0 40 44" aria-hidden="true">
        <path d="M5 38V6h7l16 27V6h7v32h-7L12 11v27M5 6l30 32" />
      </svg>
      <span>
        NEXORA<small>REAL ESTATE</small>
      </span>
    </a>
  );
}
export function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <a className={`button ${secondary ? "secondary" : ""}`} href={href}>
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
export function FeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="feature">
      <Icon size={28} strokeWidth={1.3} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
export function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
