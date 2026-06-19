import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { Stats } from '@/components/home/Stats'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { Process } from '@/components/home/Process'
import { Marquee } from '@/components/home/Marquee'
import { Testimonials } from '@/components/home/Testimonials'
import { Clients } from '@/components/home/Clients'
import { HomeCTA } from '@/components/home/HomeCTA'

export const metadata: Metadata = {
  title: 'UPSILON — Junior-Entreprise de l\'Université de Toulouse',
  description: 'Think Success, Make It Happen. UPSILON accompagne vos projets avec l\'expertise des étudiants de Toulouse. Logiciels, Marketing, Construction, Chimie, Électronique.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <Process />
      <Marquee />
      <Testimonials />
      <Clients />
      <HomeCTA />
    </>
  )
}
