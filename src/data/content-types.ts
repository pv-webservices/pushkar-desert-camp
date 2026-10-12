import type { PhotoKey } from './site';

// Shared shape for the data-driven service pages (/services/…) and travel guides (/…/).
// Paragraph strings may contain trusted inline HTML (internal links, <strong>, <em>).
export type ContentSection = { heading: string; paragraphs: string[]; list?: string[] };
export type FaqItem = { q: string; a: string };
export type Highlight = { icon: string; title: string; text: string };

export type ContentPage = {
  path: string;
  label: string;          // short name used in cards, menus and the footer
  cardText: string;       // one-line summary for cards
  icon: string;
  eyebrow: string;
  title: string;          // H1, may contain <em>
  metaTitle: string;
  metaDescription: string;
  lead: string;
  photo: PhotoKey;
  inset?: PhotoKey;
  insetLabel?: string;
  position?: string;
  highlights?: Highlight[];
  sections: ContentSection[];
  feature?: { photo: PhotoKey; secondary?: PhotoKey; eyebrow: string; title: string; paragraphs: string[]; list?: string[] };
  faqs: FaqItem[];
  related: string[];      // paths of related pages, resolved through src/data/routes.ts
  enquiry: string;        // value preselected in the contact form
  ctaLabel: string;
  category?: string;      // guide grouping on /blog/
};

export const enquiryHref = (service: string) => `/contact-us/?service=${encodeURIComponent(service)}`;
