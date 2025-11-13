import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ADVANTAGE by Prisma | Tu hijo puede liderar el futuro',
  description: 'En 8 semanas, tu hijo construye su primer negocio digital con mentoría de CEOs y líderes de empresas top. Portfolio real, no teoría.',
  keywords: ['liderazgo juvenil', 'educación digital', 'mentoría empresarial', 'emprendimiento', 'Prisma'],
  authors: [{ name: 'Prisma' }],
  openGraph: {
    title: 'ADVANTAGE by Prisma | Tu hijo puede liderar el futuro',
    description: 'En 8 semanas, tu hijo construye su primer negocio digital con mentoría de CEOs y líderes de empresas top.',
    type: 'website',
    locale: 'es_PE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADVANTAGE by Prisma | Tu hijo puede liderar el futuro',
    description: 'En 8 semanas, tu hijo construye su primer negocio digital con mentoría de CEOs y líderes de empresas top.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
