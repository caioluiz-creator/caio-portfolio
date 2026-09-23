"use client";

import { useState } from "react";
import { contact, site } from "@/content";
import { Reveal } from "./reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  /**
   * O formulario abre o WhatsApp com a mensagem ja escrita.
   * Motivo: quase todo mundo chega pelo Instagram, no celular, e o
   * WhatsApp tem muito menos atrito que o app de email.
   *
   * Para voltar ao email, troque o corpo desta funcao por:
   *   window.location.href =
   *     `mailto:${site.email}?subject=Contato pelo site&body=${texto}`
   */
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("name") ?? "").trim();
    const mensagem = String(data.get("message") ?? "").trim();

    const texto = `Olá, Caio! Meu nome é ${nome}.\n\n${mensagem}`;
    window.open(
      `${site.whatsapp.link}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  const field =
    "w-full rounded-[10px] border border-line-dark bg-white/5 px-4 py-3 text-[16px] outline-none transition placeholder:opacity-50 focus:border-white/40";

  return (
    <section id="contato" className="py-28 md:py-40">
      <div className="container-page grid grid-cols-1 gap-12 md:grid-cols-2 md:items-end md:gap-16">
        <Reveal>
          <div>
            <h2 className="heading">{contact.title}</h2>
            <p className="body-text mt-6 max-w-[380px] text-muted">
              {contact.subtitle}
            </p>

            <div className="mt-6 flex flex-col items-start">
              <a
                href={site.whatsapp.link}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-[44px] items-center text-[clamp(1.1rem,1.6vw,1.4rem)] tracking-[-0.03em] underline decoration-line underline-offset-4 hover:decoration-fg"
              >
                {site.whatsapp.numero}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-[44px] items-center text-[clamp(1.1rem,1.6vw,1.4rem)] tracking-[-0.03em] underline decoration-line underline-offset-4 hover:decoration-fg"
              >
                {site.email}
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {contact.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-[44px] items-center rounded-full border border-line px-5 text-[15px] transition hover:bg-fg hover:text-bg"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[18px] bg-fg p-6 sm:p-8"
            style={{ color: "var(--fg-dark)" }}
          >
            <div className="space-y-4">
              <input
                name="name"
                required
                placeholder="Seu nome"
                className={field}
              />
              {/* Sem campo de email: a conversa segue no WhatsApp,
                  entao pedir email so criaria trabalho a toa. */}
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Conte o que você precisa"
                className={`${field} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="mt-5 w-full cursor-pointer rounded-[10px] bg-bg py-3.5 text-[16px] font-medium text-fg transition hover:opacity-90 active:scale-[0.99]"
            >
              {sent ? "Abrindo o WhatsApp..." : "Enviar no WhatsApp"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
