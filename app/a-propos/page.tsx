'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, Target, Eye, Heart } from 'lucide-react'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { HomeCTA } from '@/components/home/HomeCTA'

const timeline = [
  {
    year: '2011',
    title: 'Fondation d\'UPSILON',
    description: 'Création de la Junior-Entreprise par des étudiants passionnés de l\'Université de Toulouse, avec la vision de créer un pont entre le monde académique et l\'entreprise.',
    icon: '🚀',
  },
  {
    year: '2013',
    title: 'Obtention de la Marque JE',
    description: 'Deux ans seulement après sa création, Upsilon obtient la certification officielle de la Confédération Nationale des Junior-Entreprises, gage de qualité et de rigueur.',
    icon: '🏅',
  },
  {
    year: '2014',
    title: 'Prix Meilleur Espoir CNJE',
    description: 'Reconnaissance nationale : Upsilon reçoit le Prix du Meilleur Espoir de la Confédération Nationale des Junior-Entreprises pour son développement exceptionnel.',
    icon: '🏆',
  },
  {
    year: '2018',
    title: 'Expansion multi-domaines',
    description: 'Développement de l\'offre vers 5 pôles d\'expertise complémentaires, reflétant la richesse des formations de l\'Université de Toulouse.',
    icon: '📈',
  },
  {
    year: '2024',
    title: 'Aujourd\'hui',
    description: 'Plus de 500 missions réalisées, une équipe de 30+ membres actifs, et une réputation solide auprès des entreprises toulousaines et nationales.',
    icon: '⭐',
  },
]

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Chaque mission est réalisée avec le même niveau d\'exigence qu\'un cabinet de conseil professionnel. Notre pôle qualité veille à chaque étape.',
    color: '#B32C25',
  },
  {
    icon: Heart,
    title: 'Engagement',
    description: 'Nous nous investissons pleinement dans chaque projet client. Votre succès est notre succès. La satisfaction client est notre priorité absolue.',
    color: '#10b981',
  },
  {
    icon: Eye,
    title: 'Transparence',
    description: 'Communication claire, suivi rigoureux et reporting régulier. Vous êtes informés à chaque étape de l\'avancement de votre projet.',
    color: '#6366f1',
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'Portés par l\'énergie de la recherche universitaire, nous apportons les méthodes et technologies les plus récentes à vos projets.',
    color: '#f59e0b',
  },
]

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#07070a] relative overflow-hidden">
        <div className="line-grid absolute inset-0 opacity-30" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#B32C25] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>À propos d&apos;Upsilon</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight mb-6">
              L&apos;expertise universitaire <em className="not-italic text-gradient">au service de vos projets</em>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base text-[rgba(245,245,247,0.6)] leading-relaxed max-w-xl">
              Fondée en 2011, UPSILON est la Junior-Entreprise de l&apos;Université de Toulouse. Nous réalisons
              des prestations d&apos;ingénierie et de conseil en mobilisant le talent exceptionnel des étudiants
              et chercheurs toulousains.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0d0d12] relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="glass rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#B32C25] to-transparent" />
              <div className="text-3xl mb-4">🎯</div>
              <h2 className="text-xl font-bold text-[#f5f5f7] mb-3">Notre Mission</h2>
              <p className="text-sm text-[rgba(245,245,247,0.6)] leading-relaxed">
                Réaliser des prestations d&apos;ingénierie et de conseil de haute qualité en mobilisant les compétences
                des étudiants de l&apos;Université de Toulouse. Offrir à nos commanditaires des solutions sur-mesure
                portées par la rigueur académique et la passion entrepreneuriale de nos membres.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="glass rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6366f1] to-transparent" />
              <div className="text-3xl mb-4">👁️</div>
              <h2 className="text-xl font-bold text-[#f5f5f7] mb-3">Notre Vision</h2>
              <p className="text-sm text-[rgba(245,245,247,0.6)] leading-relaxed">
                Devenir la référence des Junior-Entreprises tech en France en valorisant
                l&apos;excellence de l&apos;Université de Toulouse. Créer un écosystème où étudiants et entreprises
                se nourrissent mutuellement pour innover et croître.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#07070a] relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-25" />

        <div className="max-w-[1200px] mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Notre Histoire</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight">
              13 ans d&apos;excellence <em className="not-italic text-gradient">et d&apos;innovation</em>
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#B32C25]/50 via-white/[0.06] to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.1 }}
                  className={`flex gap-8 lg:gap-16 relative ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div className="glass rounded-2xl p-6 group hover:border-white/[0.12] transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-xs font-bold text-[#B32C25] uppercase tracking-widest">{item.year}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#f5f5f7] mb-2">{item.title}</h3>
                      <p className="text-sm text-[rgba(245,245,247,0.55)] leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-8 lg:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#B32C25] border-2 border-[#07070a] z-10" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0d0d12]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Nos Valeurs</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight">
              Ce qui nous guide <em className="not-italic text-gradient">au quotidien</em>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div key={value.title} variants={fadeInUp}>
                  <div className="glass glass-hover rounded-2xl p-6 h-full text-center group">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${value.color}15`, border: `1px solid ${value.color}30` }}
                    >
                      <Icon size={22} style={{ color: value.color }} />
                    </div>
                    <h3 className="text-base font-bold text-[#f5f5f7] mb-2">{value.title}</h3>
                    <p className="text-sm text-[rgba(245,245,247,0.5)] leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Organisation */}
      <section className="py-20 bg-[#07070a] relative overflow-hidden">
        <div className="line-grid absolute inset-0 opacity-20" />
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <SectionLabel>Notre Organisation</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight mb-5">
              Une structure <em className="not-italic text-gradient">professionnelle et agile</em>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[rgba(245,245,247,0.55)] text-base leading-relaxed max-w-2xl mb-12">
              Upsilon s&apos;organise comme une entreprise réelle avec des pôles fonctionnels,
              des processus qualité certifiés et une gouvernance transparente.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {['Direction', 'Commercial', 'Qualité', 'RH', 'IT', 'Communication'].map((pole, i) => (
              <motion.div
                key={pole}
                variants={fadeInUp}
                className="glass rounded-xl p-4 text-center group hover:border-[rgba(196,30,58,0.3)] transition-colors"
              >
                <div className="text-2xl mb-2">
                  {['🏛️', '💼', '✅', '👥', '💻', '📢'][i]}
                </div>
                <p className="text-xs font-semibold text-[rgba(245,245,247,0.6)]">Pôle {pole}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-[#0d0d12]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-[#f5f5f7] mb-4">
              Rencontrez notre équipe
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[rgba(245,245,247,0.5)] mb-8 max-w-md mx-auto text-sm leading-relaxed">
              30+ étudiants passionnés, sélectionnés parmi les meilleurs de l&apos;Université de Toulouse.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/equipe" className="btn-red text-sm">
                Voir l&apos;équipe <ArrowRight size={16} />
              </Link>
              <Link href="/recrutement" className="btn-ghost text-sm">
                Rejoindre Upsilon
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <HomeCTA />
    </>
  )
}
