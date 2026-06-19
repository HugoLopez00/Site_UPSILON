'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { services } from '@/lib/data/services'

export function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'var(--bg-0)' }}>
      {/* Perspective grid floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[35%] opacity-[0.11] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(109,195,213,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(109,195,213,0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(52deg)',
          transformOrigin: 'bottom center',
          maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
        }}
      />

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
            <motion.div variants={fadeInUp}><SectionLabel>Nos Expertises</SectionLabel></motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-extrabold tracking-[-0.04em] leading-tight mb-6 mt-4"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text)' }}
            >
              Cinq pôles d&apos;excellence à votre service
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'rgba(240,240,244,0.4)' }}
            >
              Chaque prestation est réalisée par des étudiants triés sur le volet, encadrés par un pôle qualité certifié CNJE.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/services" className="btn-ghost text-sm inline-flex items-center gap-2">
                Voir tous nos services <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: service text list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:w-[64%]"
          >
            <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
            {services.map((service, i) => (
              <motion.div key={service.id} variants={fadeInUp} transition={{ delay: i * 0.07 }}>
                <Link
                  href={`/services#${service.id}`}
                  className="group flex items-center gap-5 py-5 lg:py-6"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span
                    className="text-[11px] font-mono w-8 shrink-0 tabular-nums"
                    style={{ color: 'rgba(240,240,244,0.18)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xl shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </span>
                  <span
                    className="flex-1 font-bold group-hover:translate-x-1 transition-transform duration-200"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'var(--text)' }}
                  >
                    {service.title}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200"
                    style={{ background: 'var(--red)', color: '#fff' }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
