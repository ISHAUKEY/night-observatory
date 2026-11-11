# The Night Observatory — Project Documentation

## 1. Project overview

**Project title:** The Night Observatory  
**Project type:** Responsive static educational website  
**Technology:** HTML, CSS and JavaScript  
**Cloud platform:** Amazon Web Services (AWS)  
**AWS services:** Amazon S3 and Amazon CloudFront

The Night Observatory is an educational website designed to make introductory astronomy approachable. Visitors can browse selected celestial objects, prepare for an observing session, explore an approximate lunar phase and record personal observations.

**Live AWS website:** https://d2n5x7ai1vlsk6.cloudfront.net

**Source code:** https://github.com/ISHAUKEY/night-observatory

## 2. Problem statement

Beginners interested in astronomy may find it difficult to know where to start or how to prepare for an observation. Information and simple observing tools can be spread across multiple sources. This project brings an introductory catalogue and basic observing tools together in one accessible website.

## 3. Objectives

- Present introductory information about selected celestial objects.
- Provide search and category filters for quick discovery.
- Help beginners prepare for an observing session.
- Demonstrate an approximate Moon phase and illumination calculation.
- Allow visitors to maintain a local observation journal.
- Deploy a static website using AWS cloud hosting services.

## 4. Main modules

1. **Celestial Explorer:** Browse a curated set of nine celestial objects, search the catalogue, filter by category and open field notes.
2. **Observation Planner:** Select a date and use an observation checklist.
3. **Moon Watch:** View an approximate lunar phase and illuminated percentage; the calculation updates for the selected date.
4. **Observation Journal:** Create and delete observation entries. Entries are stored in the browser's local storage.

## 5. System architecture

### Deployed AWS architecture

Visitor's browser → Amazon CloudFront (HTTPS delivery and content caching) → private Amazon S3 bucket (static website files), accessed through CloudFront Origin Access Control (OAC).

### AWS deployment details

- **S3 bucket:** `night-observatory-isha`
- **S3 region:** Asia Pacific (Sydney), `ap-southeast-2`
- **CloudFront distribution ID:** `E38OK3YIVNOBZD`
- **CloudFront domain:** `d2n5x7ai1vlsk6.cloudfront.net`
- **Default root object:** `index.html`
- **S3 public access:** Blocked; the bucket is kept private.
- **Origin access:** CloudFront Origin Access Control is used to allow the distribution to access the private S3 origin.
- **Website protocol:** HTTPS through CloudFront.

### Role of services

- **Amazon S3:** Stores the HTML, CSS and JavaScript files as static assets.
- **Amazon CloudFront:** Delivers the website through a content delivery network and provides HTTPS access.
- **Origin Access Control:** Allows CloudFront to access the private S3 origin without making the bucket public.
- **GitHub:** Stores source code and tracks changes. GitHub is not an AWS hosting service.

## 6. Implementation steps

1. Develop the website using HTML, CSS and JavaScript.
2. Store the source code in the GitHub repository.
3. Create the S3 bucket `night-observatory-isha` in `ap-southeast-2`.
4. Keep S3 Block Public Access enabled.
5. Upload `index.html`, `style.css` and `script.js` to the bucket root.
6. Create a CloudFront distribution with the S3 bucket as its origin.
7. Configure Origin Access Control so CloudFront can read from the private S3 bucket.
8. Set the CloudFront default root object to `index.html`.
9. Wait for the distribution deployment to complete.
10. Open the CloudFront HTTPS URL and test the website and its interactive modules.

## 7. Testing and results

The deployed CloudFront website was opened successfully over HTTPS. The following functional checks were performed in the browser:

| Test | Expected behaviour | Result |
|---|---|---|
| Open website | Homepage loads from CloudFront | Passed |
| Catalogue search | Search finds matching celestial objects | Passed |
| Category filters | Catalogue filters by selected category | Passed |
| Field notes | Selecting an object opens its details | Passed |
| Planner checklist | Checklist items can be checked and unchecked | Passed |
| Moon Watch | Phase and illumination are displayed and respond to date selection | Passed |
| Journal persistence | A saved entry remains after refreshing the page | Passed |
| Journal deletion | A journal entry can be deleted | Passed |

**Deployment status:** Successfully deployed and manually tested.  
**Live AWS URL:** https://d2n5x7ai1vlsk6.cloudfront.net

## 8. Limitations

- The lunar phase calculation is approximate and intended for learning, not precision astronomical prediction.
- The planner does not use the visitor's location or live weather/cloud-cover data.
- Journal entries use browser local storage. They are not uploaded to AWS and do not synchronize between browsers or devices.
- The current catalogue contains nine curated objects, not a complete astronomical database.
- The website is a static front end and does not currently have a separate application backend or user authentication.

## 9. Future enhancements

- Integrate a trusted astronomy API for current astronomical data or images.
- Add location-aware visibility information and live weather/cloud-cover data.
- Add user accounts and cloud-synchronized journals.
- Expand the catalogue and add educational articles.

## 10. Conclusion

The Night Observatory demonstrates how a static web application can combine interactive browser functionality with AWS cloud hosting. Amazon S3 stores the website files, while Amazon CloudFront delivers them over HTTPS. Keeping the S3 bucket private and using Origin Access Control demonstrates a basic cloud content-delivery architecture without requiring the management of application servers.

---
