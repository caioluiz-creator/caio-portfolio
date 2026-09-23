import { Nav } from "@/components/nav";
import { HeroBio } from "@/components/hero-bio";
import { ScrollQuote } from "@/components/scroll-quote";
import { Services } from "@/components/services";
import { Stack } from "@/components/stack";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

/**
 * SECOES DESLIGADAS (nada foi apagado, so nao esta na pagina):
 *
 *   Projetos em Destaque  ->  components/projects.tsx
 *   Ideias                ->  components/thoughts.tsx
 *   Depoimentos           ->  components/testimonials.tsx
 *                             (trocada pela faixa de stack, porque os
 *                             depoimentos eram fictícios)
 *
 * Para religar qualquer uma delas:
 *   1. descomente o import correspondente abaixo;
 *   2. descomente a linha da secao dentro do <main>;
 *   3. volte o link no menu (nav.links) e no rodape (footer.quickLinks),
 *      em content.ts.
 *
 * O conteudo delas continua em content.ts (projects e thoughts) e o
 * estilo esta inteiro nos componentes, entao voltam exatamente como eram.
 */
// import { Projects } from "@/components/projects";
// import { Thoughts } from "@/components/thoughts";
// import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <HeroBio />
        <ScrollQuote />
        <Services />
        {/* <Projects /> */}
        <Stack />
        {/* <Thoughts /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
