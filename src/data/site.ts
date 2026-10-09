export const business = {
  name: 'Pushkar Desert Safari',
  brandMark: 'Pushkar Desert Camp',
  phone: '+91 9116991219',
  tel: 'tel:+919116991219',
  waNumber: '919116991219',
  email: 'info@pushkardesertcamp.com',
  location: 'Pushkar, Rajasthan, India',
  tagline: 'A little adventure. A little tranquillity. A beautiful taste of Rajasthan.',
  whatsapp: 'https://wa.me/919116991219?text=' + encodeURIComponent('Hello, I would like to enquire about a stay or desert safari at Pushkar Desert Safari.'),
};

export type PhotoSpec = { id: string; alt: string; w: number; h: number; category?: string; widths: number[]; generated?: boolean };
const real = [480, 768, 960, 1600];
const ai = [768, 1280, 1600];

// Client photographs (authentic) and generated atmosphere images (never presented as the property).
const photoData = {
  tent: { id: 'photo-1', alt: 'Swiss tent shaded by trees and surrounded by greenery at the camp', w: 896, h: 1042, category: 'Stay', widths: real },
  guests: { id: 'photo-2a', alt: 'Safari guests beside a white jeep with the hills of Pushkar behind them', w: 1600, h: 1200, category: 'Safari', widths: real },
  group: { id: 'photo-2b', alt: 'A group of guests celebrating their jeep safari experience', w: 1200, h: 1600, category: 'Safari', widths: real },
  journey: { id: 'photo-2c', alt: 'Guests gathering around their safari jeep in the Rajasthan landscape', w: 1600, h: 1200, category: 'Safari', widths: real },
  bedroom: { id: 'photo-3a', alt: 'Furnished tent bedroom with white bedding, maroon cushions and bedside lamps', w: 1600, h: 1204, category: 'Stay', widths: real },
  interior: { id: 'photo-3b', alt: 'Patterned Swiss tent interior with a furnished bed and bedside lighting', w: 960, h: 1280, category: 'Stay', widths: real },
  dancer: { id: 'photo-4a', alt: 'Rajasthani folk performer wearing colourful traditional costume', w: 1206, h: 1252, category: 'Culture', widths: real },
  fire: { id: 'photo-4b', alt: 'Cultural performer holding fire torches during an evening performance', w: 1206, h: 1483, category: 'Culture', widths: real },
  dance: { id: 'photo-4c', alt: 'Folk dancer in an embroidered costume performing a traditional dance', w: 1081, h: 1184, category: 'Culture', widths: real },
  safari: { id: 'photo-5', alt: 'White safari jeep and guests on the sandy tracks of Pushkar', w: 960, h: 1280, category: 'Safari', widths: real },
  pool: { id: 'photo-6', alt: 'Camp swimming pool bordered by a paved terrace and green trees', w: 1206, h: 1431, category: 'Property', widths: real },
  washroom: { id: 'photo-7', alt: 'Tent washroom with a basin, toilet and shower area', w: 896, h: 1195, category: 'Stay', widths: real },
  heroDunes: { id: 'ai-hero-dunes', alt: 'Golden-hour sand dunes with tyre tracks and low hills near Pushkar', w: 1536, h: 1024, widths: ai, generated: true },
  nightSky: { id: 'ai-night-sky', alt: 'Starry night sky and the Milky Way above quiet desert dunes', w: 1536, h: 1024, widths: ai, generated: true },
  safariDunes: { id: 'ai-safari-dunes', alt: 'Wind-rippled dune ridge crossed by fresh jeep tracks in late afternoon light', w: 1536, h: 1024, widths: ai, generated: true },
  cultureStill: { id: 'ai-culture-still', alt: 'Mirror-work textile, brass ankle bells and a dholak drum glowing in firelight', w: 1536, h: 1024, widths: ai, generated: true },
  lantern: { id: 'ai-lantern-dusk', alt: 'A glowing brass lantern resting on sand at dusk', w: 1024, h: 1536, widths: ai, generated: true },
  chai: { id: 'ai-chai-welcome', alt: 'Masala chai in clay cups on a brass tray over a block-printed cotton rug', w: 1024, h: 1536, widths: ai, generated: true },
  sunrise: { id: 'ai-aravalli-sunrise', alt: 'Sunrise over misty hills with desert scrub in the foreground', w: 1536, h: 1024, widths: ai, generated: true },
} satisfies Record<string, PhotoSpec>;
export type PhotoKey = keyof typeof photoData;
export const photos: Record<PhotoKey, PhotoSpec> = photoData;
export const galleryKeys: PhotoKey[] = ['safari', 'tent', 'dancer', 'guests', 'interior', 'fire', 'pool', 'bedroom', 'dance', 'group', 'washroom', 'journey'];

export const experiences: { title: string; short: string; href: string; photo: PhotoKey; icon: string; tag: string }[] = [
  { title: 'Desert Safari', tag: 'Adventure', short: 'Open skies, sandy tracks and the joy of a jeep adventure.', href: '/desert-safari/', photo: 'safari', icon: 'jeep' },
  { title: 'Camp Stay', tag: 'Stay', short: 'Slow down in a peaceful camp surrounded by nature.', href: '/camp-stay/', photo: 'bedroom', icon: 'tent' },
  { title: 'Swiss Tent Stay', tag: 'Stay', short: 'The charm of canvas, with a comfortable place to unwind.', href: '/swiss-tent/', photo: 'tent', icon: 'bed' },
  { title: 'Folk Dance & Fire Show', tag: 'Culture', short: 'Colour, rhythm and the vibrant spirit of Rajasthan.', href: '/cultural-experiences/', photo: 'fire', icon: 'flame' },
  { title: 'Poolside Relaxation', tag: 'Unwind', short: 'A quieter moment in the green surroundings of the camp.', href: '/camp-stay/#poolside', photo: 'pool', icon: 'wave' },
];

export const bookingSteps = [
  { title: 'Choose your experience', text: 'A desert safari, a camp stay in a Swiss tent, a cultural evening — or a mix of all three.' },
  { title: 'Share your dates', text: 'Call, email or WhatsApp us with your preferred date, number of guests and any requirements.' },
  { title: 'Confirm the details', text: 'The team confirms availability, current rates, timings and inclusions directly with you.' },
];

export const routes = ['/', '/about-us/', '/experiences/', '/desert-safari/', '/camp-stay/', '/swiss-tent/', '/cultural-experiences/', '/gallery/', '/contact-us/', '/privacy-policy/'];
