'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { HomeCTA } from '@/components/home/HomeCTA'

const timeline = [
  { year: '2011', title: 'Fondation d\'UPSILON', description: 'Création de la Junior-Entreprise par des étudiants passionnés de l\'Université de Toulouse, avec la vision de créer un pont entre le monde académique et l\'entreprise.' },
  { year: '2013', title: 'Obtention de la Marque JE', description: 'Deux ans seulement après sa création, Upsilon obtient la certification officielle de la Confédération Nationale des Junior-Entreprises, gage de qualité et de rigueur.' },
  { year: '2014', title: 'Prix Meilleur Espoir CNJE', description: 'Reconnaissance nationale : Upsilon reçoit le Prix du Meilleur Espoir de la Confédération Nationale des Junior-Entreprises pour son développement exceptionnel.' },
  { year: '2018', title: 'Expansion multi-domaines', description: 'Développement de l\'offre vers 5 pôles d\'expertise complémentaires, reflétant la richesse des formations de l\'Université de Toulouse.' },
  { year: '2024', title: 'Aujourd\'hui', description: 'Plus de 500 missions réalisées, une équipe de 30+ membres actifs, et une réputation solide auprès des entreprises toulousaines et nationales.' },
]

const values = [
  { title: 'Excellence', description: 'Chaque mission est réalisée avec le même niveau d\'exigence qu\'un cabinet de conseil professionnel. Notre pôle qualité veille à chaque étape.' },
  { title: 'Engagement', description: 'Nous nous investissons pleinement dans chaque projet client. Votre succès est notre succès. La satisfaction client est notre priorité absolue.' },
  { title: 'Transparence', description: 'Communication claire, suivi rigoureux et reporting régulier. Vous êtes informés à chaque étape de l\'avancement de votre projet.' },
  { title: 'Innovation', description: 'Portés par l\'énergie de la recherche universitaire, nous apportons les méthodes et technologies les plus récentes à vos projets.' },
]

const heroWords = ['À Propos', 'd\'UPSILON']

