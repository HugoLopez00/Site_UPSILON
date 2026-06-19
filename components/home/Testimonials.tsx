'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { testimonials } from '@/lib/data/testimonials'

export function Testimonials() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: 'var(--bg-0)' }}>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}><SectionLabel>Témoignages</SectionLabel></motion.div>
          <motion.h2 variants={fadeInUp} className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] leading-tight mb-5" style={{ color: 'var(--text)', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            Ce que nos clients <em className="not-italic text-gradient">disent de nous</em>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeInUp}
              transition={{ delay: i * 0.1 }}
              style={{ perspective: '800px' }}
            >
              <motion.div
                whileHover={{ rotateY: -2, rotateX: 1, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="card rounded-2xl p-7 h-full relative overflow-hidden">
                  {/* Barre colorée haute */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${t.color}70, transparent)` }}
                  />

                  {/* Guillemets sculptés */}
                  <div
                    className="text-5xl font-serif leading-none mb-4 select-none"
                    style={{
                      color: 'rgba(240,240,244,0.04)',
                      textShadow: '0 2px 0 rgba(255,255,255,0.03)',
                    }}
                  >&ldquo;</div>

                  {/* Étoiles */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} style={{ color: '#f59e0b', fill: '#f59e0b', filter: 'drop-shadow(0 0 4px rgba(245,158,11,0.6))' }} />
                    ))}
                  </div>

                  {/* Contenu */}
                  <p className="text-sm leading-relaxed mb-5 italic" style={{ color: 'rgba(240,240,244,0.65)' }}>
                    &ldquo;{t.content}&rdquo;
                  </p>

                  {/* Tag projet inset */}
                  {t.project && (
                    <div className="mb-5">
                      <span
                        className="text-[11px] px-3 py-1.5 rounded-lg font-medium"
                        style={{
                          background: 'var(--bg-1)',
                          borderTop:    '1px solid rgba(0,0,0,0.4)',
                          borderBottom: '1px solid rgba(179,44,37,0.08)',
                          color: 'var(--red)',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.4) inset',
                        }}
                      >
                        {t.project}
                      </span>
                    </div>
                  )}

                  {/* Séparateur 3D */}
                  <div className="divider-3d mb-5" />

                  {/* Auteur */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{
                        background: `linear-gradient(145deg, ${t.color}, ${t.color}80)`,
                        borderTop:    '1px solid rgba(255,255,255,0.15)',
                        borderBottom: '1px solid rgba(0,0,0,0.4)',
                        boxShadow: `0 4px 12px rgba(0,0,0,0.4), 0 0 16px ${t.color}30`,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>{t.name}</p>
                      <p className="text-xs" style={{ color: 'rgba(240,240,244,0.38)' }}>{t.role} · {t.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
