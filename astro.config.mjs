// @ts-check
import { defineConfig } from 'astro/config';

// Deployment origin and base path come from environment variables so the
// same source works locally, on Vercel (root), and on a GitHub Pages
// project site (served under /repository-name/).
//   SITE_URL   e.g. https://your-name.github.io   (no trailing slash)
//   BASE_PATH  e.g. /repository-name              (omit for root hosting)
// Leave SITE_URL unset until a real destination is chosen: canonical tags
// and absolute social URLs are only emitted when it is set.
const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
});
