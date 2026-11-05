#!/usr/bin/env node
// Content checker for the ENGL 202D Project 4 blog requirements.
//   node scripts/check-content.mjs          draft mode: reports, fails only on broken basics
//   node scripts/check-content.mjs --final  final-readiness: fails unless every requirement passes
// Word and paragraph counts come from the Markdown body (excluding headings,
// images, and frontmatter). Structure checks (one h1, h2 count, inline links,
// figure/alt) run against the built HTML in dist/, so run `npm run build` first.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';

const FINAL = process.argv.includes('--final');
const root = fileURLToPath(new URL('..', import.meta.url));
const blogDir = join(root, 'src/content/blog');
const dist = join(root, 'dist');
const publicDir = join(root, 'public');
const base = (process.env.BASE_PATH || '').replace(/\/$/, '');

const words = (s) => s.trim().split(/\s+/).filter(Boolean).length;
const plain = (s) => s
  .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
  .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
  .replace(/[*_`]/g, '')
  .replace(/\s+/g, ' ')
  .trim();

let hardFail = false;
let finalFail = false;
const fail = (msg) => { hardFail = true; console.log(`  ✗ ${msg}`); };
const notReady = (msg) => { finalFail = true; console.log(`  ✗ ${msg}`); };
const ok = (msg) => console.log(`  ✓ ${msg}`);
const warn = (msg) => console.log(`  ! ${msg}`);

const files = readdirSync(blogDir).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
console.log(`\nContent check (${FINAL ? 'FINAL readiness' : 'draft'} mode)\n`);
if (files.length >= 3) ok(`${files.length} posts in src/content/blog`); else notReady(`only ${files.length} posts (need 3)`);

const haveDist = existsSync(join(dist, 'index.html'));
if (!haveDist) warn('dist/ not found; run `npm run build` to check rendered HTML');
const blogIndex = haveDist && existsSync(join(dist, 'blog/index.html')) ? readFileSync(join(dist, 'blog/index.html'), 'utf8') : '';

for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  const raw = readFileSync(join(blogDir, file), 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  console.log(`\n▸ ${slug}`);
  if (!m) { fail('missing frontmatter'); continue; }
  const fm = parseYaml(m[1]);
  const body = m[2];
  console.log(`  status: ${fm.status}`);
  if (fm.status !== 'final') notReady(`status is "${fm.status}", not "final"`);
  if (fm.status === 'outline') notReady('not written yet (outline/scaffold only); hidden from production builds');

  for (const k of ['title', 'description', 'topic']) if (!fm[k]) fail(`empty ${k}`);
  if (/^Working description/i.test(fm.description || '')) notReady('description is still a working placeholder');
  const img = fm.image || {};
  for (const k of ['src', 'alt', 'caption', 'creator', 'sourceUrl', 'license']) if (!img[k]) fail(`image.${k} empty`);
  if (img.src && !existsSync(join(publicDir, img.src))) fail(`image file missing: public${img.src}`);
  if (img.placeholder) notReady('image is a placeholder');
  if (!img.approved) notReady('image not yet approved by Reyna (image.approved: false)');

  // Body paragraphs (skip headings, images, HTML, list items, blank lines)
  const blocks = body.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  const paras = blocks.filter((b) => !/^(#|!\[|<|[-*] |\d+\. |>)/.test(b));
  const h2s = blocks.filter((b) => /^## /.test(b)).length;
  const total = words(plain(paras.join(' ')));
  if (fm.status !== 'outline') {
    (total >= 200 && total <= 400 ? ok : notReady)(`body words: ${total} (need 200–400)`);
    (h2s >= 2 ? ok : notReady)(`h2 subheadings: ${h2s} (need ≥ 2)`);
    console.log('  paragraph word counts (target 25–35):');
    paras.forEach((p, i) => {
      const n = words(plain(p));
      const flag = n < 25 || n > 35 ? '  ← outside target' : '';
      console.log(`    ¶${String(i + 1).padStart(2)}: ${String(n).padStart(3)}${flag}`);
    });
    const outliers = paras.filter((p) => { const n = words(plain(p)); return n < 25 || n > 35; }).length;
    if (outliers) warn(`${outliers} paragraph(s) outside 25–35 words (target, review rather than hard rule)`);
    const inline = (body.match(/\[[^\]]+\]\(https?:\/\/[^)]+\)/g) || []).length;
    (inline >= 1 ? ok : notReady)(`inline external source links: ${inline}`);
    if (/—/.test(body) || /—/.test(fm.title)) notReady('contains an em dash');
  }

  if (haveDist) {
    const pagePath = join(dist, 'blog', slug, 'index.html');
    if (!existsSync(pagePath)) {
      (fm.status === 'outline' ? warn : fail)(`no built page at dist/blog/${slug}/ ${fm.status === 'outline' ? '(expected: outline posts are excluded from production)' : ''}`);
      if (fm.status === 'outline') notReady('not reachable in the production build');
      continue;
    }
    const html = readFileSync(pagePath, 'utf8');
    const h1 = (html.match(/<h1[\s>]/g) || []).length;
    (h1 === 1 ? ok : fail)(`rendered h1 count: ${h1}`);
    const bodyHtml = (html.match(/data-article-body[^>]*>([\s\S]*?)<\/div>\s*<p class="back end/) || [])[1] || '';
    const rh2 = (bodyHtml.match(/<h2[\s>]/g) || []).length;
    (rh2 >= 2 ? ok : notReady)(`rendered h2 in body: ${rh2}`);
    const rlinks = (bodyHtml.match(/<a [^>]*href="https?:\/\//g) || []).length;
    (rlinks >= 1 ? ok : notReady)(`rendered inline external links: ${rlinks}`);
    const fig = /<figure[\s\S]*?<img[^>]+alt="[^"]+"[\s\S]*?<figcaption[\s\S]*?Image source/.test(html);
    (fig ? ok : fail)('figure with alt text, caption, and image source link');
    const linked = blogIndex.includes(`href="${base}/blog/${slug}/"`);
    (linked ? ok : fail)('linked from /blog/');
  }
}

// Public-output privacy scan
if (haveDist) {
  console.log('\n▸ public output scan');
  const banned = [/example\.com/i, /REYNA TO FILL/i, /lorem ipsum/i, /TODO/];
  // Private exclusion terms live outside the repo so they never become public.
  const privateList = join(root, '..', 'site-notes', 'private-terms.txt');
  if (existsSync(privateList)) {
    for (const line of readFileSync(privateList, 'utf8').split('\n')) {
      const t = line.trim();
      if (t && !t.startsWith('#')) banned.push(new RegExp(t, 'i'));
    }
    ok(`loaded ${banned.length - 4} private exclusion terms`);
  } else warn('private exclusion list not found; scanning generic placeholders only');
  const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((d) => d.isDirectory() ? walk(join(dir, d.name)) : [join(dir, d.name)]);
  const hits = [];
  for (const f of walk(dist)) {
    if (!/\.(html|js|css|svg|xml|txt|json)$/.test(f)) continue;
    const s = readFileSync(f, 'utf8');
    for (const re of banned) if (re.test(s)) hits.push(`${f.replace(dist, 'dist')}: ${re}`);
  }
  hits.length ? hits.forEach((h) => fail(`excluded term in public output: ${h}`)) : ok('no excluded terms or placeholder URLs in dist/');
  const home = readFileSync(join(dist, 'index.html'), 'utf8');
  if (/Headshot placeholder/.test(home) || !/<img[^>]+class="headshot/.test(home)) notReady('headshot is still a placeholder (set profile.headshot in src/data/profile.ts)');
}

console.log('');
if (hardFail) { console.log('RESULT: FAIL (broken basics; fix before sharing)'); process.exit(1); }
if (FINAL && finalFail) { console.log('RESULT: NOT READY for final submission (see ✗ items above)'); process.exit(1); }
console.log(finalFail ? 'RESULT: build is healthy, but NOT final-ready yet. Run with --final to enforce.' : 'RESULT: PASS');
