import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeading } from "@/components/SectionHeading";
import type { CategorySection } from "@/lib/articles";

// One featured story plus a short list. Side by side on tablets; stacked when two
// blocks share a row on desktop.
export function CategoryBlock({ section }: { section: CategorySection }) {
  const [feature, ...rest] = section.articles;
  const headingId = `section-${section.category.slug}`;

  return (
    <section aria-labelledby={headingId}>
      <SectionHeading id={headingId} title={section.category.name} href={section.category.href} />
      <div className="mt-5 grid gap-x-6 md:grid-cols-2 lg:grid-cols-1">
        <ArticleCard article={feature} variant="feature" showExcerpt />
        {rest.length > 0 && (
          <ul className="mt-2 divide-y divide-line md:mt-0 md:[&>li:first-child>article]:pt-0 lg:mt-2 lg:[&>li:first-child>article]:pt-4">
            {rest.map((a) => (
              <li key={a.id}>
                <ArticleCard article={a} variant="compact" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
