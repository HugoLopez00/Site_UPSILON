'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'

export function HomeCTA() {
  return (
    <section className="py-24 lg:py-32 bg-[#0d0d12] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c41e3a] opacity-[0.05] blur-[100px] rounded-full" />
      </div>
      <div className="line-grid absolute inset-0 opacity-20" />

      <div className="max-w-[900px] mx-auto px-6 relative text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="badge">
              <Zap size={10} className="fill-[#c41e3a]" />
              Réponse sous 48h
            </span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight mb-6">
            Votre projet mérite <br />
            <em className="not-italic text-gradient">une équipe d&apos;excellence</em>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-base text-[rgba(245,245,247,0.55)] leading-relaxed max-w-xl mx-auto mb-10">
            Demandez votre devis gratuit en 2 minutes. Notre équipe analyse votre besoin
            et vous répond sous 48h avec une proposition sur-mesure.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-red text-sm w-full sm:w-auto justify-center">
              Demander un devis gratuit
              <ArrowRight size={16} />
            </Link>
            <Link href="/realisations" className="btn-ghost text-sm w-full sm:w-auto justify-center">
              Voir nos réalisations
            </Link>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-8 text-xs text-[rgba(245,245,247,0.3)]">
            Gratuit · Sans engagement · Réponse garantie sous 48h
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
