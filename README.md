# Pushkar Desert Safari

A static, multi-page hospitality website for a desert safari, camp stay and Swiss tent business in Pushkar, Rajasthan. Built with Astro, TypeScript and plain CSS. No database, booking engine or application backend.

## Run locally

```sh
npm ci
npm run dev          # development
npm run check        # Astro + TypeScript diagnostics
npm run build        # static output in dist/
npm run preview      # serve dist/
```

## Pages

| Page | URL | Hero |
| --- | --- | --- |
| Home | `/` | Full-bleed golden-hour dunes + layered real camp photos |
| About Us | `/about-us/` | Real guest photo |
| Experiences | `/experiences/` | Aravalli sunrise |
| Desert Safari | `/desert-safari/` | Dune tracks + real safari inset |
| Camp Stay | `/camp-stay/` (incl. `#poolside`) | Real tent bedroom |
| Swiss Tent | `/swiss-tent/` | Split layout, real tent interior |
| Cultural Experiences | `/cultural-experiences/` | Firelit still life + real performer inset |
| Gallery | `/gallery/` | Filterable masonry + lightbox |
| Contact & Booking Enquiries | `/contact-us/` | Contact methods + WhatsApp enquiry form |
| Privacy & Enquiry Information | `/privacy-policy/` | — |
| Custom error page | `/404.html` | — |

## Design system

All styling lives in `src/styles/`, split by responsibility:

| File | Contents |
| --- | --- |
| `tokens.css` | Colours (evolved from the logo: sunset amber, burnished gold, cocoa, the existing maroon), type scale, widths, radii, shadows, motion |
| `base.css` | Reset, typography, layout primitives, reveal system, reduced-motion rules |
| `components.css` | Buttons, header/nav, footer, contact dock, cards, gallery, lightbox, FAQ, forms |
| `sections.css` | Home sections, inner-page heroes, split features |
| `pages.css` | Gallery, contact, privacy and 404 specifics |

- **Type:** Cormorant Garamond (display, with italic accents) + DM Sans (body), self-hosted; critical files preloaded.
- **Layout:** wide content (`--wrap`, max 1560px, ~90% width) for visual sections, `--wrap-narrow` for reading.
- **Signature motif:** the arch (Rajasthani jharokha) frame used on hero cards, split features and the contact page.
- **Buttons:** pill with a directional fill and moving icon chip. No shine, glow or shimmer effects.
- **Motion:** first-paint hero entrance, scroll reveals (fade/scale/mask), restrained parallax, sticky "A day at the camp" storytelling, CSS marquee, horizontal photo strips, card zoom/lift. All transform/opacity based; `prefers-reduced-motion` disables nonessential motion. Content stays visible without JavaScript.

## Conversion paths

- Header: phone number + "Book Now" on every page; floating WhatsApp button (desktop); fixed Call / WhatsApp / Enquire dock (mobile).
- Every service page ends with cross-sell cards, FAQ and a booking band.
- Service CTAs link to `/contact-us/?service=…`, which preselects the experience in the enquiry form.

Business details are centralised in `src/data/site.ts`:

- Phone: +91 9116991219
- Email: info@pushkardesertcamp.com
- Location: Pushkar, Rajasthan, India

The form validates visitor details and prepares a prefilled WhatsApp message for the visitor to review and send. It does not submit to a database, send email or confirm a reservation.

## Imagery

Client photographs are used for everything that shows the property, guests and performers. Eight AI-generated images provide atmosphere only (landscapes, still life, a textile texture) and never depict the camp itself. See `ASSETS.md` for the full inventory and placements.

### AI image generation (build-time, server-side)

```sh
npm run images:plan   # show model / quality / size routing for every asset
npm run images        # generate missing assets (needs OPENAI_API_KEY in .env)
node scripts/generate-images.mjs --only=ai-hero-dunes --force
node scripts/generate-images.mjs --premium=ai-safari-dunes   # escalate one asset to Sunburst
```

- `scripts/image-gen/config.mjs`: model names, default/premium quality, sizes and output widths. Every value can be overridden by an env var (see `.env.example`).
- `scripts/image-gen/router.mjs`: automatic routing. Hero or complex/photorealistic/architecture/interior assets use **gpt-image-2.5-sunburst**; everything else uses **gpt-image-2.5-flare**. Hero and "important" assets get high quality; routine assets get medium.
- `scripts/image-gen/manifest.mjs`: each asset's prompt, orientation, priority, placement and alt text.
- Raw sources are saved in `assets-src/generated/`. Responsive WebP derivatives (768/1280/1600) are written to `public/images/`.

The API key is read only from `OPENAI_API_KEY` (shell or the git-ignored `.env`). It is never bundled, sent from the browser or written to output. Generation is not part of `npm run build`.

## SEO and publishing

Set the confirmed public origin before publishing:

1. Copy `.env.example` to `.env` and set `PUBLIC_SITE_URL` to the HTTPS origin.
2. Run `npm run check` and `npm run build`.
3. Publish `dist/` to a static host with clean-route and 404 handling and gzip/brotli compression.
4. Verify routes, canonical/share URLs, sitemap and robots output, then test phone, email and WhatsApp on a real device.

Local builds deliberately emit `noindex, nofollow` and disallow crawlers until the origin is configured.

The site does not invent an exact address, prices, operating hours, reviews, history, statistics, pickup arrangements, certifications or performance schedules. These need confirmation from the business.

## Verification

With a preview of `dist/` running:

```sh
QA_URL=http://127.0.0.1:4321 npm run verify
```

See `QA.md` for the latest measured results.
