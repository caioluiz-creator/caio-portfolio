import Image from "next/image";
import { thoughts } from "@/content";
import { Reveal } from "./reveal";
import { ArrowUpRight } from "./bio";

export function Thoughts() {
  return (
    <section className="py-28 md:py-40">
      <div className="container-page">
        <Reveal>
          <h2 className="heading">{thoughts.title}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {thoughts.posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <a
                href={post.href}
                className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[14px] p-7"
              >
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                <div className="relative text-bg-dark" style={{ color: "var(--fg-dark)" }}>
                  <p className="text-[15px] opacity-70">{post.date}</p>
                  <h3 className="mt-2 text-[clamp(1.25rem,1.9vw,1.6rem)] leading-tight font-medium tracking-[-0.03em]">
                    {post.title}
                  </h3>
                  <p className="body-text mt-3 opacity-75">{post.excerpt}</p>
                </div>
              </a>
            </Reveal>
          ))}

          {/* Ultimo card: chamada, como no original */}
          <Reveal delay={0.16}>
            <div
              className="flex aspect-[3/4] flex-col justify-between rounded-[14px] bg-fg p-7 text-bg-dark"
              style={{ color: "var(--fg-dark)" }}
            >
              <p className="text-[clamp(1.4rem,2.3vw,2rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                {thoughts.teaser}
              </p>
              <a
                href={thoughts.cta.href}
                className="group inline-flex min-h-[44px] items-center gap-3 text-[17px] tracking-[-0.03em]"
              >
                {thoughts.cta.label}
                <span className="grid h-7 w-7 place-items-center rounded-full border border-line-dark transition group-hover:bg-bg group-hover:text-fg">
                  <ArrowUpRight />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
