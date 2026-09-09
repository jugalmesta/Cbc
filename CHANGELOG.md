# Changelog

All notable changes to the Classic Business Centre website will be documented in this file.

## [Unreleased / Current Update]

### Added
*   Proper `<meta name="viewport">` tag in `index.html` to enforce standard mobile scaling.
*   CSS Grid and Flexbox layouts for dynamic resizing across mobile, tablet, and desktop viewports.
*   `images/` directory mapping for a new visual machinery gallery (Xerox 1000, EX-i 180, CAD plotters, etc.).
*   Dedicated `js/` and `css/` folders to separate concerns and improve code readability.
*   New `branches.js` file to store and manage location data easily.
*   Service descriptions directly sourced from the official CBC brochure (e.g., Ammonia Blue Prints, Jumbo Lamination).

### Changed
*   Overhauled the WhatsApp API generation in `order-builder.js`. All Markdown (bolding, italics) was removed to ensure a basic, plain-text format that boasts 100% compatibility with the WhatsApp application across all devices.
*   Restructured the UI to flow in a single column on mobile devices before breaking into multi-column grids on larger screens.

### Fixed
*   Resolved the severe "zoomed-out" issue experienced by mobile users on the previous iteration of the site.
*   Fixed layout overflows that occurred when viewing the branch selection menu on smaller screens.
  
