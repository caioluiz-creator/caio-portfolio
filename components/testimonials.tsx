import { testimonials } from "@/content";

/**
 * Duas faixas em marquee infinito, a segunda no sentido contrario.
 * Pausa quando o mouse esta em cima. A animacao e CSS puro (globals.css).
 */
export function Testimonials() {
  const rowA = testimonials.items;
  const rowB = [...testimonials.items].reverse();

  return (
    <section className="overflow-hidden py-20 md:py-28">
      <MarqueeRow items={rowA} duration="52s" />
      <div className="mt-5">
        <MarqueeRow items={rowB} duration="64s" reverse />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  duration,
  reverse = false,
}: {
  items: typeof testimonials.items;
  duration: string;
  reverse?: boolean;
}) {
  // Lista duplicada: o track anda -50% e volta ao inicio sem emenda.
  const doubled = [...items, ...items];

  return (
    <div className="marquee relative">
      <div
        className={`marquee-track gap-5 ${reverse ? "reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {doubled.map((item, i) => (
          <article
            key={`${item.author}-${i}`}
            className="flex w-[340px] shrink-0 flex-col justify-between gap-6 rounded-[14px] bg-fg p-6 text-bg-dark sm:w-[400px]"
            style={{ color: "var(--fg-dark)" }}
          >
            <p className="body-text opacity-90">“{item.quote}”</p>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-[13px] font-semibold">
                {item.author.charAt(0)}
              </span>
              <span className="leading-tight">
                <span className="block text-[15px] font-medium">
                  {item.author}
                </span>
                <span className="block text-[14px] opacity-60">
                  {item.role}
                </span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
