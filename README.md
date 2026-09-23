# Site pessoal / link na bio

Reconstrução em código do layout do template Framer, em Next.js.
Código seu, sem mensalidade e sem selo. Dá para hospedar de graça com domínio próprio.

## Rodando

```bash
npm install
npm run dev
```

Abre em http://localhost:3000 (se a porta estiver ocupada, use `npm run dev -- -p 3100`).

## Onde mudar as coisas

**Textos, links, projetos, depoimentos: só em [`content.ts`](content.ts).**
Esse arquivo é a única coisa que você precisa editar no dia a dia. Nenhum texto
está escrito dentro dos componentes.

**Imagens:** troque os arquivos em [`public/img/`](public/img/), mantendo os nomes.

| Arquivo | Onde aparece | Tamanho sugerido |
|---|---|---|
|  `caio.png` | Hero e bio (a foto que cresce no scroll) | 400 x 456 px |
| `work-1.png` … `work-4.png` | Cards de projetos | 582 x 401 px |
| `star-3d.png`, `bolt-3d.png` | Enfeites 3D do hero | 198 px / 140 px |

As imagens atuais vieram do template e servem só de rascunho. **Troque antes de publicar.**

**Cores e tipografia:** ficam em [`app/globals.css`](app/globals.css), no topo.
A paleta é a mesma do original: fundo `#faf7f3`, texto `#111111`.
A fonte é Archivo, carregada pelo `next/font` em [`app/layout.tsx`](app/layout.tsx).

## Os efeitos

| Efeito | Onde está |
|---|---|
| Entrada dos elementos (spring, sem bounce, 1.6s) | [`components/reveal.tsx`](components/reveal.tsx) |
| Avatar sticky que cresce e ganha cor no scroll | [`components/hero-bio.tsx`](components/hero-bio.tsx) |
| Frase que acende palavra por palavra | [`components/scroll-quote.tsx`](components/scroll-quote.tsx) |
| Depoimentos em marquee infinito | [`components/testimonials.tsx`](components/testimonials.tsx) + `globals.css` |

Os parâmetros da animação de entrada foram extraídos do próprio site original
(do JSON `__framer__appearAnimationsContent`), então o movimento é o mesmo.

No original os atrasos eram 1s e 1.4s, porque havia uma intro antes.
Aqui estão mais curtos; para deixar idêntico, ajuste os `delay` em `hero.tsx`.

## Formulário de contato

Sem backend: o botão abre o e-mail do visitante já preenchido, usando o endereço
de `site.email` em `content.ts`. Se quiser receber direto no site, troque o
`handleSubmit` de [`components/contact.tsx`](components/contact.tsx) por um
endpoint (Formspree, Resend ou um Route Handler do Next).

## Publicando

```bash
npm run build
```

Depois é só subir para a Vercel (`vercel` ou conectando o repositório no site deles).
Domínio próprio é grátis no plano free, só apontar o DNS.
