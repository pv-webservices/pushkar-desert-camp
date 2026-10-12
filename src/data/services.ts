import type { ContentPage } from './content-types';
import type { PhotoKey } from './site';

// Business facts the client has not confirmed (prices, durations, routes, inclusions, timings)
// are deliberately left out: every page asks the visitor to confirm them with the team.
const confirm = 'Routes, timings, prices and inclusions vary with the season and group size, so the team confirms them directly when you enquire.';

export const servicePages: ContentPage[] = [
  {
    path: '/services/camel-safari-pushkar/',
    label: 'Camel Safari Pushkar',
    cardText: 'Ride the dunes the traditional way, at the slow, swaying pace of a camel.',
    icon: 'sun',
    eyebrow: 'Camel Safari',
    title: 'Camel safari in Pushkar, <em>at the pace of the desert.</em>',
    metaTitle: 'Camel Safari in Pushkar | Sunset Camel Ride on the Dunes',
    metaDescription: 'Book a camel safari in Pushkar, Rajasthan. Sunset camel rides across the dunes, combined with a camp stay, folk dance evening or jeep safari. Enquire for current timings.',
    lead: 'There is no better way to meet the Thar landscape around Pushkar than from the saddle of a camel. Slow, quiet and full of character, a camel ride turns a simple evening into a lasting Rajasthan memory.',
    photo: 'camelSafari',
    inset: 'guests',
    insetLabel: 'Real guests in Pushkar',
    highlights: [
      { icon: 'sun', title: 'Golden-hour rides', text: 'Late afternoon and sunset are the favourite times to be out on the dunes, when the light turns the sand amber.' },
      { icon: 'users', title: 'Couples, families & groups', text: 'Tell us who is travelling and we will suggest the most comfortable way to enjoy the ride.' },
      { icon: 'tent', title: 'Ride, then stay', text: 'Finish your camel safari at the camp with dinner, a cultural evening and a night in a Swiss tent.' },
    ],
    sections: [
      { heading: 'What is a camel safari in Pushkar?', paragraphs: [
        'Pushkar sits on the eastern edge of the Thar Desert, ringed by the Aravalli hills. Just beyond the town, the land opens into sand dunes, farm tracks and scattered khejri trees, which is exactly the setting a camel safari is made for.',
        'A camel safari is a guided ride across this landscape. Camels are led by experienced handlers, so you do not need any riding experience. Most guests ride for the views, the photographs and the simple pleasure of moving at the rhythm of the desert.',
      ] },
      { heading: 'Best time for a camel ride', paragraphs: [
        'The most comfortable season is <strong>October to March</strong>, when days are warm and evenings are pleasantly cool. Sunset rides are the most popular, and during the <a href="/pushkar-fair-2026/">Pushkar Camel Fair</a> in November the dunes come alive with thousands of decorated camels.',
        'In the hotter months of April to June, early morning or late evening rides are kinder to both guests and camels. Ask the team which slot suits your dates.',
      ] },
      { heading: 'Make it a complete desert evening', paragraphs: [
        'Many guests pair their camel safari with a <a href="/services/jeep-safari-pushkar/">jeep safari</a>, a <a href="/cultural-experiences/">Rajasthani folk dance and fire show</a> and dinner at the camp. Staying overnight in a <a href="/swiss-tent/">Swiss tent</a> lets you wake up to a quiet desert sunrise as well.',
        confirm,
      ] },
      { heading: 'What to wear and carry', paragraphs: ['A few simple things make the ride more comfortable:'], list: [
        'Comfortable trousers or a long skirt that allows you to sit astride',
        'Closed shoes or sandals with a back strap',
        'A scarf, cap and sunglasses for sun and wind-blown sand',
        'A light jacket or shawl for winter evenings',
        'Water and a small bag for your phone and camera',
      ] },
    ],
    faqs: [
      { q: 'Do I need riding experience for a camel safari?', a: 'No. Camels are led by experienced handlers, and the team will help you get on and off. Let us know about any mobility concerns when you enquire.' },
      { q: 'Is a camel safari suitable for children?', a: 'Many families enjoy camel rides together. Share the ages of the children in your group and the team will advise on the most suitable arrangement.' },
      { q: 'How long is the camel safari and what does it cost?', a: 'Duration and price depend on the route, season and group size. Contact us on call or WhatsApp for current details before you book.' },
      { q: 'Can I combine a camel safari with a night stay?', a: 'Yes, you can enquire about a camel safari together with a camp stay, dinner and a cultural evening for the same dates.' },
    ],
    related: ['/services/jeep-safari-pushkar/', '/services/night-camping-pushkar/', '/pushkar-fair-2026/'],
    enquiry: 'Camel Safari',
    ctaLabel: 'Enquire About a Camel Safari',
  },
  {
    path: '/services/jeep-safari-pushkar/',
    label: 'Jeep Safari Pushkar',
    cardText: 'Open-top jeep adventures across sandy tracks, villages and dunes.',
    icon: 'jeep',
    eyebrow: 'Jeep Safari',
    title: 'Jeep safari in Pushkar. <em>Sand, sky and big smiles.</em>',
    metaTitle: 'Jeep Safari in Pushkar | Desert Jeep Safari Rajasthan',
    metaDescription: 'Enjoy a jeep safari in Pushkar across sandy desert tracks, dunes and village landscapes. Real guest photos, group bookings and camp stay combos. Enquire on WhatsApp.',
    lead: 'Feel the wind, the bumps and the wide-open views. A jeep safari is the quickest way to reach the dunes around Pushkar, and the photographs from our guests show just how much fun it is.',
    photo: 'safariDunes',
    inset: 'safari',
    insetLabel: 'Our safari jeep',
    highlights: [
      { icon: 'jeep', title: 'Real jeep adventures', text: 'Every safari photograph on this page is from our own guests on the tracks around Pushkar.' },
      { icon: 'users', title: 'Great for groups', text: 'Friends, families, school and corporate groups can enquire about arranging more than one vehicle.' },
      { icon: 'calendar', title: 'Planned around you', text: 'Morning, sunset and evening slots can be discussed to suit your Pushkar itinerary.' },
    ],
    sections: [
      { heading: 'Why choose a jeep safari?', paragraphs: [
        'A jeep covers more ground than a camel, so you can see more of the Pushkar landscape in a shorter time: sandy tracks, open dunes, farmland, rural villages and views towards the Aravalli hills.',
        'It is ideal if you have limited time in Pushkar, are travelling with older family members, or simply want a little more adrenaline in your desert experience.',
      ] },
      { heading: 'Jeep safari, camel safari or both?', paragraphs: [
        'The <a href="/services/camel-safari-pushkar/">camel safari</a> is slow, traditional and peaceful; the jeep safari is quicker and more adventurous. Many guests combine the two, using the jeep to reach the dunes and a camel ride to enjoy the sunset.',
        'For something different after dark, ask about our <a href="/services/night-safari-pushkar/">night safari</a>, or read our full guide to <a href="/desert-safari/">desert safari in Pushkar</a>.',
      ] },
      { heading: 'Planning your jeep safari', paragraphs: [
        'October to March offers the most pleasant weather. In summer, early morning and evening departures are the most comfortable. Wear sunglasses and a scarf for dust, keep your phone secure, and follow the driver’s guidance at all times.',
        confirm,
      ] },
    ],
    feature: {
      photo: 'journey', secondary: 'group', eyebrow: 'From our guests', title: 'Adventures worth <em>sharing.</em>',
      paragraphs: ['These are genuine moments from jeep safaris around Pushkar: friends, families and groups enjoying the open tracks together.'],
      list: ['Open jeep experience', 'Group enquiries welcome', 'Combine with a camp stay or cultural evening'],
    },
    faqs: [
      { q: 'How many people fit in one jeep?', a: 'Capacity depends on the vehicle. Share your group size and the team will confirm how many jeeps you need.' },
      { q: 'What is the jeep safari price?', a: 'Prices depend on the route, timing and number of vehicles. Contact us for the current rate for your date.' },
      { q: 'Is the jeep safari safe for children and older guests?', a: 'Tell the team about everyone in your group when you enquire. They will advise on a suitable route and pace.' },
      { q: 'Can the jeep safari be combined with a camel ride?', a: 'Yes. Many guests enquire about a jeep and camel safari together, followed by dinner and a cultural evening at the camp.' },
    ],
    related: ['/desert-safari/', '/services/camel-safari-pushkar/', '/services/night-safari-pushkar/'],
    enquiry: 'Jeep Safari',
    ctaLabel: 'Enquire About a Jeep Safari',
  },
  {
    path: '/services/night-camping-pushkar/',
    label: 'Night Camping Pushkar',
    cardText: 'Campfire, starry skies and a peaceful night in the desert.',
    icon: 'moon',
    eyebrow: 'Night Camping',
    title: 'Night camping in Pushkar, <em>under a sky full of stars.</em>',
    metaTitle: 'Night Camping in Pushkar | Desert Night Camp with Dinner',
    metaDescription: 'Plan a night camp in Pushkar with a campfire, Rajasthani dinner, folk music and a comfortable Swiss tent stay. Ideal for couples, families and groups. Enquire now.',
    lead: 'When the sun goes down, the desert changes. The air cools, the stars come out and the campfire becomes the centre of the evening. Night camping in Pushkar is about slowing down and enjoying it all.',
    photo: 'campfire',
    inset: 'interior',
    insetLabel: 'Real tent interior',
    highlights: [
      { icon: 'flame', title: 'Campfire evenings', text: 'Gather around the fire for conversation, music and the warmth of a desert night.' },
      { icon: 'moon', title: 'Starry skies', text: 'Away from city lights, clear winter nights can bring a spectacular view of the stars.' },
      { icon: 'bed', title: 'A comfortable tent', text: 'Rest in a furnished Swiss tent rather than roughing it on the sand.' },
    ],
    sections: [
      { heading: 'What does a night camp in Pushkar include?', paragraphs: [
        'A typical desert night combines an evening activity such as a <a href="/services/camel-safari-pushkar/">camel safari</a> or <a href="/services/jeep-safari-pushkar/">jeep safari</a>, a <a href="/cultural-experiences/">folk dance and music performance</a>, dinner and an overnight stay in a <a href="/swiss-tent/">Swiss tent</a>.',
        'The exact plan depends on your dates and group, so tell us what you would like and the team will put the evening together. ' + confirm,
      ] },
      { heading: 'Who is it for?', paragraphs: ['Night camping works for almost every kind of traveller:'], list: [
        'Couples looking for a romantic desert evening',
        'Families who want a safe, comfortable taste of camp life',
        'Friends and student groups celebrating together',
        'Corporate teams and travel groups needing group arrangements',
        'Travellers visiting Pushkar for the Camel Fair or Holi',
      ] },
      { heading: 'Best season and what to pack', paragraphs: [
        'Night camping is at its best from <strong>October to March</strong>. Desert nights in December and January can get cold, so bring warm layers, a cap and comfortable shoes. A small torch, power bank and any personal medicines are also useful.',
      ] },
    ],
    feature: {
      photo: 'bedroom', secondary: 'washroom', eyebrow: 'Where you sleep', title: 'Camp comfort, <em>desert setting.</em>',
      paragraphs: ['These are real photographs of the tents at our camp: furnished bedrooms, bedside lighting and washroom facilities.'],
      list: ['Furnished Swiss tents', 'Bedding and bedside lamps', 'Washroom facilities'],
    },
    faqs: [
      { q: 'Is night camping in Pushkar safe for families?', a: 'Yes, the camp is designed for families, couples and groups. Share the details of your group when you enquire so the team can plan accordingly.' },
      { q: 'Is dinner included in a night camp?', a: 'Meal arrangements are confirmed with your booking. Ask the team about current dinner and breakfast options for your dates.' },
      { q: 'Does it get cold at night?', a: 'Winter nights in the desert can be chilly, especially in December and January. Please pack warm layers.' },
      { q: 'Can I book night camping for one night only?', a: 'Contact us with your dates and number of guests. The team will confirm availability and the options for your stay.' },
    ],
    related: ['/swiss-tent/', '/services/mobile-camping/', '/cultural-experiences/'],
    enquiry: 'Night Camping',
    ctaLabel: 'Enquire About Night Camping',
  },
  {
    path: '/services/mobile-camping/',
    label: 'Mobile Camping',
    cardText: 'A camp set up for your group, your event or your route through Rajasthan.',
    icon: 'tent',
    eyebrow: 'Mobile Camping',
    title: 'Mobile camping in Rajasthan, <em>wherever the journey leads.</em>',
    metaTitle: 'Mobile Camping in Pushkar & Rajasthan | Tent Setup for Groups & Events',
    metaDescription: 'Mobile camping and temporary tent setups in Pushkar and Rajasthan for groups, fairs, festivals, weddings and corporate events. Swiss tents, seating and camp arrangements on enquiry.',
    lead: 'Mobile camping brings the camp to you. Whether you are planning a group retreat, an event during the Pushkar Fair or a celebration on open land, we can discuss a temporary camp set up around your plans.',
    photo: 'mobileCamp',
    inset: 'tent',
    insetLabel: 'Our Swiss tent',
    highlights: [
      { icon: 'tent', title: 'Tents on location', text: 'Discuss Swiss tents and camp arrangements for a site and dates that suit your group.' },
      { icon: 'users', title: 'Groups & events', text: 'Ideal for weddings, school trips, corporate offsites, pilgrim groups and festival stays.' },
      { icon: 'chat', title: 'Planned together', text: 'Every mobile camp is different, so the plan starts with a conversation.' },
    ],
    sections: [
      { heading: 'What is mobile camping?', paragraphs: [
        'Mobile camping is a temporary camp that is set up for a specific group, site and period of time, rather than a fixed camp. It is popular across Rajasthan for fairs and festivals, private celebrations, and groups who want to stay together in an open, natural setting.',
        'For long-term or seasonal requirements you may also be interested in our <a href="/swiss-tent/">Swiss tent on rent</a> enquiries.',
      ] },
      { heading: 'When people choose mobile camping', paragraphs: ['Typical reasons to enquire include:'], list: [
        'Accommodation for groups visiting the <a href="/pushkar-fair-2026/">Pushkar Camel Fair</a>',
        '<a href="/wedding-events-in-pushkar/">Weddings and family functions in Pushkar</a>',
        '<a href="/wellness-yoga-camp-pushkar/">Yoga and wellness retreats</a>',
        'Corporate offsites, team outings and school groups',
        'Spiritual and pilgrim groups visiting Pushkar and Ajmer',
      ] },
      { heading: 'How to plan a mobile camp', paragraphs: [
        'Share your location, dates, number of guests and the kind of arrangements you need (tents, seating, lighting, dining, cultural programme). The team will discuss what is possible and confirm the arrangements, timelines and costs directly with you.',
        'Permissions for the site, local rules and weather all affect what can be arranged, so the earlier you enquire the better, especially for the November fair season.',
      ] },
    ],
    faqs: [
      { q: 'Where can a mobile camp be set up?', a: 'That depends on the site, access and local permissions. Share your preferred location and the team will discuss what is possible.' },
      { q: 'What is the minimum group size?', a: 'Requirements differ for each event. Contact us with your group size and dates for a clear answer.' },
      { q: 'Can you provide tents for the Pushkar Fair?', a: 'Please enquire as early as possible for the fair season. The team will confirm availability and arrangements for your dates.' },
      { q: 'How far in advance should I book?', a: 'For festivals, weddings and large groups, enquire several weeks or months ahead so there is time to plan and confirm everything.' },
    ],
    related: ['/swiss-tent/', '/services/night-camping-pushkar/', '/wedding-events-in-pushkar/'],
    enquiry: 'Mobile Camping',
    ctaLabel: 'Discuss a Mobile Camp',
  },
  {
    path: '/services/jungle-safari-pushkar/',
    label: 'Jungle Safari Pushkar',
    cardText: 'Explore the rugged Aravalli hill country, birdlife and wildlife around Pushkar.',
    icon: 'leaf',
    eyebrow: 'Jungle Safari',
    title: 'Jungle safari near Pushkar, <em>into the Aravalli wilds.</em>',
    metaTitle: 'Jungle Safari in Pushkar | Aravalli Wildlife & Nature Safari',
    metaDescription: 'Discover a jungle safari near Pushkar through the rugged Aravalli hills. Look out for peacocks, nilgai and desert birdlife on a nature drive. Enquire for current routes.',
    lead: 'Beyond the dunes, the Aravalli hills around Pushkar hide a quieter world of rocky ridges, scrub forest and wildlife. A jungle safari is a chance to see this other side of the region.',
    photo: 'jungle',
    inset: 'journey',
    insetLabel: 'Real guests on safari',
    highlights: [
      { icon: 'mountain', title: 'Aravalli landscapes', text: 'Rocky ridges, seasonal streams and dry deciduous scrub, a contrast to the sand dunes.' },
      { icon: 'leaf', title: 'Wildlife & birds', text: 'Keep watch for peafowl, nilgai, partridges and other birds of the region.' },
      { icon: 'sun', title: 'Early starts', text: 'Wildlife is most active in the cooler hours of early morning and late afternoon.' },
    ],
    sections: [
      { heading: 'The wild side of Pushkar', paragraphs: [
        'Pushkar lies in a valley of the Aravalli range, one of the oldest mountain ranges in the world. The hills and scrub forest around it are home to India’s national bird, the peacock, as well as nilgai (blue bull), and a wide variety of resident and migratory birds.',
        'A jungle safari is a nature drive through this terrain, focused on landscapes, birdwatching and the chance of spotting wildlife. Sightings are never guaranteed, which is part of the magic.',
      ] },
      { heading: 'Best time for a jungle safari', paragraphs: [
        'The cooler months from <strong>October to March</strong> are the most comfortable, and winter brings migratory birds to the region. After the monsoon (August–September) the hills turn green and the views are at their freshest.',
        confirm,
      ] },
      { heading: 'Tips for a better safari', paragraphs: ['A little preparation goes a long way:'], list: [
        'Wear earthy, neutral colours and avoid strong perfumes',
        'Carry binoculars and a camera with a zoom lens if you have one',
        'Keep voices low and follow your driver’s and guide’s instructions',
        'Never feed or approach wild animals',
        'Bring water, sun protection and a light jacket for early mornings',
      ] },
    ],
    faqs: [
      { q: 'Which animals can I see on a jungle safari near Pushkar?', a: 'Commonly seen species in the region include peafowl, nilgai and a variety of birds. Wildlife sightings depend on season and luck and cannot be guaranteed.' },
      { q: 'Where does the jungle safari go?', a: 'Routes depend on season and conditions. The team will confirm the current route and duration when you enquire.' },
      { q: 'Is the jungle safari suitable for children?', a: 'Many families enjoy nature drives. Share the ages of your group so the team can advise.' },
      { q: 'Can I combine a jungle safari with a desert safari?', a: 'Yes, you can enquire about combining a morning jungle safari with an evening desert safari or camp stay.' },
    ],
    related: ['/services/jeep-safari-pushkar/', '/services/night-safari-pushkar/', '/things-to-do-in-pushkar/'],
    enquiry: 'Jungle Safari',
    ctaLabel: 'Enquire About a Jungle Safari',
  },
  {
    path: '/services/night-safari-pushkar/',
    label: 'Night Safari Pushkar',
    cardText: 'Head out after dark for moonlit dunes, cool air and starry skies.',
    icon: 'moon',
    eyebrow: 'Night Safari',
    title: 'Night safari in Pushkar. <em>The desert after dark.</em>',
    metaTitle: 'Night Safari in Pushkar | Moonlight Desert Safari Rajasthan',
    metaDescription: 'Experience a night safari in Pushkar: moonlit dunes, cool desert air, stargazing and a campfire dinner at the camp. Enquire for current night safari timings.',
    lead: 'Most people see the desert by day. A night safari shows you its quieter, cooler, starlit side, and ends back at the camp with a warm fire and dinner.',
    photo: 'nightSafari',
    inset: 'fire',
    insetLabel: 'Evenings at our camp',
    highlights: [
      { icon: 'moon', title: 'Moonlit dunes', text: 'The sand glows silver under a bright moon, a completely different landscape.' },
      { icon: 'sparkle', title: 'Stargazing', text: 'Clear winter nights away from town lights are perfect for spotting stars.' },
      { icon: 'flame', title: 'Back to the campfire', text: 'Return to the camp for a cultural performance, dinner and the warmth of the fire.' },
    ],
    sections: [
      { heading: 'What to expect on a night safari', paragraphs: [
        'After sunset the desert cools quickly and becomes wonderfully quiet. A night safari takes you out into the dunes after dark to enjoy the cool air, the silhouettes of the hills and, on clear nights, a sky full of stars.',
        'Nights around the full moon are especially beautiful, while darker nights near the new moon are better for stargazing.',
      ] },
      { heading: 'Pair it with a desert evening', paragraphs: [
        'A night safari fits naturally into a <a href="/services/night-camping-pushkar/">night camping</a> stay: start with a sunset <a href="/services/camel-safari-pushkar/">camel ride</a>, enjoy the <a href="/cultural-experiences/">folk dance and fire show</a>, then head out under the stars.',
        confirm,
      ] },
      { heading: 'Staying comfortable at night', paragraphs: ['Desert nights can surprise you, especially in winter:'], list: [
        'Carry a warm jacket, shawl or sweater from November to February',
        'Wear closed, comfortable shoes',
        'Keep a small torch or your phone’s light handy',
        'Stay with your group and follow the team’s guidance',
      ] },
    ],
    faqs: [
      { q: 'What time does the night safari start?', a: 'Timings change with the season and sunset time. The team will confirm the current schedule when you enquire.' },
      { q: 'Is a night safari safe?', a: 'Night safaris are guided by the team, and guests are asked to stay with the group and follow instructions at all times.' },
      { q: 'Can I see wildlife at night?', a: 'You may spot desert creatures or hear birds at night, but wildlife sightings cannot be guaranteed.' },
      { q: 'Can I book a night safari without staying overnight?', a: 'Contact us with your plans. The team will tell you which options are available for your date.' },
    ],
    related: ['/services/night-camping-pushkar/', '/services/jeep-safari-pushkar/', '/cultural-experiences/'],
    enquiry: 'Night Safari',
    ctaLabel: 'Enquire About a Night Safari',
  },
];

