# Reyna Gowie: portfolio and blog

A small static site built with [Astro](https://astro.build). There's no
server, database, or login. Pages are plain HTML files generated from
the files in `src/`.

**History:** every change is listed by date in [CHANGELOG.md](CHANGELOG.md), and `git log` shows each commit.

## Run it on your computer

You need Node.js 22.23 or newer (`node -v` to check).

```bash
npm install          # first time only
npm run dev          # live preview at http://localhost:4321
npm run build        # makes the finished site in dist/
npm run preview      # serves dist/ so you can click through the real build
npm run check        # type check + content check (run after build)
npm run check:final  # fails unless every assignment requirement passes
```

## Where to edit things

| What | File |
|---|---|
| Name, LinkedIn, email, headshot, graduation, IBM line | `src/data/profile.ts` |
| Guess Who? course details (term, time, seats) | `src/data/profile.ts` (`guessWho`) |
| Talks and events, including whether State of State was delivered | `src/data/speaking.ts` |
| Blog posts | `src/content/blog/*.md` |
| Page text | `src/pages/*.astro` |
| Colors, fonts, spacing, corner sizes | `src/styles/global.css` (the design rules are listed at the top) |
| Draggable skills box, photo strip | `src/components/SkillsPile.astro`, `src/components/PhotoStrip.astro` |
| Images | `public/images/` |

### Add your headshot
1. Put the photo in `public/images/`, for example `public/images/reyna-gowie.jpg`.
2. In `src/data/profile.ts`, set
   `headshot: { src: '/images/reyna-gowie.jpg', alt: 'Reyna Gowie smiling, wearing ...' }`.

### Write a blog post
Each post's frontmatter has a `status`:
- `outline`: not written yet. Shows in `npm run dev` only and is left out of real builds.
- `draft`: you're writing it. It's included in builds.
- `review`: full text, waiting for your final read.
- `final`: approved. `check:final` only passes when all three are `final`.

Set `image.approved: true` once you've approved a post's image. Don't add
`pubDate` until you've picked a real date.

## Hosting: two options

**Where code is stored and where the site is hosted are separate.** A
GitHub *repository* just stores the source code. **GitHub Pages** and
**Vercel** are two different ways to turn that code into a public
website. Both can build from the same GitHub repository. Nothing has
been published yet.

Private planning notes (content status, asset credits, requirements
checklist) live outside this repo, in `../site-notes/`, so they never
become public.

### Option A: Vercel (simplest)
1. Push this folder to a GitHub repository (private is fine).
2. At vercel.com, choose **Add New → Project** and import that repository.
3. Vercel detects Astro. Confirm: build command `npm run build`, output
   directory `dist`. No environment variables are required.
4. Optional: add `SITE_URL` = your Vercel URL (for example
   `https://reyna-gowie.vercel.app`) so canonical and social-preview tags
   are filled in. Add `PUBLIC_INDEXABLE=true` when you want search engines
   to index the site.
5. Vercel gives each push a preview URL and serves `main` at the production URL.
6. Open the production URL in a private browser window to confirm your
   instructor can see it without logging in. Turn off Vercel's
   Deployment Protection for production if it asks for a login.

### Option B: GitHub Pages (chosen, active)
This repo is set up as **ReynaGowie/portfolio**, served at
https://reynagowie.github.io/portfolio/. The live workflow is
`.github/workflows/deploy.yml`, and every push to `main` republishes the
site. `deploy-templates/` keeps a generic copy for a project-repo setup.

General steps, for reference:
1. Push to a GitHub repository.
2. Put the workflow at `.github/workflows/deploy.yml`.
3. Set `SITE_URL` and `BASE_PATH` in that file:
   - Repo named `username.github.io` → site at `https://username.github.io/`, `BASE_PATH: ""`
   - Any other repo name → site at `https://username.github.io/repo-name/`, `BASE_PATH: /repo-name`
4. In the repo, open **Settings → Pages** and set Source to **GitHub Actions**.
5. Push to `main`. Every page is built as `folder/index.html`, so direct
   links like `/repo-name/blog/when-should-ai-ask-first/` work, and URLs
   end with a trailing slash.

Every internal link and image goes through `url()` in `src/lib/url.ts`,
so the site works under the `/portfolio/` prefix. To preview exactly what
GitHub will serve:

```bash
SITE_URL=https://reynagowie.github.io BASE_PATH=/portfolio npm run build
BASE_PATH=/portfolio npm run preview   # then open http://localhost:4321/portfolio/
```

## What's in the project

```
src/components   Header, Footer, ArticleRow, ImageCredit, Headshot, PhotoStrip, SkillsPile
src/layouts      BaseLayout (SEO, nav), ArticleLayout
src/pages        index, about, projects, speaking, contact, 404, blog/
src/content/blog the three posts (Markdown)
src/data         profile, speaking, navigation
scripts/         check-content.mjs
deploy-templates generic GitHub Pages workflow for a project repo
.github/         live GitHub Pages workflow
```
