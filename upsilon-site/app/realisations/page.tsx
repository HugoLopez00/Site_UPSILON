'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Building2, Tag } from 'lucide-react'
import { staggerContainer, fadeInUp, scaleIn, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { projects, categories } from '@/lib/data/projects'
import { HomeCTA } from '@/components/home/HomeCTA'

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.categoryId === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#07070a] relative overflow-hidden">
        <div className="line-grid absolute inset-0 opacity-30" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-[#c41e3a] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Nos Réalisations</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight mb-6">
              Des projets qui <em className="not-italic text-gradient">parlent d&apos;eux-mêmes</em>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base text-[rgba(245,245,247,0.6)] leading-relaxed max-w-xl">
              Découvrez une sélection de missions réalisées par nos équipes. Chaque projet illustre
              notre capacité à répondre à des problématiques concrètes avec rigueur et créativité.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-[#0d0d12] relative">
        <div className="dot-grid absolute inset-0 opacity-20" />

        <div className="max-w-[1200px] mx-auto px-6 relative">
          {/* Category filter */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                variants={fadeInUp}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#c41e3a] text-white shadow-red-glow'
                    : 'glass text-[rgba(245,245,247,0.6)] hover:text-[#f5f5f7] hover:bg-white/[0.06]'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="group glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col">
                    {/* Image placeholder */}
                    <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[rgba(196,30,58,0.08)] to-[rgba(99,102,241,0.08)] flex-shrink-0">
                      <div className="absolute inset-0 dot-grid opacity-40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl opacity-30">
                          {project.categoryId === 'it' ? '💻' :
                           project.categoryId === 'marketing' ? '📣' :
                           project.categoryId === 'construction' ? '🏗️' :
                           project.categoryId === 'chimie' ? '🧪' : '⚙️'}
                        </span>
                      </div>
                      {project.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="badge text-[10px]">Featured</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[rgba(245,245,247,0.5)]">
                          {project.category}
                        </span>
                        <span className="text-[11px] text-[rgba(245,245,247,0.35)]">{project.year}</span>
                      </div>

                      <h3 className="text-base font-bold text-[#f5f5f7] mb-2 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[rgba(245,245,247,0.5)] leading-relaxed mb-4 flex-1 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-4 text-xs text-[rgba(245,245,247,0.4)]">
                        <span className="flex items-center gap-1.5">
                          <Building2 size={11} />
                          {project.client.split(' – ')[0]}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={11} />
                          {project.duration}
                        </span>
                      </div>

                      {/* Results */}
                      <div className="space-y-1.5 mb-5">
                        {project.results.slice(0, 2).map((r) => (
                          <div key={r} className="flex items-start gap-2 text-xs text-[rgba(245,245,247,0.55)]">
                            <span className="text-[#c41e3a] mt-0.5">→</span>
                            {r}
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[rgba(245,245,247,0.4)]">
                            <Tag size={9} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[rgba(245,245,247,0.4)] text-sm">Aucun projet dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats row */}
      <section className="py-16 border-y border-white/[0.06] bg-[#07070a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { n: '500+', label: 'Missions réalisées' },
              { n: '9.2/10', label: 'Note de satisfaction' },
              { n: '80%', label: 'Clients récurrents' },
              { n: '48h', label: 'Délai de réponse' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold text-[#f5f5f7] mb-1">{s.n}</p>
                <p className="text-xs text-[rgba(245,245,247,0.4)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  )
}
