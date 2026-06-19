'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, scaleIn, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { services } from '@/lib/data/services'
import { HomeCTA } from '@/components/home/HomeCTA'

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#07070a] relative overflow-hidden">
        <div className="line-grid absolute inset-0 opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-[#B32C25] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Nos Services</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight mb-6">
              Expertise multidisciplinaire <em className="not-italic text-gradient">à votre service</em>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base text-[rgba(245,245,247,0.6)] leading-relaxed max-w-xl mb-8">
              Cinq pôles d&apos;excellence couvrant les grands domaines de l&apos;ingénierie et du conseil.
              Chaque prestation est réalisée par une équipe sélectionnée et encadrée par notre pôle qualité.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-[rgba(245,245,247,0.6)] hover:bg-white/[0.08] hover:text-[#f5f5f7] transition-all"
                >
                  {s.icon} {s.title}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${i % 2 === 0 ? 'bg-[#0d0d12]' : 'bg-[#07070a]'} relative overflow-hidden scroll-mt-20`}
        >
          {i % 2 === 0 ? <div className="dot-grid absolute inset-0 opacity-25" /> : <div className="line-grid absolute inset-0 opacity-20" />}

          <div className="max-w-[1200px] mx-auto px-6 relative">
            <div className={`grid lg:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Left content */}
              <motion.div
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl">{service.icon}</span>
                  <div>
                    <span className="badge text-[10px]">Pôle {i + 1}/5</span>
                  </div>
                </div>
                <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-[#f5f5f7] leading-tight mb-4">
                  {service.title}
                </h2>
                <p className="text-base text-[rgba(245,245,247,0.6)] leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Benefits */}
                <h3 className="text-sm font-bold text-[#f5f5f7] uppercase tracking-wider mb-4">Nos garanties</h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#B32C25] mt-0.5 shrink-0" />
                      <span className="text-sm text-[rgba(245,245,247,0.65)]">{b}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-red text-sm inline-flex">
                  Demander un devis <ArrowRight size={15} />
                </Link>
              </motion.div>

              {/* Right cards */}
              <motion.div
                variants={i % 2 === 0 ? fadeInRight : fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`space-y-4 ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                {/* Methodology */}
                <div className="card rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-[#f5f5f7] mb-4 flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: service.color }}
                    />
                    Méthodologie
                  </h3>
                  <div className="space-y-2">
                    {service.methodology.map((step, j) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[rgba(245,245,247,0.3)] w-5 shrink-0">{(j + 1).toString().padStart(2, '0')}</span>
                        <span className="flex-1 h-px bg-white/[0.06]" />
                        <span className="text-sm text-[rgba(245,245,247,0.65)] text-right">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use cases */}
                <div className="card rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-[#f5f5f7] mb-4 flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: service.color }}
                    />
                    Cas d&apos;usage typiques
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {service.useCases.map((uc) => (
                      <div
                        key={uc}
                        className="text-xs px-3 py-2.5 rounded-xl text-[rgba(245,245,247,0.55)] leading-snug"
                        style={{
                          background: `${service.color}08`,
                          border: `1px solid ${service.color}20`,
                        }}
                      >
                        {uc}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <HomeCTA />
    </>
  )
}
