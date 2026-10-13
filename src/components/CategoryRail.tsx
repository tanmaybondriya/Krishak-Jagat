import Link from "next/link";
import { categories } from "@/lib/categories";

// Horizontally scrollable on small screens; wraps into a single row on wide ones.
// "ताज़ा" is the active item on the homepage; category pages will pass their own slug later.
export function CategoryRail({ activeSlug }: { activeSlug?: string }) {
  const chip =
    "inline-flex h-9 items-center rounded-full px-3.5 text-sm font-medium whitespace-nowrap transition-colors";
  const isHome = !activeSlug;

  return (
    <nav aria-label="श्रेणियाँ" className="border-t border-black/5">
      <ul className="scroll-row mx-auto flex max-w-7xl snap-x scroll-px-4 gap-1 overflow-x-auto px-4 py-2 [mask-image:linear-gradient(to_right,transparent,black_12px,black_calc(100%-24px),transparent)] sm:scroll-px-6 sm:px-6 lg:scroll-px-8 lg:px-8 xl:[mask-image:none]">
        <li className="snap-start">
          <Link
            href="/"
            aria-current={isHome ? "page" : undefined}
            className={`${chip} ${isHome ? "bg-leaf-700 text-white shadow-sm" : "text-ink/75 hover:bg-white/80"}`}
          >
            ताज़ा खबरें
          </Link>
        </li>
        {categories.map((c) => {
          const active = c.slug === activeSlug;
          return (
            <li key={c.slug} className="snap-start">
              <a
                href={c.href}
                aria-current={active ? "page" : undefined}
                className={`${chip} ${active ? "bg-leaf-700 text-white" : "text-ink/75 hover:bg-white/80 hover:text-leaf-800"}`}
              >
                {c.shortName}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
