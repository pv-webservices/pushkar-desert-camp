// Server-side (build-time) image generation. Reads OPENAI_API_KEY from the
// environment or the local, git-ignored .env file. Nothing here ships to the browser.
//
//   node scripts/generate-images.mjs                 generate missing assets
//   node scripts/generate-images.mjs --only=ai-hero-dunes --force
//   node scripts/generate-images.mjs --premium=ai-safari-dunes   escalate to Sunburst
//   node scripts/generate-images.mjs --dry-run       show routing only
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { imageConfig } from './image-gen/config.mjs';
import { routeImage } from './image-gen/router.mjs';
import { imageManifest } from './image-gen/manifest.mjs';

const root = path.resolve(import.meta.dirname, '..');
const rawDir = path.join(root, 'assets-src', 'generated');
const outDir = path.join(root, 'public', 'images');

const args = Object.fromEntries(process.argv.slice(2).map(a => {
  const [k, v] = a.replace(/^--/, '').split('=');
  return [k, v ?? true];
}));
const only = args.only ? String(args.only).split(',') : null;
const escalate = new Set(args.premium ? String(args.premium).split(',') : []);

try { process.loadEnvFile(path.join(root, '.env')); } catch { /* env may come from the shell */ }
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey && !args['dry-run']) {
  console.error('OPENAI_API_KEY is not set. Add it to .env (never commit it) or the shell environment.');
  process.exit(1);
}

async function exists(file) {
  try { await fs.access(file); return true; } catch { return false; }
}

async function requestImage({ model, quality, size }, prompt) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), imageConfig.requestTimeoutMs);
  try {
    const res = await fetch(imageConfig.endpoint, {
      method: 'POST',
      signal: controller.signal,
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, prompt, size, quality, n: 1 }),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(`API ${res.status}: ${body?.error?.message || res.statusText}`);
    const b64 = body?.data?.[0]?.b64_json;
    if (!b64) throw new Error('API response did not contain image data');
    return Buffer.from(b64, 'base64');
  } finally {
    clearTimeout(timer);
  }
}

async function writeDerivatives(spec, buffer) {
  const { id } = spec;
  const meta = await sharp(buffer).metadata();
  const written = [];
  for (const width of spec.outputWidths || imageConfig.outputWidths) {
    const target = Math.min(width, meta.width);
    const file = path.join(outDir, `${id}-${width}.webp`);
    await sharp(buffer).resize({ width: target, withoutEnlargement: true })
      .webp({ quality: spec.webpQuality || imageConfig.webpQuality, effort: 6 }).toFile(file);
    written.push(path.basename(file));
  }
  return { width: meta.width, height: meta.height, files: written };
}

await fs.mkdir(rawDir, { recursive: true });
await fs.mkdir(outDir, { recursive: true });
const manifestFile = path.join(rawDir, 'manifest.json');
const record = JSON.parse(await fs.readFile(manifestFile, 'utf8').catch(() => '{}'));
let failures = 0;

for (const spec of imageManifest) {
  if (only && !only.includes(spec.id)) continue;
  const traits = escalate.has(spec.id) ? [...spec.traits, 'retry-after-flare'] : spec.traits;
  const route = routeImage({ ...spec, traits });
  const rawFile = path.join(rawDir, `${spec.id}.png`);
  console.log(`${spec.id}: ${route.model} · ${route.quality} · ${route.size}`);
  if (args['dry-run']) continue;
  try {
    if (args.force || !(await exists(rawFile))) {
      const started = Date.now();
      const image = await requestImage(route, spec.prompt);
      await fs.writeFile(rawFile, image);
      console.log(`  generated in ${((Date.now() - started) / 1000).toFixed(1)}s`);
    } else {
      console.log('  reusing existing source (use --force to regenerate)');
    }
    const output = await writeDerivatives(spec, await fs.readFile(rawFile));
    record[spec.id] = { ...route, placement: spec.placement, alt: spec.alt, ...output };
  } catch (error) {
    failures += 1;
    console.error(`  failed: ${error.message}`);
  }
}

if (!args['dry-run']) await fs.writeFile(manifestFile, JSON.stringify(record, null, 2));
process.exit(failures ? 1 : 0);
