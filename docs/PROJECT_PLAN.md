# Krishak Jagat UI: Project Plan

Context and conventions live in `../CLAUDE.md`. This file holds only the roadmap and acceptance criteria.

## Phase 1: Frontend modernization (current)

### Step 1: Environment and project memory ✅
- Next.js + TypeScript + Tailwind + ESLint project runs; `CLAUDE.md` exists; `lint` and `build` pass.

### Step 2: Design system and homepage ✅
- Green/golden design tokens, Devanagari typography, glass reserved for interactive chrome.
- Header with sticky glass nav, mobile menu, search, category rail; lead story; latest grid;
  mandi-rate panel; category sections; footer built from real site information.
- No horizontal overflow at 320px; layouts verified at 320/375/768/1024/1440.

### Step 3: Live WordPress content
- `src/lib/articles.ts` fetches server-side (REST preferred, RSS fallback; confirm with the owner).
- Normalize into `Article`; tolerate missing images, fields, invalid XML/JSON, and outages.
- Cache with `use cache` + `cacheLife` (minutes-to-hours); no per-request feed fetches.
- Error and empty states render without breaking the page. Snapshot file removed.

### Step 4: Article detail page (`/news/[slug]`)
- Headline, category, author, date, featured image, sanitized body, related stories.
- `generateMetadata`, canonical URL, Open Graph, JSON-LD `NewsArticle`; copy-link/share.
- Homepage links switch from WordPress URLs to internal routes.

## Phase 2: Backend modernization (future)
- Node.js backend (Express or alternative, chosen after evaluating requirements) with PostgreSQL.
- Migrate content and replace the WordPress source behind the same `src/lib` interface.
- Acceptance: UI components unchanged; only the data-access layer swaps providers.

## Phase 3: AWS deployment (future)
- Choose hosting, CI/CD, environment config, monitoring, security. Nothing is provisioned in Phase 1.
