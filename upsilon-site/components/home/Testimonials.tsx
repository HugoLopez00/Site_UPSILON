'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { staggerContainer, fadeInUp, scaleIn, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { testimonials } from '@/lib/data/testimonials'

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#07070a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(196,30,58,0.03)] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Témoignages</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight mb-5">
            Ce que nos clients <em className="not-italic text-gradient">disent de nous</em>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[rgba(245,245,247,0.55)] text-base leading-relaxed">
            La satisfaction client est au cœur de notre démarche qualité.
            Découvrez les retours de nos commanditaires.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {testimonials.map((t, i) => (
            <motion.div key={t.id} variants={scaleIn} className="group">
              <div className="glass glass-hover rounded-2xl p-6 lg:p-8 h-full relative overflow-hidden">
                {/* Accent top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)` }}
                />

                {/* Quote icon */}
                <div className="text-4xl text-[rgba(245,245,247,0.05)] font-serif leading-none mb-4">&ldquo;</div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm text-[rgba(245,245,247,0.7)] leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Project tag */}
                {t.project && (
                  <div className="mb-5">
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-[rgba(196,30,58,0.1)] border border-[rgba(196,30,58,0.2)] text-[#c41e3a] font-medium">
                      Projet : {t.project}
                    </span>
                  </div>
                )}

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#f5f5f7]">{t.name}</p>
                    <p className="text-xs text-[rgba(245,245,247,0.4)]">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
