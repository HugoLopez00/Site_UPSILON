'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { fadeInUp, staggerContainer, blurIn, viewportOnce } from '@/animations'

const domains = [
  { icon: '💻', label: 'Logiciels & IT' },
  { icon: '📣', label: 'Marketing' },
  { icon: '🏗️', label: 'Construction' },
  { icon: '🧪', label: 'Chimie & Biotech' },
  { icon: '⚙️', label: 'Électronique' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#07070a]">
      {/* Background layers */}
      <div className="absolute inset-0 line-grid opacity-40" />

      {/* Red glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#c41e3a] rounded-full opacity-[0.04] blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#c41e3a] rounded-full opacity-[0.03] blur-[100px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#07070a] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="badge">
                <Sparkles size={10} />
                Junior-Entreprise · Université de Toulouse · Depuis 2011
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeInUp} className="text-[clamp(2.8rem,6vw,4.8rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#f5f5f7] mb-6">
              Think Success,{' '}
              <em className="not-italic text-gradient block">Make It Happen.</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeInUp} className="text-[1.05rem] text-[rgba(245,245,247,0.6)] leading-[1.75] max-w-[520px] mb-10">
              UPSILON accompagne vos projets avec l&apos;expertise des étudiants et chercheurs
              de l&apos;Université de Toulouse. Des solutions sur-mesure, dans cinq domaines d&apos;excellence.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-14">
              <Link href="/contact" className="btn-red text-sm">
                Demander un devis
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-ghost text-sm">
                Découvrir nos services
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-8">
              {[
                { n: '149', label: 'Formations universitaires' },
                { n: '68', label: 'Labos de recherche' },
                { n: '500+', label: 'Missions réalisées' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-[#f5f5f7] tracking-tight">{stat.n}</span>
                  <span className="text-xs text-[rgba(245,245,247,0.45)] mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass rounded-3xl p-8 relative overflow-hidden noise">
                {/* Card glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#c41e3a] opacity-[0.06] blur-[60px] rounded-full" />

                <div className="relative z-10">
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs text-[rgba(245,245,247,0.4)] uppercase tracking-widest font-semibold mb-1">Domaines d&apos;expertise</p>
                      <p className="text-lg font-bold text-[#f5f5f7]">5 pôles d&apos;excellence</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c41e3a] to-[#9b1830] flex items-center justify-center text-white font-bold text-xl">
                      Υ
                    </div>
                  </div>

                  {/* Domains */}
                  <div className="space-y-3 mb-8">
                    {domains.map((d, i) => (
                      <motion.div
                        key={d.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 group hover:bg-white/[0.05] hover:border-white/[0.1] transition-all cursor-default"
                      >
                        <span className="text-xl">{d.icon}</span>
                        <span className="text-sm font-medium text-[rgba(245,245,247,0.75)]">{d.label}</span>
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#c41e3a] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom stats */}
                  <div className="border-t border-white/[0.06] pt-5 flex items-center justify-between">
                    <div className="text-center">
                      <p className="text-xl font-bold text-[#f5f5f7]">13</p>
                      <p className="text-[10px] text-[rgba(245,245,247,0.4)] uppercase tracking-wider mt-0.5">Ans d&apos;exp.</p>
                    </div>
                    <div className="h-8 w-px bg-white/[0.06]" />
                    <div className="text-center">
                      <p className="text-xl font-bold text-[#f5f5f7]">500+</p>
                      <p className="text-[10px] text-[rgba(245,245,247,0.4)] uppercase tracking-wider mt-0.5">Missions</p>
                    </div>
                    <div className="h-8 w-px bg-white/[0.06]" />
                    <div className="text-center">
                      <p className="text-xl font-bold text-[#f5f5f7]">9.2</p>
                      <p className="text-[10px] text-[rgba(245,245,247,0.4)] uppercase tracking-wider mt-0.5">Note /10</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-5 -left-8 glass rounded-2xl px-4 py-3 border border-[#c41e3a]/20 shadow-red-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#c41e3a] animate-pulse" />
                  <span className="text-xs font-semibold text-[rgba(245,245,247,0.8)]">Certifié Marque JE</span>
                </div>
              </motion.div>

              {/* Second floating badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -right-6 glass rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏆</span>
                  <div>
                    <p className="text-[11px] font-bold text-[rgba(245,245,247,0.9)]">Prix Meilleur Espoir</p>
                    <p className="text-[10px] text-[rgba(245,245,247,0.4)]">CNJE 2014</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-[rgba(245,245,247,0.3)]">Scroll</span>
      </motion.div>
    </section>
  )
}
