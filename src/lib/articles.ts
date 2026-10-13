// The single data-access entry point for article content.
//
// Step 2 (now): reads a snapshot of real posts captured from krishakjagat.org on 2026-10-09.
// Step 3: replace `loadSource()` with a cached server-side fetch from WordPress. Keep the
// exported functions and return types unchanged so no UI component has to change.

import snapshot from "@/data/articles.snapshot.json";
import { getCategory, resolveCategories } from "@/lib/categories";
import type { Article, Category } from "@/lib/types";

type SourceArticle = Omit<Article, "category" | "categories"> & { categories: string[] };

type Source = {
  latest: SourceArticle[];
  byCategory: Record<string, SourceArticle[]>;
};

async function loadSource(): Promise<Source> {
  return snapshot as Source;
}

function toArticle(raw: SourceArticle): Article {
  const { primary, all } = resolveCategories(raw.categories);
  return { ...raw, category: primary, categories: all };
}

export type CategorySection = { category: Category; articles: Article[] };

export type HomepageContent = {
  lead: Article | null;
  topStories: Article[];
  latest: Article[];
  mandiRates: Article[];
  editorials: Article[];
  successStories: Article[];
  sections: CategorySection[];
};

/** Category blocks shown below the latest news, in order. */
const SECTION_SLUGS = ["crop-cultivation", "government-schemes", "horticulture", "animal-husbandry"];

export async function getHomepageContent(): Promise<HomepageContent> {
  const source = await loadSource();
  const latest = source.latest.map(toArticle);
  const inCategory = (slug: string) => (source.byCategory[slug] ?? []).map(toArticle);

  // Each story appears once on the page; earlier slots claim stories first.
  const used = new Set<string>();
  const take = (pool: Article[], count: number) => {
    const picked = pool.filter((a) => !used.has(a.id)).slice(0, count);
    picked.forEach((a) => used.add(a.id));
    return picked;
  };

  // Daily mandi-rate posts are auto-generated tables, so they get their own panel
  // instead of competing with reported stories for the lead slots.
  const isMandiRate = (a: Article) => a.categories.some((c) => c.slug === "mandi-rate");
  const stories = latest.filter((a) => !isMandiRate(a));
  const withImage = stories.filter((a) => a.image);

  // Lead: the most recent national story with an image, else the most recent story.
  const [lead = null] = take(
    [...inCategory("national-news").filter((a) => a.image), ...withImage, ...stories],
    1,
  );

  return {
    lead,
    topStories: take(withImage, 4),
    mandiRates: take([...inCategory("mandi-rate"), ...latest.filter(isMandiRate)], 5),
    editorials: take(inCategory("editorial"), 4),
    latest: take(stories, 9),
    successStories: take(inCategory("farmer-success-story"), 4),
    sections: SECTION_SLUGS.map((slug) => ({
      category: getCategory(slug),
      articles: take(inCategory(slug), 4),
    })).filter((section) => section.articles.length > 0),
  };
}
