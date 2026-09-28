"use client";
import { Search, MapPin } from "lucide-react";
export type Intent = "Buy" | "Rent" | "Invest";
export default function SearchBar({
  intent,
  setIntent,
  query,
  setQuery,
  onSearch,
}: {
  intent: Intent;
  setIntent: (v: Intent) => void;
  query: string;
  setQuery: (v: string) => void;
  onSearch: () => void;
}) {
  return (
    <div className="search-block">
      <div className="search-tabs" aria-label="Property purpose">
        {(["Buy", "Rent", "Invest"] as Intent[]).map((tab) => (
          <button
            key={tab}
            aria-pressed={intent === tab}
            className={intent === tab ? "active" : ""}
            onClick={() => setIntent(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <MapPin size={21} aria-hidden="true" />
        <label className="sr-only" htmlFor="property-search">
          Search location, property type, or keyword
        </label>
        <input
          id="property-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search location, property type, or keyword"
        />
        <button aria-label="Search properties" type="submit">
          <Search size={23} />
        </button>
      </form>
    </div>
  );
}
