# MJ WEB CRAFT — Website

A static, self-contained website for MJ WEB CRAFT (Web Design & Development),
built to deploy immediately on GitHub Pages and to be straightforward to
rebuild in WordPress/Elementor later.

## Files

```
mjwebcraft/
├── index.html      All page content and structure
├── css/style.css   Design tokens + all section styling
└── js/script.js    Project & testimonial data, interactions, form handling
```

No build step, no dependencies, no backend. Open `index.html` directly in a
browser to preview locally, or deploy as-is.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `mjwebcraft`).
2. Push the contents of this folder to the repo root (so `index.html` sits
   at the top level).
3. In the repo, go to **Settings → Pages**, set the source branch to `main`
   (or `master`) and folder to `/ (root)`.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.
5. Once you buy a domain, add it under **Settings → Pages → Custom domain**
   and update your DNS records as GitHub instructs.

## Editing content

Everything you'll want to change regularly lives in one of two places:

- **Projects & testimonials** — edit the `PROJECTS` and `TESTIMONIALS`
  arrays near the top of `js/script.js`. Each project object drives both
  the project grid card and its case-study modal, so you only ever edit
  one place per project. Add a `url` field and set `status: 'live'` once a
  project actually goes public — until then, keep `status: 'private'` so
  the site never claims a project is live when it isn't.
- **Everything else** (headlines, service descriptions, stats, contact
  details) — edit directly in `index.html`; the structure is plain,
  commented HTML with one section per `<section>` block.

Icons are defined once in the `ICONS` object at the top of `js/script.js`
and referenced in the HTML as `{{ICON:name}}` placeholders — swap an icon
anywhere by changing its SVG in that one object.

## The contact form (GitHub Pages version)

The form is frontend-only for now: on submit, `js/script.js` opens a
pre-filled WhatsApp chat with the visitor's project details (since WhatsApp
is your primary contact channel). No data is stored or sent anywhere else.

## WordPress migration (later)

When you're ready to move to WordPress:

- Rebuild each `<section>` as an Elementor section/container using the same
  order and copy — the modular structure here maps directly onto Elementor's
  section → column → widget model.
- Recreate the service cards, feature blocks and project cards as an
  Elementor Loop Grid or repeated widget group, sourced from custom fields
  or a custom post type ("Projects") instead of the `PROJECTS` array in
  `script.js`.
- Replace the WhatsApp-only form submission in `handleSubmit()` (bottom of
  `script.js`) with a real WordPress form plugin (WPForms, Fluent Forms) or
  `admin-post.php` + `wp_mail()` — the field names in the HTML form
  (`name`, `email`, `phone`, `business`, `service`, `budget`, `details`)
  are already sensible WordPress meta-key names, so you shouldn't need to
  rename anything.
- Colors, type and spacing are all defined as CSS custom properties at the
  top of `style.css` (`:root { --void, --electric, --violet, ... }`) — copy
  these into your theme's global colors/typography settings so the same
  look carries over exactly.
- The Google Fonts (`Space Grotesk`, `Inter`) can be added the same way in
  WordPress via the theme's typography settings or a fonts plugin.

## Browser support

Built with standard modern CSS (Grid, custom properties, `backdrop-filter`)
and JavaScript (`const`/`let`, arrow functions, optional chaining). This
covers all current versions of Chrome, Firefox, Safari and Edge. It does
not target Internet Explorer.
