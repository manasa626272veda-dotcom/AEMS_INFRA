# AEMS Infra 3D redesign

Complete static website redesign based on https://aemsinfra.com/.

## Preview

Run `node serve.mjs`, then open http://127.0.0.1:4173.

## Site coverage

All 25 linked original HTML routes are retained. The new product catalogue adds `products.html`, with 14 searchable products in five categories. Includes About, Services, five service detail pages, 14 product detail pages, Clients, Affiliations and Contact.

Original page snapshots are in `research/original`. `content.json` contains the original body text and specification tables, excluding repeated navigation and footers. Original imagery is stored locally under `dist/assets/img` (65 images). `extract.py` regenerates that content from the snapshots. `prepare.py` regenerates the static route shells.

## Interaction

- Locally bundled Three.js facility with mouse rotation, airflow, exploded equipment, reset and pause controls.
- Responsive navigation, searchable product catalogue and category filters.
- Product-specific enquiry links, phone/email links, map link, printable technical pages.
- The enquiry form validates inputs and prepares an email link with the project details; visitors must review and send it in their own email app. There is no form submission service, inbox database or automatic email sending.
- Reduced-motion preferences are respected. WebGL failure uses an original clean room image as fallback.

## Content notes

The 3D facility is a conceptual illustration, not an exact digital twin of a client facility. Technical wording and dimensions from the original website have been retained; any original typographical errors need client engineering review. The source header phone number (040-48586464) is used; the original footer had a different visual spacing. Client and affiliation logos are preserved without inventing names or new endorsements. Existing third-party placeholders for social links were omitted.

The website runs without a build step or npm dependencies. Google Fonts is an optional external request with local system-font fallback. All essential JS and images are hosted locally.

This is a separately hosted redesign; the original aemsinfra.com deployment and domain have not been modified.
