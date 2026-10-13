import { WORDPRESS_ORIGIN } from "@/lib/site";
import type { Category } from "@/lib/types";

// Mirrors the CATEGORY menu on krishakjagat.org. Order = order in the category rail.
const definitions: Omit<Category, "href">[] = [
  { slug: "national-news", name: "राष्ट्रीय कृषि समाचार", shortName: "राष्ट्रीय", nameEn: "National News" },
  { slug: "news", name: "राज्य कृषि समाचार", shortName: "राज्य", nameEn: "State News" },
  { slug: "mandi-rate", name: "मंडी रेट", shortName: "मंडी रेट", nameEn: "Mandi Rate" },
  { slug: "crop-cultivation", name: "फसल की खेती", shortName: "फसल की खेती", nameEn: "Crop Cultivation" },
  { slug: "government-schemes", name: "सरकारी योजनाएं", shortName: "सरकारी योजनाएं", nameEn: "Government Schemes" },
  { slug: "horticulture", name: "उद्यानिकी", shortName: "उद्यानिकी", nameEn: "Horticulture" },
  { slug: "animal-husbandry", name: "पशुपालन", shortName: "पशुपालन", nameEn: "Animal Husbandry" },
  { slug: "farming-solution", name: "समस्या – समाधान", shortName: "समस्या – समाधान", nameEn: "Farming Solution" },
  { slug: "agriculture-machinery", name: "एग्रीकल्चर मशीन", shortName: "कृषि मशीन", nameEn: "Agriculture Machinery" },
  { slug: "farmer-success-story", name: "किसानों की सफलता की कहानी", shortName: "सफलता की कहानी", nameEn: "Farmer Success Story" },
  { slug: "industry-news", name: "कृषि कंपनी समाचार", shortName: "कंपनी समाचार", nameEn: "Industry News" },
  { slug: "editorial", name: "संपादकीय", shortName: "संपादकीय", nameEn: "Editorial" },
];

export const categories: Category[] = definitions.map((c) => ({
  ...c,
  href: `${WORDPRESS_ORIGIN}/category/${c.slug}/`,
}));

const bySlug = new Map(categories.map((c) => [c.slug, c]));

/** Broad buckets that should not win over a more specific category for labels. */
const GENERIC_SLUGS = new Set(["news", "national-news"]);

const fallbackCategory: Category = {
  slug: "news",
  name: "कृषि समाचार",
  shortName: "समाचार",
  nameEn: "News",
  href: `${WORDPRESS_ORIGIN}/`,
};

export function getCategory(slug: string): Category {
  return bySlug.get(slug) ?? fallbackCategory;
}

/** Resolve WordPress category slugs; unknown ones (e.g. "uncategorized") are dropped. */
export function resolveCategories(slugs: string[]): { primary: Category; all: Category[] } {
  const all = slugs.flatMap((slug) => bySlug.get(slug) ?? []);
  const primary = all.find((c) => !GENERIC_SLUGS.has(c.slug)) ?? all[0] ?? fallbackCategory;
  return { primary, all };
}
