import { footer, site } from "@/content";
import { Reveal } from "./reveal";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden rounded-t-[24px] bg-fg pt-24 md:pt-32"
      style={{ color: "var(--fg-dark)" }}
    >
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.2vw,3.75rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">
              {footer.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <p className="text-[clamp(1.1rem,1.6vw,1.4rem)] tracking-[-0.03em]">
                /Links
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {footer.quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-[44px] items-center rounded-[10px] bg-bg px-4 text-[15px] text-fg transition hover:opacity-80"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div>
              <p className="text-[clamp(1.1rem,1.6vw,1.4rem)] tracking-[-0.03em]">
                /Contato
              </p>
              <div className="mt-2 flex flex-col items-start">
                <a
                  href={site.whatsapp.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-[44px] items-center text-[17px] opacity-80 transition hover:opacity-100"
                >
                  {site.whatsapp.numero}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-[44px] items-center text-[17px] opacity-80 transition hover:opacity-100"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Wordmark gigante, cortado na base, como no original */}
        <p
          aria-hidden
          className="mt-16 -mb-[0.18em] w-full text-center leading-[0.75] font-extrabold tracking-[-0.04em] text-white/[0.06] select-none"
          style={{ fontSize: "clamp(5rem, 22vw, 20rem)" }}
        >
          {footer.wordmark}
        </p>
      </div>
    </footer>
  );
}
