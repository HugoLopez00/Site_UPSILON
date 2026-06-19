'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/animations'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07070a] pt-20 min-h-[92vh] flex flex-col">

      {/* ── Fond diagonal gauche (couleur rouge officiel) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        {/* Grand plan rouge incliné – rappel du logo Upsilon */}
        <div
          className="absolute -left-[10%] top-0 h-full w-[55%]"
          style={{
            background: 'linear-gradient(160deg, #B32C25 0%, #8C2019 100%)',
            clipPath: 'polygon(0 0, 78% 0, 52% 100%, 0 100%)',
          }}
        />

        {/* Accent acier / bleu-gris (couleur charte) */}
        <div
          className="absolute -left-[10%] top-0 h-full w-[58%]"
          style={{
            background: 'linear-gradient(160deg, #477181 0%, #325464 100%)',
            clipPath: 'polygon(0 0, 56% 0, 34% 100%, 0 100%)',
          }}
        />

        {/* Accent teal fin (couleur charte #6DC3D5) */}
        <div
          className="absolute left-0 top-0 h-full w-[32%]"
          style={{
            background: 'linear-gradient(160deg, rgba(109,195,213,0.18) 0%, rgba(71,113,129,0.08) 100%)',
            clipPath: 'polygon(0 0, 80% 0, 52% 100%, 0 100%)',
          }}
        />

        {/* Motif diagonal repeating (lignes logo) */}
        <div
          className="absolute -left-[10%] top-0 h-full w-[58%] opacity-[0.07]"
          style={{
            clipPath: 'polygon(0 0, 78% 0, 52% 100%, 0 100%)',
            backgroundImage: 'repeating-linear-gradient(-55deg, transparent, transparent 18px, rgba(255,255,255,0.8) 18px, rgba(255,255,255,0.8) 19px)',
          }}
        />

        {/* Lueur rouge douce côté droit */}
        <div className="absolute top-1/3 right-[15%] w-[360px] h-[360px] rounded-full bg-[#B32C25] opacity-[0.04] blur-[100px]" />
        {/* Lueur teal douce */}
        <div className="absolute bottom-1/4 right-[30%] w-[240px] h-[240px] rounded-full bg-[#6DC3D5] opacity-[0.04] blur-[80px]" />
      </div>

      {/* ── Contenu principal ── */}
      <div className="relative flex-1 flex items-center max-w-[1200px] mx-auto w-full px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* Colonne gauche — texte principal */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Pill label */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] text-white/80 border border-white/20 bg-white/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6DC3D5] animate-pulse" />
                Junior-Entreprise · Université de Toulouse · Depuis 2011
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              variants={fadeInUp}
              className="text-[clamp(2.6rem,5.5vw,4.4rem)] font-black leading-[1.04] tracking-[-0.03em] text-white mb-6"
            >
              Think Success,{' '}
              <span
                className="block"
                style={{
                  background: 'linear-gradient(90deg, #6DC3D5 0%, #B1D8D0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Make It Happen.
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              variants={fadeInUp}
              className="text-[1rem] text-white/60 leading-[1.8] max-w-[480px] mb-10"
            >
              UPSILON accompagne vos projets avec l&apos;expertise des étudiants et chercheurs
              de l&apos;Université de Toulouse. Des solutions sur-mesure dans{' '}
              <span className="text-white/85 font-semibold">cinq domaines d&apos;excellence.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-14">
              <Link href="/contact" className="btn-red">
                Demander un devis
                <ArrowRight size={15} />
              </Link>
              <Link href="/services" className="btn-ghost">
                Nos services
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/[0.08]"
            >
              {[
                { n: '149', label: 'Formations', sub: 'universitaires' },
                { n: '68', label: 'Laboratoires', sub: 'de recherche' },
                { n: '500+', label: 'Missions', sub: 'réalisées' },
                { n: '13 ans', label: 'D\'expertise', sub: 'depuis 2011' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-[1.6rem] font-extrabold text-white leading-none tracking-tight">
                    {s.n}
                  </span>
                  <span className="text-[0.72rem] font-semibold text-white/70 mt-1 leading-tight">
                    {s.label}
                  </span>
                  <span className="text-[0.65rem] text-white/35 leading-tight">
                    {s.sub}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Colonne droite — carte expertise */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Carte principale */}
              <div
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                }}
              >
                {/* Accent teal en haut à droite */}
                <div
                  className="absolute top-0 right-0 w-28 h-28 rounded-bl-[60px]"
                  style={{ background: 'linear-gradient(225deg, rgba(109,195,213,0.15), transparent)' }}
                />
                {/* Accent rouge en bas à gauche */}
                <div
                  className="absolute bottom-0 left-0 w-20 h-20 rounded-tr-[40px]"
                  style={{ background: 'linear-gradient(45deg, rgba(179,44,37,0.12), transparent)' }}
                />

                <div className="relative z-10">
                  {/* En-tête carte */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-white/40 mb-1">
                        Pôles d&apos;expertise
                      </p>
                      <p className="text-base font-bold text-white">5 domaines couverts</p>
                    </div>
                    {/* Logo mark */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-xl"
                      style={{ background: 'linear-gradient(135deg, #B32C25, #8C2019)' }}
                    >
                      Υ
                    </div>
                  </div>

                  {/* Liste domaines */}
                  <div className="space-y-2.5 mb-7">
                    {[
                      { icon: '💻', label: 'Logiciels & Services IT', color: '#6DC3D5' },
                      { icon: '📣', label: 'Marketing & Communication', color: '#D2C3AB' },
                      { icon: '🏗️', label: 'Construction & Environnement', color: '#B1D8D0' },
                      { icon: '🧪', label: 'Chimie & Biotechnologies', color: '#8E9599' },
                      { icon: '⚙️', label: 'Électronique & Mécanique', color: '#477181' },
                    ].map((d, i) => (
                      <motion.div
                        key={d.label}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.09, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl group cursor-default"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <span className="text-lg w-7 text-center">{d.icon}</span>
                        <span className="text-sm text-white/70 font-medium flex-1">{d.label}</span>
                        <span className="w-1.5 h-1.5 rounded-full opacity-50" style={{ background: d.color }} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Barre de stats */}
                  <div
                    className="grid grid-cols-3 gap-px rounded-xl overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    {[
                      { n: '13', label: 'ans d\'exp.' },
                      { n: '9.2', label: 'note /10' },
                      { n: 'JE ✓', label: 'certifiée' },
                    ].map((s) => (
                      <div key={s.label} className="bg-[#0e0e12] px-3 py-3 text-center">
                        <p className="text-base font-extrabold text-white leading-none">{s.n}</p>
                        <p className="text-[10px] text-white/35 mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Badge flottant — certif JE */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 rounded-2xl px-4 py-3"
                style={{
                  background: 'rgba(14,14,18,0.95)',
                  border: '1px solid rgba(109,195,213,0.25)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#6DC3D5] animate-pulse" />
                  <span className="text-xs font-bold text-white/85">Marque JE certifiée</span>
                </div>
              </motion.div>

              {/* Badge flottant — prix */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1.2 }}
                className="absolute -bottom-4 -left-6 rounded-2xl px-4 py-3"
                style={{
                  background: 'rgba(14,14,18,0.95)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">🏆</span>
                  <div>
                    <p className="text-[11px] font-bold text-white/90">Prix Meilleur Espoir</p>
                    <p className="text-[10px] text-white/35">CNJE 2014</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="relative z-10 flex flex-col items-center gap-2 pb-8"
      >
        <ChevronDown size={18} className="text-white/25 animate-bounce" />
      </motion.div>
    </section>
  )
}
