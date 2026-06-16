# Gallery Photos

Drop your real church photos into this folder using these exact filenames,
and they will automatically appear in the homepage's sliding photo gallery
(no code changes needed):

- worship.jpg        — Sunday Celebration
- bible-study.jpg    — Wednesday Bible Study
- prayer.jpg         — Friday Prayer & Praise Night
- choir.jpg          — Choir Ministry
- youth.jpg          — Youth Fellowship
- outreach.jpg       — Community Outreach

Recommended size: at least 1600x1000px (landscape), JPG or WebP, under 500KB
each for fast loading. If a file is missing, the gallery automatically shows
a tasteful gradient + icon placeholder instead of a broken image — so the
site never looks broken even before you add photos.

To add more slides or change captions, edit the `galleryImages` array in
`lib/data.ts`.

## Video

The homepage "Worship With Us" section and the `/worship` and `/sermons`
pages currently embed sermons via YouTube (using the `youtubeId` field in
`lib/data.ts`). To feature a different video, just swap the YouTube video ID
there — no other changes required.
