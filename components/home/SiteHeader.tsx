const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent px-6 py-4 backdrop-blur-[2px] md:px-14">
      <a
        href="#top"
        className="text-base font-medium tracking-tight [-webkit-user-select:none] [user-select:none] [touch-action:manipulation]"
      >
        Khushi Roy
      </a>

      <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-white/70 transition-colors duration-150 hover:text-white [touch-action:manipulation]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Khushi_Roy_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-sm transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/15 active:scale-[0.97] [-webkit-user-select:none] [user-select:none] [touch-action:manipulation]"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
