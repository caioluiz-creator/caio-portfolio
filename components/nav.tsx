"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav, site } from "@/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-5">
      <motion.nav
        layout
        transition={{ type: "spring", bounce: 0, duration: 0.6 }}
        className="w-full max-w-[320px] overflow-hidden rounded-[18px] bg-fg text-bg-dark shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
        style={{ color: "var(--fg-dark)" }}
      >
        <div className="flex h-[60px] items-center justify-between pl-6 pr-3">
          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            className="flex min-h-[44px] items-center text-[22px] font-semibold tracking-[-0.04em]"
          >
            {site.name}
          </a>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-[10px] bg-bg transition-transform active:scale-95"
          >
            <span className="flex items-center gap-[3px]">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={open ? { scaleY: 2.2 } : { scaleY: 1 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  className="block h-1 w-1 rounded-full bg-fg"
                />
              ))}
            </span>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              className="px-3 pb-3"
            >
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[44px] items-center rounded-[10px] px-3 py-2 text-[17px] tracking-[-0.03em] opacity-70 transition hover:bg-white/10 hover:opacity-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
