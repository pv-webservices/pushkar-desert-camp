import { routes as staticRoutes, type PhotoKey } from './site';
import type { ContentPage } from './content-types';
import { servicePages, allServiceCards } from './services';
import { pushkarGuides } from './guides-pushkar';
import { eventGuides } from './guides-events';
import { ajmerGuides } from './guides-ajmer';

export const guidePages: ContentPage[] = [...pushkarGuides, ...eventGuides, ...ajmerGuides];
export const allRoutes: string[] = [...staticRoutes, ...servicePages.map(p => p.path), ...guidePages.map(p => p.path)];

// Card data for every page that can appear in a "related" block.
export type LinkCard = { href: string; title: string; text: string; photo: PhotoKey; icon: string; tag: string };
const handBuilt: LinkCard[] = [
  { href: '/desert-safari/', title: 'Desert Safari Pushkar', text: 'Camel, jeep and night safaris across the dunes around Pushkar.', photo: 'safari', icon: 'jeep', tag: 'Safari' },
  { href: '/camp-stay/', title: 'Camp Stay', text: 'A peaceful desert camp with furnished tents and green surroundings.', photo: 'bedroom', icon: 'tent', tag: 'Stay' },
  { href: '/swiss-tent/', title: 'Swiss Tent on Rent', text: 'Furnished Swiss tents for your stay, group or event.', photo: 'tent', icon: 'bed', tag: 'Stay' },
  { href: '/cultural-experiences/', title: 'Folk Dance & Fire Show', text: 'Rajasthani folk dance, music and fire performance at the camp.', photo: 'fire', icon: 'flame', tag: 'Culture' },
  { href: '/services/', title: 'All Services', text: 'Every safari, stay and cultural experience we offer in Pushkar.', photo: 'heroDunes', icon: 'sparkle', tag: 'Services' },
];
const fromContent = (tag: string) => (p: ContentPage): LinkCard => ({ href: p.path, title: p.label, text: p.cardText, photo: p.photo, icon: p.icon, tag });
const linkIndex = new Map<string, LinkCard>(
  [...handBuilt, ...servicePages.map(fromContent('Service')), ...guidePages.map(p => fromContent(p.category ?? 'Guide')(p))].map(c => [c.href, c]),
);

export function resolveLinks(hrefs: string[]): LinkCard[] {
  return hrefs.map(href => {
    const card = linkIndex.get(href);
    if (!card) throw new Error(`No link card registered for ${href}`);
    return card;
  });
}

// Enquiry form options, kept in sync with every page that preselects a service.
export const enquiryOptions: string[] = [...new Set([
  ...allServiceCards.map(s => s.enquiry), 'Camp Stay', 'Safari & Stay', 'Group Visit',
  ...servicePages.map(p => p.enquiry), ...guidePages.map(p => p.enquiry),
])];

// Footer groups. Labels follow the phrases people search for.
export type FooterGroup = { title: string; links: { label: string; href: string }[] };
const explorePushkar = [
  { label: 'Things To Do in Pushkar', href: '/things-to-do-in-pushkar/' },
  { label: 'Brahma Temple', href: '/brahma-temple-pushkar/' },
  { label: 'Pushkar Lake', href: '/pushkar-lake/' },
  { label: 'Savitri Temple Ropeway Pushkar', href: '/savitri-temple-ropeway-pushkar/' },
  { label: 'Pushkar Desert Safari', href: '/desert-safari/' },
  { label: 'Night Camp in Pushkar', href: '/services/night-camping-pushkar/' },
  { label: 'Tents in Pushkar', href: '/swiss-tent/' },
  { label: 'Hotel in Pushkar', href: '/camp-stay/' },
];
// Services already linked from another column are left out so each URL appears once.
const linkedElsewhere = new Set([...explorePushkar.map(l => l.href), ...eventGuides.map(p => p.path)]);
export const footerGroups: FooterGroup[] = [
  { title: 'Our Services', links: [
    ...allServiceCards.filter(s => !linkedElsewhere.has(s.href)).map(s => ({ label: s.label, href: s.href })),
    { label: 'All Services', href: '/services/' },
  ] },
  { title: 'Explore Pushkar', links: explorePushkar },
  { title: 'Fair and Events', links: eventGuides.map(p => ({ label: p.label, href: p.path })) },
  { title: 'Explore Ajmer', links: ajmerGuides.map(p => ({ label: p.label, href: p.path })) },
  { title: 'Quick Links', links: [
    { label: 'About Us', href: '/about-us/' },
    { label: 'Photo Gallery', href: '/gallery/' },
    { label: 'Travel Blogs', href: '/blog/' },
    { label: 'FAQs', href: '/faqs/' },
    { label: 'Contact Us', href: '/contact-us/' },
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions/' },
    { label: 'Cancellation & Refund Policy', href: '/cancellation-refund-policy/' },
  ] },
];
