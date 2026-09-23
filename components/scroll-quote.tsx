"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { quote } from "@/content";

/**
 * Frase que acende palavra por palavra conforme o scroll.
 * No original isso era feito com GSAP ScrollTrigger (scrub);
 * aqui o mesmo efeito sai do useScroll do Motion, sem dependencia extra.
 */
export function ScrollQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.55"],
  });

  const words = quote.text.split(" ");

  return (
    <section ref={ref} className="relative h-[180vh]">
      <div className="sticky top-0 flex h-[100svh] items-center">
        <div className="container-page">
          <p className="mx-auto max-w-[900px] text-center text-[clamp(1.5rem,3.2vw,3rem)] leading-[1.15] font-medium tracking-[-0.03em]">
            {words.map((word, i) => (
              <Word
                key={`${word}-${i}`}
                progress={scrollYProgress}
                range={[i / words.length, (i + 1) / words.length]}
              >
                {word}
              </Word>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
