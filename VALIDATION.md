# AEMS route and interaction audit

Validated on 28 October 2026.

## Fixed

- Hosting removes `.html` from page URLs. The original app compared the pathname directly against `.html` filenames and rendered a 404. The shared resolver now accepts both forms and directory slashes.
- Relative assets failed on directory URLs. All generated shells use a root base, with content fetched from `/content.json`.
- Root-based shells caused fragment-only links to target the homepage. Fragment links are now bound to the current path and query.
- Escape closed the mobile navigation without restoring the button icon and label. All menu state now updates together.
- Devices without WebGL showed controls that could not operate. These now show original product/facility imagery and explicitly disable unavailable 3D controls.

## Coverage

- Original homepage navigation recrawled: 25 linked pages, all retained.
- Product catalogue: 14 products, all exposed in the main product menu.
- 26 pages × 3 route forms = 78 DOM renderings.
- 4,428 internal link instances checked; image and fragment targets exist.
- 117 HTTP page URLs checked, plus scripts, styles, data and 404 responses.
- 12 functional tests pass with no failures, including solution tabs, keyboard navigation, equipment selection and full-size image viewing.
- 65 original PNGs validated and six original specification tables retained.
- Two high-resolution concept assets added, with original photos retained and visible concept labels.

## Responsive and visual verification

- Isolated Chromium: all 26 pages checked at 320, 390, 768, 1024, 1440 and 1920 pixels (156 checks). No horizontal page overflow, broken loaded images or JavaScript page errors.
- Axe color-contrast scans: every page at 390 and 1440 pixels (52 scans), with zero reported contrast violations after corrections.
- Actual WebGL canvases rendered at 390 and 1440 pixels. Photo/model switching, zoom, reset, full-size modal, Escape and mobile navigation passed in Chromium.
- Product photo screenshots visually inspected at phone and desktop sizes. Lab photograph content is 464px high in the desktop viewer, compared with approximately 186px in the supplied screenshot.
- Original AEMS logo SHA256 matches the original website download: fc6ac846074a1b57239a0e4117b5f1d1b2c6ea984f70b3c0620892057b7df430.
- No original PNG files were modified. Empty embedded photo margins are measured and excluded from fitting; the complete product remains visible. Fonts are local.

## Limits

Chromium checks do not establish Safari/Firefox compatibility or real-device animation performance. Original low-resolution photographs remain limited by their original resolution. The enquiry form prepares an email in the visitor's mail app; it does not send automatically. Concept models illustrate equipment types and do not replace engineering specifications.

## Animation refinement

Added transform-only GSAP section and card entrances, a restrained hero image entrance, process line progression, pointer hover feedback, native accordion height transitions, and cancellable product/photo/modal transitions. Text remains at full opacity. No animations alter original photo fitting.

`node test/motion-browser.mjs` checks the homepage and laboratory product page in isolated Chromium at 390px and 1440px with both normal and reduced-motion preferences, including switching reduced motion while a transition is active. The 12 functional tests remain passing.

The live animation pass also caught and fixed a startup timing error: the first requestAnimationFrame timestamp can precede setup completion. Both 3D render loops clamp elapsed frame time to zero, preventing a negative airflow-curve position. Browser QA asserts there are no page errors.
