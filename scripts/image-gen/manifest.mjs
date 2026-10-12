// Every generated asset has a single, declared placement. Generated images are
// atmosphere only (landscapes, still life, textures): they never depict the
// camp's tents, rooms, guests or performers, which use the client's own photos.
const STYLE = 'Editorial travel photography, natural colour grading, true-to-life detail, gentle film grain. No text, no logos, no watermarks, no borders.';

export const imageManifest = [
  {
    id: 'ai-hero-dunes',
    placement: 'Home hero, full-bleed background behind headline and real photo cards',
    orientation: 'landscape', priority: 'hero', traits: ['photorealistic-complex', 'complex-lighting'],
    alt: 'Golden-hour sand dunes with tyre tracks and low Aravalli hills near Pushkar',
    prompt: `Wide photorealistic landscape of soft rolling sand dunes on the edge of Pushkar, Rajasthan at golden hour. Low hazy Aravalli hills on the far horizon, a few scattered khejri trees and dry desert shrubs, fresh jeep tyre tracks curving gracefully through the sand from the lower right towards the hills. Warm amber low sun on the right edge with long shadows, honey and apricot tones, calm dusky sky. The left half of the frame is quiet, simple dune and sky for headline text. No people, no vehicles, no buildings, no animals. ${STYLE}`,
  },
  {
    id: 'ai-night-sky',
    placement: 'Home "A day at the camp" night step and closing booking band background',
    orientation: 'landscape', priority: 'important', traits: [],
    alt: 'Starry night sky and the Milky Way above quiet desert dunes',
    prompt: `Photorealistic night landscape in the Rajasthan desert: the Milky Way arching over smooth low sand dunes, a single silhouetted khejri tree, a faint warm orange glow along the horizon. Deep indigo and navy sky with natural star colours, subtle sand texture lit by starlight. Calm, spacious composition with darker lower third. No people, no tents, no buildings. ${STYLE}`,
  },
  {
    id: 'ai-safari-dunes',
    placement: 'Desert Safari page hero background',
    orientation: 'landscape', priority: 'routine', traits: [],
    alt: 'Wind-rippled dune ridge crossed by fresh jeep tracks in late afternoon light',
    prompt: `Photorealistic close-to-mid view of a sculpted sand dune ridge in Rajasthan crossed by deep fresh jeep tyre tracks, delicate wind ripples, fine sand dust lifting in the breeze, late-afternoon side light creating strong texture, warm ochre and gold palette, pale blue sky with soft clouds, sparse desert shrubs. No people, no vehicles. ${STYLE}`,
  },
  {
    id: 'ai-culture-still',
    placement: 'Cultural Experiences page hero background',
    orientation: 'landscape', priority: 'routine', traits: [],
    alt: 'Mirror-work textile, brass ankle bells and a dholak drum glowing in firelight',
    prompt: `Photorealistic low still life on desert sand at night: richly embroidered Rajasthani mirror-work fabric in magenta, emerald and gold, a string of brass ghungroo ankle bells and a traditional dholak drum, lit by warm flickering firelight with glowing ember bokeh in the dark background. Rich contrast, deep shadows, sparkling mirror reflections. No people, no faces. ${STYLE}`,
  },
  {
    id: 'ai-lantern-dusk',
    placement: 'Contact page hero visual',
    orientation: 'portrait', priority: 'routine', traits: [],
    alt: 'A glowing brass lantern resting on sand at dusk',
    prompt: `Photorealistic vertical photograph of an ornate pierced brass Rajasthani lantern glowing warmly on smooth sand at dusk, casting patterned light, soft low dunes behind, sky fading from apricot to dusky violet, shallow depth of field. Peaceful and welcoming mood. No people, no tents, no buildings. ${STYLE}`,
  },
  {
    id: 'ai-chai-welcome',
    placement: 'About page hospitality feature',
    orientation: 'portrait', priority: 'routine', traits: [],
    alt: 'Masala chai in clay cups on a brass tray over a block-printed cotton rug',
    prompt: `Photorealistic vertical still life: two clay kulhad cups of steaming masala chai on a small engraved brass tray, resting on a hand block-printed cotton dhurrie in maroon, ochre and ivory, soft warm morning sunlight with gentle leaf shadows, a few cardamom pods beside the tray. Welcoming Rajasthani hospitality. No people, no hands. ${STYLE}`,
  },
  {
    id: 'ai-aravalli-sunrise',
    placement: 'Experiences page hero background',
    orientation: 'landscape', priority: 'routine', traits: [],
    alt: 'Sunrise over the misty Aravalli hills with desert scrub in the foreground',
    prompt: `Photorealistic wide landscape at sunrise: layered misty Aravalli hill ridges near Pushkar, Rajasthan, soft peach and gold light, sandy ground with desert scrub and a lone khejri tree in the foreground, a few birds in the distance. Serene and open composition with clear sky in the upper half. No people, no buildings, no vehicles. ${STYLE}`,
  },
  {
    id: 'ai-blockprint',
    placement: 'Low-opacity decorative texture for light sections and footer',
    orientation: 'square', priority: 'routine', traits: [],
    outputWidths: [560], webpQuality: 52, // decorative texture: one small, low-quality tile
    alt: '',
    prompt: `Flat top-down seamless textile surface: traditional Rajasthani hand block print on natural ivory cotton, small repeating paisley and buti flower motifs in deep maroon and muted ochre, slightly irregular hand-printed edges and natural cotton weave visible. Even soft lighting, no folds, no shadows, fills the entire frame edge to edge. ${STYLE}`,
  },
  // Service and guide pages (added for the services hub and SEO guides).
  {
    id: 'ai-camel-safari',
    placement: 'Camel Safari service hero and services hub card',
    orientation: 'landscape', priority: 'important', traits: [],
    alt: 'A caravan of saddled camels walking along a dune ridge at sunset near Pushkar',
    prompt: `Photorealistic wide landscape: a short caravan of four camels with colourful traditional Rajasthani saddles and tassels walking in a line along a soft sand dune ridge near Pushkar at sunset, long shadows, warm amber and rose sky, low hazy Aravalli hills on the horizon. Camels seen from the side at a distance. No riders, no people, no buildings. ${STYLE}`,
  },
  {
    id: 'ai-camel-fair',
    placement: 'Pushkar Fair guide hero and Pushkar Camel Fair service card',
    orientation: 'landscape', priority: 'important', traits: ['multiple-subjects'],
    alt: 'Decorated camels resting on a sandy fairground with hills and festival tents in the distance',
    prompt: `Photorealistic wide view of a traditional Rajasthani camel fairground in early morning haze: dozens of camels with embroidered saddle cloths, beaded necklaces and pom-poms resting on sand, a few distant white festival tents and colourful bunting, rocky Aravalli hills behind, soft golden dust in the air. Only tiny distant human silhouettes, no recognisable faces. No text, no signage. ${STYLE}`,
  },
  {
    id: 'ai-holi-colours',
    placement: 'Pushkar Holi Festival guide hero and service card',
    orientation: 'landscape', priority: 'routine', traits: [],
    alt: 'Brass bowls of bright gulal colour powder with clouds of colour drifting in the sunlight',
    prompt: `Photorealistic festive still life outdoors in bright sunshine: brass bowls heaped with vivid gulal powder in pink, saffron, green, yellow and blue on a sandstone step, scattered marigold petals, soft clouds of coloured powder drifting in the air, warm Rajasthani light, shallow depth of field. No people, no hands, no faces. ${STYLE}`,
  },
  {
    id: 'ai-campfire-night',
    placement: 'Night Camping service hero and services hub card',
    orientation: 'landscape', priority: 'routine', traits: [],
    alt: 'A crackling campfire with floor cushions and lanterns on the dunes under a starry sky',
    prompt: `Photorealistic night scene on smooth desert dunes: a small crackling campfire in a ring of stones, low floor cushions and folded Rajasthani quilts on a dhurrie rug around it, two glowing brass lanterns, a deep starry sky with the faint Milky Way. Warm firelight against cool blue night. No people, no tents, no buildings. ${STYLE}`,
  },
  {
    id: 'ai-night-safari',
    placement: 'Night Safari service hero',
    orientation: 'landscape', priority: 'routine', traits: [],
    alt: 'An open safari jeep with headlights glowing on a sandy track at blue hour under early stars',
    prompt: `Photorealistic blue-hour landscape: an open-top white safari jeep parked on a sandy desert track among low dunes and shrubs, headlights glowing warmly and lighting the sand ahead, the first stars appearing in a deep blue sky with a thin crescent moon, faint orange afterglow on the horizon. No people, no number plates, no text. ${STYLE}`,
  },
  {
    id: 'ai-aravalli-jungle',
    placement: 'Jungle Safari service hero',
    orientation: 'landscape', priority: 'routine', traits: [],
    alt: 'A peacock on a rock beside a dirt track through dry Aravalli scrub forest in morning light',
    prompt: `Photorealistic landscape of dry deciduous scrub forest in the Aravalli hills of Rajasthan in soft morning light: a rough dirt track winding between dhok and acacia trees and rocky outcrops, a peacock standing on a boulder at the side of the track, a pair of nilgai antelope grazing in the distance, light mist in the valley. No people, no vehicles. ${STYLE}`,
  },
  {
    id: 'ai-pushkar-ghats',
    placement: 'Things to do in Pushkar, Pushkar Lake and temple guides',
    orientation: 'landscape', priority: 'important', traits: ['architecture'],
    alt: 'Illustrative view of whitewashed lakeside ghats and temple domes at sunrise',
    prompt: `Photorealistic wide view of a calm sacred lake in a small Rajasthani desert town at sunrise: whitewashed ghats with wide stone steps descending to the water, small domed temples and old havelis around the shore, pigeons in flight, a few floating clay diyas on the still water, rocky hills with a tiny hilltop temple in the background, soft pink and gold light reflected in the lake. Only tiny distant figures, no recognisable faces, no text. ${STYLE}`,
  },
  {
    id: 'ai-hot-air-balloons',
    placement: 'Hot Air Balloon Safari guide hero',
    orientation: 'landscape', priority: 'routine', traits: [],
    alt: 'Colourful hot air balloons rising over desert dunes and hills at sunrise',
    prompt: `Photorealistic wide landscape at sunrise: four colourful hot air balloons drifting low over soft sand dunes and scattered khejri trees, rocky Aravalli hills on the horizon, hazy golden light, clear pale sky. No text or logos on the balloons, no people visible. ${STYLE}`,
  },
  {
    id: 'ai-yoga-sunrise',
    placement: 'Wellness Yoga Camp guide hero',
    orientation: 'landscape', priority: 'routine', traits: [],
    alt: 'A rolled-out yoga mat and brass singing bowl on a rug facing the sunrise over the dunes',
    prompt: `Photorealistic calm sunrise scene on a dune top: a natural cotton yoga mat rolled out on a block-printed rug, a small brass singing bowl and a clay cup of herbal tea beside it, soft golden light rising over misty low hills, gentle wind ripples in the sand. Peaceful and minimal composition. No people. ${STYLE}`,
  },
  {
    id: 'ai-wedding-decor',
    placement: 'Wedding Events in Pushkar guide hero',
    orientation: 'landscape', priority: 'routine', traits: [],
    alt: 'An outdoor wedding mandap decorated with marigold garlands and lanterns at dusk',
    prompt: `Photorealistic outdoor Rajasthani wedding setting at dusk on open sandy ground: a mandap canopy draped with ivory fabric and long marigold and rose garlands, brass lanterns and diyas lining a petal-strewn aisle, low cushioned seating, string lights, deep violet and apricot sky. No people, no text. ${STYLE}`,
  },
  {
    id: 'ai-mobile-camp',
    placement: 'Mobile Camping service hero',
    orientation: 'landscape', priority: 'routine', traits: [],
    alt: 'Illustrative portable canvas tent pitched among remote dunes at dusk with a lantern outside',
    prompt: `Photorealistic remote desert landscape at dusk: a single portable canvas expedition tent pitched among quiet sand dunes, a lit brass lantern and two folding camp chairs on a small rug outside it, a few desert shrubs, sky fading from apricot to indigo with first stars. Feeling of freedom and adventure. No people, no vehicles, no text. ${STYLE}`,
  },
  {
    id: 'ai-temple-diyas',
    placement: 'Brahma Temple guide hero',
    orientation: 'landscape', priority: 'routine', traits: [],
    alt: 'Brass diyas, marigold garlands and offerings on old temple steps at dusk',
    prompt: `Photorealistic close-to-mid view of worn sandstone temple steps at dusk in a Rajasthani pilgrimage town: rows of lit brass and clay diyas, marigold and rose garlands, a small brass bell and a plate of flower offerings, a carved red sandstone pillar softly out of focus behind, warm glowing light against a deep blue evening. No people, no deities or idols, no text. ${STYLE}`,
  },
];