export default function AProposPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pb-16 pt-32" style={{ background: 'var(--bg-0)' }}>
        <div className="absolute inset-0 pointer-events-none select-none" style={{
          backgroundImage: 'linear-gradient(rgba(28,20,24,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28,20,24,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-1/2 left-0 w-[700px] h-[700px] -translate-y-1/2 pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(179,44,37,0.07) 0%, transparent 62%)' }} />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-14 relative z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.42em] mb-10" style={{ color: 'rgba(28,20,24,0.25)' }}>
            UPSILON · Junior-Entreprise · Toulouse
          </motion.p>
          {heroWords.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                initial={{ y: '108%', skewY: 2 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="block font-black uppercase select-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.88, letterSpacing: '-0.04em', color: i === 1 ? 'var(--red)' : 'var(--text)' }}
              >
                {word}
              </motion.span>
            </div>
          ))}
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
            className="text-sm leading-relaxed mt-8 max-w-lg" style={{ color: 'rgba(28,20,24,0.4)' }}>
            Fondée en 2011, UPSILON est la Junior-Entreprise de l&apos;Université de Toulouse.
            Nous réalisons des prestations d&apos;ingénierie et de conseil grâce au talent des étudiants toulousains.
          </motion.p>
        </div>
      </section>

      {/* ── MISSION / VISION ── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(179,44,37,0.4) 50%, transparent)' }} />

        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start">
              <motion.div variants={fadeInUp}><SectionLabel>Notre Raison d&apos;être</SectionLabel></motion.div>
              <motion.h2 variants={fadeInUp} className="font-extrabold tracking-[-0.04em] leading-tight mt-4 mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text)' }}>
                Mission & Vision
              </motion.h2>
              <motion.div variants={fadeInUp}>
                <Link href="/contact" className="btn-red inline-flex items-center gap-2 text-sm">
                  Nous contacter <ArrowRight size={13} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[64%]">
              <div className="h-px" style={{ background: 'rgba(28,20,24,0.1)' }} />
              {[
                { title: 'Notre Mission', description: 'Réaliser des prestations d\'ingénierie et de conseil de haute qualité en mobilisant les compétences des étudiants de l\'Université de Toulouse. Offrir à nos commanditaires des solutions sur-mesure portées par la rigueur académique et la passion entrepreneuriale de nos membres.' },
                { title: 'Notre Vision', description: 'Devenir la référence des Junior-Entreprises tech en France en valorisant l\'excellence de l\'Université de Toulouse. Créer un écosystème où étudiants et entreprises se nourrissent mutuellement pour innover et croître.' },
              ].map((item, i) => (
                <motion.div key={item.title} variants={fadeInUp} transition={{ delay: i * 0.1 }}
                  className="py-8" style={{ borderBottom: '1px solid rgba(28,20,24,0.1)' }}>
                  <h3 className="font-bold mb-3" style={{ fontSize: '1.15rem', color: 'var(--text)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(28,20,24,0.45)' }}>{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'var(--bg-0)' }}>
        {/* Ghost overlay */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none" aria-hidden>
          <span className="font-black uppercase leading-none" style={{ fontSize: 'clamp(6rem, 18vw, 20rem)', letterSpacing: '-0.06em', color: 'rgba(28,20,24,0.04)', whiteSpace: 'nowrap' }}>
            Histoire
          </span>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start">
              <motion.div variants={fadeInUp}><SectionLabel>Notre Histoire</SectionLabel></motion.div>
              <motion.h2 variants={fadeInUp} className="font-extrabold tracking-[-0.04em] leading-tight mt-4 mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text)' }}>
                13 ans d&apos;excellence et d&apos;innovation
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-sm leading-relaxed" style={{ color: 'rgba(28,20,24,0.4)' }}>
                De notre création en 2011 à aujourd&apos;hui, retrace notre parcours vers l&apos;excellence.
              </motion.p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[64%]">
              <div className="h-px" style={{ background: 'rgba(28,20,24,0.1)' }} />
              {timeline.map((item, i) => (
                <motion.div key={item.year} variants={fadeInUp} transition={{ delay: i * 0.08 }}
                  className="group py-7" style={{ borderBottom: '1px solid rgba(28,20,24,0.1)' }}>
                  <div className="flex items-baseline gap-5 mb-2">
                    <span className="font-mono text-[11px] shrink-0 tabular-nums font-bold" style={{ color: 'var(--red)' }}>{item.year}</span>
                    <h3 className="font-bold group-hover:translate-x-0.5 transition-transform duration-200"
                      style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', color: 'var(--text)' }}>{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed pl-14" style={{ color: 'rgba(28,20,24,0.42)' }}>{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start">
              <motion.div variants={fadeInUp}><SectionLabel>Nos Valeurs</SectionLabel></motion.div>
              <motion.h2 variants={fadeInUp} className="font-extrabold tracking-[-0.04em] leading-tight mt-4 mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text)' }}>
                Ce qui nous guide au quotidien
              </motion.h2>
              <motion.div variants={fadeInUp}>
                <Link href="/equipe" className="btn-ghost inline-flex items-center gap-2 text-sm">
                  Voir l&apos;équipe <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[64%]">
              <div className="h-px" style={{ background: 'rgba(28,20,24,0.1)' }} />
              {values.map((value, i) => (
                <motion.div key={value.title} variants={fadeInUp} transition={{ delay: i * 0.08 }}
                  className="group py-7" style={{ borderBottom: '1px solid rgba(28,20,24,0.1)' }}>
                  <div className="flex items-baseline gap-5 mb-2">
                    <span className="font-mono text-[11px] shrink-0" style={{ color: 'rgba(28,20,24,0.18)' }}>{String(i+1).padStart(2,'0')}</span>
                    <h3 className="font-bold group-hover:translate-x-0.5 transition-transform duration-200"
                      style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', color: 'var(--text)' }}>{value.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed pl-9" style={{ color: 'rgba(28,20,24,0.42)' }}>{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ORGANISATION ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-0)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex flex-col lg:flex-row gap-14 lg:gap-20">
            <div className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start">
              <motion.div variants={fadeInUp}><SectionLabel>Notre Organisation</SectionLabel></motion.div>
              <motion.h2 variants={fadeInUp} className="font-extrabold tracking-[-0.04em] leading-tight mt-4 mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text)' }}>
                Une structure professionnelle et agile
              </motion.h2>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                <Link href="/recrutement" className="btn-red text-sm inline-flex items-center gap-2">
                  Nous rejoindre <ArrowRight size={13} />
                </Link>
                <Link href="/equipe" className="btn-ghost text-sm inline-flex items-center gap-2">
                  Notre équipe <ArrowUpRight size={13} />
                </Link>
              </motion.div>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[64%]">
              <div className="h-px" style={{ background: 'rgba(28,20,24,0.1)' }} />
              {[
                { pole: 'Direction', desc: 'Pilotage stratégique, représentation externe, coordination des pôles.' },
                { pole: 'Commercial', desc: 'Prospection, devis, gestion de la relation client et des contrats.' },
                { pole: 'Qualité', desc: 'Suivi des missions, audits internes, certification Marque JE.' },
                { pole: 'Ressources Humaines', desc: 'Recrutement semestriel, formation, bien-être des membres.' },
                { pole: 'IT', desc: 'Outils internes, site web, infrastructure numérique d\'UPSILON.' },
                { pole: 'Communication', desc: 'Identité visuelle, réseaux sociaux, événements et partenariats.' },
              ].map((item, i) => (
                <motion.div key={item.pole} variants={fadeInUp} transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-5 py-5" style={{ borderBottom: '1px solid rgba(28,20,24,0.1)' }}>
                  <span className="font-mono text-[11px] shrink-0 w-6 tabular-nums" style={{ color: 'rgba(28,20,24,0.18)' }}>
                    {String(i+1).padStart(2,'0')}
                  </span>
                  <div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: 'var(--text)' }}>Pôle {item.pole}</p>
                    <p className="text-sm" style={{ color: 'rgba(28,20,24,0.4)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <HomeCTA />
    </>
  )
}

