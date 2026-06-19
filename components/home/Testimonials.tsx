'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { testimonials } from '@/lib/data/testimonials'

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'var(--bg-0)' }}>
      {/* Ghost overlay text */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none" aria-hidden>
        <span
          className="font-black uppercase leading-none"
          style={{
            fontSize: 'clamp(8rem, 22vw, 26rem)',
            letterSpacing: '-0.06em',
            color: 'rgba(28,20,24,0.04)',
            marginRight: '-2vw',
          }}
        >
          Avis
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">

          {/* LEFT: sticky heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start"
          >
            <motion.div variants={fadeInUp}><SectionLabel>Témoignages</SectionLabel></motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-extrabold tracking-[-0.04em] leading-tight mt-4 mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text)' }}
            >
              Ce que disent nos clients
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(28,20,24,0.4)' }}>
              Plus de 500 missions réalisées. Une note de satisfaction de 9.2/10 auprès de nos commanditaires.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0.5L8.7 5.2H13.7L9.8 8.1L11.3 12.8L7 10L2.7 12.8L4.2 8.1L0.3 5.2H5.3L7 0.5Z"/>
                </svg>
              ))}
              <span className="text-[11px] font-bold ml-1" style={{ color: 'rgba(28,20,24,0.4)' }}>9.2 / 10</span>
            </motion.div>
          </motion.div>

          {/* RIGHT: testimonial list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:w-[64%]"
          >
            <div className="h-px" style={{ background: 'rgba(28,20,24,0.1)' }} />
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                variants={fadeInUp}
                transition={{ delay: i * 0.08 }}
                className="py-8"
                style={{ borderBottom: '1px solid rgba(28,20,24,0.1)' }}
              >
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{
                      background: `linear-gradient(145deg, ${t.color}, ${t.color}80)`,
                      boxShadow: `0 4px 12px ${t.color}30`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>{t.name}</p>
                    <p className="text-[11px]" style={{ color: 'rgba(28,20,24,0.36)' }}>
                      {t.role} · {t.company}
                    </p>
                  </div>
                  {t.project && (
                    <span className="text-[10px] font-medium uppercase tracking-wide shrink-0"
                      style={{ color: 'var(--red)' }}>
                      {t.project}
                    </span>
                  )}
                </div>
                <p
                  className="text-sm leading-relaxed pl-14"
                  style={{ color: 'rgba(28,20,24,0.58)' }}
                >
                  &ldquo;{t.content}&rdquo;
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

