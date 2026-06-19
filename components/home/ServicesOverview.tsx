'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp, scaleIn, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { services } from '@/lib/data/services'

export function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-[#07070a] relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-30" />

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
            <SectionLabel>Nos Expertises</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight mb-5">
            Cinq pôles d&apos;excellence <br />à votre service
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[rgba(245,245,247,0.55)] text-base leading-relaxed">
            Chaque prestation est réalisée par une équipe sélectionnée parmi les meilleurs étudiants
            de l&apos;Université de Toulouse, encadrée par un pôle qualité certifié.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, i) => (
            <motion.div key={service.id} variants={scaleIn} custom={i}>
              <Link
                href={`/services#${service.id}`}
                className="group flex flex-col h-full glass glass-hover rounded-2xl p-6 relative overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${service.color}10, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-5 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-[#f5f5f7] mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[rgba(245,245,247,0.5)] leading-relaxed mb-6 flex-1">
                    {service.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.useCases.slice(0, 2).map((uc) => (
                      <span
                        key={uc}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[rgba(245,245,247,0.5)]"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B32C25] group-hover:gap-2.5 transition-all">
                    En savoir plus
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-ghost text-sm inline-flex items-center gap-2">
            Voir tous nos services <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
