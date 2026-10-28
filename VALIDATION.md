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
- 11 functional tests pass with no failures, including solution tabs, keyboard navigation, equipment selection and full-size image viewing.
- 65 original PNGs validated and six original specification tables retained.
- Two high-resolution concept assets added, with original photos retained and visible concept labels.

## Verification limit

DOM and HTTP tests do not verify final visual composition, GPU output or animation smoothness. In this pass the available project browser window closed before visual inspection; the local preview was opened for user review. No browser security controls were bypassed.
