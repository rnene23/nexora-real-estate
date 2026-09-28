import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const title = "Nexora Real Estate | Premium Homes & Property Investments";
const description =
  "Discover premium homes, condominiums, villas, and investment properties with Nexora Real Estate.";
export const metadata: Metadata = {
  metadataBase: new URL("https://nexora-real-estate.randy23nene.chatgpt.site"),
  alternates: { canonical: "/" },
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_PH",
    siteName: "Nexora Real Estate",
    url: "/",
  },
  twitter: { card: "summary", title, description },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}

