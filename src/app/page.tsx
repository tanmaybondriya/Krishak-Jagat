import { ArticleCard } from "@/components/ArticleCard";
import { BackToTop } from "@/components/BackToTop";
import { CategoryBlock } from "@/components/CategoryBlock";
import { TrendIcon } from "@/components/icons";
import { LeadStory } from "@/components/LeadStory";
import { SectionHeading } from "@/components/SectionHeading";
import { EditorialPanel, MandiRatePanel, PrintEditionPromo } from "@/components/Sidebar";
import { SuccessStories } from "@/components/SuccessStories";
import { getHomepageContent } from "@/lib/articles";
import { site } from "@/lib/site";

export default async function HomePage() {
  const { lead, topStories, latest, mandiRates, editorials, successStories, sections } =
    await getHomepageContent();

  if (!lead && latest.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <h1 className="sr-only">कृषक जगत: कृषि, खेती और किसानों से जुड़े ताज़ा समाचार</h1>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Lead story + top stories */}
        <section aria-label="प्रमुख समाचार" className="grid gap-8 pt-5 sm:pt-8 lg:grid-cols-12 lg:gap-10 lg:pt-10">
          {lead && (
            <div className="lg:col-span-8">
              <LeadStory article={lead} />
            </div>
          )}
          {topStories.length > 0 && (
            <div className="lg:col-span-4">
              <h2 className="flex items-center gap-2 border-b border-line pb-2 text-sm font-semibold text-muted">
                <TrendIcon className="size-4 text-harvest-600" />
                प्रमुख खबरें
              </h2>
              <ul className="divide-y divide-line md:grid md:grid-cols-2 md:gap-x-8 md:divide-y-0 lg:block lg:divide-y">
                {topStories.map((a) => (
                  <li key={a.id} className="md:border-b md:border-line lg:border-0">
                    <ArticleCard article={a} variant="compact" />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Latest news + sidebar */}
        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-12 lg:gap-10">
          <section aria-labelledby="latest-heading" className="lg:col-span-8">
            <SectionHeading id="latest-heading" title="ताज़ा खबरें" href={`${site.url}/page/2/`} linkLabel="और खबरें" />
            <ul className="divide-y divide-line sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-5 sm:divide-y-0 xl:grid-cols-3">
              {latest.map((a, i) => (
                // 9 stories fill 3 columns; hide the odd one out in the 2-column layout.
                <li key={a.id} className={`flex ${i === 8 ? "sm:max-xl:hidden" : ""} [&>article]:w-full`}>
                  <ArticleCard article={a} variant="responsive" />
                </li>
              ))}
            </ul>
          </section>

          <aside aria-label="और पढ़ें" className="grid content-start gap-6 md:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
            <MandiRatePanel articles={mandiRates} />
            <EditorialPanel articles={editorials} />
            <div className="md:col-span-2 lg:col-span-1">
              <PrintEditionPromo />
            </div>
          </aside>
        </div>
      </div>

      <div className="mt-14 sm:mt-20">
        <SuccessStories articles={successStories} />
      </div>

      {sections.length > 0 && (
        <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-14 px-4 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:px-8">
          {sections.map((section) => (
            <CategoryBlock key={section.category.slug} section={section} />
          ))}
        </div>
      )}

      <BackToTop />
    </>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-2xl font-bold">खबरें अभी उपलब्ध नहीं हैं</h1>
      <p className="mt-3 text-muted">कृपया कुछ देर बाद फिर देखें।</p>
      <a href={site.url} className="mt-6 inline-flex min-h-11 items-center rounded-full bg-leaf-700 px-5 font-semibold text-white hover:bg-leaf-800">
        krishakjagat.org पर पढ़ें
      </a>
    </div>
  );
}
