'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { services } from '@/lib/data/services'

export function ServicesOverview() {
  return (
    <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
      {/* Fond : grille perspective au sol */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(109,195,213,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(109,195,213,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: 'perspective(600px) rotateX(50deg)',
          transformOrigin: 'bottom center',
          maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}><SectionLabel>Nos Expertises</SectionLabel></motion.div>
          <motion.h2 variants={fadeInUp} className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] leading-tight mb-5" style={{ color: 'var(--text)', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            Cinq pôles d&apos;excellence <br />à votre service
          </motion.h2>
          <motion.p variants={fadeInUp} style={{ color: 'rgba(240,240,244,0.5)' }} className="text-base leading-relaxed">
            Chaque prestation est réalisée par une équipe sélectionnée parmi les meilleurs étudiants
            de l&apos;Université de Toulouse, encadrée par un pôle qualité certifié.
          </motion.p>
        </motion.div>

        {/* Grille de cartes 3D */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              transition={{ delay: i * 0.08 }}
              style={{ perspective: '800px' }}
            >
              <motion.div
                whileHover={{ rotateY: -3, rotateX: 2, scale: 1.02, z: 20 }}
                transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="card card-hover flex flex-col h-full p-6 relative overflow-hidden group block"
                >
                  {/* Lumière spéculaire colorée au survol */}
                  <div
                    className="absolute top-0 right-0 w-36 h-36 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at top right, ${service.color}18, transparent 70%)`,
                    }}
                  />

                  {/* Barre colorée haute — effet "crayon de couleur" */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)`,
                    }}
                  />

                  {/* Icône avec relief */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(145deg, ${service.color}18, ${service.color}06)`,
                      borderTop:    `1px solid ${service.color}30`,
                      borderLeft:   `1px solid ${service.color}18`,
                      borderBottom: '1px solid rgba(0,0,0,0.4)',
                      borderRight:  '1px solid rgba(0,0,0,0.2)',
                      boxShadow: `0 4px 12px rgba(0,0,0,0.3), 0 0 20px ${service.color}10`,
                    }}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-[0.95rem] font-bold mb-2 transition-colors" style={{ color: 'var(--text)' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'rgba(240,240,244,0.5)' }}>
                    {service.shortDescription}
                  </p>

                  {/* Tags inset */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.useCases.slice(0, 2).map((uc) => (
                      <span
                        key={uc}
                        className="text-[11px] px-2.5 py-1 rounded-lg"
                        style={{
                          background: 'var(--bg-1)',
                          borderTop:    '1px solid rgba(0,0,0,0.4)',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                          color: 'rgba(240,240,244,0.4)',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.3) inset',
                        }}
                      >
                        {uc}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold group-hover:gap-3 transition-all duration-200" style={{ color: 'var(--red)' }}>
                    En savoir plus
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA bas */}
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
