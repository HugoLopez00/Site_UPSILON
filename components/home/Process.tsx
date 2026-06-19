'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Briefing & Cadrage',
    description: 'Nous analysons vos besoins, définissons le périmètre de la mission et co-construisons le cahier des charges avec vous.',
    details: ['Appel de découverte', 'Analyse des enjeux', 'Cahier des charges', 'Devis gratuit'],
  },
  {
    number: '02',
    title: 'Sélection de l\'équipe',
    description: 'Notre pôle RH identifie et recrute l\'équipe la plus adaptée à votre projet parmi notre vivier d\'étudiants experts.',
    details: ['Sourcing interne', 'Entretiens qualifiants', 'Brief équipe', 'Validation client'],
  },
  {
    number: '03',
    title: 'Réalisation & Suivi',
    description: 'L\'équipe travaille avec rigueur, encadrée par notre pôle qualité. Points d\'avancement réguliers et ajustements en temps réel.',
    details: ['Méthodo agile', 'Points bi-hebdo', 'Contrôle qualité', 'Révisions incluses'],
  },
  {
    number: '04',
    title: 'Livraison & Support',
    description: 'Livraison des livrables selon les standards convenus, avec une présentation finale et un accompagnement post-mission.',
    details: ['Présentation finale', 'Documentation', 'Transfert de compétences', 'Support post-mission'],
  },
]

export function Process() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(179,44,37,0.35) 40%, rgba(109,195,213,0.35) 65%, transparent)'
      }} />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">

          {/* LEFT: sticky heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start"
          >
            <motion.div variants={fadeInUp}><SectionLabel>Notre Processus</SectionLabel></motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-extrabold tracking-[-0.04em] leading-tight mb-6 mt-4"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text)' }}
            >
              Un accompagnement structuré, de bout en bout
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-sm leading-relaxed" style={{ color: 'rgba(240,240,244,0.4)' }}>
              Notre méthodologie éprouvée garantit des livrables de qualité professionnelle dans les délais convenus.
              Certifiée Marque Junior-Entreprise CNJE.
            </motion.p>
          </motion.div>

          {/* RIGHT: steps list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:w-[64%]"
          >
            <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                transition={{ delay: i * 0.08 }}
                className="group py-7 lg:py-8"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-baseline gap-5 mb-3">
                  <span
                    className="font-mono text-[11px] shrink-0 tabular-nums"
                    style={{ color: 'var(--red)' }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="font-bold group-hover:translate-x-0.5 transition-transform duration-200"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--text)' }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-4 pl-9" style={{ color: 'rgba(240,240,244,0.42)' }}>
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2 pl-9">
                  {step.details.map((detail) => (
                    <span
                      key={detail}
                      className="text-[10px] px-2.5 py-1 rounded-lg font-medium uppercase tracking-wide"
                      style={{
                        background: 'var(--bg-2)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        color: 'rgba(240,240,244,0.38)',
                      }}
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
