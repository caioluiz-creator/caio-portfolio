"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { hero } from "@/content";
import { Hero } from "./hero";
import { Bio } from "./bio";

/**
 * Hero + Bio compartilham o mesmo avatar.
 * Ele fica sticky: comeca pequeno e sem cor no hero e, conforme voce rola,
 * sobe para o centro, cresce e ganha cor na bio.
 * (No original: "Sticky Avatar Wrap", com as camadas Avatar - Back / Avatar - Front.)
 *
 * O progresso e calculado na mao a partir do rect do bloco: e so geometria,
 * entao o efeito fica previsivel em qualquer altura de tela.
 */
export function HeroBio() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const apply = () => {
      frame = 0;
      const wrap = wrapRef.current;
      const box = boxRef.current;
      const front = frontRef.current;
      if (!wrap || !box || !front) return;

      const rect = wrap.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const raw = total > 0 ? -rect.top / total : 0;
      const p = Math.min(1, Math.max(0, raw));

      const mobileView = window.innerWidth < 768;

      // No desktop a transicao ocupa a primeira metade do bloco.
      // No celular ela e mais curta, porque a foto precisa crescer, ganhar cor
      // e sair de cena antes do "Ola!" subir, senao um cobre o outro.
      const FIM = mobileView ? 0.3 : 0.5;
      const t = Math.min(1, p / FIM);

      // A moldura tem o tamanho FINAL e encolhe no topo.
      // Reduzir mantem a imagem nitida; ampliar com transform borra, porque o
      // navegador rasteriza a camada no tamanho pequeno e estica o bitmap.
      // No celular a moldura ja e menor, entao encolhe menos.
      const mobile = mobileView;
      const min = mobile ? 0.6 : 0.5;
      const scale = min + t * (1 - min);
      // Quanto a foto desce no hero. No celular a tela e estreita e alta,
      // entao ela fica mais perto do titulo. Na bio os dois centralizam.
      const baseOffset = mobile ? 12 : 26;
      const offsetVh = baseOffset * (1 - t);

      // No celular o layout e de uma coluna so, entao uma foto fixa no centro
      // passaria por cima do texto da bio. Depois que a transicao termina
      // (logo apos o "Ola!"), ela se solta e sobe junto com a rolagem,
      // desaparecendo antes da apresentacao comecar. No desktop ela fica,
      // porque la ocupa a coluna do meio e nao atrapalha nada.
      // Terminada a transicao, no celular a foto para de acompanhar a tela:
      // ela "ancora" logo acima do "Ola!" e passa a rolar junto com a pagina,
      // como uma imagem comum. Assim ela nunca desce por cima do texto.
      let releasePx = 0;
      if (mobile && p > FIM) {
        releasePx = (p - FIM) * total;
      }

      // O rodape do hero ("©2026" e a assinatura) e decoracao da primeira tela.
      // No celular ele cruzaria a foto durante a rolagem, entao some logo no inicio.
      const heroFooter = wrap.querySelector<HTMLElement>("[data-hero-footer]");
      if (heroFooter) {
        heroFooter.style.opacity = mobile
          ? String(Math.max(0, 1 - p / 0.09))
          : "1";
      }

      box.style.transform = `translate(-50%, -50%) translateY(${offsetVh}vh) translateY(${-releasePx}px) scale(${scale})`;

      // A cor entra a partir de 36% da transicao
      front.style.opacity = String(Math.min(1, Math.max(0, (t - 0.36) / 0.64)));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      {/* Camada sticky com o avatar */}
      <div className="pointer-events-none sticky top-0 z-20 h-[100svh]">
        <div
          ref={boxRef}
          style={{ transform: "translate(-50%, -50%) translateY(26vh) scale(0.6)" }}
          className="absolute top-1/2 left-1/2 h-[342px] w-[300px] overflow-hidden rounded-[20px] will-change-transform md:h-[456px] md:w-[400px] md:rounded-[24px]"
        >
          {/* Camada de tras: foto dessaturada (o que aparece no hero) */}
          <Image
            src={hero.avatar}
            alt="Retrato"
            fill
            priority
            sizes="(max-width: 768px) 300px, 400px"
            className="object-cover [filter:grayscale(1)_contrast(1.1)_brightness(0.95)]"
          />
          {/* Camada da frente: foto colorida e com enquadramento aberto,
              revelada no scroll. Como a moldura tambem cresce, a troca
              das duas imagens faz a foto "abrir" em vez de so ampliar. */}
          <div ref={frontRef} style={{ opacity: 0 }} className="absolute inset-0">
            <Image
              src={hero.avatarBio}
              alt=""
              fill
              sizes="(max-width: 768px) 300px, 400px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* O conteudo sobe para ficar por baixo da camada sticky */}
      <div className="-mt-[100svh]">
        <Hero />
        <Bio />
      </div>
    </div>
  );
}
