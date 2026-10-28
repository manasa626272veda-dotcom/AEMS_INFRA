# AEMS React validation

Validated on 28 October 2026 against the production React build.

- React 19.3.1 and React DOM 19.3.1, bundled locally with esbuild. No CDN framework dependency or legacy page renderer.
- 26 React page compositions; all 25 original pages plus the product catalogue.
- All 12 functional tests pass. They mount the built React bundle across 78 page renderings and verify 4,431 internal links, existing images and fragment targets, original technical text, and six retained specification tables.
- 117 HTTP route variants and aliases pass, with useful 404 handling.
- Catalogue categories, controlled search/empty state, keyboard solution tabs, mobile navigation/Escape, enquiry selection/validation/email preparation, photo fitting/zoom/reset and full-size viewing pass.
- Chromium: 26 pages at 320, 360, 390, 430, 768, 1024, 1440 and 1920 pixels (208 layout checks). No page overflow, broken loaded images or JavaScript page errors.
- Axe: all 26 pages at 390 and 1440 pixels (52 scans), with zero reported color-contrast violations.
- Live Chromium interaction checks at 390 and 1440 pixels confirm controlled catalogue search/filtering, enquiry preselection and prepared email, plus all four equipment selector choices. Each switch leaves exactly one equipment canvas and reports no page errors.
- Motion checks at 390 and 1440 pixels cover normal/reduced-motion preferences, changing preferences during a transition, readable text, solution/photo transitions, FAQs, full-size modal/Escape and overflow.
- Viewer effects dispose render resources and resize/intersection observers on React unmount. Image dialogs and navigation are React state; third-party viewer DOM is isolated inside dedicated hosts.
- All 65 original PNGs retained unchanged, including the original logo. Logo SHA256: fc6ac846074a1b57239a0e4117b5f1d1b2c6ea984f70b3c0620892057b7df430.
- `npm audit --omit=dev`: zero vulnerabilities. Build uses Node.js only; Python is optional for research/asset audits.

Commands: `npm run build`, `npm test`, `node test/browser-audit.mjs`, `node test/motion-browser.mjs`, `node test/react-browser.mjs`, `python validate.py`.

Chromium evidence does not establish Safari/Firefox compatibility or real-device animation performance. The enquiry form prepares an email for the visitor to review/send; it does not automatically submit to a server. Concept models illustrate equipment types and retain their labels. Original low-resolution photographs remain limited by their source resolution. The original aemsinfra.com domain is unchanged.

## Mobile-first usability pass

- Replaced the crowded mobile product grid menu with a readable single-column drawer and four collapsible product categories. Catalogue access is first, and Contact us remains reachable while scrolling. Body scroll is locked while the menu is open; background content is inert, Tab stays inside navigation and Escape returns focus to the toggle.
- Fixed active/open navigation contrast and desktop CTA label contrast. Desktop uses a full-width two-column product dropdown and hides the mobile menu toggle.
- Original logo retained; menu, close, arrows, phone/contact, search, photo controls and 3D viewer controls use consistent locally rendered SVG icons.
- Mobile hero is content-sized, with legible type and full-width primary action. The fixed bottom contact bar has been removed; contact links remain in the normal header, page and footer flow.
- Improved input sizing, horizontally scrollable category chips/tabs, technical table cues, image/card spacing and 44-52px primary touch targets. Header and topbar now say Contact us.
- `node test/mobile-priority.mjs`: home/menu checks at 320x568, 390x844, 430x932, 768x1024, 1101x800 and 1440x900. Ten open-menu contrast scans (including expanded mobile categories) report zero violations. Navigation links are actionable, background inertness and Escape/focus restoration pass.
- All 12 functional tests, 208 page layout checks, 52 page contrast scans, 10 menu contrast scans, four motion scenarios and phone/desktop React workflow tests passed. No JavaScript page errors were reported.

## Contact bar removal and scrolled-menu regression

- Removed the fixed Call us / Contact us component, its visibility state and its reserved body padding. Repositioned Back to top above the normal safe area.
- Reproduced the mobile menu collapsing to 40px tall after scrolling: the scrolled header backdrop filter created a containing block for its fixed drawer. Removed the mobile backdrop filter and explicitly sized the drawer against the dynamic viewport. The 390x844 menu now fills 772px below the 72px header.
- Menu Contact us now stays in the normal navigation scroll flow; it does not cover category links. Focus changes use preventScroll, and opening the menu resets its own internal scroll position.
- Darkened secondary headings for clearer reading.
- Re-ran all 12 functional tests, 208 layout checks, 52 page contrast scans and ten menu contrast scans. The all-page audit additionally opens the menu after scrolling on every route at 390px and checks that no contact bar exists. Four targeted pointer tests at 320, 390, 430 and 768px verify viewport coverage, closing/Escape, inert background, zero bottom padding and preserved scroll position.

## Vector arrow upgrade

Replaced 42 remaining text-based action arrows with local SVG icons, preventing mobile platforms from rendering boxed arrow emoji. Service and product card arrows use consistent 44px tonal circles with borders, 21px vector arrows and restrained pointer hover feedback. Labelled links retain their accessible names. All 12 functional tests pass; `node test/arrows-browser.mjs` verifies service/product arrows at 390px and 1440px with no emoji, page errors or horizontal overflow.

## Readable buttons and interactive 3D inspection

- Fixed the article-link rule overriding CTA text color/underline. All button variants have explicit foreground/background roles, minimum 48px height and 15px text, including hover, focus and visited states.
- `test/button-contrast.mjs`: all 26 pages at 390px and 1440px, 600 visible button states tested across normal/hover/keyboard focus. Minimum measured foreground/background contrast is 8.11:1; no button labels are underlined or smaller than 14px (header CTA) / 15px (main buttons).
- Product models: added filter media, section framing, grouped control interfaces, laboratory drawers and handles, worktop opening/recessed sink and faucet, storage shelves and castors. Material names remain illustrative and avoid inventing manufacturer grades. Original photos and specifications are retained.
- All 14 product models render in actual Chromium WebGL without page errors. Live mobile/desktop checks on AHU and laboratory furniture compare rendered images for camera presets, exploded views and pinch zoom; mesh raycasting, keyboard part inspection, component descriptions, reset and expanding/collapsing the viewer are verified. Default camera framing accounts for all bounding-box corners, avoiding clipping.
- Facility models use a neutral studio environment and support direct system picking, informative airflow/layer controls and reset. Mobile and desktop checks pass, including live contrast checks. Fixed overlap between facility layer buttons and pause/reset controls.
- Deferred viewer initialization, paused-view redraw skipping, mobile pixel-ratio/shadow limits, and disposal of viewers/observers/context resources reduce unnecessary GPU work. No real-device frame-rate claim is made.
- Re-ran 12 functional tests, 208 responsive layout checks, 52 page contrast scans, live equipment/facility contrast checks, and normal/reduced-motion interaction scenarios. No page overflow or JavaScript page errors were found in the tested states.

Full-screen inspection also keeps its exit action available when switching to the original photo. A CSS full-screen fallback is tested in Chromium with the native API disabled, including Escape cleanup and removal of modal attributes; this is not a physical Safari-device claim. The final mobile controls use two rows so camera/inspection actions remain visible without a cropped horizontal toolbar.
