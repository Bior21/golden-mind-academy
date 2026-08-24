/**
 * astro.config.mjs
 * ----------------
 * Astro build configuration.
 *
 * MAINTAINER NOTES:
 * - `site` must match the live domain. It is used to generate correct
 *   canonical URLs and social-share (Open Graph) URLs.
 * - Because the site is served from the custom domain golden-mind-academy.org
 *   (see public/CNAME), no `base` path is needed.
 */
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://golden-mind-academy.org',
});
