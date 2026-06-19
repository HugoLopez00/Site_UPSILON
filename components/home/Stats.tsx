'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { stats } from '@/lib/data/testimonials'

const cardStyles = [
  { bg: 'var(--red)', text: '#fff', muted: 'rgba(255,255,255,0.6)' },
  { bg: '#0e2229', text: 'var(--teal)', muted: 'rgba(109,195,213,0.52)' },
  { bg: 'var(--teal)', text: 'var(--bg-0)', muted: 'rgba(5,5,8,0.52)' },
  { bg: 'var(--bg-4)', text: '#FFFFFF', muted: 'rgba(255,255,255,0.45)' },
]

export function Stats() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(179,44,37,0.42) 35%, rgba(109,195,213,0.42) 65%, transparent)'
      }} />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">

          {/* LEFT: heading sticky */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:w-[38%] lg:sticky lg:top-28"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[10px] uppercase tracking-[0.35em] mb-5"
              style={{ color: 'var(--red)' }}
            >
              Chiffres Clés
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-black tracking-[-0.03em] leading-tight mb-6"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                color: 'var(--text)',
              }}
            >
              Harnessing the expertise of passionate students
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'rgba(28,20,24,0.4)' }}
            >
              Depuis 2011, UPSILON mobilise les meilleurs talents de l&apos;Université de Toulouse pour réaliser des projets à fort impact.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/a-propos" className="btn-red inline-flex items-center gap-2 text-sm">
                En savoir plus <ArrowRight size={13} />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: stat cards grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:w-[62%] grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const s = cardStyles[i % cardStyles.length]
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
                  className="rounded-2xl p-6 flex flex-col justify-between"
                  style={{
                    background: s.bg,
                    minHeight: '172px',
                    boxShadow: '0 6px 30px rgba(28,20,24,0.15)',
                  }}
                >
                  <p
                    className="text-[10px] uppercase tracking-[0.2em] leading-relaxed"
                    style={{ color: s.muted }}
                  >
                    {stat.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <p
                      className="font-black leading-none tracking-[-0.04em]"
                      style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: s.text }}
                    >
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm font-semibold mt-1" style={{ color: s.text, opacity: 0.8 }}>
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


