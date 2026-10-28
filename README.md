# AEMS Infra 3D redesign

## Customer showroom edition — Compress India reference

The current edition uses Compress India as a reference for image-led HVAC presentation, then builds the experience around AEMS's own services, equipment and content. It adds a cinematic architectural hero, large switchable service panels, a four-product equipment explorer, a facility cutaway studio, a two-column desktop/one-column mobile product gallery, original-image lightboxes, customer FAQs and persistent call/enquiry actions. On desktop, product imagery is approximately 420px tall, equipment stages reach 610–650px, and the hero fills a large viewport panel.

The live AHU model includes a steel frame, blower assembly, filter bank, copper coil detail and hardware. Air showers and pass boxes use glazed open shells. Materials use environment lighting, brushed-metal roughness, softer shadows and realistic neutral finishes. Models can rotate, zoom, pause, reset and switch to original photography. Equipment models are disposed when switching to prevent accumulating GPU resources.

Two new built-in-generated concept images are saved under `dist/assets/premium`. Exact prompts and asset paths are documented in `VISUAL_ASSETS.md`. Original AEMS images, company content, routes and technical specifications remain available.

The current functional suite has 11 passing tests, covering 78 page renderings, 4,428 internal link instances, 117 HTTP URLs, solution tabs and keyboard navigation, equipment switching, original-image lightboxes, filters, forms and mobile menus. Visual browser/GPU verification remains a separate limitation.

## Material 3 edition

The upgraded edition uses Material 3 color roles, tonal surface containers, shape tokens, pill buttons, filter chips, state layers, ripples, and responsive typography. The homepage features a larger lit 3D clean room with interactive system hotspots, airflow and exploded modes. Every equipment page includes a category-specific conceptual 3D model with drag and keyboard rotation, pause/reset controls, and an original-product photo toggle. Models are illustrative; original specifications remain available below each viewer.

Complete static website redesign based on https://aemsinfra.com/.

## Preview

Run `node serve.mjs`, then open http://127.0.0.1:4173.

## Route reliability and reference pass

All original pages work with `.html`, extensionless, and trailing-slash URLs. This fixes hosting clean-URL normalization such as `/hvacservices.html` becoming `/hvacservices`. A shared route resolver and generated directory entries keep both browser rendering and static hosting consistent. Root-relative assets and explicitly scoped fragment links support direct links and refreshes. All 14 products and Affiliations are available from the main navigation.

The reference pass uses GSAP 3.14.2 with ScrollTrigger for progressive entrance and scroll motion. Taste Skill informed the audit, hierarchy and content preservation; 21st and ThreeUI informed spotlight, spatial product interaction and shader concepts. Components and models are authored for AEMS; no paid component sources are included. The original 65 images and technical specification content remain local. Six service views now include the interactive facility, and airflow has a procedural shader layer.

References: https://www.tasteskill.dev/, https://gsap.com/, https://21st.dev/, https://threeui.com/.

## Validation

Run `python prepare.py` and `python validate.py`. For the functional suite, first run `npm --prefix qa install --no-audit --no-fund jsdom`, then `node --test test/site.test.mjs`.

The suite covers 78 DOM page renderings (26 pages in three URL forms), 4,335 internal link instances, all referenced image and fragment targets, 117 HTTP page URLs, aliases, proper 404s, catalogue filters/search, mobile navigation and Escape, product enquiry selection, contact validation and email preparation, and graceful WebGL fallback. It uses an isolated DOM test environment and does not claim a visual browser or GPU-rendering verification.

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
