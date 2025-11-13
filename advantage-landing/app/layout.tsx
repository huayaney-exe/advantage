import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ADVANTAGE by Prisma | Programa de Liderazgo para Jóvenes",
  description: "Transforma a tu hijo en un líder con mentalidad de CEO. 8 semanas, mentoría real, negocio digital en vivo. Para jóvenes de 16-20 años.",
  keywords: ["liderazgo juvenil", "emprendimiento", "programa educativo", "mentoría CEO", "desarrollo personal"],
  authors: [{ name: "Prisma" }],
  openGraph: {
    title: "ADVANTAGE by Prisma | Programa de Liderazgo para Jóvenes",
    description: "Transforma a tu hijo en un líder con mentalidad de CEO. 8 semanas, mentoría real, negocio digital en vivo.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
