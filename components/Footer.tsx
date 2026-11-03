"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Send } from "lucide-react";
import toast from "react-hot-toast";

const EMAIL = "roykhushi432@gmail.com";

const LINKS = [
  { label: "GitHub", href: "https://github.com/roykhushi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khushi-roy-a98273224/" },
  { label: "LeetCode", href: "https://leetcode.com/u/roykhushi432/" },
  { label: "X", href: "https://x.com/royKhushi27" },
  { label: "Blog", href: "https://medium.com/@roykhushi432" },
];

// 16px minimum keeps iOS Safari from zooming into the field on focus.
const field =
  "mt-2 w-full border-b border-foreground/25 bg-transparent py-3 text-base outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-foreground/40 focus-visible:border-foreground focus-visible:shadow-[0_1px_0_0_var(--foreground)]";
const label = "block text-[11px] uppercase tracking-[0.08em] text-muted-foreground";

export function Footer() {
  const reduce = useReducedMotion();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch {
      toast.error("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="border-t border-foreground/10 bg-background/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-14 md:py-28"
      >
        <div className="flex flex-col justify-between gap-14">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <h2 className="mt-4 text-[clamp(2.5rem,6vw,5.25rem)] font-medium leading-[0.95] tracking-[-0.04em]">
              Let&apos;s build{" "}
              <em className="font-serif text-[1.05em] italic text-seafoam">something</em> together.
            </h2>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-lg underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] duration-150 hover:decoration-foreground"
            >
              {EMAIL}
              <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 text-[11px] uppercase leading-snug tracking-[0.04em]">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 transition-colors duration-150 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-semibold">
              Based in
              <br />
              New Delhi, India
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8" aria-busy={isLoading}>
          <label className="block">
            <span className={label}>Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={field}
              required
            />
          </label>
          <label className="block">
            <span className={label}>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={field}
              required
            />
          </label>
          <label className="block">
            <span className={label}>Message</span>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me about your project"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${field} resize-none`}
              required
            />
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-[transform,background-color,opacity] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-foreground/85 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 [-webkit-user-select:none] [user-select:none] [touch-action:manipulation]"
          >
            {isLoading ? "Sending…" : "Send message"}
            <Send className="size-4" aria-hidden />
          </button>
        </form>
      </motion.div>

      <p className="mx-auto max-w-7xl px-6 pb-8 text-[11px] uppercase tracking-[0.04em] text-muted-foreground md:px-14">
        © {new Date().getFullYear()} Khushi Roy
      </p>
    </footer>
  );
}
