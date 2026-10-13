import { ArrowRightIcon, NewspaperIcon, TrendIcon } from "@/components/icons";
import { getCategory } from "@/lib/categories";
import { formatDate } from "@/lib/format";
import { primaryNav, subscribeLinks } from "@/lib/site";
import type { Article } from "@/lib/types";

function PanelLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="group mt-3 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-leaf-700 hover:text-leaf-900">
      {children}
      <ArrowRightIcon className="size-4 motion-safe:transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

export function MandiRatePanel({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  const category = getCategory("mandi-rate");

  return (
    <section aria-labelledby="mandi-heading" className="rounded-2xl border border-harvest-200 bg-harvest-50 p-5">
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-harvest-400 text-leaf-950" aria-hidden="true">
          <TrendIcon className="size-5" />
        </span>
        <div>
          <h2 id="mandi-heading" className="font-display text-lg leading-snug font-bold text-ink">
            आज का मंडी रेट
          </h2>
          <p className="text-sm text-muted">देशभर की मंडियों में फसलों के भाव</p>
        </div>
      </div>
      <ul className="mt-3 divide-y divide-harvest-200/80">
        {articles.map((a) => (
          <li key={a.id}>
            <a href={a.url} className="block py-3 text-[15px] leading-snug font-semibold text-ink hover:text-leaf-800">
              {a.title}
            </a>
          </li>
        ))}
      </ul>
      <PanelLink href={category.href}>सभी मंडी रेट</PanelLink>
    </section>
  );
}

export function EditorialPanel({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  const category = getCategory("editorial");

  return (
    <section aria-labelledby="editorial-heading" className="rounded-2xl border border-line bg-white p-5 shadow-card">
      <h2 id="editorial-heading" className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
        <span className="h-5 w-1.5 rounded-full bg-harvest-400" aria-hidden="true" />
        संपादकीय और विचार
      </h2>
      <ul className="mt-2">
        {articles.map((a) => (
          <li key={a.id} className="border-b border-line last:border-0">
            <a href={a.url} className="group block py-3.5">
              <span className="font-display text-base leading-[1.55] font-semibold text-ink group-hover:text-leaf-800">
                {a.title}
              </span>
              <time dateTime={a.publishedAt} className="mt-1 block text-[13px] text-muted">
                {formatDate(a.publishedAt)}
              </time>
            </a>
          </li>
        ))}
      </ul>
      <PanelLink href={category.href}>सभी संपादकीय</PanelLink>
    </section>
  );
}

export function PrintEditionPromo() {
  const [epaper] = primaryNav;
  const printSubscription = subscribeLinks[1];

  return (
    <section
      aria-labelledby="print-heading"
      className="on-dark relative overflow-hidden rounded-2xl bg-leaf-800 p-6 text-white"
    >
      {/* Soft sunrise glow, decorative only. */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-harvest-400/30 blur-3xl"
        aria-hidden="true"
      />
      <NewspaperIcon className="relative size-8 text-harvest-300" />
      <h2 id="print-heading" className="relative mt-3 font-display text-xl leading-snug font-bold">
        कृषक जगत ई-पेपर
      </h2>
      <p className="relative mt-1.5 text-[15px] leading-relaxed text-white/80">
        1946 से किसानों का अपना अखबार। प्रिंट संस्करण अब ऑनलाइन पढ़ें।
      </p>
      <div className="relative mt-5 flex flex-wrap gap-2.5">
        <a
          href={epaper.href}
          className="inline-flex min-h-11 items-center rounded-full bg-harvest-400 px-5 text-sm font-semibold text-leaf-950 transition hover:bg-harvest-300"
        >
          ई-पेपर पढ़ें
        </a>
        <a
          href={printSubscription.href}
          className="glass-dark inline-flex min-h-11 items-center rounded-full border px-5 text-sm font-semibold transition hover:bg-white/15"
        >
          सदस्यता लें
        </a>
      </div>
    </section>
  );
}
