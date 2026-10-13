import { ArrowRightIcon } from "@/components/icons";

type SectionHeadingProps = {
  id: string;
  title: string;
  href?: string;
  linkLabel?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ id, title, href, linkLabel = "सभी देखें", tone = "light" }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={`flex items-center justify-between gap-4 border-b pb-2 ${dark ? "border-white/15" : "border-line"}`}>
      <h2
        id={id}
        className={`flex items-center gap-2.5 font-display text-xl leading-snug font-bold sm:text-2xl ${dark ? "text-white" : "text-ink"}`}
      >
        <span className="h-6 w-1.5 shrink-0 rounded-full bg-harvest-400" aria-hidden="true" />
        {title}
      </h2>
      {href && (
        <a
          href={href}
          className={`group inline-flex min-h-11 shrink-0 items-center gap-1 text-sm font-semibold ${dark ? "text-harvest-200 hover:text-harvest-100" : "text-leaf-700 hover:text-leaf-900"}`}
        >
          {linkLabel}
          <span className="sr-only">: {title}</span>
          <ArrowRightIcon className="size-4 motion-safe:transition-transform group-hover:translate-x-0.5" />
        </a>
      )}
    </div>
  );
}
