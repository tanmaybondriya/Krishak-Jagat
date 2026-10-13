# Krishak Jagat UI

@AGENTS.md

Modern frontend for **Krishak Jagat (कृषक जगत)**, a Hindi agricultural news publication (since 1946,
Bhopal) currently at https://www.krishakjagat.org (WordPress). Readers: farmers, agri professionals.
Goal: a polished, mobile-first editorial redesign that keeps the brand identity (green + golden yellow).

## Phase & scope
- **Phase 1 (current): frontend only.** Next.js app; WordPress stays the source of truth (editors keep
  publishing in WP admin).
- Out of scope now: backend, database, auth, state libraries, API frameworks, AWS, deployment.
- Phase 2 (future): Node.js backend (framework TBD after evaluation) + PostgreSQL, replacing WordPress
  as the content source. Phase 3 (future): AWS deployment. Roadmap: `docs/PROJECT_PLAN.md`.

## Stack
Next.js 16.4 (App Router, `src/`, `@/*` alias, Cache Components on), React 19.3, TypeScript,
Tailwind CSS v4 (CSS-first `@theme` in `globals.css`, no tailwind.config), ESLint 9, npm.
Next 16 differs from older versions: read `node_modules/next/dist/docs/` before using an API.

## Commands (run in this directory)
- `npm install` · `npm run dev` (http://localhost:3000) · `npm run lint` · `npm run build` · `npx tsc --noEmit`

## Architecture
- `src/lib/types.ts`: shared `Article` / `ArticleImage` / `Category` types. UI imports only these.
- `src/lib/categories.ts`: category list (slug, Hindi + English names), taken from the live WP menu.
- `src/lib/site.ts`: site config: WP origin, nav links, social links, contact details from the live footer.
- `src/lib/articles.ts`: **the only data-access entry point** (`getHomepageContent()`). Today it reads
  `src/data/articles.snapshot.json`; step 3 swaps the internals to live WordPress fetching, keeping
  the same return types.
- `src/lib/format.ts`: Hindi date formatting (fixed `Asia/Kolkata` time zone).
- `src/components/`: Header (+ client `MobileMenu`), CategoryRail, LeadStory, ArticleCard (variants),
  SectionHeading, MandiRatePanel, CategorySection, Footer. All Server Components except `MobileMenu`.
- Article links currently point to the original WordPress URLs (`article.url`). Switch them to
  `/news/[slug]` when the article page exists.
- Search submits a plain GET form to WordPress search (`?s=`) and works without JavaScript.

## Content source findings (verified 2026-10-09)
- RSS `https://www.krishakjagat.org/feed/`: only **10 items**, **no images at all**, and categories and
  tags are mixed in the same `<category>` elements. Description includes a "The post … appeared first" footer.
- WP REST `https://www.krishakjagat.org/wp-json/wp/v2/posts?_embed` is public and works: featured
  media (with sizes and alt text), real categories vs tags, slugs, author, pagination, `?categories=<id>`.
  Recommendation for step 3: REST primary, RSS as a fallback only. **The user's plan says RSS, so confirm first.**
- Excerpts start with a print dateline + the repeated headline; the normalizer strips both.
- Editorial/feature excerpts can begin with "लेखक: …" (author list, sometimes an email); a dateline
  after a long author list is not stripped (3 of 110 snapshot items).
- Images are served from `www.krishakjagat.org/wp-content/uploads/**` (allowed in `next.config.ts`).
- Snapshot regenerator was a one-off script (not in repo); it captured latest 30 + 8 per category.

## Design system (`src/app/globals.css`)
- Colors: `leaf-*` greens (brand `leaf-700` #206b4d from the current site), `harvest-*` golden
  yellows (accents, never body text on white), `paper` warm-white background, `ink`/`muted` text, `line` borders.
- Fonts: Noto Serif Devanagari (headlines, `font-display`) + Mukta (UI/body, `font-sans`), via next/font.
- Glass (`.glass`, `.glass-strong` for the mobile menu, `.glass-dark` over images/green) **only** for sticky nav, search control, floating/overlay controls,
  and a few buttons. Article cards and body text stay solid. Fallback to opaque when
  `backdrop-filter` is unsupported.
- Logo has a white background: use `mix-blend-multiply` on light surfaces and a light plate on dark ones.
- Mobile-first; check at 320/375/768/1024/1440. Respect `prefers-reduced-motion`. Visible focus rings.
- Don't invent data: every section renders only when it has articles.

## Progress
- [x] Step 1: environment, scaffold, CLAUDE.md, verified commands
- [x] Step 2: design system + homepage (snapshot content)
- [ ] Step 3: live WordPress content in `src/lib/` (fetch, normalize, `use cache` + `cacheLife`,
      error and empty states, `sanitize-html` for article bodies), then delete the snapshot
- [ ] Step 4: `/news/[slug]` article page (metadata, canonical, sanitized body, related stories)
- [ ] Phase 2 / 3 as above

Keep this file current: update it whenever an architectural decision or milestone changes.
