// Small inline icons (24×24, stroke-based) so no icon library is needed.
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const SearchIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.2-4.2" />
  </Icon>
);

export const MenuIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </Icon>
);

export const CloseIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const ArrowUpIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Icon>
);

export const NewspaperIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 4h11a1 1 0 0 1 1 1v14a1 1 0 0 0 1 1H6a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1Z" />
    <path d="M17 8h2a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2M8 8h5M8 12h5M8 16h3" />
  </Icon>
);

/** Wheat-ear mark used as a section accent. */
export const WheatIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21V9" />
    <path d="M12 13c-2.5 0-4-1.6-4-4 2.5 0 4 1.6 4 4Zm0 0c2.5 0 4-1.6 4-4-2.5 0-4 1.6-4 4Z" />
    <path d="M12 9c-2 0-3.2-1.3-3.2-3.2C10.8 5.8 12 7.1 12 9Zm0 0c2 0 3.2-1.3 3.2-3.2-2 0-3.2 1.3-3.2 3.2Z" />
    <path d="M12 17c-2.5 0-4-1.6-4-4 2.5 0 4 1.6 4 4Zm0 0c2.5 0 4-1.6 4-4-2.5 0-4 1.6-4 4Z" />
    <path d="M12 5.8V3" />
  </Icon>
);

export const TrendIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </Icon>
);
