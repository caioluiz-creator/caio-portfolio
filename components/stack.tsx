import { stack } from "@/content";

/**
 * Faixa rolante com o que voce entrega e com o que voce constroi.
 * Entrou no lugar dos depoimentos: mesmo movimento, mesmo peso visual,
 * mas sem precisar de cliente real para citar.
 *
 * Duas linhas em sentidos opostos. Pausa quando o mouse esta em cima.
 * A animacao e CSS puro, em globals.css.
 */
export function Stack() {
  return (
    <section
      aria-label="Serviços e tecnologias"
      className="overflow-hidden py-20 md:py-28"
    >
      <Faixa itens={stack.servicos} duracao="46s" variante="solida" />
      <div className="mt-4">
        <Faixa
          itens={stack.tecnologias}
          duracao="58s"
          variante="contorno"
          reverso
        />
      </div>
    </section>
  );
}

function Faixa({
  itens,
  duracao,
  variante,
  reverso = false,
}: {
  itens: string[];
  duracao: string;
  variante: "solida" | "contorno";
  reverso?: boolean;
}) {
  // Lista duplicada: o trilho anda -50% e reinicia sem emenda.
  const dobrada = [...itens, ...itens];

  const pilula =
    variante === "solida"
      ? "bg-fg text-[var(--fg-dark)]"
      : "border border-line text-fg";

  return (
    <div className="marquee relative">
      <div
        className={`marquee-track gap-3 ${reverso ? "reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: duracao }}
      >
        {dobrada.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`inline-flex shrink-0 items-center rounded-full px-6 py-3 text-[clamp(1rem,1.5vw,1.25rem)] whitespace-nowrap tracking-[-0.03em] ${pilula}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
