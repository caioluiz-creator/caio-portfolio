/**
 * ============================================================
 *  TODO O CONTEÚDO DO SITE ESTÁ NESTE ARQUIVO.
 *  Para mudar textos, links, projetos e depoimentos,
 *  edite aqui. Você não precisa mexer em mais nada.
 * ============================================================
 */

export const site = {
  /** Nome que aparece na barra de navegação e no rodapé */
  name: "Caio Luiz",
  /** Título da aba do navegador */
  title: "Caio Luiz | Portfólio",
  description:
    "Criador de sites e identidades digitais. Portfólio pessoal e link na bio.",
  email: "nascimentocaio491@gmail.com",
  /** WhatsApp: o link usa o formato internacional (55 + DDD + numero) */
  whatsapp: {
    numero: "(64) 9 9325-3890",
    link: "https://wa.me/5564993253890",
  },
};

export const nav = {
  links: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ],
};

export const hero = {
  /** Cada item é uma linha do título gigante */
  titleLines: ["Web", "Developer"],
  year: "©2026",
  since: "/CRIANDO DESDE 2024",
  /** Foto do topo: aparece pequena e em preto e branco. Corte fechado. */
  avatar: "/img/caio.jpg",
  /** Foto da bio: aparece grande e colorida no scroll. Enquadramento aberto. */
  avatarBio: "/img/caio-bio.jpg",
};

export const bio = {
  greeting: "Olá!",
  lead: "Sou o Caio Luiz, tenho 18 anos e crio sites e identidades digitais para marcas que querem ser levadas a sério.",
  paragraphs: [
    "Trabalho com design e desenvolvimento web, criando páginas rápidas, bonitas e feitas para converter, não só para enfeitar.",
    "Já construí sites, landing pages e identidades para agências, lojas e projetos próprios, cuidando do visual e da parte técnica.",
  ],
  cta: { label: "Fale comigo", href: "#contato" },
};

export const quote = {
  /** As primeiras palavras já nascem destacadas; o resto acende conforme o scroll */
  text: "Da ideia ao lançamento. Sites limpos e rápidos, feitos para carregar em segundos, funcionar em qualquer tela e vender de verdade, guiados por clareza, capricho e intenção em cada detalhe.",
};

export const services = {
  title: "Serviços",
  items: [
    { name: "Criação de Sites", tags: ["Landing Page", "Institucional", "Link na bio"] },
    { name: "Identidade Visual", tags: ["Logo", "Paleta", "Direção de arte"] },
    { name: "Desenvolvimento Web", tags: ["React", "Next.js", "Performance"] },
    { name: "Social Media", tags: ["Criativos", "Anúncios", "Conteúdo"] },
  ],
};

/** SECAO DESLIGADA no momento (ver app/page.tsx).
 *  O conteudo fica guardado aqui para quando "Projetos em Destaque" voltar. */
export const projects = {
  title: ["Projetos", "em Destaque"],
  cta: { label: "Ver todos", href: "#contato" },
  items: [
    { name: "Projeto Um", kind: "Landing Page", image: "/img/work-1.png", href: "#" },
    { name: "Projeto Dois", kind: "Identidade Visual", image: "/img/work-2.png", href: "#" },
    { name: "Projeto Três", kind: "Site Institucional", image: "/img/work-3.png", href: "#" },
    { name: "Projeto Quatro", kind: "E-commerce", image: "/img/work-4.png", href: "#" },
  ],
};

/** SECAO DESLIGADA (ver app/page.tsx). Foi trocada pela faixa de stack,
 *  porque nao ha clientes reais para citar ainda. */
export const testimonials = {
  title: "Depoimentos",
  items: [
    { quote: "Entregou exatamente o que a gente precisava, no prazo e com um acabamento impecável.", author: "Nome do Cliente", role: "Diretor de Marketing" },
    { quote: "O site novo mudou a percepção da nossa marca. Recomendo de olhos fechados.", author: "Nome do Cliente", role: "Fundador" },
    { quote: "Processo organizado e comunicação clara do início ao fim.", author: "Nome do Cliente", role: "Gerente de Produto" },
    { quote: "Performance e design andando juntos. Raro de achar.", author: "Nome do Cliente", role: "Desenvolvedor" },
    { quote: "Superou a expectativa. Contrataria de novo sem pensar duas vezes.", author: "Nome do Cliente", role: "Empreendedora" },
  ],
};

/** SECAO DESLIGADA no momento (ver app/page.tsx).
 *  O conteudo fica guardado aqui para quando "Ideias" voltar. */
export const thoughts = {
  title: "Ideias",
  cta: { label: "Ver tudo", href: "#contato" },
  teaser: "Veja como eu penso design e produto. Dá uma olhada",
  posts: [
    { date: "5 de maio de 2026", title: "Construindo confiança com design claro", excerpt: "Como escolhas visuais pensadas criam uma sensação maior de confiabilidade.", image: "/img/work-1.png", href: "#" },
    { date: "16 de junho de 2026", title: "O papel da direção de arte na marca", excerpt: "Por que a direção visual ajuda marcas a criar emoção e um ponto de vista próprio.", image: "/img/work-3.png", href: "#" },
  ],
};

/**
 * Faixa rolante que substitui os depoimentos.
 * AJUSTE ESTA LISTA: deixe so o que voce realmente usa e domina.
 * Prometer tecnologia que nao domina da problema na primeira conversa.
 */
export const stack = {
  /** Linha de cima: o que voce entrega */
  servicos: [
    "Sistemas Web",
    "CRM sob medida",
    "ERP",
    "Dashboards",
    "Painéis Administrativos",
    "Automações",
    "Integração de APIs",
    "Landing Pages",
    "Sites Institucionais",
    "E-commerce",
    "Performance Web",
    "SEO Técnico",
  ],
  /** Linha de baixo: com o que voce constroi */
  tecnologias: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Astro",
    "Node.js",
    "Supabase",
    "Shopify",
    "Figma",
    "Vercel",
    "Git",
  ],
};

export const contact = {
  title: "Vamos conversar",
  subtitle: "Conte o que você precisa e eu respondo em até 24 horas.",
  socials: [
    { label: "WhatsApp", href: "https://wa.me/5564993253890" },
    { label: "Instagram", href: "https://www.instagram.com/caiolzn_/" },
    { label: "GitHub", href: "https://github.com/caioluiz-creator" },
    { label: "E-mail", href: "mailto:nascimentocaio491@gmail.com" },
  ],
};

export const footer = {
  headline: ["Criando sites", "que vendem", "de verdade."],
  quickLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ],
  /** Palavra gigante no fim da página (use seu nome ou marca) */
  wordmark: "CAIO",
};
