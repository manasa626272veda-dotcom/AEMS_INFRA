# AEMS Infra — React website

The approved AEMS redesign is implemented in React 19 with reusable components, local Three.js viewers and GSAP motion. The original logo, product photos, copy, specification tables, clean URLs, `.html` URLs and trailing-slash routes are retained.

## Run locally

Install Node.js (validated with Node 24), then run:

```powershell
npm ci
npm run build
npm run dev
```

Open `http://127.0.0.1:4173`. After changing source files, run `npm run build` and refresh. The built output is `dist/`; edit the source rather than the compiled bundle.

## Project structure

- `src/main.jsx`: React root, navigation state, image dialog and shared page behavior.
- `src/components.jsx`: catalogue/search, enquiry form, product cards, photo components, solution tabs, equipment selectors and 3D lifecycle bridges.
- `src/pages.jsx`: the 26 approved page compositions as JSX, preserving original technical content.
- `src/layout.jsx`: shared original-logo header and footer.
- `src/data.json`: product/service data and original page image metadata.
- `src/lib/`: Three.js models, photo fitting, routing and motion. Viewers and observers are disposed on unmount.
- `public/`: local styles, fonts, original assets and archived source data.
- `scripts/build.mjs`: esbuild production bundle and static route generation. Build and hosting require no Python or application server.
- `research/original`: snapshots of the original website. Research extraction scripts are retained for provenance; they do not overwrite React compositions during a build.

React manages the interactive state. Three.js owns only the contents of dedicated viewer hosts. Original images with embedded white margins are fitted around the complete photographed equipment without changing their bytes. Models and generated concept images remain labelled illustrations.

## Tests

```powershell
npm --prefix qa install --no-audit --no-fund jsdom playwright @axe-core/playwright
node qa/node_modules/playwright/cli.js install chromium
npm test
npm run test:browser
npm run test:motion
```

`npm test` mounts the production React bundle and covers 78 page renderings, 4,431 internal links, 117 HTTP URLs, catalogue filtering/search, navigation, enquiry preparation, photo controls and WebGL fallback. Browser tests use an isolated localhost Chromium context. See `VALIDATION.md` for results and limits.

`python validate.py` is an optional source/asset audit. `analyze_photos.py` uses Pillow to regenerate image-margin metadata if original photos change; copy its JSON output into `public/photo-bounds.json` before rebuilding.

## Hosting and behavior

The existing private Sites identity remains in `.openai/hosting.json`. Publish the built `dist/` output through the supported Sites workflow. This separately hosted redesign does not change the original `aemsinfra.com` domain.

The enquiry form validates information and prepares an email link. Visitors review and send it in their own email app; there is no automatic submission service. 3D models are conceptual illustrations, and the retained technical specifications remain the source of engineering detail. Reduced-motion preferences are supported. Original low-resolution photos retain their source resolution.

Mobile/desktop navigation QA: `node test/mobile-priority.mjs`. The header component lives in `src/header.jsx`, shared SVG icons in `src/icons.jsx`, and the final responsive usability styles in `public/mobile.css`. The original Vercel configuration is preserved.

The fixed mobile contact bar is removed. Run `node test/menu-scroll.mjs` for the regression covering the menu after scrolling and the absence of a bottom bar/gap.

## Equipment inspection studio

The product viewers now support two-axis orbiting, touch pinch zoom, front/side/top/perspective cameras, component picking with descriptions, animated exploded assemblies, keyboard inspection and a full-screen view. Models add construction detail such as filters, framing, cabinet fronts, hardware, worktops, a recessed laboratory sink and fittings. Facility viewers support picking air treatment/distribution/utility systems. These remain illustrative models, not manufacturer CAD twins.

`src/lib/equipment-inspection.js` owns camera fitting, selection, touch interactions and viewer cleanup. GPU viewers initialize near the viewport and stationary paused views stop rendering until an interaction or resize requires an update. Reduced-motion preferences are supported.

Additional QA: `node test/button-contrast.mjs`, `node test/inspection-browser.mjs`, and `node test/facility-inspection.mjs`. Browser QA requires the existing dependencies under `qa/`.
