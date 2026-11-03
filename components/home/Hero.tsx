import { ClockCard, ClockInline } from "@/components/home/HeroClock";

const ACCENT = "#85bdbf"; // seafoam

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/roykhushi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khushi-roy-a98273224/" },
  { label: "LeetCode", href: "https://leetcode.com/u/roykhushi432/" },
  { label: "X", href: "https://x.com/royKhushi27" },
];

function Mask({ children }: { children: React.ReactNode }) {
  // Clips the line while it slides up; the negative margin keeps descenders.
  return <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">{children}</span>;
}

function Headline() {
  // The entrance is a CSS animation (see .reveal-line in globals.css) so the
  // headline shows on first paint instead of waiting for JS to hydrate.
  return (
    <h1 className="w-full text-[clamp(2.75rem,12.5vw,12rem)] font-medium leading-[0.9] tracking-[-0.045em]">
      <span className="block">
        <Mask>
          <span className="reveal-line block" style={{ "--i": 0 } as React.CSSProperties}>
            Software
          </span>
        </Mask>
      </span>
      <span className="block md:pl-[22%]">
        <Mask>
          <span
            className="reveal-line block font-serif text-[1.08em] italic tracking-[-0.03em]"
            style={{ "--i": 1, color: ACCENT } as React.CSSProperties}
          >
            developer
          </span>
        </Mask>
      </span>
    </h1>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative h-svh min-h-[40rem] overflow-hidden">
      {/* The clock is decorative (aria-hidden), so the same facts live here as text. */}
      <p className="sr-only">Based in New Delhi, India. Open to new opportunities.</p>

      <div className="absolute inset-0 flex flex-col justify-center px-6 pb-36 pt-24 md:px-14">
        <div className="relative w-full">
          <Headline />
          <div className="absolute right-0 top-0 hidden lg:block">
            <ClockCard />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-6 bottom-8 flex items-end justify-between gap-8 md:inset-x-14">
        <div className="grid items-end gap-x-16 gap-y-5 md:grid-cols-[auto_auto]">
          <div className="max-w-[17rem]">
            <ClockInline className="mb-5 lg:hidden" />
            <p className="text-[11px] uppercase tracking-[0.04em] text-foreground/60">After hours</p>
            <p className="mt-1.5 text-sm leading-snug text-foreground/85">
              9–5 during day. Working on side projects 
              and binging anime by the night.
            </p>
          </div>
          <ul className="hidden gap-x-4 text-[11px] uppercase leading-snug tracking-[0.04em] md:grid md:grid-cols-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 transition-colors duration-150 hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <span aria-hidden className="scroll-cue block h-16 w-px bg-foreground/50" />
      </div>
    </section>
  );
}
