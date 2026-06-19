'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Briefing & Cadrage',
    description: 'Nous analysons vos besoins, définissons le périmètre de la mission et co-construisons le cahier des charges avec vous.',
    icon: '🎯',
    details: ['Appel de découverte', 'Analyse des enjeux', 'Cahier des charges', 'Devis gratuit'],
  },
  {
    number: '02',
    title: 'Sélection de l\'équipe',
    description: 'Notre pôle RH identifie et recrute l\'équipe de consultants la plus adaptée à votre projet parmi notre vivier d\'étudiants experts.',
    icon: '👥',
    details: ['Sourcing interne', 'Entretiens qualifiants', 'Brief équipe', 'Validation client'],
  },
  {
    number: '03',
    title: 'Réalisation & Suivi',
    description: 'L\'équipe travaille avec rigueur, encadrée par notre pôle qualité. Points d\'avancement réguliers et ajustements en temps réel.',
    icon: '⚡',
    details: ['Méthodo agile', 'Points bi-hebdo', 'Contrôle qualité', 'Révisions incluses'],
  },
  {
    number: '04',
    title: 'Livraison & Support',
    description: 'Livraison des livrables selon les standards convenus, avec une présentation finale et un accompagnement post-mission.',
    icon: '🚀',
    details: ['Présentation finale', 'Documentation', 'Transfert de compétences', 'Support post-mission'],
  },
]

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-[#0d0d12] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mb-16"
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Notre Processus</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight mb-5">
            Un accompagnement structuré, <em className="not-italic text-gradient">de bout en bout</em>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[rgba(245,245,247,0.55)] text-base leading-relaxed">
            Notre méthodologie éprouvée garantit des livrables de qualité professionnelle
            dans les délais convenus. Certifiée Marque Junior-Entreprise.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.1 }}
              className="group glass glass-hover rounded-2xl p-6 lg:p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Number + Icon */}
                <div className="flex items-center gap-4 lg:w-48 shrink-0">
                  <div className="text-4xl lg:text-5xl font-black text-[rgba(245,245,247,0.08)] group-hover:text-[rgba(196,30,58,0.2)] transition-colors leading-none font-mono">
                    {step.number}
                  </div>
                  <div className="text-3xl">{step.icon}</div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-px h-16 bg-white/[0.06]" />

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#f5f5f7] mb-2">{step.title}</h3>
                  <p className="text-sm text-[rgba(245,245,247,0.55)] leading-relaxed">{step.description}</p>
                </div>

                {/* Details */}
                <div className="lg:w-56 shrink-0">
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail) => (
                      <span
                        key={detail}
                        className="text-[11px] px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[rgba(245,245,247,0.5)]"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Step indicator */}
                <div className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full border border-[#B32C25]/30 text-[#B32C25] shrink-0">
                  <span className="text-xs font-bold">{parseInt(step.number)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
