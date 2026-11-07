# Texas HVAC Repair — React + Vite website

A responsive, accessible starter replacement for the Texas HVAC Repair website. Built with React 18, Vite, Tailwind CSS, React Router, React Helmet Async, and lucide-react. The build prerenders every configured route to static HTML for crawlable content and route-specific metadata.

## Run locally

```bash
npm install
npm run dev
```

## Production build / prerender

```bash
npm run build
npm run preview
```

`npm run build` creates the browser bundle, builds the server renderer, then writes static HTML for the home page, all service pages, all listed city pages, and the remaining routes. Deploy the `dist/` directory to a static host with SPA fallback disabled where possible. Configure the host to serve each route's `index.html`.

## Form setup

The request form validates name, US phone, ZIP, service type, and optional email. It includes a honeypot, client-side throttle, optional unchecked SMS consent, and an explicit DEMO banner. Set `VITE_FORM_ENDPOINT` to a real HTTPS endpoint that accepts JSON POST requests to enable delivery. **NOT CONNECTED:** no form endpoint is included; demo submissions are not delivered. Add server-side validation, spam protection, privacy disclosures, and secure storage before production use.

## SEO and redirects

- Route-specific title, description, canonical, Open Graph metadata, and JSON-LD are emitted during prerender.
- HVACBusiness and FAQPage / Service / BreadcrumbList-ready schema structure is present. No aggregateRating is emitted because verified review data is not connected.
- `public/robots.txt` and `public/sitemap.xml` are starter files; regenerate the sitemap to include all city and service URLs before launch.
- Configure 301 redirects at the hosting/CDN layer. Suggested legacy paths: `/air-conditioning-services/` → `/services/ac-repair`; `/air-heating-services/` → `/services/heating-repair`; `/leak-repair-services/` → `/services/refrigerant-leak-repair`; `/emergency-services/` → `/services/emergency`; `/faqs/` → `/faq`; `/troubleshooting/` → `/troubleshooting`; `/service-areas/` → `/service-areas`; `/about/` → `/about`; `/contact/` → `/contact`; `/services/` → `/services`.
- The legacy `txheatingair.com` domain should be redirected at the registrar/CDN only after domain ownership and preferred canonical domain are confirmed. Do not point both domains at duplicate content.

## Image source table

All images currently used in the UI are generated SVG placeholders. They are not real company photography. The supplied legacy image URLs are listed below as source candidates; they have not been downloaded into this project. If the owner approves using any original asset, download it to `public/images/original/`, optimize to WebP, set explicit width/height, verify rights, and replace the placeholder. The source URLs supplied for review are:

| Suggested asset | Source |
|---|---|
| logo-main.png | https://txheatingair.com/wp-content/uploads/2021/09/Website_Logo-Alpha.png |
| icon-texas.png | https://txhvacrepair.com/wp-content/uploads/2021/09/cropped-Texas_Icon-Transparent-270x270.png |
| icon-mobile.png | https://txheatingair.com/wp-content/uploads/2021/09/Texas_Icon-Mobile.png |
| logo-alt.png | https://txheatingair.com/wp-content/uploads/2021/09/HVAC-Logo-Transparent-1.png |
| tech-stock.png | https://txhvacrepair.com/wp-content/uploads/2022/06/HVAC_Stock_Tech_for_Home_Page-removebg-preview.png |
| residential-ac.jpg | https://txhvacrepair.com/wp-content/uploads/2021/09/Texas-HVAC-Repair-Residential-AC.jpg |
| quality-service.jpg | https://txheatingair.com/wp-content/uploads/2021/09/Quality-Service.jpg |
| quality-parts.jpg | https://txheatingair.com/wp-content/uploads/2021/09/Quality-Parts.jpg |
| services-heating.jpg | https://txheatingair.com/wp-content/uploads/2021/09/Services-Heating.jpg |
| services-ac.jpg | https://txhvacrepair.com/wp-content/uploads/2021/09/Services-AC.jpg |
| services-leak-repair.jpg | https://txhvacrepair.com/wp-content/uploads/2021/09/Services-Leak-Repair.jpg |

