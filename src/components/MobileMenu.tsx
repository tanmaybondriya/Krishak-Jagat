"use client";

import { useRef } from "react";
import { CloseIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { SearchForm } from "@/components/SearchForm";
import { categories } from "@/lib/categories";
import { primaryNav, site, socialLinks, subscribeLinks } from "@/lib/site";

const iconButton =
  "glass inline-flex size-11 items-center justify-center rounded-full border text-ink transition hover:text-leaf-800 active:scale-95";

// Uses the native <dialog> element: showModal() provides the focus trap,
// Escape-to-close, and inert background without extra code.
export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = (focusSearch: boolean) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    if (focusSearch) dialog.querySelector<HTMLInputElement>("input[type=search]")?.focus();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button type="button" className={`${iconButton} md:hidden`} onClick={() => open(true)}>
        <SearchIcon className="size-5" />
        <span className="sr-only">खोजें</span>
      </button>
      <button
        type="button"
        className={`${iconButton} lg:hidden`}
        aria-haspopup="dialog"
        onClick={() => open(false)}
      >
        <MenuIcon className="size-5" />
        <span className="sr-only">मेनू खोलें</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="मेनू"
        className="menu-dialog glass-strong m-0 ml-auto h-dvh max-h-none w-full max-w-sm border-l p-0 text-ink open:flex open:flex-col"
        onClick={(event) => {
          // Clicking the backdrop (the dialog element itself) or any link closes the menu.
          const target = event.target as HTMLElement;
          if (target === event.currentTarget || target.closest("a")) close();
        }}
      >
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <p className="font-display text-lg font-bold text-leaf-800">{site.name}</p>
          <button type="button" className={iconButton} onClick={close}>
            <CloseIcon className="size-5" />
            <span className="sr-only">मेनू बंद करें</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-8">
          <SearchForm id="menu-search" className="mt-2" />

          <nav aria-label="श्रेणियाँ" className="mt-6">
            <h2 className="text-xs font-semibold tracking-wider text-muted">श्रेणियाँ</h2>
            <ul className="mt-2 grid grid-cols-2 gap-1.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <a
                    href={c.href}
                    className="flex min-h-11 items-center rounded-xl border border-line bg-white px-3 text-[15px] font-medium transition-colors hover:bg-leaf-50 hover:text-leaf-800"
                  >
                    {c.shortName}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="साइट" className="mt-6">
            <ul className="divide-y divide-line border-y border-line">
              {[...primaryNav, ...subscribeLinks].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="flex min-h-12 items-center text-base font-medium hover:text-leaf-800">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-6 flex items-center gap-2 text-sm font-medium" aria-label="भाषा">
            <span className="rounded-full bg-leaf-700 px-3 py-1.5 text-white">हिन्दी</span>
            <a href={site.englishEdition} lang="en" className="rounded-full border border-line px-3 py-1.5 hover:text-leaf-800">
              English
            </a>
          </p>

          <ul className="mt-6 flex flex-wrap gap-2 text-sm" lang="en">
            {socialLinks.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-full border border-line px-3 hover:text-leaf-800">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
