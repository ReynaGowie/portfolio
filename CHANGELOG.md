# Changelog

What changed on this site and when. Newest first. Each entry lists the
commit(s) so you can see the exact change with `git show <commit>`.

Live site: https://reynagowie.github.io/portfolio/
Repository: https://github.com/ReynaGowie/portfolio

---

## 2026-11-06

### Search, verification, and contact
- **Structured data** on the homepage (schema.org Person): name and other names, roles, organizations, the Onward State article, and links to LinkedIn, Substack, Instagram, GitHub, Gumroad, and Linktree, so search engines can tell these profiles belong to one person. (`f4f2fe2`)
- **Google Search Console verification** added two ways: the HTML file (`public/google568c1edccce41133.html`) and the `google-site-verification` meta tag on every page.
- **Search indexing turned on.** The "noindex" tag is removed from every page, and a sitemap is published at `/portfolio/sitemap-index.xml` (all 9 pages, 404 excluded). (`688b275`)
- **Contact form** on the Contact page, delivered by Web3Forms. Fields: name, email, topic, message; hidden spam trap; inline success/error message. One test message sent from the live site and confirmed delivered. (`2f30a13`, `5a108bd`)
- **GitHub links** in the footer and on the Contact page. (`2f30a13`)

### Brand
- **Name changed to Reyna Simone Gowie** everywhere (nav, page titles, bylines, footer, alt text, descriptions). Two exact quotes keep the original wording: the Onward State headline and the alt text describing the State of State slide. (`1872734`)
- **Footer expanded:** © year and name, headline, Site and Elsewhere link columns, the "views are my own" line, and a stock-photo credit note. (`1872734`)
- **Social preview card** (`public/images/og-card.png`, 1200×630) is now the default link preview for every page except articles, which keep their own images. Generator script: `scripts/og/make-og-card.py`. (`f40cabc`)

### Design
- **Fonts made cohesive:** Fraunces (soft serif) for headings, DM Sans for text, Caveat (handwriting) only as a small accent. Replaces Libre Baskerville and Geist. (`6fa4fa7`)
- **Backgrounds:** faint dot grid across the site; themed white hero cards (blueprint grid on Projects, sound-wave rings on Speaking, ruled notebook on Blog); floating keyword chips on the homepage hero. (`6fa4fa7`)
- **Handwritten accents:** page eyebrows and homepage section titles in Caveat; the homepage headline cycles its verb (build → design → test → question → study). (`34e4b7a`)
- **Cursor trail:** small plum and pink sparkles follow the mouse across the homepage hero (first built as question marks, then changed). Off for reduced motion and on touch screens. (`34e4b7a`, `389cec8`)
- **Playful About page:** tilted photo strip of real event photos, a draggable "Skills and tools" box with physics (matter-js), and grouped card panels with "Show more" for certifications. Floating pill navigation and card panels across the site. (`5bd3aad`)
- **Projects page:** "Course design and leadership" label aligned with the content; Crunch described accurately as a front-end prototype without real data. (`a5a1107`)

### Content
- **About page roles** use the wording from the CV and LinkedIn: IBM AI Engineer Co-Op (three bullets, no internal project details), Whiting-Turner Project Engineering Intern, Advisor on the Provost's Student Advisory Committee on AI, Course Creator and Student Instructor for PHIL 197-002. (`ce550b3`)
- **Writing elsewhere** on the Blog page: two LinkedIn articles and three Work in Mind (Substack) essays, plus a link to the Substack. (`3730cc7`, `4200fe3`)

## 2026-11-05

### Content from the CV and LinkedIn
- **Technical and research projects** on Projects: Network Strain Monitor, Crunch, Operating Density Dashboard, The Reliability Premium, Empowering Women at Work. (`3ba27b7`, `3730cc7`)
- **About:** experience, skills, certifications (including watsonx.governance and IBM Bob Intermediate), and the Provost's Student Advisory Committee on AI. (`3ba27b7`, `3730cc7`)
- **Speaking:** research posters (AIxPH 2026, SACNAS 2024, SACNAS and Mount Saint Dominic 2023) and policy and global engagement (UNA-USA town hall delegate, ICAS convening, IYC13, World Bank Youth Summit, SDSN Youth/Ford consultation, EuroDIG, UNA-USA Young Professionals, UN Digital Cooperation Day). (`3ba27b7`, `3730cc7`)

### Articles
- **Article 1** "What Should a Degree Prove When AI Can Do the Homework?" added. Source: Inside Higher Ed (MIT committee report), later also eCampus News. Lead image: the State of State title slide. (`f3ecfe8`, `72f8441`, `ae9166f`)
- **Article 2** "When Should AI Ask First?" added. Source: Walmart's Agent Profiles announcement, later also a dpa news report via The Star. Lead image: Pexels photo by RDNE Stock project. (`96fdcda`, `7aeca79`, `ae9166f`)
- **Article 3** "Why Students Should Help Design Their Own Education." Source: ASU News on Project Gen Z. Lead image: Pexels photo by Yan Krukau. (`7aeca79`)
- Line edits to all three articles; each paragraph is 28–35 words. (`0dd3c56`)
- All three articles marked **final**; the final-readiness check passes. (`e7d2e2c`)
- Article images shown in the homepage Writing list. (`90d96ed`)

### Photos and press
- **Headshot** added; State of State marked as delivered (Nov 4, 2026). (`57b00a4`)
- **Event photos:** State of State 2026, IYC14 youth statement, UN Digital Cooperation Day. No photo credits, at Reyna's request. (`6e5d2ef`, `80dc3d8`, `7fbe9b2`, `46010eb`)
- **Press:** Onward State article linked from Projects and the homepage. (`46010eb`)

### Design (earlier rounds, since replaced)
- First redesign with a floating pill nav, soft color wash, and italic serif headings. (`931270f`)
- Cleanup to reduce the "AI-generated" look: one corner scale, no shadows, five type sizes, editorial layout. (`8ac2270`)

### Launch
- **Site built and published on GitHub Pages** at `/portfolio/` (Astro, static). The site was built locally on 2026-11-04; this first commit was rewritten on 2026-11-05 before the first push. (`bec352b`)

---

Built with help from Claude Code (an AI coding assistant), as noted in each commit's "Co-Authored-By" line.
