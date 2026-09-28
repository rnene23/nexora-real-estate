export type Property = {
  slug: string;
  title: string;
  category: "Houses" | "Condos" | "Land" | "Commercial";
  price: number;
  location: string;
  beds: number;
  baths: number;
  area: number;
  image: string;
  alt: string;
  tag: string;
  intents: string[];
};
export const properties: Property[] = [
  {
    slug: "luxury-modern-house",
    title: "Luxury Modern House",
    category: "Houses",
    price: 28000000,
    location: "Ayala Alabang, Muntinlupa",
    beds: 4,
    baths: 4,
    area: 320,
    image: "/images/house.jpg",
    alt: "Warmly lit contemporary home with a pitched roof and landscaped garden",
    tag: "EXCLUSIVE",
    intents: ["Buy", "Invest"],
  },
  {
    slug: "skyline-condominium",
    title: "Skyline Condominium",
    category: "Condos",
    price: 14500000,
    location: "Bonifacio Global City, Taguig",
    beds: 3,
    baths: 2,
    area: 120,
    image: "/images/condo.jpg",
    alt: "Elegant modern condominium living space",
    tag: "PRIME LOCATION",
    intents: ["Buy", "Invest"],
  },
  {
    slug: "beachfront-villa",
    title: "Beachfront Villa",
    category: "Houses",
    price: 45000000,
    location: "Lapu-Lapu, Cebu",
    beds: 5,
    baths: 5,
    area: 500,
    image: "/images/villa.jpg",
    alt: "Tropical villa surrounding a private swimming pool",
    tag: "LUXURY COLLECTION",
    intents: ["Buy", "Invest"],
  },
];
