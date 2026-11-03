"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
import { projects } from "@/lib/projects";

const TAGS = ["Frontend", "Backend", "Full-stack"];
const MAX_DEPTH = 3;

function ProjectStack() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const n = projects.length;
  const go = (dir: 1 | -1) => setActive((a) => (a + dir + n) % n);

  return (
    <div className="pr-10 pt-16 md:pr-12">
      <div
        className="relative h-[clamp(27rem,64svh,34rem)]"
        role="group"
        aria-roledescription="carousel"
        aria-label="Selected projects"
      >
        {projects.map((p, i) => {
          const depth = (i - active + n) % n;
          const front = depth === 0;
          return (
            <motion.article
              key={p.slug}
              // Cards behind the front one are decoration, not tab stops.
              inert={!front}
              aria-hidden={!front}
              aria-label={`${p.title}, project ${i + 1} of ${n}`}
              className="absolute inset-0 flex flex-col rounded-3xl border border-foreground/10 bg-card p-5 shadow-2xl shadow-black/50 md:p-6"
              style={{ zIndex: n - depth, transformOrigin: "top right" }}
              initial={false}
              animate={{
                x: depth * 22,
                y: depth * -46,
                scale: 1 - depth * 0.045,
                opacity: depth >= MAX_DEPTH ? 0 : 1 - depth * 0.18,
              }}
              // Critically damped spring: no overshoot, and it can be interrupted mid-flight.
              transition={{ type: "spring", duration: reduce ? 0.01 : 0.55, bounce: 0 }}
            >
              <header className="flex items-center gap-4">
                <h3 className="text-xl tracking-tight md:text-2xl">{p.title}</h3>
                <span aria-hidden className="h-px flex-1 bg-foreground/20" />
                <span className="text-xs uppercase tracking-[0.06em] text-foreground/50">
                  {p.category}
                </span>
              </header>

              <div className="relative mt-5 min-h-0 flex-1 overflow-hidden rounded-2xl bg-secondary">
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover object-top"
                />
              </div>

              <p className="mt-5 max-w-prose text-sm leading-relaxed text-foreground/70 md:text-base">
                {p.blurb}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-sm transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-foreground/10 active:scale-[0.97] [touch-action:manipulation]"
                >
                  <GithubIcon className="size-4" aria-hidden /> GitHub
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-foreground/85 active:scale-[0.97] [touch-action:manipulation]"
                >
                  <ExternalLink className="size-4" aria-hidden /> {p.liveLabel}
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="grid size-11 place-items-center rounded-full border border-foreground/25 transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-foreground/10 active:scale-[0.95] [-webkit-user-select:none] [user-select:none] [touch-action:manipulation]"
        >
          <ArrowLeft className="size-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next project"
          className="grid size-11 place-items-center rounded-full border border-foreground/25 transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-foreground/10 active:scale-[0.95] [-webkit-user-select:none] [user-select:none] [touch-action:manipulation]"
        >
          <ArrowRight className="size-4" aria-hidden />
        </button>
        <p className="text-sm tabular-nums text-foreground/60" aria-live="polite">
          {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section
      id="work"
      className="mx-auto grid min-h-svh w-full max-w-7xl scroll-mt-20 items-center gap-12 px-6 py-24 md:px-14 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-20"
    >
      <div>
        <p className="text-2xl leading-[1.25] tracking-tight md:text-3xl">
          I&apos;m Khushi Roy, I craft{" "}
          <em className="whitespace-nowrap font-serif text-[1.1em] italic text-seafoam">
            high-performance
          </em>
          ,
          responsive and aesthetic web applications, from the interface to the database.
        </p>
        <ul className="mt-8 space-y-1 text-[11px] uppercase tracking-[0.04em] text-foreground/50">
          {TAGS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <ProjectStack />
    </section>
  );
}
