"use client";

import { useEffect, useState } from "react";
import { PawPrint } from "lucide-react";
import { CAT_EVENT, readCatPreference, writeCatPreference } from "@/lib/cat-cursor";

/** Lets visitors switch the cat cursor off (and back on). Only shown on mouse devices. */
export function CatToggle() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const sync = () => setOn(readCatPreference());
    sync();
    window.addEventListener(CAT_EVENT, sync);
    return () => window.removeEventListener(CAT_EVENT, sync);
  }, []);

  return (
    <button
      type="button"
      aria-pressed={on}
      aria-label="Cat cursor"
      title={on ? "Turn the cat cursor off" : "Turn the cat cursor on"}
      onClick={() => writeCatPreference(!on)}
      className="hidden size-9 place-items-center rounded-full border border-foreground/20 text-foreground/70 transition-[transform,background-color,color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-foreground/10 hover:text-foreground active:scale-[0.95] aria-pressed:text-seafoam [@media(hover:hover)_and_(pointer:fine)]:grid"
    >
      <PawPrint className="size-4" aria-hidden />
    </button>
  );
}
