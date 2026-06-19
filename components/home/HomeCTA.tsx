'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'

const words = ['Votre projet', 'mérite une', 'équipe', 'd\'excellence.']

export function HomeCTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--bg-0)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(179,44,37,0.4) 40%, rgba(109,195,213,0.4) 65%, transparent)'
      }} />

      {/* Red glow */}
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(179,44,37,0.07) 0%, transparent 65%)' }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-14 py-28 lg:py-36 flex flex-col justify-between gap-16 relative z-10">
        {/* Big text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {words.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                variants={fadeInUp}
                transition={{ delay: i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block font-black uppercase select-none"
                style={{
                  fontSize: 'clamp(2.5rem, 7.5vw, 9rem)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  color: i === 3 ? 'var(--red)' : 'var(--text)',
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px' }}
        >
          <p className="text-[10px] uppercase tracking-widest max-w-xs" style={{ color: 'rgba(240,240,244,0.22)' }}>
            Devis gratuit · Sans engagement · Réponse sous 48h
          </p>

          <div className="flex gap-3">
            <Link
              href="/contact"
              className="group flex flex-col justify-between rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
              style={{
                minWidth: '148px',
                minHeight: '86px',
                background: 'var(--red)',
                boxShadow: '0 4px 24px rgba(179,44,37,0.45)',
              }}
            >
              <span className="text-[9px] uppercase tracking-[0.28em] block" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Gratuit
              </span>
              <span className="text-[13px] font-bold text-white flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto pt-4">
                Demander un devis <ArrowRight size={12} />
              </span>
            </Link>
            <Link
              href="/realisations"
              className="group flex flex-col justify-between rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
              style={{
                minWidth: '148px',
                minHeight: '86px',
                background: 'var(--bg-3)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
              }}
            >
              <span className="text-[9px] uppercase tracking-[0.28em] block" style={{ color: 'rgba(240,240,244,0.28)' }}>
                Portfolio
              </span>
              <span
                className="text-[13px] font-bold flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto pt-4"
                style={{ color: 'var(--text)' }}
              >
                Réalisations <ArrowUpRight size={12} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
