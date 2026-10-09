import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');
const site = env.PUBLIC_SITE_URL || process.env.PUBLIC_SITE_URL;
if (site && !/^https:\/\//.test(site)) throw new Error('PUBLIC_SITE_URL must be an https URL.');
// PORT lets tooling assign a free port; Astro's default otherwise.
const port = Number(process.env.PORT) || 4321;
export default defineConfig({ site: site || undefined, output: 'static', trailingSlash: 'always', server: { port } });
