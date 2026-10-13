# Woodsy Altura — Website Mockup

Premium responsive website mockup based on the supplied design document and four reference creatives.

## Run locally
Open `index.html` in a browser, or use a local static server:
- Python: `python -m http.server 8000`
- Then visit `http://localhost:8000`

## Included
- Responsive single-page mockup
- Modular kitchen, commercial kitchen and turnkey solution sections
- Approach/features, gallery, process and indicative starting price
- Enquiry form prototype (opens a prefilled email; does not persist submissions)
- Mobile navigation and WhatsApp CTA
- Supplied reference images in `assets/`

## Before production
- Replace campaign/poster references with approved original project photos and a clean logo asset.
- Confirm canonical phone number, address, offer validity, price inclusions/exclusions and service area.
- Connect the form to a secure backend/CRM with server-side validation, spam protection, persistent storage and admin notifications.
- Verify Instagram Reels content; it was not assumed in this mockup.
- Configure domain, hosting, analytics/privacy disclosures, SEO metadata and accessibility/performance QA.

## Important
This is a front-end mockup, not a production lead-management system. The form uses `mailto:` and has no database or server-side processing.


## ## UI refinement pass
- Replaced the accumulated stylesheet overrides with one consolidated responsive stylesheet.
- Increased desktop typography and standardised fluid type, line-height, spacing and button sizes.
- Reworked solution cards to equal heights per grid row with consistent image treatment and aligned card content.
- Replaced campaign-poster image usage in the live layout with compressed WebP crops from the supplied kitchen creatives; original reference images remain in `assets/`.
- Added distinct image crops for hero, cabinetry, storage, island/worktop and lighting details; hero image is prioritised and below-the-fold images lazy-load.
- Added responsive breakpoints for compact phones, phones, tablets, laptops and wide screens; added visible focus states and reduced-motion support.

## QA performed
- Checked CSS parsing for syntax errors.
- Checked local image/script/style references for missing files.
- Checked JavaScript syntax with Node.
- Checked image paths for duplicates and reviewed layout rules at 320, 375, 430, 768, 1024, 1366 and 1920 px.
- Automated real-browser rendering was blocked by the environment, so manual/browser screenshot QA is still required before production sign-off.


## Contact section spacing fix
- Reduced excess vertical padding and grid gap around the contact/enquiry section.
- Tightened form spacing and textarea height to reduce the section's overall footprint.
- Added anchor scroll margin so the sticky header is less likely to overlap the contact heading when navigating to the section.
