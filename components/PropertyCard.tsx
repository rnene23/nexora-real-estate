"use client";
import Image from "next/image";
import {
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Scan,
  ArrowUpRight,
} from "lucide-react";
import type { Property } from "@/data/properties";
export default function PropertyCard({
  property: p,
  favorite,
  onFavorite,
}: {
  property: Property;
  favorite: boolean;
  onFavorite: () => void;
}) {
  return (
    <article className="property-card">
      <div className="property-image">
        <a href={`/properties/${p.slug}`} aria-label={`View ${p.title}`}>
          <Image
            src={p.image}
            alt={p.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          />
        </a>
        <span className="property-tag">{p.tag}</span>
        <button
          className={`favorite ${favorite ? "saved" : ""}`}
          aria-label={`${favorite ? "Remove" : "Save"} ${p.title}${favorite ? " from" : " to"} favorites`}
          aria-pressed={favorite}
          onClick={onFavorite}
        >
          <Heart size={19} fill={favorite ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="property-body">
        <p className="property-type">
          {p.category === "Condos"
            ? "RESIDENTIAL · CONDOMINIUM"
            : "RESIDENTIAL · PRIVATE HOME"}
        </p>
        <h3>
          <a href={`/properties/${p.slug}`}>
            {p.title}
            <ArrowUpRight size={18} />
          </a>
        </h3>
        <p className="location">
          <MapPin size={14} />
          {p.location}
        </p>
        <p className="price">₱{p.price.toLocaleString("en-PH")}</p>
        <div className="property-meta">
          <span>
            <BedDouble /> {p.beds} Beds
          </span>
          <span>
            <Bath /> {p.baths} Baths
          </span>
          <span>
            <Scan /> {p.area} m²
          </span>
        </div>
      </div>
    </article>
  );
}
