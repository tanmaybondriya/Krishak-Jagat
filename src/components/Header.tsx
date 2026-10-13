import Image from "next/image";
import Link from "next/link";
import { CategoryRail } from "@/components/CategoryRail";
import { NewspaperIcon } from "@/components/icons";
import { MobileMenu } from "@/components/MobileMenu";
import { SearchForm } from "@/components/SearchForm";
import { primaryNav, site } from "@/lib/site";
import logo from "../../public/brand/krishak-jagat-logo.png";

export function Header() {
  return (
    <header id="top" className="glass sticky top-0 z-40 border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:h-18 lg:gap-6 lg:px-8">
        <Link href="/" className="shrink-0 rounded-md" aria-label="कृषक जगत: होम">
          {/* The logo PNG has a white background; multiply blends it into the glass. */}
          <Image
            src={logo}
            alt=""
            priority
            className="h-10 w-auto mix-blend-multiply lg:h-12"
            sizes="150px"
          />
        </Link>

        <nav aria-label="मुख्य" className="hidden lg:block">
          <ul className="flex items-center">
            {/* E-paper is promoted to the golden button on the right. */}
            {primaryNav.slice(1).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-2.5 py-2 text-[15px] font-medium whitespace-nowrap text-ink/80 transition-colors hover:bg-leaf-50 hover:text-leaf-800 xl:px-3"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <SearchForm id="header-search" className="hidden w-56 md:block xl:w-72" />

          <p className="hidden items-center text-sm font-medium xl:flex" aria-label="भाषा">
            <span className="rounded-full bg-leaf-700 px-2.5 py-1 text-white" aria-current="true">
              हिन्दी
            </span>
            <a
              href={site.englishEdition}
              lang="en"
              className="rounded-full px-2.5 py-1 text-muted transition-colors hover:text-leaf-800"
            >
              English
            </a>
          </p>

          <a
            href={primaryNav[0].href}
            className="hidden h-11 items-center gap-1.5 rounded-full bg-harvest-400 px-4 text-sm font-semibold text-leaf-950 shadow-[0_1px_0_rgb(255_255_255/0.5)_inset,0_6px_16px_-8px_rgb(138_90_9/0.6)] transition hover:bg-harvest-300 sm:inline-flex"
          >
            <NewspaperIcon className="size-4.5" />
            ई-पेपर
          </a>

          <MobileMenu />
        </div>
      </div>

      <CategoryRail />
    </header>
  );
}
