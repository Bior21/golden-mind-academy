/**
 * markdown.ts
 * -----------
 * Renders short markdown strings (page-content JSON fields edited via
 * the CMS) to HTML for use with Astro's `set:html`. Content only ever
 * comes from this repo's own data files, edited by trusted
 * collaborators through the CMS — never from user input.
 */
import { marked } from 'marked';

/** For a single paragraph: bold/links only, no wrapping <p>. */
export function mdInline(text: string): string {
  return marked.parseInline(text, { async: false });
}