// The services hub. Some services already have dedicated hand-built pages or guides;
// linking to those (instead of duplicating them) avoids pages competing for the same search.
export type ServiceCard = { label: string; text: string; href: string; photo: PhotoKey; icon: string; enquiry: string };
export type ServiceGroup = { id: string; title: string; text: string; items: ServiceCard[] };

const fromPage = (path: string, photo?: PhotoKey): ServiceCard => {
  const page = servicePages.find(p => p.path === path);
  if (!page) throw new Error(`Unknown service page ${path}`);
  return { label: page.label, text: page.cardText, href: page.path, photo: photo ?? page.photo, icon: page.icon, enquiry: page.enquiry };
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'safaris', title: 'Desert & <em>wildlife safaris</em>', text: 'From slow camel rides to jeep adventures and starlit drives.',
    items: [
      fromPage('/services/camel-safari-pushkar/'),
      fromPage('/services/jeep-safari-pushkar/', 'safari'),
      { label: 'Desert Safari Pushkar', text: 'Camel, jeep and night safaris across the dunes around Pushkar.', href: '/desert-safari/', photo: 'safariDunes', icon: 'sun', enquiry: 'Desert Safari' },
      fromPage('/services/night-safari-pushkar/'),
      fromPage('/services/jungle-safari-pushkar/'),
    ],
  },
  {
    id: 'stays', title: 'Camps & <em>tent stays</em>', text: 'Sleep under canvas, close to the dunes and the stars.',
    items: [
      fromPage('/services/night-camping-pushkar/'),
      fromPage('/services/mobile-camping/'),
      { label: 'Swiss Tent on Rent', text: 'Furnished Swiss tents for your stay, group or event in Pushkar.', href: '/swiss-tent/', photo: 'tent', icon: 'bed', enquiry: 'Swiss Tent Stay' },
    ],
  },
  {
    id: 'culture', title: 'Culture & <em>festivals</em>', text: 'The colour, music and celebrations of Rajasthan.',
    items: [
      { label: 'Culture & Folk Dance Pushkar', text: 'Rajasthani folk dance, music and a fire show at the camp.', href: '/cultural-experiences/', photo: 'dance', icon: 'flame', enquiry: 'Folk Dance & Fire Show' },
      { label: 'Pushkar Camel Fair', text: 'Stay close to the world-famous Pushkar Mela in November.', href: '/pushkar-fair-2026/', photo: 'camelFair', icon: 'calendar', enquiry: 'Pushkar Camel Fair' },
      { label: 'Pushkar Holi Festival', text: 'Celebrate the festival of colours in Pushkar, then unwind at the camp.', href: '/pushkar-holi-festival/', photo: 'holi', icon: 'sparkle', enquiry: 'Holi in Pushkar' },
    ],
  },
];

export const allServiceCards: ServiceCard[] = serviceGroups.flatMap(g => g.items);
