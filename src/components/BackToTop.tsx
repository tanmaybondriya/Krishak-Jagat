import { ArrowUpIcon } from "@/components/icons";

// Floating glass control. No JavaScript: where scroll-driven animations are supported
// it fades in after the first screen (see .reveal-on-scroll), otherwise it is always shown.
export function BackToTop() {
  return (
    <a
      href="#top"
      className="glass reveal-on-scroll fixed right-4 bottom-4 z-30 inline-flex size-12 items-center justify-center rounded-full border text-leaf-800 transition hover:text-leaf-950 active:scale-95 sm:right-6 sm:bottom-6"
    >
      <ArrowUpIcon className="size-5" />
      <span className="sr-only">ऊपर जाएं</span>
    </a>
  );
}
