import { services } from "@/content";
import { Reveal } from "./reveal";

export function Services() {
  return (
    <section id="servicos" className="py-28 md:py-40">
      <div className="container-page">
        <Reveal>
          <h2 className="heading">{services.title}</h2>
        </Reveal>

        <ul className="mt-16 md:mt-24">
          {services.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <li className="group flex flex-col gap-2 border-b border-line py-7 transition-colors hover:border-fg/30 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="text-[clamp(1.25rem,2vw,1.75rem)] font-medium tracking-[-0.03em] transition-transform duration-500 sm:group-hover:translate-x-2">
                  {item.name}
                </h3>
                <p className="flex flex-wrap items-center gap-x-2 text-[15px] text-muted sm:justify-end">
                  {item.tags.map((tag, t) => (
                    <span key={tag} className="whitespace-nowrap">
                      {tag}
                      {t < item.tags.length - 1 && (
                        <span className="ml-2 opacity-60">•</span>
                      )}
                    </span>
                  ))}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
