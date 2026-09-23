import { bio } from "@/content";
import { Reveal } from "./reveal";

/**
 * No desktop: 3 colunas, com a foto sticky ocupando a do meio.
 * No celular: tudo empilhado. A foto nao precisa de espaco reservado
 * aqui porque ela sai de cena logo depois do "Ola!" (ver hero-bio.tsx).
 */
export function Bio() {
  return (
    <section
      id="sobre"
      className="relative flex min-h-[100svh] items-stretch py-24"
    >
      <div className="container-page grid w-full grid-cols-1 gap-y-8 md:grid-cols-3 md:grid-rows-[auto_1fr] md:gap-x-10">
        <Reveal className="md:col-start-1 md:row-start-1">
          <h2 className="heading">{bio.greeting}</h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="md:col-start-1 md:row-start-2 md:self-end"
        >
          <p className="body-text max-w-[320px] font-semibold">{bio.lead}</p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="md:col-start-3 md:row-start-1 md:row-span-2 md:self-end"
        >
          <div className="max-w-[360px] space-y-5">
            {bio.paragraphs.map((text) => (
              <p key={text} className="body-text">
                {text}
              </p>
            ))}
          </div>
          <a
            href={bio.cta.href}
            className="group mt-6 inline-flex min-h-[44px] items-center gap-3 text-[17px] tracking-[-0.03em]"
          >
            {bio.cta.label}
            <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition group-hover:bg-fg group-hover:text-bg">
              <ArrowUpRight />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function ArrowUpRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 9L9 3M9 3H4M9 3V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
