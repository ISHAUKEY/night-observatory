# The Night Observatory

A responsive, dark celestial-themed educational website built with HTML, CSS and vanilla JavaScript.

## Features
- Search and filter a small educational catalogue of planets, stars and deep-sky objects.
- Open field notes with short descriptions.
- Generate a beginner-friendly observing checklist for a selected date.
- Estimate the Moon's phase and illuminated fraction for a selected date.
- Keep a personal observing journal in browser local storage.

## Run locally
Open `index.html` in a modern browser. No build tools or package installation are required.

## Technology
- HTML5 for page structure
- CSS3 for responsive layout and visual design
- Vanilla JavaScript for search, filters, planner, lunar phase approximation and journal
- Browser localStorage for journal persistence on the same browser/device

## Important limitations
- Moon phase and illumination are educational approximations, not precision ephemeris data.
- The planner creates a preparation checklist; it does not predict local cloud cover or object visibility.
- Journal entries remain in the current browser and are not synced to a server.
- This version does not use a live astronomy API.

## AWS deployment architecture
The intended AWS hosting architecture is:
1. Store the static website files in an Amazon S3 bucket.
2. Keep the bucket private.
3. Create an Amazon CloudFront distribution.
4. Configure Origin Access Control (OAC) so CloudFront can read from the private S3 bucket.
5. Set `index.html` as the default root object.
6. Use the CloudFront HTTPS distribution URL as the public project URL.

GitHub is used for source control. Vercel may be used as an optional preview, but the final AWS assignment deployment should be hosted on AWS.

See [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md) for the project report draft.