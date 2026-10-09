import { imageConfig } from './config.mjs';

// Traits that justify the premium (Sunburst) model. Anything else uses Flare.
const PREMIUM_TRAITS = new Set([
  'hero', 'photorealistic-complex', 'architecture', 'interior', 'multiple-subjects',
  'complex-lighting', 'reference-image', 'brand-placement', 'detail-sensitive', 'retry-after-flare',
]);

/**
 * Pick model, quality and size for an asset from its declared purpose.
 * @param {{ orientation: 'square'|'landscape'|'portrait', priority: 'routine'|'important'|'hero', traits?: string[] }} spec
 */
export function routeImage(spec) {
  const traits = spec.traits || [];
  const premium = spec.priority === 'hero' || traits.some(t => PREMIUM_TRAITS.has(t));
  const highQuality = premium || spec.priority === 'important';
  const size = imageConfig.sizes[spec.orientation];
  if (!size) throw new Error(`Unknown orientation "${spec.orientation}"`);
  return {
    model: premium ? imageConfig.models.premium : imageConfig.models.standard,
    quality: highQuality ? imageConfig.quality.premium : imageConfig.quality.default,
    size,
  };
}
