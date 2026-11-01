"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

const LENS_R = 76;
const AMBER = "#f5a30a";

// Three offset, tinted copies blended with `screen` give the rainbow fringe.
const CHANNELS = [
  { color: "#ff3b30", scale: 1.2 },
  { color: "#34ff7a", scale: 1.25 },
  { color: "#3a6bff", scale: 1.3 },
] as const;

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

function Headline({ tone, animate = false }: { tone?: string; animate?: boolean }) {
  // The entrance is a CSS animation (see .reveal-line in globals.css) so the
  // headline shows on first paint instead of waiting for JS to hydrate.
  const line = (i: number) =>
    ({
      className: animate ? "reveal-line" : undefined,
      style: { "--i": i } as React.CSSProperties,
    }) as const;

  return (
    <h1
      className="w-full text-[clamp(2.75rem,12.5vw,12rem)] font-medium leading-[0.9] tracking-[-0.045em]"
      style={tone ? { color: tone } : undefined}
    >
      <span className="flex items-end justify-between gap-6">
        <Mask>
          <span className={`block ${line(0).className ?? ""}`} style={line(0).style}>
            Creative
          </span>
        </Mask>
        <Mask>
          <span
            className={`mb-[0.1em] block font-serif text-[0.55em] italic leading-none tracking-[-0.02em] ${line(1).className ?? ""}`}
            style={{ ...line(1).style, color: tone ?? AMBER }}
          >
            full-stack
          </span>
        </Mask>
      </span>
      <span className="block md:pl-[22%]">
        <Mask>
          <span className={`block ${line(2).className ?? ""}`} style={line(2).style}>
            developer
          </span>
        </Mask>
      </span>
    </h1>
  );
}

// Same box for the real headline and every lens copy so they line up exactly.
const layoutClass =
  "absolute inset-0 flex flex-col justify-center px-6 pb-36 pt-24 md:px-14";

export function Hero() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLElement>(null);
  const [lensEnabled, setLensEnabled] = useState(false);

  // Lens only on devices with a precise hover pointer, and never with reduced motion.
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setLensEnabled(mq.matches && !reduce);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 30, mass: 0.6 });
  const open = useSpring(0, { stiffness: 320, damping: 32, mass: 0.7 });

  const radius = useTransform(open, (v) => Math.max(v, 0) * LENS_R);
  const maskRadius = useTransform(radius, (r) => Math.max(r, 0.01));
  const clip = useMotionTemplate`circle(${radius}px at ${sx}px ${sy}px)`;
  const baseMask = useMotionTemplate`radial-gradient(circle ${maskRadius}px at ${sx}px ${sy}px, transparent 97%, #000 100%)`;
  const origin = useMotionTemplate`${sx}px ${sy}px`;

  const place = (e: React.PointerEvent<HTMLElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  const onEnter = (e: React.PointerEvent<HTMLElement>) => {
    if (!lensEnabled || e.pointerType === "touch") return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    // Snap to the entry point so the lens doesn't fly in from the last position.
    x.set(px);
    y.set(py);
    sx.jump(px);
    sy.jump(py);
    open.set(1);
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-svh min-h-[40rem] overflow-hidden"
      onPointerEnter={onEnter}
      onPointerMove={lensEnabled ? place : undefined}
      onPointerLeave={() => open.set(0)}
    >
      {/* Real, selectable headline. A hole is masked out where the lens sits. */}
      <motion.div
        className={layoutClass}
        style={lensEnabled ? { maskImage: baseMask, WebkitMaskImage: baseMask } : undefined}
      >
        <Headline animate />
      </motion.div>

      {lensEnabled && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 isolate blur-[1.2px]"
            style={{ clipPath: clip, WebkitClipPath: clip }}
          >
            {CHANNELS.map((c) => (
              <motion.div
                key={c.color}
                className="absolute inset-0 mix-blend-screen"
                style={{ scale: c.scale, transformOrigin: origin }}
              >
                <div className={layoutClass}>
                  <Headline tone={c.color} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 rounded-full border border-white/30 bg-white/[0.04] shadow-[inset_0_0_32px_rgba(255,255,255,0.1)]"
            style={{
              x: sx,
              y: sy,
              width: LENS_R * 2,
              height: LENS_R * 2,
              marginLeft: -LENS_R,
              marginTop: -LENS_R,
              scale: open,
              opacity: open,
            }}
          />
        </>
      )}

      <div className="absolute inset-x-6 bottom-8 flex items-end justify-between md:inset-x-14">
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-[11px] uppercase leading-snug tracking-[0.04em] md:grid-cols-[auto_auto_auto] md:gap-x-16">
          <div>
            <p className="font-semibold">
              Frontend / Backend
              <br />
              Full-stack
            </p>
            <p className="mt-2 text-white/60">
              Currently available
              <br />
              for new opportunities
            </p>
          </div>
          <div>
            <p className="font-semibold">
              Based in
              <br />
              New Delhi, India
            </p>
          </div>
          <ul className="hidden gap-x-4 md:grid md:grid-cols-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition-colors duration-150 hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <span aria-hidden className="scroll-cue block h-16 w-px bg-white/50" />
      </div>
    </section>
  );
}
