"use client";

import { useEffect, useState } from "react";

type Ist = { hh: string; mm: string; ss: string; weekday: string; day: string; month: string };

// The clock always shows New Delhi time, whatever the visitor's own timezone is.
const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hourCycle: "h23",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  weekday: "short",
  day: "2-digit",
  month: "short",
});

function read(d: Date): Ist {
  const p = Object.fromEntries(fmt.formatToParts(d).map((x) => [x.type, x.value]));
  return {
    hh: p.hour,
    mm: p.minute,
    ss: p.second,
    weekday: p.weekday,
    day: p.day,
    month: p.month,
  };
}

/** null on the server and first paint, so server and client markup match. */
function useIst(): Ist | null {
  const [now, setNow] = useState<Ist | null>(null);
  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    const tick = () => {
      setNow(read(new Date()));
      // Re-aim at the next whole second so the digits don't drift.
      id = setTimeout(tick, 1000 - (Date.now() % 1000));
    };
    tick();
    return () => clearTimeout(id);
  }, []);
  return now;
}

const corner = "absolute size-2.5 border-seafoam/60";

/** HUD-style readout for large screens. Decorative: the same facts are in the page as text. */
export function ClockCard({ className = "" }: { className?: string }) {
  const t = useIst();
  return (
    <div aria-hidden className={`relative w-56 p-4 font-mono ${className}`}>
      <span className={`${corner} left-0 top-0 border-l border-t`} />
      <span className={`${corner} right-0 top-0 border-r border-t`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} bottom-0 right-0 border-b border-r`} />

      <p className="text-[10px] uppercase tracking-[0.18em] text-seafoam">New Delhi · IST</p>

      <p className="mt-3 flex items-baseline gap-1 text-[2.6rem] font-light leading-none tracking-tight tabular-nums">
        <span>{t ? t.hh : "--"}</span>
        <span className="clock-colon text-seafoam">:</span>
        <span>{t ? t.mm : "--"}</span>
        <span className="ml-1.5 text-base text-foreground/50">{t ? t.ss : "--"}</span>
      </p>

      <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-foreground/50">
        {t ? `${t.weekday} ${t.day} ${t.month}` : "--- -- ---"} · UTC+5:30
      </p>

      <p className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-foreground/80">
        <span className="live-dot" />
        Open to opportunities
      </p>
    </div>
  );
}

/** One-line version for screens too narrow for the card. */
export function ClockInline({ className = "" }: { className?: string }) {
  const t = useIst();
  return (
    <p
      aria-hidden
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] ${className}`}
    >
      <span className="live-dot" />
      <span className="tabular-nums">{t ? `${t.hh}:${t.mm}` : "--:--"}</span>
      <span className="text-seafoam">IST</span>
      <span className="basis-full text-foreground/50">New Delhi · Open to opportunities</span>
    </p>
  );
}
