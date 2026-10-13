// Application-level content model. UI components depend only on these types,
// never on the shape of the WordPress REST API, the RSS feed, or a future backend.

export type Category = {
  slug: string;
  /** Full Hindi name, e.g. "किसानों की सफलता की कहानी". */
  name: string;
  /** Short Hindi label for chips and tight spaces. */
  shortName: string;
  /** English name, used for screen-reader hints and future i18n. */
  nameEn: string;
  /** Category listing URL (currently on the WordPress site). */
  href: string;
};

export type ArticleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  /** Plain text, already stripped of HTML, datelines, and repeated headlines. */
  excerpt: string;
  /** Canonical URL of the article on the WordPress site. */
  url: string;
  /** ISO 8601 timestamp in UTC. */
  publishedAt: string;
  author: string | null;
  /** The most specific category, used for labels. */
  category: Category;
  categories: Category[];
  image: ArticleImage | null;
};
