import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O site é uma página só, sem nada que precise de servidor: o build gera
  // HTML estático em out/, que é o que a Cloudflare publica.
  output: "export",
  // Sem servidor não existe o otimizador de imagem do Next. As imagens já são
  // leves (a maior tem menos de 400 KB), então vão como estão.
  images: { unoptimized: true },
};

export default nextConfig;
