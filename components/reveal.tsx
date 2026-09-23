"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Animacao de entrada identica a do site de referencia.
 * Os valores vieram do JSON "__framer__appearAnimationsContent" do Framer:
 *   initial   : { opacity: 0.001, y: 10 }
 *   animate   : { opacity: 1, y: 0 }
 *   transition: { type: "spring", bounce: 0, duration: 1.6 }
 */
export const APPEAR = {
  initial: { opacity: 0.001, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", bounce: 0, duration: 1.6 },
} as const;

type Props = {
  children: ReactNode;
  /** Atraso em segundos. No hero original: 1 e 1.4 */
  delay?: number;
  /** "mount" anima ao carregar (hero); "view" anima ao entrar na tela */
  mode?: "mount" | "view";
  className?: string;
  /** Rotacao final, como no raio 3D do hero (16 graus) */
  rotate?: number;
};

export function Reveal({
  children,
  delay = 0,
  mode = "view",
  className,
  rotate,
}: Props) {
  const animate = rotate ? { ...APPEAR.animate, rotate } : APPEAR.animate;
  const transition = { ...APPEAR.transition, delay };

  if (mode === "mount") {
    return (
      <motion.div
        className={className}
        initial={APPEAR.initial}
        animate={animate}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={APPEAR.initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
