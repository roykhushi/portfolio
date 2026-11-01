"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";

// Strong ease-out (see .claude/.agents/skills/emil-design-eng)
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export type TimelineEntry = {
  /** Big year shown on the left */
  year: string;
  /** Small range under the year, e.g. "Oct – Dec" */
  range?: string;
  title: string;
  subtitle?: string;
  meta?: string;
  points?: string[];
  tags?: string[];
};

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const reduce = useReducedMotion();
  const viewport = { once: true, margin: "-20% 0px -20% 0px" } as const;

  return (
    <li className="relative grid grid-cols-1 gap-3 pb-14 last:pb-0 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] md:gap-12">
      {/* Year (left) */}
      <motion.div
        initial={{ opacity: 0, x: reduce ? 0 : -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="pl-8 md:pl-0 md:text-right"
      >
        <div className="md:sticky md:top-24">
          <p className="text-5xl font-semibold leading-none tracking-tight tabular-nums md:text-7xl md:tracking-[-0.04em]">
            {entry.year}
          </p>
          {entry.range && (
            <p className="mt-2 text-sm text-muted-foreground">{entry.range}</p>
          )}
        </div>
      </motion.div>

      {/* Dot on the line */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, scale: reduce ? 1 : 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 0.3, ease: EASE_OUT }}
        className="absolute left-0 top-3 size-3 -translate-x-1/2 rounded-full border-2 border-foreground bg-background md:left-[calc(13rem+1.5rem)] md:top-5"
      />

      {/* Details (right) */}
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, ease: EASE_OUT, delay: reduce ? 0 : 0.06 + index * 0.02 }}
        className="pl-8 md:pl-6"
      >
        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{entry.title}</h3>
        {entry.subtitle && (
          <p className="mt-1 text-base text-foreground/80">{entry.subtitle}</p>
        )}
        {entry.meta && (
          <p className="mt-1 text-sm text-muted-foreground">{entry.meta}</p>
        )}
        {entry.points && (
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/80 md:text-base">
            {entry.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-muted-foreground" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
        {entry.tags && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {entry.tags.map((t) => (
              <li key={t} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </li>
  );
}

export function Timeline({
  id,
  heading,
  entries,
}: {
  id?: string;
  heading: string;
  entries: TimelineEntry[];
}) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });

  return (
    <section id={id} aria-labelledby={id ? `${id}-heading` : undefined} className="mx-auto w-full max-w-5xl px-4 py-16 md:py-24">
      <h2
        id={id ? `${id}-heading` : undefined}
        className="mb-12 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground md:mb-16"
      >
        {heading}
      </h2>

      <div className="relative">
        {/* Track + progress line. Left edge on mobile, between columns on desktop. */}
        <div aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-border md:left-[calc(13rem+1.5rem)]">
          <motion.div
            style={{ scaleY: reduce ? 1 : scrollYProgress, transformOrigin: "top" }}
            className="h-full w-full bg-foreground"
          />
        </div>

        <ol ref={ref} className="relative">
          {entries.map((entry, i) => (
            <TimelineItem key={entry.title + entry.year} entry={entry} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
