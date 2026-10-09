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
];
