"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar, { type Intent } from "@/components/SearchBar";
import TrustBar from "@/components/TrustBar";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
export default function Home() {
  const [intent, setIntent] = useState<Intent>("Buy");
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("nexora-favorites") || "[]",
      );
      if (Array.isArray(saved))
        setFavorites(saved.filter((x) => typeof x === "string"));
    } catch {}
  }, []);
  const toggleFavorite = (s: string) =>
    setFavorites((old) => {
      const next = old.includes(s) ? old.filter((x) => x !== s) : [...old, s];
      try {
        localStorage.setItem("nexora-favorites", JSON.stringify(next));
      } catch {}
      return next;
    });
  const reset = () => {
    setIntent("Buy");
    setCategory("All");
    setQuery("");
    setSearch("");
  };
  return (
    <>
      <a className="skip-link" href="#properties">
        Skip to properties
      </a>
      <Navbar />
      <main>
        <Hero>
          <SearchBar
            intent={intent}
            setIntent={setIntent}
            query={query}
            setQuery={setQuery}
            onSearch={() => {
              setSearch(query);
              document
                .getElementById("properties")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </Hero>
        <TrustBar />
        <FeaturedProperties
          category={category}
          setCategory={setCategory}
          query={search}
          intent={intent}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          reset={reset}
        />
        <AboutSection />
        <ExpertiseSection />
        <CTASection />
      </main>
      <Footer
        onIntent={(v) => {
          reset();
          setIntent(v);
        }}
      />
    </>
  );
}