Replace placeholders for: team photo, branded truck, finished install, commercial refrigeration job. The current hero and service art visibly carry a development-only replacement label in the layout. Placeholder SVGs are intentionally lightweight; no claim is made that they depict the actual business or its technicians.


## Preview vs. launch (important)

This repo is a **preview**: it is `noindex` and `robots.txt` disallows crawling, and canonical/og URLs use `VITE_SITE_URL` (default: the Vercel preview URL).

At launch, set these env vars in the host and replace `public/robots.txt`:

```
VITE_SITE_URL=https://<final-domain>
VITE_ALLOW_INDEXING=true
```

## Images

Run `npm run fetch-images` on a machine with internet access. It downloads the existing site's images into `public/images/original/`; the site already references them. Until then each image falls back to a placeholder SVG. Confirm with the owner that the stock-looking images can be reused, and replace them with real photos when available. Set `realPhotosApproved: true` in `src/config/business.js` once real team and job photos are added to the About page.

## Config flags changed in this revision

`primaryPhoneConfirmed` and `googleProfileConfirmed` are now `true` (phone is on the company's own site; the Google link is the business's Maps listing). All other claim flags remain `false`.

## NOT CONNECTED / owner checklist

- [ ] Confirm primary phone `(817) 260-0888`; site currently uses this single consistent number pending confirmation.
- [ ] Confirm whether the secondary call/text number should be published; it is hidden.
- [ ] Confirm street address and whether the business should remain a service-area business. Address is hidden.
- [ ] Confirm emergency hours/process. Until confirmed, UI says: “Emergency service available. Call to confirm availability.” No 24/7 claim is shown.
- [ ] Confirm 100% satisfaction guarantee and 15+ years claim; both are hidden.
- [ ] Supply business hours; do not infer them from third-party listings.
- [ ] Supply TDLR license number and insurance wording; not displayed.
- [ ] Confirm manufacturer authorizations and exact manufacturer names; not displayed.
- [ ] Supply Google Business Profile URL, review URL, and genuine rating/review data. `src/data/reviews.js` intentionally starts empty; no ratings, testimonials, or aggregateRating schema is fabricated.
- [ ] Supply owner-approved real photos, logo/vector files, and usage permissions. Existing site imagery remains pending approval.
- [ ] Supply current special (if any); announcement bar is omitted.
- [ ] Supply home-warranty policy and complaint-resolution process; their page sections remain owner-pending.
- [ ] Connect form endpoint using `VITE_FORM_ENDPOINT`; forms are DEMO only until connected.
- [ ] Connect analytics (GA4/GTM) with consent/privacy review. Analytics stub is **NOT CONNECTED**.
- [ ] Verify legal/privacy/terms text with counsel before launch.
- [ ] Confirm canonical domain and implement redirects from the old paths and legacy domain.
- [ ] Add actual review profile links and test all CTAs on mobile.

## Testing checklist

- [ ] Verify `tel:+18172600888` on iOS and Android.
- [ ] Confirm mobile sticky actions do not obscure content (safe-area padding is included).
- [ ] Test form valid/invalid states, throttling, honeypot, DEMO banner, and real endpoint after connection.
- [ ] Test every prerendered route and inspect its title, description, canonical, and JSON-LD.
- [ ] Confirm all `[CONFIRM]` flags remain false until owner approval; test both false and true states before enabling conditional claims.
- [ ] Run Lighthouse mobile and axe; target 90+ Lighthouse and WCAG 2.2 AA.
- [ ] Keyboard-only test navigation, dropdown, accordions, form, and focus visibility.
- [ ] Check responsive layouts at 360, 768, 1024, and 1440px; check links and image loading.

## Notes

This project is a production-oriented frontend starter, not a fully connected booking or CRM system. No response-time, price, availability, rating, certification, award, or license claim is invented. City pages have three distinct paragraphs each and are included in the prerender route list. Review all business facts with the owner before launch.
