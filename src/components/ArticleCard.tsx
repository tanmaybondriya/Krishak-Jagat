import Image from "next/image";
import { formatDate } from "@/lib/format";
import type { Article } from "@/lib/types";

/**
 * standard   – solid card, 16:9 image on top (grids, category features)
 * compact    – text row with a small 4:3 thumbnail (sidebars, lists)
 * responsive – compact on phones, standard from `sm` up (main news grid)
 * feature    – standard, but image beside the text from `lg` up (category blocks)
 */
type Variant = "standard" | "compact" | "responsive" | "feature";

type ArticleCardProps = {
  article: Article;
  variant?: Variant;
  showExcerpt?: boolean;
  /** Next/Image `sizes`; override when the card sits in an unusual column width. */
  sizes?: string;
};

const styles: Record<Variant, { root: string; media: string; body: string; title: string }> = {
  standard: {
    root: "flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card hover:-translate-y-0.5 hover:shadow-lift",
    media: "aspect-video w-full",
    body: "p-4 sm:p-5",
    title: "font-display text-lg leading-[1.5] font-semibold",
  },
  feature: {
    root: "flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card hover:-translate-y-0.5 hover:shadow-lift lg:flex-row",
    media: "aspect-video w-full lg:aspect-[4/3] lg:w-[44%] lg:shrink-0",
    body: "p-4 sm:p-5",
    title: "font-display text-lg leading-[1.5] font-semibold",
  },
  compact: {
    root: "flex-row-reverse items-start gap-3.5 py-4",
    media: "aspect-[4/3] w-24 shrink-0 rounded-xl sm:w-28",
    body: "",
    title: "text-base leading-[1.45] font-semibold",
  },
  responsive: {
    root:
      "flex-row-reverse items-start gap-3.5 py-4 sm:flex-col sm:gap-0 sm:overflow-hidden sm:rounded-2xl sm:border sm:border-line sm:bg-white sm:py-0 sm:shadow-card sm:hover:-translate-y-0.5 sm:hover:shadow-lift",
    media: "aspect-[4/3] w-24 shrink-0 rounded-xl sm:aspect-video sm:w-full sm:rounded-none",
    body: "sm:p-5",
    title: "text-base leading-[1.45] font-semibold sm:font-display sm:text-lg sm:leading-[1.5]",
  },
};

const defaultSizes: Record<Variant, string> = {
  standard: "(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw",
  compact: "112px",
  feature: "(min-width: 1280px) 260px, (min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw",
  responsive: "(min-width: 1280px) 280px, (min-width: 640px) 45vw, 112px",
};

export function ArticleCard({ article, variant = "standard", showExcerpt = false, sizes }: ArticleCardProps) {
  const s = styles[variant];

  return (
    <article
      className={`group relative flex min-w-0 transition duration-300 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-leaf-700 ${s.root}`}
    >
      <div className={`relative overflow-hidden bg-leaf-100 ${s.media}`}>
        {article.image ? (
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes={sizes ?? defaultSizes[variant]}
            className="object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <ImageFallback />
        )}
      </div>

      <div className={`flex min-w-0 flex-1 flex-col ${s.body}`}>
        <CategoryLabel name={article.category.shortName} />
        <h3 className={`mt-1 line-clamp-3 text-ink transition-colors group-hover:text-leaf-800 ${s.title}`}>
          {/* Stretched link: the whole card is clickable, the accessible name is the headline. */}
          <a href={article.url} className="after:absolute after:inset-0 focus-visible:outline-none">
            {article.title}
          </a>
        </h3>
        {showExcerpt && article.excerpt && (
          <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-muted">{article.excerpt}</p>
        )}
        <time dateTime={article.publishedAt} className="mt-2 text-[13px] text-muted sm:mt-auto sm:pt-3">
          {formatDate(article.publishedAt)}
        </time>
      </div>
    </article>
  );
}

export function CategoryLabel({ name, className = "" }: { name: string; className?: string }) {
  return (
    <p className={`flex items-center gap-1.5 text-[13px] font-semibold text-leaf-700 ${className}`}>
      <span className="size-1.5 rounded-full bg-harvest-400" aria-hidden="true" />
      {name}
    </p>
  );
}

/** Shown when a story has no usable image; keeps the card's ratio stable. */
export function ImageFallback() {
  return (
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--color-harvest-100),transparent_60%),linear-gradient(135deg,var(--color-leaf-100),var(--color-leaf-200))]"
      aria-hidden="true"
    />
  );
}
