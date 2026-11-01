"use client";

import { useEffect, useRef, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const NAVY = ["#02040a", "#0a1a3a", "#1b4f95", "#050d1c", "#12315f"];
const WARM = ["#2a0630", "#0e8a86", "#e3a21a", "#b3202a", "#4a0f45"];

// A soft gradient doesn't need retina resolution; keep GPU cost low.
const GL = { minPixelRatio: 1, maxPixelCount: 900_000 } as const;

/**
 * Fixed full-screen gradient. The navy layer is always on; the warm layer
 * fades in while the #work section is on screen and out again after it.
 * With reduced motion the gradient is static (speed 0 stops the rAF loop).
 */
export function ShaderBackground() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const range = useRef({ a: 0, b: 1, c: 2, d: 3 });
  const [warmOn, setWarmOn] = useState(false);

  useEffect(() => {
    const measure = () => {
      const el = document.getElementById("work");
      if (!el) return;
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const h = el.offsetHeight;
      range.current = {
        a: top - vh * 0.8,
        b: top - vh * 0.1,
        c: top + h - vh * 0.9,
        d: top + h - vh * 0.1,
      };
    };
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  const warmOpacity = useTransform(scrollY, (y) => {
    const { a, b, c, d } = range.current;
    if (y <= a || y >= d) return 0;
    if (y < b) return (y - a) / (b - a);
    if (y <= c) return 1;
    return 1 - (y - c) / (d - c);
  });

  // Stop the warm layer's render loop while it's invisible.
  useMotionValueEvent(warmOpacity, "change", (v) => setWarmOn(v > 0.01));

  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden bg-[#02040a]">
      <MeshGradient
        {...GL}
        style={{ width: "100%", height: "100%" }}
        colors={NAVY}
        distortion={0.9}
        swirl={0.35}
        grainMixer={0.25}
        grainOverlay={0.18}
        speed={reduce ? 0 : 0.18}
      />
      <motion.div className="absolute inset-0" style={{ opacity: warmOpacity }}>
        <MeshGradient
          {...GL}
          style={{ width: "100%", height: "100%" }}
          colors={WARM}
          distortion={0.85}
          swirl={0.5}
          grainMixer={0.3}
          grainOverlay={0.2}
          speed={reduce || !warmOn ? 0 : 0.22}
        />
      </motion.div>
      {/* Scrim keeps small white text readable over the brighter warm patches. */}
      <div className="absolute inset-0 bg-black/25" />
    </div>
  );
}
