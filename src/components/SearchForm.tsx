import { SearchIcon } from "@/components/icons";
import { site } from "@/lib/site";

type SearchFormProps = {
  id: string;
  className?: string;
  autoFocus?: boolean;
};

// Plain GET form to WordPress search (`/?s=`), so it works without JavaScript.
// Swap `action` for an internal /search route once one exists.
export function SearchForm({ id, className = "", autoFocus }: SearchFormProps) {
  return (
    <form action={site.searchAction} method="get" role="search" className={className}>
      <label htmlFor={id} className="sr-only">
        खबरें खोजें
      </label>
      <div className="glass flex h-11 items-center rounded-full border pr-1 pl-4 transition-shadow focus-within:shadow-[0_0_0_3px_var(--color-leaf-200)]">
        <SearchIcon className="size-4.5 shrink-0 text-muted" />
        <input
          id={id}
          name="s"
          type="search"
          required
          autoFocus={autoFocus}
          autoComplete="off"
          enterKeyHint="search"
          placeholder="खबरें, फसल, योजना खोजें…"
          className="h-full w-full min-w-0 bg-transparent px-2.5 text-[15px] text-ink placeholder:text-muted/80 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        <button
          type="submit"
          className="h-9 shrink-0 rounded-full bg-leaf-700 px-4 text-sm font-semibold text-white transition-colors hover:bg-leaf-800"
        >
          खोजें
        </button>
      </div>
    </form>
  );
}
