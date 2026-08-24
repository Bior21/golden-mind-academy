/**
 * site.ts
 * -------
 * SINGLE SOURCE OF TRUTH for site-wide constants: organization details,
 * external URLs, contact information, and the navigation structure.
 *
 * Used by: BaseLayout.astro, Header.astro, Footer.astro, and any page
 * that shows contact details or donation links.
 *
 * MAINTAINER NOTES:
 * - Edit values HERE, never in individual pages or components.
 *   Example: if the GoFundMe URL changes, changing `links.gofundme`
 *   below updates the Header donate button, the Footer icon, and
 *   every "Donate" button across the site at once.
 */

export const SITE = {
  name: 'Golden Mind Academy',
  tagline: 'Nurturing Leaders, Building the Nation.',
  /** Short description used for SEO meta tags and the footer. */
  description:
    'Golden Mind Academy is a refugee-led Nursery and Primary school under construction in Ayilo I Refugee Settlement, Uganda, giving refugee and host-community children the opportunity to learn and build a brighter future.',
  email: 'admin@golden-mind-academy.org',
  location: {
    line1: 'Ayilo I Refugee Settlement',
    line2: 'Pakele Sub-County, Adjumani District',
    line3: 'Northern Uganda',
  },
  copyrightYear: 2026,
} as const;

export const LINKS = {
  gofundme: 'https://gofund.me/de74f8645',
  facebook: 'https://www.facebook.com/profile.php?id=61589023891312',
  email: `mailto:admin@golden-mind-academy.org`,
} as const;

/**
 * Formspree form ID for the contact page.
 */
export const FORMSPREE_ID = 'mdenrejz';

/**
 * Main navigation, in display order.
 * Used by: Header.astro (top nav) and Footer.astro (not currently,
 * but available). The Donate button is separate — see Header.astro.
 */
export const NAV = [
  { label: 'About', href: '/about/' },
  { label: 'Programs', href: '/programs/' },
  { label: 'Progress', href: '/progress/' },
  { label: 'Get Involved', href: '/get-involved/' },
  { label: 'Contact', href: '/contact/' },
] as const;
