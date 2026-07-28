# TODO — Legal pages (Privacy Policy & Terms)

The footer links to Privacy and Terms were removed because the pages don't
exist yet and the site currently collects nothing.

## Add them as soon as ANY of these becomes true

- [ ] The contact form actually submits somewhere (Formspree, Basin, Lovable Cloud,
      an email service, a CRM) — that is collecting personal data.
- [ ] Any analytics or tracking script is added (Google Analytics, Meta Pixel,
      Hotjar, ad retargeting).
- [ ] Newsletter / email capture of any kind.
- [ ] Cookies are set beyond what's strictly needed to serve the page.
- [ ] Online payments, quotes, or bookings.

## What to do then

1. Create `src/routes/privacy.tsx` and `src/routes/terms.tsx` with their own
   `head()` metadata (title, description, canonical).
2. Restore the Privacy and Terms links in `src/components/site/SiteFooter.tsx`.
3. Add both routes to `public/sitemap.xml`.
4. If tracking is added, consider a cookie notice as well.

Owner: whoever wires up the form or analytics. Don't ship that change without
this one.
