"use client";
import { ArrowUpRight, SearchX } from "lucide-react";
import { SectionHeader } from "./UI";
import PropertyCard from "./PropertyCard";
import { properties } from "@/data/properties";
export default function FeaturedProperties({
  category,
  setCategory,
  query,
  intent,
  favorites,
  toggleFavorite,
  reset,
}: {
  category: string;
  setCategory: (v: string) => void;
  query: string;
  intent: string;
  favorites: string[];
  toggleFavorite: (v: string) => void;
  reset: () => void;
}) {
  const shown = properties.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.intents.includes(intent) &&
      `${p.title} ${p.location} ${p.category}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  return (
    <section id="properties" className="section container">
      <div className="section-top">
        <SectionHeader
          eyebrow="FEATURED LISTINGS"
          title="Premium Properties"
          description="A curated selection of exceptional homes in prime locations."
        />
        <button className="text-link" onClick={reset}>
          View All <ArrowUpRight size={18} />
        </button>
      </div>
      <div className="filter-row">
        <div className="filters" aria-label="Property category">
          {["All", "Houses", "Condos", "Land", "Commercial"].map((c) => (
            <button
              key={c}
              className={category === c ? "active" : ""}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <span className="result-count" aria-live="polite">
          {shown.length} {shown.length === 1 ? "property" : "properties"}
          {query ? ` for “${query}”` : ""}
        </span>
      </div>
      {shown.length ? (
        <div className="property-grid">
          {shown.map((p) => (
            <PropertyCard
              key={p.slug}
              property={p}
              favorite={favorites.includes(p.slug)}
              onFavorite={() => toggleFavorite(p.slug)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <SearchX size={30} />
          <h3>No matching properties just yet.</h3>
          <p>
            {intent === "Rent"
              ? "Rental listings are coming soon. Our team can help with your search."
              : "Try a different location or explore our full collection."}
          </p>
          <button className="button" onClick={reset}>
            View all properties
          </button>
        </div>
      )}
      <p className="collection-note">
        A glimpse of what’s possible. Sample listings shown for the Nexora
        concept.
      </p>
    </section>
  );
}
