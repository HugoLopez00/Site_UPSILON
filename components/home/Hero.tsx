'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const words = [
  { text: 'Think', color: 'var(--text)' },
  { text: 'Success,', color: 'var(--red)' },
  { text: 'Make It', color: 'var(--text)' },
  { text: 'Happen.', color: 'var(--teal)' },
]

export function Hero() {
  const { scrollY } = useScroll()
  const textY = useTransform(scrollY, [0, 600], [0, -100])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--bg-0)' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(28,20,24,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28,20,24,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Red ambient glow — left */}
      <div
        className="absolute top-1/2 -left-48 w-[1000px] h-[1000px] -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(179,44,37,0.09) 0%, transparent 62%)' }}
      />
      {/* Teal ambient glow — top right */}
      <div
        className="absolute -top-64 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(109,195,213,0.05) 0%, transparent 62%)' }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-6 lg:px-14 pt-28 pb-10">

        {/* GIANT TYPOGRAPHY */}
        <motion.div className="flex-1 flex items-center" style={{ y: textY, opacity }}>
          <div className="w-full">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-[10px] uppercase tracking-[0.42em] mb-10"
              style={{ color: 'rgba(28,20,24,0.26)' }}
            >
              Junior-Entreprise · Université de Toulouse · Depuis 2011
            </motion.p>

            <div>
              {words.map((word, i) => (
                <div key={word.text} className="overflow-hidden">
                  <motion.span
                    initial={{ y: '108%', skewY: 2 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.12,
                      duration: 1.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block font-black uppercase select-none"
                    style={{
                      fontSize: 'clamp(3.25rem, 11.5vw, 13.5rem)',
                      lineHeight: 0.88,
                      letterSpacing: '-0.04em',
                      color: word.color,
                    }}
                  >
                    {word.text}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-6"
          style={{ borderTop: '1px solid rgba(28,20,24,0.08)' }}
        >
          {/* Left: info */}
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(28,20,24,0.2)' }}>
              Université Paul Sabatier · Toulouse, France
            </p>
            <p className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(28,20,24,0.2)' }}>
              contact@upsilon-toulouse.fr
            </p>
          </div>

          {/* Right: CTA cards */}
          <div className="flex gap-3">
            <Link
              href="/services"
              className="group flex flex-col justify-between rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
              style={{
                minWidth: '132px',
                minHeight: '86px',
                background: 'var(--bg-3)',
                border: '1px solid rgba(28,20,24,0.1)',
                boxShadow: '0 4px 20px rgba(28,20,24,0.12)',
              }}
            >
              <span className="text-[9px] uppercase tracking-[0.28em] block" style={{ color: 'rgba(28,20,24,0.28)' }}>
                Découvrir
              </span>
              <span
                className="text-[13px] font-bold flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto pt-4"
                style={{ color: 'var(--text)' }}
              >
                Nos Services <ArrowRight size={12} />
              </span>
            </Link>

            <Link
              href="/contact"
              className="group flex flex-col justify-between rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
              style={{
                minWidth: '132px',
                minHeight: '86px',
                background: 'var(--red)',
                boxShadow: '0 4px 24px rgba(179,44,37,0.45)',
              }}
            >
              <span className="text-[9px] uppercase tracking-[0.28em] block" style={{ color: 'rgba(255,255,255,0.52)' }}>
                Contactez
              </span>
              <span className="text-[13px] font-bold text-white flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto pt-4">
                Nous <ArrowUpRight size={12} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


