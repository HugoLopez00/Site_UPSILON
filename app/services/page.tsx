'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { services } from '@/lib/data/services'
import { HomeCTA } from '@/components/home/HomeCTA'

const heroWords = ['Nos', 'Services']

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pb-16 pt-32" style={{ background: 'var(--bg-0)' }}>
        <div className="absolute inset-0 pointer-events-none select-none" style={{
          backgroundImage: 'linear-gradient(rgba(28,20,24,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28,20,24,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-1/2 right-0 w-[700px] h-[700px] -translate-y-1/2 pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(109,195,213,0.05) 0%, transparent 62%)' }} />
        <div className="absolute top-1/2 -left-32 w-[600px] h-[600px] -translate-y-1/2 pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(179,44,37,0.07) 0%, transparent 62%)' }} />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-14 relative z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.42em] mb-10" style={{ color: 'rgba(28,20,24,0.25)' }}>
            UPSILON · 5 pôles d&apos;expertise · Université de Toulouse
          </motion.p>
          {heroWords.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                initial={{ y: '108%', skewY: 2 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="block font-black uppercase select-none"
                style={{ fontSize: i === 0 ? 'clamp(2.5rem, 16vw, 16rem)' : 'clamp(2rem, 9vw, 8.5rem)', lineHeight: 0.88, letterSpacing: '-0.04em', color: i === 1 ? 'var(--red)' : 'var(--text)' }}
              >
                {word}
              </motion.span>
            </div>
          ))}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-wrap gap-2 mt-10">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide transition-all"
                style={{ background: 'var(--bg-2)', border: '1px solid rgba(28,20,24,0.1)', color: 'rgba(28,20,24,0.5)' }}>
                {s.icon} {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES DETAIL ── */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className="py-24 lg:py-32 relative overflow-hidden scroll-mt-20"
          style={{ background: i % 2 === 0 ? 'var(--bg-1)' : 'var(--bg-0)' }}
        >
          {i % 2 === 0 && (
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(179,44,37,0.3) 50%, transparent)' }} />
          )}

          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">

              {/* LEFT: sticky service heading */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start"
              >
                <motion.div variants={fadeInUp}>
                  <SectionLabel>Pôle {i + 1} / {services.length}</SectionLabel>
                </motion.div>
                <motion.div variants={fadeInUp} className="text-4xl mt-4 mb-3">{service.icon}</motion.div>
                <motion.h2
                  variants={fadeInUp}
                  className="font-extrabold tracking-[-0.04em] leading-tight mb-4"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text)' }}
                >
                  {service.title}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(28,20,24,0.42)' }}>
                  {service.shortDescription}
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Link href="/contact" className="btn-red inline-flex items-center gap-2 text-sm">
                    Demander un devis <ArrowRight size={13} />
                  </Link>
                </motion.div>
              </motion.div>

              {/* RIGHT: details */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="lg:w-[64%]"
              >
                <div className="h-px" style={{ background: 'rgba(28,20,24,0.1)' }} />

                {/* Description */}
                <motion.div variants={fadeInUp} className="py-7" style={{ borderBottom: '1px solid rgba(28,20,24,0.1)' }}>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(28,20,24,0.6)' }}>{service.description}</p>
                </motion.div>

                {/* Benefits */}
                <motion.div variants={fadeInUp} className="py-7" style={{ borderBottom: '1px solid rgba(28,20,24,0.1)' }}>
                  <p className="text-[10px] uppercase tracking-[0.28em] mb-5" style={{ color: 'var(--red)' }}>Nos garanties</p>
                  <div className="space-y-3">
                    {service.benefits.map((b, j) => (
                      <div key={b} className="flex items-start gap-4">
                        <span className="font-mono text-[11px] shrink-0" style={{ color: 'rgba(28,20,24,0.2)' }}>{String(j+1).padStart(2,'0')}</span>
                        <span className="text-sm" style={{ color: 'rgba(28,20,24,0.6)' }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Methodology */}
                <motion.div variants={fadeInUp} className="py-7" style={{ borderBottom: '1px solid rgba(28,20,24,0.1)' }}>
                  <p className="text-[10px] uppercase tracking-[0.28em] mb-5" style={{ color: 'rgba(28,20,24,0.25)' }}>Méthodologie</p>
                  <div className="flex flex-wrap gap-y-2">
                    {service.methodology.map((step, j) => (
                      <div key={step} className="flex items-center gap-2 shrink-0 mr-4">
                        <span className="font-mono text-[10px]" style={{ color: 'rgba(28,20,24,0.2)' }}>{j+1}</span>
                        <span className="text-sm font-medium" style={{ color: 'rgba(28,20,24,0.55)' }}>{step}</span>
                        {j < service.methodology.length - 1 && <span className="ml-2 text-[10px]" style={{ color: 'rgba(28,20,24,0.1)' }}>→</span>}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Use cases */}
                <motion.div variants={fadeInUp} className="py-7">
                  <p className="text-[10px] uppercase tracking-[0.28em] mb-5" style={{ color: 'rgba(28,20,24,0.25)' }}>Cas d&apos;usage</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.useCases.map((uc) => (
                      <div key={uc} className="text-xs py-2.5 px-3 rounded-xl leading-snug"
                        style={{ background: 'var(--bg-2)', border: '1px solid rgba(28,20,24,0.08)', color: 'rgba(28,20,24,0.5)' }}>
                        {uc}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <HomeCTA />
    </>
  )
}

