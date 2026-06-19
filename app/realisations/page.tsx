'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Clock, Building2 } from 'lucide-react'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { projects, categories } from '@/lib/data/projects'
import { HomeCTA } from '@/components/home/HomeCTA'

const heroWords = ['Nos', 'Réalisations']

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const filtered = activeCategory === 'all' ? projects : projects.filter((p) => p.categoryId === activeCategory)

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pb-16 pt-32" style={{ background: 'var(--bg-0)' }}>
        <div className="absolute inset-0 pointer-events-none select-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute bottom-0 left-1/2 w-[700px] h-[400px] -translate-x-1/2 pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(179,44,37,0.07) 0%, transparent 62%)' }} />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-14 relative z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.42em] mb-10" style={{ color: 'rgba(240,240,244,0.25)' }}>
            UPSILON · 500+ Missions · Toulouse
          </motion.p>
          {heroWords.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                initial={{ y: '108%', skewY: 2 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="block font-black uppercase select-none"
                style={{ fontSize: 'clamp(2.5rem, 11vw, 13rem)', lineHeight: 0.88, letterSpacing: '-0.04em', color: i === 1 ? 'var(--red)' : 'var(--text)' }}
              >
                {word}
              </motion.span>
            </div>
          ))}
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
            className="text-sm leading-relaxed mt-8 max-w-lg" style={{ color: 'rgba(240,240,244,0.4)' }}>
            Découvrez une sélection de missions réalisées par nos équipes. Chaque projet illustre
            notre capacité à répondre à des problématiques concrètes avec rigueur et créativité.
          </motion.p>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Filter strip */}
          <div className="flex flex-wrap items-center gap-2 mb-14" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '20px' }}>
            <span className="text-[10px] uppercase tracking-[0.3em] mr-4" style={{ color: 'rgba(240,240,244,0.22)' }}>Filtrer</span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wide transition-all duration-200"
                style={{
                  background: activeCategory === cat.id ? 'var(--red)' : 'transparent',
                  color: activeCategory === cat.id ? '#fff' : 'rgba(240,240,244,0.4)',
                  border: activeCategory === cat.id ? '1px solid transparent' : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Project list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="group py-7 flex flex-col sm:flex-row sm:items-start gap-6"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {/* Number */}
                  <span className="font-mono text-[11px] shrink-0 tabular-nums pt-1" style={{ color: 'rgba(240,240,244,0.18)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: 'var(--red)' }}>{project.category}</span>
                      <span className="text-[10px]" style={{ color: 'rgba(240,240,244,0.25)' }}>{project.year}</span>
                      {project.featured && (
                        <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded"
                          style={{ background: 'rgba(109,195,213,0.08)', color: 'var(--teal)', border: '1px solid rgba(109,195,213,0.2)' }}>
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold mb-2 group-hover:translate-x-0.5 transition-transform duration-200"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', color: 'var(--text)' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm mb-3 leading-relaxed" style={{ color: 'rgba(240,240,244,0.42)' }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-[11px]" style={{ color: 'rgba(240,240,244,0.32)' }}>
                      <span className="flex items-center gap-1.5">
                        <Building2 size={11} />{project.client.split(' – ')[0]}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={11} />{project.duration}
                      </span>
                    </div>
                    {project.results.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-y-1">
                        {project.results.slice(0, 2).map((r) => (
                          <span key={r} className="mr-6 text-[11px] flex items-start gap-1.5" style={{ color: 'rgba(240,240,244,0.38)' }}>
                            <span style={{ color: 'var(--red)' }}>→</span>{r}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:flex items-start pt-1 shrink-0">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                      style={{ background: 'var(--red)', color: '#fff' }}>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
              {filtered.length === 0 && (
                <div className="py-20 text-center">
                  <p className="text-sm" style={{ color: 'rgba(240,240,244,0.3)' }}>Aucun projet dans cette catégorie.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'var(--bg-0)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: '500+', label: 'Missions réalisées' },
              { n: '9.2/10', label: 'Note de satisfaction' },
              { n: '80%', label: 'Clients récurrents' },
              { n: '<48h', label: 'Délai de réponse' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.08 }}
              >
                <p className="font-black tracking-[-0.04em] mb-1" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'var(--text)' }}>{s.n}</p>
                <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: 'rgba(240,240,244,0.32)' }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  )
}
