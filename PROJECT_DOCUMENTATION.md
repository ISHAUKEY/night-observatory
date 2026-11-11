# The Night Observatory — Project Documentation

## 1. Project overview
**Project title:** The Night Observatory  
**Project type:** Responsive static educational website  
**Technology:** HTML, CSS and JavaScript  
**Proposed AWS services:** Amazon S3 and Amazon CloudFront

The Night Observatory is a small educational website designed to make introductory astronomy approachable. Visitors can browse selected celestial objects, prepare for an observing session, explore an approximate lunar phase and record personal observations.

## 2. Problem statement
Beginners interested in astronomy may find it difficult to know where to start or how to prepare for an observation. Information is often spread across multiple sources. This project brings a small introductory catalogue and basic observing tools together in one accessible website.

## 3. Objectives
- Present introductory information about selected celestial objects.
- Provide search and category filters for quick discovery.
- Help beginners prepare for an observing session.
- Demonstrate a simple Moon phase approximation.
- Allow visitors to maintain a local observation journal.
- Deploy a static website using AWS cloud hosting services.

## 4. Main modules
1. **Celestial Index:** Search and filter planets, stars and deep-sky objects. Selecting a card opens a field note.
2. **Observation Planner:** Generates a checklist for a selected observing date.
3. **Moon Watch:** Calculates an approximate lunar phase and illuminated fraction.
4. **Observer's Log:** Saves and deletes observation notes using browser local storage.

## 5. System architecture
### Planned AWS architecture
Visitor's browser → Amazon CloudFront (HTTPS delivery and content caching) → private Amazon S3 bucket (static website files), accessed through CloudFront Origin Access Control.

### Role of services
- **Amazon S3:** Stores the HTML, CSS and JavaScript files as static assets.
- **Amazon CloudFront:** Delivers the files through a content delivery network and provides HTTPS access.
- **Origin Access Control:** Restricts direct origin access so the S3 bucket can remain private.
- **GitHub:** Stores source code and tracks changes. GitHub is not an AWS hosting service.

## 6. Implementation steps
1. Create the website using HTML, CSS and JavaScript.
2. Test the website locally in a modern browser.
3. Create an S3 bucket for the static website files.
4. Upload `index.html`, `style.css` and `script.js` to the bucket.
5. Keep public access blocked and configure CloudFront Origin Access Control.
6. Create a CloudFront distribution with the S3 bucket as its origin.
7. Set the default root object to `index.html`.
8. Add the CloudFront distribution URL to this report after deployment.
9. Test the deployed website over HTTPS.

## 7. Testing plan
- Verify that the home page and navigation load correctly.
- Search for a known celestial object and verify that matching cards appear.
- Filter the catalogue by planets, stars and deep-sky objects.
- Open and close a field note.
- Generate an observation checklist for a selected date.
- Change the Moon date and verify that the displayed phase updates.
- Save, refresh and delete a journal entry in the same browser.
- Verify the deployed site loads over HTTPS from the CloudFront URL.

## 8. Results
**Deployment status:** To be completed after AWS deployment.  
**Public AWS URL:** To be added after CloudFront deployment.  
**Screenshots:** Add screenshots of the deployed home page and each module after testing.

## 9. Limitations
- The lunar phase calculation is approximate and intended for learning.
- The planner does not use the visitor's location or live weather data.
- Journal entries use browser local storage and do not synchronize between devices.
- The current catalogue is a small curated sample, not a complete astronomical database.

## 10. Future enhancements
- Integrate a trusted astronomy API for current astronomical images or data.
- Add location-aware visibility and weather information.
- Add user accounts and cloud-synchronized journals.
- Expand the catalogue and add educational articles.

## 11. Conclusion
The Night Observatory demonstrates how a static web application can combine interactive browser functionality with cloud-based hosting. Amazon S3 and CloudFront provide a simple, scalable architecture for delivering the website without managing servers.

*This report is a draft. Update the deployment status, AWS URL, screenshots and test results only after completing the corresponding steps.*