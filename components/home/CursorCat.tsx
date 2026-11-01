"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { CAT_EVENT, readCatPreference } from "@/lib/cat-cursor";

const SIZE = 56;
// Where inside the 56px box the real pointer sits: just under the nose.
const HOT_X = 28;
const HOT_Y = 36;
const SLEEP_AFTER_MS = 8000;

type Eyes = "open" | "happy" | "sleep";

const INK = "#0a1c1d"; // body fill: abyss lifted a touch so it reads on the page
const RIM = "#85bdbf"; // seafoam outline
const ICE = "#c9fbff";

/** A small black cat that takes the place of the mouse cursor. */
export function CursorCat() {
  const reduce = useReducedMotion() ?? false;

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [overField, setOverField] = useState(false);
  const [facing, setFacing] = useState<1 | -1>(1);
  const [moving, setMoving] = useState(false);
  const [eyes, setEyes] = useState<Eyes>("open");
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  // Snappy follow with a touch of lag so it reads as a companion, not a sprite glued on.
  const follow = reduce
    ? { stiffness: 1200, damping: 120, mass: 0.1 }
    : { stiffness: 420, damping: 34, mass: 0.5 };
  const sx = useSpring(x, follow);
  const sy = useSpring(y, follow);

  // Lean into the direction of travel.
  const vx = useVelocity(sx);
  const tiltTarget = useTransform(vx, [-2000, 2000], reduce ? [0, 0] : [-14, 14], {
    clamp: true,
  });
  const tilt = useSpring(tiltTarget, { stiffness: 220, damping: 22 });

  const seen = useRef(false);
  const stopTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const sleepTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // On only for devices with a precise hover pointer, and only if the visitor hasn't turned it off.
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches && readCatPreference());
    update();
    mq.addEventListener("change", update);
    window.addEventListener(CAT_EVENT, update);
    return () => {
      mq.removeEventListener("change", update);
      window.removeEventListener(CAT_EVENT, update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-cat");

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      x.set(e.clientX);
      y.set(e.clientY);
      if (!seen.current) {
        // First movement: appear where the pointer is instead of flying in.
        seen.current = true;
        sx.jump(e.clientX);
        sy.jump(e.clientY);
      }
      setVisible(true);

      const t = e.target instanceof Element ? e.target : null;
      setOverField(!!t?.closest("input, textarea, select"));
      setEyes(t?.closest("a, button, [role='button'], summary") ? "happy" : "open");

      if (Math.abs(e.movementX) > 2) setFacing(e.movementX > 0 ? 1 : -1);
      setMoving(true);
      clearTimeout(stopTimer.current);
      stopTimer.current = setTimeout(() => setMoving(false), 120);
      clearTimeout(sleepTimer.current);
      sleepTimer.current = setTimeout(() => setEyes("sleep"), SLEEP_AFTER_MS);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    document.addEventListener("mouseleave", leave);
    return () => {
      root.classList.remove("has-cat");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      document.removeEventListener("mouseleave", leave);
      clearTimeout(stopTimer.current);
      clearTimeout(sleepTimer.current);
      seen.current = false;
      setVisible(false);
    };
  }, [enabled, x, y, sx, sy]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-150"
      style={{
        x: sx,
        y: sy,
        marginLeft: -HOT_X,
        marginTop: -HOT_Y,
        width: SIZE,
        height: SIZE,
        opacity: visible && !overField ? 1 : 0,
      }}
    >
      <motion.div
        style={{ rotate: tilt }}
        animate={{ scaleX: facing }}
        transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
      >
        <div
          className="transition-transform duration-100 ease-out"
          style={{ transform: pressed ? "scale(0.88)" : "scale(1)", transformOrigin: "50% 80%" }}
        >
          <svg
            className="cat-svg"
            width={SIZE}
            height={SIZE}
            viewBox="0 0 56 56"
            fill="none"
            data-eyes={eyes}
            data-moving={moving}
          >
            <g className="cat-body-bob">
              {/* tail: seafoam outline first, then the dark fill on top */}
              <g className="cat-tail">
                <path
                  d="M39 47 C51 46 54 33 47 27"
                  stroke={RIM}
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M39 47 C51 46 54 33 47 27"
                  stroke={INK}
                  strokeWidth="5.2"
                  strokeLinecap="round"
                />
              </g>

              {/* body + front paws */}
              <ellipse cx="28" cy="42" rx="13" ry="11" fill={INK} stroke={RIM} strokeWidth="1.5" />
              <ellipse cx="22" cy="51" rx="4.6" ry="3" fill={INK} stroke={RIM} strokeWidth="1.3" />
              <ellipse cx="34" cy="51" rx="4.6" ry="3" fill={INK} stroke={RIM} strokeWidth="1.3" />

              {/* ears (behind the head) */}
              <path
                d="M14.5 22 L16 5.5 L27 14 Z"
                fill={INK}
                stroke={RIM}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M41.5 22 L40 5.5 L29 14 Z"
                fill={INK}
                stroke={RIM}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* head */}
              <ellipse cx="28" cy="26" rx="15" ry="12.5" fill={INK} stroke={RIM} strokeWidth="1.5" />

              {/* inner ears */}
              <path d="M18 17 L18.6 10.2 L23.2 14.2 Z" fill="#57737a" />
              <path d="M38 17 L37.4 10.2 L32.8 14.2 Z" fill="#57737a" />

              {/* eyes: open (blinks), happy ^ ^ over links, sleepy when idle */}
              <g className="cat-eyes-open cat-blink">
                <ellipse cx="22" cy="26" rx="3" ry="3.9" fill={ICE} />
                <ellipse cx="34" cy="26" rx="3" ry="3.9" fill={ICE} />
                <ellipse cx="22.4" cy="26.6" rx="1.8" ry="2.7" fill="#040f0f" />
                <ellipse cx="34.4" cy="26.6" rx="1.8" ry="2.7" fill="#040f0f" />
                <circle cx="21.4" cy="24.8" r="0.95" fill="#ffffff" />
                <circle cx="33.4" cy="24.8" r="0.95" fill="#ffffff" />
              </g>
              <g className="cat-eyes-happy" stroke={ICE} strokeWidth="1.9" strokeLinecap="round">
                <path d="M18.8 27.6 Q22 22.8 25.2 27.6" />
                <path d="M30.8 27.6 Q34 22.8 37.2 27.6" />
              </g>
              <g className="cat-eyes-sleep" stroke={ICE} strokeWidth="1.7" strokeLinecap="round">
                <path d="M19.2 26.6 Q22 28.8 24.8 26.6" />
                <path d="M31.2 26.6 Q34 28.8 36.8 26.6" />
              </g>

              {/* blush, nose, mouth */}
              <circle cx="16.6" cy="30.6" r="2" fill={RIM} opacity="0.28" />
              <circle cx="39.4" cy="30.6" r="2" fill={RIM} opacity="0.28" />
              <path d="M26.8 30 h2.4 l-1.2 1.5 z" fill={RIM} />
              <path
                d="M28 31.5 v1 M28 32.5 q-1.6 1.7 -3 0.6 M28 32.5 q1.6 1.7 3 0.6"
                stroke={RIM}
                strokeWidth="0.9"
                strokeLinecap="round"
              />

              {/* whiskers */}
              <g stroke={RIM} strokeWidth="0.8" strokeLinecap="round" opacity="0.7">
                <path d="M13.5 29 L7.5 27.6" />
                <path d="M13.5 31.2 L7.5 32.2" />
                <path d="M42.5 29 L48.5 27.6" />
                <path d="M42.5 31.2 L48.5 32.2" />
              </g>
            </g>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
