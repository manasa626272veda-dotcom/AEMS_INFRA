# AEMS React validation

Validated on 28 October 2026 against the production React build.

- React 19.3.1 and React DOM 19.3.1, bundled locally with esbuild. No CDN framework dependency or legacy page renderer.
- 26 React page compositions; all 25 original pages plus the product catalogue.
- All 12 functional tests pass. They mount the built React bundle across 78 page renderings and verify 4,428 internal links, existing images and fragment targets, original technical text, and six retained specification tables.
- 117 HTTP route variants and aliases pass, with useful 404 handling.
- Catalogue categories, controlled search/empty state, keyboard solution tabs, mobile navigation/Escape, enquiry selection/validation/email preparation, photo fitting/zoom/reset and full-size viewing pass.
- Chromium: 26 pages at 320, 390, 768, 1024, 1440 and 1920 pixels (156 layout checks). No page overflow, broken loaded images or JavaScript page errors.
- Axe: all 26 pages at 390 and 1440 pixels (52 scans), with zero reported color-contrast violations.
- Live Chromium interaction checks at 390 and 1440 pixels confirm controlled catalogue search/filtering, enquiry preselection and prepared email, plus all four equipment selector choices. Each switch leaves exactly one equipment canvas and reports no page errors.
- Motion checks at 390 and 1440 pixels cover normal/reduced-motion preferences, changing preferences during a transition, readable text, solution/photo transitions, FAQs, full-size modal/Escape and overflow.
- Viewer effects dispose render resources and resize/intersection observers on React unmount. Image dialogs and navigation are React state; third-party viewer DOM is isolated inside dedicated hosts.
- All 65 original PNGs retained unchanged, including the original logo. Logo SHA256: fc6ac846074a1b57239a0e4117b5f1d1b2c6ea984f70b3c0620892057b7df430.
- `npm audit --omit=dev`: zero vulnerabilities. Build uses Node.js only; Python is optional for research/asset audits.

Commands: `npm run build`, `npm test`, `node test/browser-audit.mjs`, `node test/motion-browser.mjs`, `node test/react-browser.mjs`, `python validate.py`.

Chromium evidence does not establish Safari/Firefox compatibility or real-device animation performance. The enquiry form prepares an email for the visitor to review/send; it does not automatically submit to a server. Concept models illustrate equipment types and retain their labels. Original low-resolution photographs remain limited by their source resolution. The original aemsinfra.com domain is unchanged.
