/**
 * content/config.ts
 * -----------------
 * Defines and VALIDATES the "updates" content collection. Every
 * Markdown file in src/content/updates/ is checked against this
 * schema at build time — a typo in a field name or an invalid
 * category fails the build with a readable error instead of
 * silently breaking the page.
 *
 * Used by: progress.astro and index.astro (via getCollection).
 *
 * MAINTAINER NOTES — to publish an update:
 *   1. Copy an existing file in src/content/updates/.
 *   2. Rename it YYYY-MM-DD-short-slug.md (the name becomes its ID).
 *   3. Edit the frontmatter (between the --- lines) and the body.
 *   4. Save, commit, push. The feed and homepage teasers rebuild
 *      themselves, sorted by date, newest first.
 */
import { defineCollection, z } from 'astro:content';

const updates = defineCollection({
  type: 'content',
  schema: z.object({
    /** Headline of the update, e.g. "Roofing sheets delivered". */
    title: z.string(),
    /** Date of the update — controls feed order. Format: YYYY-MM-DD. */
    date: z.coerce.date(),
    /** One of the four update types (shown as a small pill). */
    category: z.enum(['Construction', 'Fundraising', 'Community', 'Announcement']),
    /**
     * Optional photos. Each needs a src (path under public/, e.g.
     * "/images/2026-06-roofing.jpg") and a short caption.
     */
    photos: z
      .array(
        z.object({
          src: z.string().min(1, { message: 'Photo src must not be empty.' }),
          /* caption is also the alt text — enforce a real description. */
          caption: z.string().min(1, { message: 'Photo caption (used as alt text) must not be empty.' }),
          /* Which part of the photo stays visible when object-fit: cover crops it. */
          focus: z.enum(['center', 'top', 'bottom', 'left', 'right']).default('center'),
        })
      )
      .optional(),
  }),
});

export const collections = { updates };
