# Local verification: redesign, 9 October 2026

Verified against the production build (`dist/`) served locally, using local Chrome via Playwright and Axe (`npm run verify`). This is local evidence only. It does not verify a deployed origin or live receipt of enquiries.

## Results

| Check | Result |
| --- | --- |
| `npm run check` | 0 errors, 0 warnings, 0 hints |
| `npm run build` | 11 static pages plus robots and sitemap |
| Responsive matrix | 88/88 passed: 11 pages × 320, 375, 390, 640, 768, 1024, 1440, 1920 px |
| Horizontal overflow / broken images | None |
| Axe (WCAG 2.0/2.1 A–AA + best practice) | 23 scans, 0 violations, including the open lightbox |
| Interaction assertions | 25 passed |
| Internal links and fragments | 27 unique destinations passed |
| Console / page errors | 0 |
| JavaScript disabled | Home, Swiss Tent and Contact content fully visible |
| Normal-motion homepage | Every reveal resolved; parallax active |
| Secret scan | API key not present in `dist/`, `src/`, `public/` or `scripts/` |

### Interactions covered

Mobile menu open/close and Escape; mobile dropdown navigation; desktop dropdown via keyboard and Escape; gallery filter (3 culture photos / 12 total); lightbox open, arrow keys, previous/next, Escape, focus return; photo-strip back/forward controls; sticky story keeps one active frame; invalid form blocked; phone validation; synthetic enquiry prepares the correct `wa.me/919116991219` message saying nothing has been sent; `?service=` preselects the experience; tel/mailto destinations match the business details.

## Local mobile Lighthouse (lab)

| Metric | Previous site | Redesign |
| --- | --- | --- |
| Performance | 72 | 83–84 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 66 | 66 (local build is intentionally `noindex`) |
| First Contentful Paint | — | 2.2 s |
| Largest Contentful Paint | 3.8 s | 4.3 s |
| Total Blocking Time | 630 ms | 0–20 ms |
| Cumulative Layout Shift | 0 | 0 |

The redesign measurement used Python's static server, which sends no compression (60 KB of CSS goes out raw, roughly 11 KB gzipped). LCP is the hero heading, held back by font and CSS transfer under simulated slow 4G. The critical fonts and the hero image are preloaded. Re-test on the production host with compression enabled.

Report: `output/playwright/lighthouse-mobile-redesign.report.html`.

## Artifacts

- `output/playwright/verification.json`: complete route, accessibility, link, motion and interaction results.
- `output/playwright/*-390.png`, `*-1440.png`: full-page screenshots from the verify run.
- `output/redesign/`: review screenshots for every page at 1440, 390 and 320 px.

## Not verified

- Deployment, DNS, HTTPS, host caching/compression and production 404 handling.
- Canonical URLs, sitemap submission and social previews on the real origin.
- Real call completion, email delivery, WhatsApp receipt or reservations.
- Prices, availability, exact address, timings and inclusions (not published; to be confirmed by the business).
- Browsers other than Chrome, assistive-technology testing and field Core Web Vitals.
