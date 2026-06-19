'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { staggerContainer, fadeInUp, fadeInRight } from '@/animations'

const domains = [
  { icon: '💻', label: 'Logiciels & IT',            color: '#6DC3D5' },
  { icon: '📣', label: 'Marketing',                  color: '#D2C3AB' },
  { icon: '🏗️', label: 'Construction',               color: '#B1D8D0' },
  { icon: '🧪', label: 'Chimie & Biotech',           color: '#8E9599' },
  { icon: '⚙️', label: 'Électronique & Mécanique',  color: '#477181' },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--bg-0)] pt-20 min-h-[95vh] flex flex-col">

      {/* ── Fond : grille perspective qui donne de la profondeur ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        {/* Grille perspective au sol */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[55%] opacity-25"
          style={{
            backgroundImage:
              'linear-gradient(rgba(109,195,213,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(109,195,213,0.25) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: 'perspective(800px) rotateX(55deg)',
            transformOrigin: 'bottom center',
            maskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 100%)',
          }}
        />

        {/* Orbe rouge principal — source de lumière */}
        <div
          className="absolute top-[20%] left-[38%] -translate-x-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(179,44,37,0.22) 0%, rgba(179,44,37,0.08) 45%, transparent 70%)',
            filter: 'blur(4px)',
          }}
        />

        {/* Orbe teal secondaire */}
        <div
          className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(71,113,129,0.18) 0%, rgba(109,195,213,0.05) 50%, transparent 70%)',
            filter: 'blur(2px)',
          }}
        />

        {/* Couche de vignette sur les bords */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, var(--bg-0) 100%)',
          }}
        />
      </motion.div>

      {/* ── Contenu principal ── */}
      <div className="relative flex-1 flex items-center max-w-[1200px] mx-auto w-full px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center w-full">

          {/* Colonne texte */}
          <motion.div
            style={{ y: textY, opacity }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge surélevé */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6DC3D5] animate-pulse" />
                Junior-Entreprise · Université de Toulouse · Depuis 2011
              </span>
            </motion.div>

            {/* Titre */}
            <motion.h1
              variants={fadeInUp}
              className="text-[clamp(2.8rem,6vw,5rem)] font-black leading-[1.02] tracking-[-0.035em] text-[var(--text)] mb-6"
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.6)' }}
            >
              Think Success,{' '}
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #6DC3D5 0%, #B1D8D0 60%, #477181 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 24px rgba(109,195,213,0.4))',
                }}
              >
                Make It Happen.
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              variants={fadeInUp}
              className="text-[1.05rem] leading-[1.85] max-w-[500px] mb-10"
              style={{ color: 'rgba(240,240,244,0.58)', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
            >
              UPSILON accompagne vos projets avec l&apos;expertise des étudiants et chercheurs
              de l&apos;Université de Toulouse.{' '}
              <span style={{ color: 'rgba(240,240,244,0.85)', fontWeight: 600 }}>
                Des solutions sur-mesure dans cinq domaines d&apos;excellence.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-16">
              <Link href="/contact" className="btn-red">
                Demander un devis
                <ArrowRight size={15} />
              </Link>
              <Link href="/services" className="btn-ghost">
                Nos services
              </Link>
            </motion.div>

            {/* Stats avec séparateurs 3D */}
            <motion.div variants={fadeInUp}>
              <div className="divider-3d mb-8" />
              <div className="flex flex-wrap items-center gap-8 lg:gap-12">
                {[
                  { n: '149', label: 'Formations', sub: 'universitaires' },
                  { n: '68',  label: 'Laboratoires', sub: 'de recherche' },
                  { n: '500+', label: 'Missions', sub: 'réalisées' },
                  { n: '13 ans', label: 'D\'expertise', sub: 'depuis 2011' },
                ].map((s, i) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <span
                      className="text-[1.75rem] font-extrabold leading-none tracking-tight"
                      style={{
                        color: 'var(--text)',
                        textShadow: '0 2px 12px rgba(0,0,0,0.5)',
                      }}
                    >
                      {s.n}
                    </span>
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider" style={{ color: 'rgba(240,240,244,0.65)' }}>
                      {s.label}
                    </span>
                    <span className="text-[0.62rem]" style={{ color: 'rgba(240,240,244,0.32)' }}>
                      {s.sub}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Carte expertise — effet 3D surélevé */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="hidden lg:block"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              whileHover={{ rotateY: -4, rotateX: 2, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Carte principale */}
              <div
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg, #1e1a1a 0%, #140e0e 100%)',
                  borderTop:    '1px solid rgba(179,44,37,0.3)',
                  borderLeft:   '1px solid rgba(179,44,37,0.12)',
                  borderRight:  '1px solid rgba(0,0,0,0.4)',
                  borderBottom: '1px solid rgba(0,0,0,0.6)',
                  boxShadow: `
                    0 1px 0 rgba(179,44,37,0.12) inset,
                    0 4px 8px   rgba(0,0,0,0.6),
                    0 12px 32px rgba(0,0,0,0.5),
                    0 32px 64px rgba(0,0,0,0.35),
                    0 0 80px   rgba(179,44,37,0.06)
                  `,
                }}
              >
                {/* Lumière spéculaire coin haut-gauche */}
                <div
                  className="absolute top-0 left-0 w-40 h-40 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top left, rgba(179,44,37,0.12), transparent 70%)',
                  }}
                />

                {/* En-tête */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold mb-1" style={{ color: 'rgba(240,240,244,0.35)' }}>
                      Pôles d&apos;expertise
                    </p>
                    <p className="text-[0.95rem] font-bold" style={{ color: 'var(--text)' }}>
                      5 domaines couverts
                    </p>
                  </div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-xl"
                    style={{
                      background: 'linear-gradient(145deg, #CC3830, #8C2019)',
                      borderTop:    '1px solid rgba(255,255,255,0.2)',
                      borderBottom: '1px solid rgba(0,0,0,0.4)',
                      boxShadow: '0 4px 12px rgba(179,44,37,0.5), 0 1px 0 rgba(255,255,255,0.1) inset',
                      textShadow: '0 2px 4px rgba(0,0,0,0.4)',
                    }}
                  >
                    Υ
                  </div>
                </div>

                {/* Liste domaines */}
                <div className="space-y-2 mb-6 relative z-10">
                  {domains.map((d, i) => (
                    <motion.div
                      key={d.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 + i * 0.09, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.015) 100%)',
                        borderTop:    '1px solid rgba(255,255,255,0.07)',
                        borderBottom: '1px solid rgba(0,0,0,0.25)',
                        borderLeft:   '1px solid rgba(255,255,255,0.04)',
                        borderRight:  '1px solid rgba(0,0,0,0.15)',
                      }}
                    >
                      <span className="text-lg w-7 text-center">{d.icon}</span>
                      <span className="text-[0.82rem] font-medium flex-1" style={{ color: 'rgba(240,240,244,0.7)' }}>
                        {d.label}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: d.color, boxShadow: `0 0 6px ${d.color}` }} />
                    </motion.div>
                  ))}
                </div>

                {/* Barre stats inset */}
                <div
                  className="grid grid-cols-3 gap-px rounded-xl overflow-hidden relative z-10"
                  style={{
                    background: 'rgba(0,0,0,0.4)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.5) inset',
                  }}
                >
                  {[
                    { n: '13', label: 'ans d\'exp.' },
                    { n: '9.2', label: 'note /10' },
                    { n: 'JE ✓', label: 'certifiée' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="px-3 py-3 text-center"
                      style={{ background: 'var(--bg-2)' }}
                    >
                      <p className="text-[0.95rem] font-extrabold leading-none" style={{ color: 'var(--text)' }}>{s.n}</p>
                      <p className="text-[10px] mt-1" style={{ color: 'rgba(240,240,244,0.3)' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badge JE — flottant en avant (translateZ) */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 rounded-2xl px-4 py-2.5"
                style={{
                  background: 'linear-gradient(145deg, var(--bg-4), var(--bg-3))',
                  borderTop:    '1px solid rgba(109,195,213,0.3)',
                  borderLeft:   '1px solid rgba(109,195,213,0.15)',
                  borderBottom: '1px solid rgba(0,0,0,0.5)',
                  borderRight:  '1px solid rgba(0,0,0,0.3)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.5), 0 0 24px rgba(109,195,213,0.1)',
                  transform: 'translateZ(30px)',
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#6DC3D5] animate-pulse" style={{ boxShadow: '0 0 8px #6DC3D5' }} />
                  <span className="text-[11px] font-bold" style={{ color: 'rgba(240,240,244,0.9)' }}>Marque JE certifiée</span>
                </div>
              </motion.div>

              {/* Badge prix */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1.2 }}
                className="absolute -bottom-4 -left-5 rounded-2xl px-4 py-2.5"
                style={{
                  background: 'linear-gradient(145deg, var(--bg-4), var(--bg-3))',
                  borderTop:    '1px solid rgba(255,255,255,0.1)',
                  borderLeft:   '1px solid rgba(255,255,255,0.06)',
                  borderBottom: '1px solid rgba(0,0,0,0.5)',
                  borderRight:  '1px solid rgba(0,0,0,0.3)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">🏆</span>
                  <div>
                    <p className="text-[11px] font-bold" style={{ color: 'rgba(240,240,244,0.9)' }}>Prix Meilleur Espoir</p>
                    <p className="text-[10px]" style={{ color: 'rgba(240,240,244,0.35)' }}>CNJE 2014</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Indicateur scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 flex flex-col items-center gap-2 pb-8"
      >
        <ChevronDown size={18} className="animate-bounce" style={{ color: 'rgba(240,240,244,0.25)' }} />
      </motion.div>
    </section>
  )
}
