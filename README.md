# Nexora Real Estate

A responsive Next.js App Router, React, TypeScript, Tailwind CSS and Lucide real-estate concept. No backend or authentication.

## Develop

Run `npm ci`, then `npm run dev`. Run `npm run build` to create the static production export in `out/`. Serve that directory with any static host. Sites identity is stored in `.openai/hosting.json`.

## Structure

- `app/page.tsx`: composes the page and coordinates property search, category and favorites state.
- `components/`: navigation, hero, reusable search/cards/buttons, listings, story, expertise, CTA and accessible footer information dialogs.
- `data/properties.ts`: typed sample property data. Add real inventory and update intent/category values here.
- `app/globals.css`: shared tokens, component styles and responsive rules, with Tailwind available for utilities.
- `image-loader.ts`: Next/Image loader selecting locally generated responsive WebP assets. Images are served without a runtime image server.
- `public/images/`: original source photos and 480/768/1080/1800px WebP variants. Regenerate variants if originals change.

Search matches titles, locations and categories. Rent, land and commercial currently have deliberate empty states. Favorites persist on the current device using localStorage with graceful handling when storage is disabled. Native dialog provides focus trapping, Escape dismissal and return focus. Reduced-motion preferences are respected.

Property links intentionally reserve `/properties/[slug]`; detail pages are not implemented as requested. Contact buttons use email/telephone links and do not submit messages. Footer informational and social buttons open honest concept notices instead of broken links.

Replace sample listings, company metrics, contact information, policy text and social destinations before commercial launch. Photographs are illustrative, not photos of the claimed Philippine listings.

## Photography

Unsplash images: Arthur Baudry (4vioYQ9Nn9Y), vu anh (TiVPTYCG_3E), Robbie Duncan (L61Ekz4oTt4), Shawn (A7Z5U6LyacA). Source URLs: https://unsplash.com/photos/4vioYQ9Nn9Y , https://unsplash.com/photos/TiVPTYCG_3E , https://unsplash.com/photos/L61Ekz4oTt4 , https://unsplash.com/photos/A7Z5U6LyacA . Verify image rights and factual listing associations before commercial use.

## Validation

Browser layout checked at 1440, 1280, 1024, 768, 390 and 375px: no horizontal overflow and equal property-card heights within each size. Checked mobile menu, category filters, saved favorites, search, empty states and dialog keyboard dismissal. Production build includes strict TypeScript validation. No Lighthouse score is claimed.

## Enquiry form (stage one)
The contact section now includes a responsive form for name, email, optional phone, enquiry type, optional property, message and consent. Browser validation checks required fields, email format and whitespace-only name/message inputs. The Check enquiry button validates only; no transport or persistence is connected. User input is held in the current page and is not saved or sent. The next stage should add a secure server-side submission handler, database storage and email delivery.

