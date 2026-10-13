import { ArticleCard } from "@/components/ArticleCard";
import { WheatIcon } from "@/components/icons";
import { SectionHeading } from "@/components/SectionHeading";
import { getCategory } from "@/lib/categories";
import type { Article } from "@/lib/types";

// Full-width green band. Swipeable row on phones, grid from `sm` up.
export function SuccessStories({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  const category = getCategory("farmer-success-story");

  return (
    <section aria-labelledby="success-heading" className="on-dark relative overflow-hidden bg-leaf-900 py-12 sm:py-16">
      <WheatIcon
        className="pointer-events-none absolute -right-10 -bottom-12 size-72 text-harvest-400/10"
        strokeWidth={0.8}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="success-heading" title={category.name} href={category.href} tone="dark" />
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/75">
          नई तकनीक, मेहनत और नवाचार से खेती बदलने वाले किसानों की प्रेरक कहानियां।
        </p>
        <ul className="scroll-row -mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-5">
          {articles.map((a) => (
            <li key={a.id} className="flex w-[80%] shrink-0 snap-start sm:w-auto [&>article]:w-full">
              <ArticleCard article={a} sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 80vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
