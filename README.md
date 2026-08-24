# Golden Mind Academy — Website

The website for **Golden Mind Academy**, a refugee-led Nursery and Primary
school under construction in Ayilo I Refugee Settlement, Adjumani District,
Uganda. Live at **https://golden-mind.org**.

Built with [Astro](https://astro.build) (static output), deployed to
**GitHub Pages** automatically on every push to `main`.

---

## Quick start (local preview)

```bash
npm install     # first time only
npm run dev     # opens http://localhost:4321
npm run build   # production build into dist/ (what gets deployed)
```

---

## Folder map

```
src/
  config/site.ts          ← org name, email, location, GoFundMe/Facebook
                            URLs, Formspree ID, navigation. EDIT HERE FIRST.
  data/funding.json       ← all money figures (bar + budget table)
  data/roadmap.json       ← construction timeline milestones
  content/updates/        ← one Markdown file per update post
  styles/global.css       ← colors, fonts, spacing (design tokens)
  layouts/BaseLayout.astro← shared HTML shell (SEO, header, footer)
  components/             ← reusable pieces (each file explains itself)
  pages/                  ← one file per page/URL
public/
  images/                 ← photos (currently labeled placeholders)
  CNAME                   ← keeps the golden-mind.org domain attached
.github/workflows/deploy.yml ← the auto-deploy pipeline
```

---

## How do I…

### …publish an update?

1. Copy any file in `src/content/updates/`.
2. Rename it `YYYY-MM-DD-short-slug.md` (e.g. `2026-08-15-walls-started.md`).
3. Edit the frontmatter (between the `---` lines):
   - `title` — the headline
   - `date` — `YYYY-MM-DD` (controls feed order)
   - `category` — exactly one of `Construction`, `Fundraising`,
     `Community`, `Announcement`
   - `photos` — optional; see "add a photo" below
4. Write the body in plain text below the second `---`.
5. Commit and push. The Progress feed and the homepage teasers update
   themselves, newest first.

### …change the funding numbers?

Edit `src/data/funding.json`: update `raised` (and any other figures),
set `asOf` to today's date, push. The homepage bar and the Progress-page
tracker both update — they read the same file.

### …advance the roadmap when a phase completes?

Edit `src/data/roadmap.json` (full instructions are in the file's
`_README` field). In short: finished phase → real date + `"done"`;
next phase → `"Now"` + `"current"`. Only one milestone is `current`
at a time.

### …add a photo?

1. Compress it (aim under ~300 KB — visitors are often on mobile data).
2. Name it by date: `2026-08-walls.jpg`.
3. Put it in `public/images/`.
4. Reference it as `/images/2026-08-walls.jpg` in an update's `photos`
   list or a page. Always write a real `caption`/`alt` describing what
   the photo shows.

The current images are labeled placeholders — replace them with real
photos using the same filenames, or update the `src` paths in the pages.

### …change the email / GoFundMe link / Facebook link / navigation?

`src/config/site.ts`. One edit updates every page (header, footer,
buttons, contact page).

### …make the contact form work?

Create a free form at [formspree.io](https://formspree.io), copy its ID,
and paste it into `FORMSPREE_ID` in `src/config/site.ts`. Until then the
email fallback shown beside the form always works.

### …add the official registration line when it exists?

Two marked spots: the "REGISTRATION SLOT" comment in
`src/components/Footer.astro`, and the money-handling note in
`src/pages/get-involved.astro`.

---

## Change → edit map

| To change…                | Edit…                              |
| ------------------------- | ---------------------------------- |
| Money figures             | `src/data/funding.json`            |
| Roadmap milestones        | `src/data/roadmap.json`            |
| Updates feed              | `src/content/updates/*.md`         |
| Email, URLs, nav, tagline | `src/config/site.ts`               |
| Colors / fonts            | `src/styles/global.css` (`:root`)  |
| Footer                    | `src/components/Footer.astro`      |
| Header / menu             | `src/components/Header.astro`      |
| A page's content          | `src/pages/<page>.astro`           |

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds
the site and publishes it to GitHub Pages (~1 minute).

**One-time repo setup:** Settings → Pages → Source: *GitHub Actions*,
and set the custom domain to `golden-mind.org` (DNS: `A` records to
GitHub Pages IPs or a `CNAME` to `<user>.github.io`; `public/CNAME`
keeps it attached across deploys).

## Future upgrade path

When non-technical editing becomes a priority, [Decap CMS](https://decapcms.org)
can be added on top of this exact structure — it edits these same
Markdown/JSON files through a web dashboard and commits to GitHub.
No rebuild required.
