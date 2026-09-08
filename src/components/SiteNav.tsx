import Link from "next/link";

type NavKey = "work" | "experience" | "stack" | "contact";

type Props = {
  active: NavKey;
};

const tabs: Array<{ key: NavKey; label: string; href: string }> = [
  { key: "work", label: "Work", href: "/work" },
  { key: "experience", label: "Experience", href: "/experience" },
  { key: "stack", label: "Stack", href: "/stack" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export function SiteNav({ active }: Props) {
  return (
    <header className="site-header">
      <div className="nav-shell glass-surface">
        <Link className="brand" href="/" aria-label="Oliver Gilcher home">
          <span className="brand-mark">OG</span>
          <span className="brand-name">Oliver Gilcher</span>
        </Link>

        <nav className="tab-nav" aria-label="Primary navigation">
          {tabs.map((tab) => (
            <Link
              className={`tab-link${active === tab.key ? " is-active" : ""}`}
              href={tab.href}
              key={tab.key}
              aria-current={active === tab.key ? "page" : undefined}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
