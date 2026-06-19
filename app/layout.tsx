import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'UPSILON — Junior-Entreprise de l\'Université de Toulouse',
    template: '%s | UPSILON',
  },
  description:
    'UPSILON est la Junior-Entreprise de l\'Université de Toulouse. Prestations d\'ingénierie et de conseil en Logiciels & IT, Marketing, Construction, Chimie et Électronique.',
  keywords: [
    'Junior-Entreprise',
    'Toulouse',
    'ingénierie',
    'conseil',
    'logiciel',
    'IT',
    'marketing',
    'construction',
    'UPSILON',
  ],
  authors: [{ name: 'UPSILON', url: 'https://www.upsilon-toulouse.fr' }],
  creator: 'UPSILON',
  metadataBase: new URL('https://www.upsilon-toulouse.fr'),
  openGraph: {
    title: 'UPSILON — Junior-Entreprise de l\'Université de Toulouse',
    description:
      'Think Success, Make It Happen. Prestations d\'ingénierie et de conseil en technologie par les étudiants de Toulouse.',
    url: 'https://www.upsilon-toulouse.fr',
    siteName: 'UPSILON',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPSILON — Junior-Entreprise de l\'Université de Toulouse',
    description: 'Think Success, Make It Happen.',
    creator: '@UpsilonJE',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-[#07070a] text-[#f5f5f7] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
