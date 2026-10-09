// Central image-generation configuration. Every value can be overridden with an
// environment variable so models or quality can change without code edits.
const env = process.env;

export const imageConfig = {
  endpoint: env.OPENAI_IMAGE_ENDPOINT || 'https://api.openai.com/v1/images/generations',
  models: {
    standard: env.IMAGE_MODEL_FLARE || 'gpt-image-2.5-flare',
    premium: env.IMAGE_MODEL_SUNBURST || 'gpt-image-2.5-sunburst',
  },
  quality: {
    default: env.IMAGE_QUALITY_DEFAULT || 'medium',
    premium: env.IMAGE_QUALITY_PREMIUM || 'high',
  },
  sizes: {
    square: env.IMAGE_SIZE_SQUARE || '1024x1024',
    landscape: env.IMAGE_SIZE_LANDSCAPE || '1536x1024',
    portrait: env.IMAGE_SIZE_PORTRAIT || '1024x1536',
  },
  // Responsive WebP derivatives written to public/images.
  outputWidths: [768, 1280, 1600],
  webpQuality: Number(env.IMAGE_WEBP_QUALITY || 78),
  requestTimeoutMs: Number(env.IMAGE_TIMEOUT_MS || 240000),
};
