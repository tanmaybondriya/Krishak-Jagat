import Image from "next/image";
import { ImageFallback } from "@/components/ArticleCard";
import { formatDate } from "@/lib/format";
import type { Article } from "@/lib/types";

export function LeadStory({ article }: { article: Article }) {
  return (
    <article className="group relative has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-leaf-700">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-leaf-100 sm:aspect-video lg:rounded-3xl">
        {article.image ? (
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            priority
            sizes="(min-width: 1280px) 820px, (min-width: 1024px) 64vw, 100vw"
            className="object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <ImageFallback />
        )}
        {/* Floating glass chip: one of the few places glass sits over content. */}
        <p className="glass-dark absolute top-3 left-3 rounded-full border px-3 py-1 text-[13px] font-semibold sm:top-4 sm:left-4">
          {article.category.name}
        </p>
      </div>

      <div className="mt-4 sm:mt-5">
        <p className="text-sm font-semibold text-harvest-700">मुख्य खबर</p>
        <h2 className="mt-1.5 font-display text-[1.6rem] leading-[1.4] font-bold text-ink transition-colors group-hover:text-leaf-800 sm:text-[2.1rem] sm:leading-[1.35] lg:text-[2.4rem]">
          <a href={article.url} className="after:absolute after:inset-0 focus-visible:outline-none">
            {article.title}
          </a>
        </h2>
        {article.excerpt && (
          <p className="mt-3 line-clamp-3 max-w-[65ch] text-[17px] leading-relaxed text-muted sm:text-lg">
            {article.excerpt}
          </p>
        )}
        <p className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-muted">
          {article.author && <span className="font-medium text-ink/80">{article.author}</span>}
          {article.author && <span aria-hidden="true">·</span>}
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </p>
      </div>
    </article>
  );
}
