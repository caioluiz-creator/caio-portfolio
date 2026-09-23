import Image from "next/image";
import { projects } from "@/content";
import { Reveal } from "./reveal";
import { ArrowUpRight } from "./bio";

export function Projects() {
  return (
    <section id="projetos" className="py-28 md:py-40">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="heading">
              {projects.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={projects.cta.href}
              className="group inline-flex min-h-[44px] items-center gap-3 text-[17px] tracking-[-0.03em]"
            >
              {projects.cta.label}
              <span className="grid h-7 w-7 place-items-center rounded-full border border-line transition group-hover:bg-fg group-hover:text-bg">
                <ArrowUpRight />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
          {projects.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 2) * 0.08}>
              <a href={item.href} className="group block">
                <div className="overflow-hidden rounded-[14px] bg-black/5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={582}
                    height={401}
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-5 text-[clamp(1.25rem,2vw,1.75rem)] font-medium tracking-[-0.03em]">
                  {item.name}
                </h3>
                <p className="body-text mt-1 text-muted">{item.kind}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
