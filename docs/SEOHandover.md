# Jet Now Drainage — SEO Review & Proposal

Prepared by: Jack Oliver Dev &nbsp;|&nbsp; For: Mitch &nbsp;|&nbsp; Date: 05/07/2026

## Summary

A third party sent over an SEO/AI-visibility audit recommending a full website rebuild. We reviewed every claim in that audit against the live site, ran our own independent checks using Semrush and Google PageSpeed Insights, and concluded a rebuild was not required. Every issue raised, plus several the audit missed entirely, has now been fixed directly on the existing site. Below is exactly what was found, what was fact versus sales framing, and what was implemented, with real figures throughout.

## What the audit found

Their report raised five points. On investigation, four were genuine:

1. **No `llms.txt` file** (a file that tells AI tools like ChatGPT and Perplexity what the business does) — confirmed true, the file returned a 404 on the live site.
2. **`robots.txt` didn't name any AI crawlers by name** — confirmed true, though this was overstated: the existing generic rule (`Allow: /`) already permitted every AI crawler; naming them explicitly is best practice, not a fix for something broken.
3. **Google only had one basic block of business information, nothing per-service, no FAQ data, no review data** — confirmed true.
4. **Page titles and descriptions were generic** — confirmed true; the homepage title, for example, was rendering at 36 characters with no brand name at all, well short of the 50 to 60 characters search engines actually use.
5. **All 8 services crammed onto one page with a couple of sentences each** — confirmed true, and the single biggest opportunity of everything raised.

**Not accepted:** the framing that any of this required a rebuild, or that the site was "invisible" to AI. It wasn't invisible, it was simply under-optimised. Every fix above is a standard addition to an existing site, not a reason to start again.

## What we implemented

### Content: 8 new service pages, 10 new area pages

- Built **8 individual service pages** (previously all 8 services shared a single page with one or two sentences each): Internal Drain Unblocking, External Drain Unblocking, Tanker Drainage Services, CCTV Drain Surveys, High-Pressure Drain Jetting, Drain Repairs & Relining, 24/7 Emergency Drainage Services, and Drain Descaling. Each page has its own hand-written content (roughly 400 to 600 words), its own hero image, a "what's involved" breakdown, a "signs you need this service" checklist, and its own booking button.
- Built **10 individual area pages**, one for every location you cover: Essex, Hertfordshire, London, Greater London, Surrey, Kent, Cambridgeshire, Bedfordshire, Buckinghamshire, and Suffolk. Each names every town in that area, links through to all 8 services, and includes two paragraphs of genuine local detail (e.g. Essex's coastal drainage pressure versus its inland clay-pipe towns), not the same paragraph with the place name swapped in.
- Every one of these 18 new pages was researched individually (UK regulations, typical process, real terminology) before being written, not generated from a template.

### FAQ coverage: 48 questions across the site, up from 4

- Contact page FAQ expanded from **4 questions to 10**, and rebuilt so it's fully expandable/collapsible on every screen size.
- New **6-question FAQ section added to the homepage**.
- **32 service-specific FAQs** (4 per service page) and **30 area-specific FAQs** (3 per area page), all unique, none duplicated between pages.

### Google/AI visibility

- Added the missing `llms.txt` file.
- Explicitly allowed **11 named AI crawlers** in `robots.txt` (ChatGPT, Claude, Perplexity, Google's AI Overviews, Apple Intelligence, Amazon, and their respective variants).
- Added detailed structured data behind the scenes so Google and AI tools can read exact facts about the business rather than guessing: business type, opening hours (genuinely 24/7), your real Google rating (5.0 stars, 23 reviews, pulled directly from your Google Business listing, nothing invented), a dedicated data block for every one of the 8 services, and matching FAQ data for every FAQ on the site.
- Rewrote the title and description for every page so they name real services, real locations, and real response times instead of generic phrasing.

### Site speed

- The homepage's background image was a 6.2MB file, uncompressed, at full camera resolution. It's now served at roughly **130 to 190KB depending on the visitor's browser, a reduction of around 98%**, with no visible drop in quality. This was independently confirmed as the leading cause of slow load times by both Semrush and Google PageSpeed Insights before the fix.
- The homepage's background video was compressed from **4.1MB to 1.4MB**, a 65% reduction.

### Accessibility

- Found and fixed a genuine accessibility failure: white text on several of the site's orange, green, and blue buttons did not meet the minimum contrast standard for readability (measured well below the required threshold in places). Every affected button across the site has been recoloured to a darker shade of the same colour, comfortably passing the standard, with no change to the overall look of the site.

### Easier enquiries

- The "Call" button on every service and area page now says "WhatsApp Us" and opens a WhatsApp chat directly, matching the WhatsApp button already used elsewhere on the site, generally a faster route to a reply than a phone call for most customers.

## How this was verified

Every claim above was checked, not assumed. Two independent tools were used before and will be used again after the site goes live: **Semrush's SEO checker** and **Google's PageSpeed Insights**. Both were run against the live site to identify the real issues (including the image and video problems the original audit didn't even mention), and both will be re-run once Google account access is restored (see below), so the improvement can be shown with genuine before-and-after figures rather than a description of what changed.

## Action items for Mitch

1. **Restore our access to the Google account for Jet Now Drainage** (Search Console and Google Business Profile). The password appears to have changed and we've lost access. This is needed to resubmit the site to Google now that it's updated, and to keep the live review rating on the site accurate going forward.
2. **Decide whether you want a Twitter/X or LinkedIn page for the business.** Neither exists currently. We'd recommend setting up at least one, even a basic profile, since it's a straightforward way to improve the site's overall search ranking signals.
3. **Review the new service and area pages, and the updated wording throughout the site**, and confirm you're happy with the content before this is treated as finished.

Once access is restored, we'll resubmit the sitemap and send over the final before-and-after Semrush and PageSpeed Insights results.
