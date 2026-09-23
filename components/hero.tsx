import Image from "next/image";
import { hero } from "@/content";
import { Reveal } from "./reveal";

/**
 * Hero: titulo gigante + icones 3D + avatar.
 * Os atrasos originais eram 1.0s e 1.4s (o site tinha uma intro antes).
 * Aqui estao mais curtos; se quiser identico, troque por 1 e 1.4.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-28"
    >
      <div className="container-page relative">
        {/* Estrela 3D, a esquerda da primeira linha */}
        <Reveal
          mode="mount"
          delay={0.3}
          className="pointer-events-none absolute -top-2 left-0 z-10 w-[14vw] max-w-[198px] min-w-[70px] sm:-top-6"
        >
          <Image
            src="/img/star-3d.png"
            alt=""
            width={198}
            height={198}
            priority
            className="h-auto w-full"
          />
        </Reveal>

        {/* Raio 3D, a direita da segunda linha (rotacionado 16 graus, como no original) */}
        <Reveal
          mode="mount"
          delay={0.3}
          rotate={16}
          className="pointer-events-none absolute right-0 bottom-0 z-10 w-[10vw] max-w-[140px] min-w-[52px]"
        >
          <Image
            src="/img/bolt-3d.png"
            alt=""
            width={140}
            height={140}
            priority
            className="h-auto w-full"
          />
        </Reveal>

        <Reveal mode="mount" delay={0.15}>
          <h1 className="display text-center">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>
      </div>

      {/* O avatar fica no componente HeroBio: ele e sticky e atravessa as duas secoes */}
      <div className="mt-10 h-[205px] sm:mt-14 md:h-[228px]" aria-hidden />

      {/* Rodape do hero: ano a esquerda, assinatura a direita */}
      <div
        data-hero-footer
        className="container-page absolute inset-x-0 bottom-8 z-0 transition-opacity"
      >
        <div className="flex items-end justify-between gap-4">
          <Reveal mode="mount" delay={0.6}>
            <p className="heading-sm">{hero.year}</p>
          </Reveal>
          <Reveal mode="mount" delay={0.6}>
            <p className="body-text pb-1">{hero.since}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
