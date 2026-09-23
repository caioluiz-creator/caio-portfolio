import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

// A referencia usa Archivo em todo o site (pesos 400 a 800).
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

/**
 * metadataBase e o endereco final do site. Ele faz o Next transformar
 * "/og.jpg" na URL completa, que e o que WhatsApp, Instagram e Google exigem
 * para mostrar a previa do link. Caminho relativo nao funciona ali.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://caio.agenciarigor.com.br"),
  title: site.title,
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://caio.agenciarigor.com.br",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name}, desenvolvedor web`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
