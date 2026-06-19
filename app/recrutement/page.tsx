'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Send } from 'lucide-react'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'

const benefits = [
  { title: 'Expérience professionnelle réelle', description: 'Gérez de vrais projets client dès vos premières années d\'études. Une expérience unique sur votre CV.' },
  { title: 'Réseau exceptionnel', description: 'Intégrez un réseau d\'anciens membres actifs dans les plus grandes entreprises et startups de France.' },
  { title: 'Montée en compétences', description: 'Formations, workshops et mentoring par des professionnels. Développez votre expertise à vitesse accélérée.' },
  { title: 'Responsabilités réelles', description: 'Prenez en charge des missions à haute valeur ajoutée avec une vraie autonomie et des responsabilités concrètes.' },
  { title: 'Rémunération des missions', description: 'Les membres réalisant des missions sont rémunérés selon les standards de la Confédération JE.' },
  { title: 'Certification Marque JE', description: 'Faites partie d\'une Junior-Entreprise certifiée, reconnue au niveau national par les entreprises.' },
]

const processSteps = [
  { number: '01', title: 'Candidature en ligne', description: 'Remplissez le formulaire ci-dessous avec votre CV et une lettre de motivation personnalisée.', duration: '5 min' },
  { number: '02', title: 'Présélection des dossiers', description: 'Notre équipe RH étudie chaque candidature avec attention. Réponse sous 5 jours ouvrés.', duration: '5 jours' },
  { number: '03', title: 'Entretien de motivation', description: 'Échangez avec 2 membres de la direction pour nous présenter votre parcours et vos aspirations.', duration: '45 min' },
  { number: '04', title: 'Intégration', description: 'Bienvenue ! Journée d\'intégration, rencontre avec l\'équipe, et formation aux processus Upsilon.', duration: 'J+15' },
]

const openRoles = [
  { role: 'Développeur·se Web (React/Next.js)', pole: 'IT', type: 'Semestre' },
  { role: 'Data Analyst / ML Engineer', pole: 'IT', type: 'Semestre' },
  { role: 'Chargé·e de communication digitale', pole: 'Communication', type: 'Semestre' },
  { role: 'Consultant·e Marketing', pole: 'Commercial', type: 'Semestre' },
  { role: 'Ingénieur·e Génie Civil', pole: 'Construction', type: 'Semestre' },
  { role: 'Responsable Qualité adjoint·e', pole: 'Qualité', type: 'Annuel' },
]

const heroWords = ['Rejoins', 'UPSILON']

export default function RecrutementPage() {
  const [formData, setFormData] = useState({ name: '', email: '', school: '', year: '', pole: '', motivation: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pb-16 pt-32" style={{ background: 'var(--bg-0)' }}>
        <div className="absolute inset-0 pointer-events-none select-none" style={{
          backgroundImage: 'linear-gradient(rgba(28,20,24,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28,20,24,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(179,44,37,0.07) 0%, transparent 62%)' }} />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-14 relative z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.42em] mb-10" style={{ color: 'rgba(28,20,24,0.25)' }}>
            UPSILON · Recrutement semestriel · Toulouse
          </motion.p>
          {heroWords.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                initial={{ y: '108%', skewY: 2 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="block font-black uppercase select-none"
                style={{ fontSize: 'clamp(3rem, 12vw, 14rem)', lineHeight: 0.88, letterSpacing: '-0.04em', color: i === 1 ? 'var(--red)' : 'var(--text)' }}
              >
                {word}
              </motion.span>
            </div>
          ))}
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
            className="text-sm leading-relaxed mt-8 max-w-lg" style={{ color: 'rgba(28,20,24,0.4)' }}>
            Tu es étudiant·e à l&apos;Université de Toulouse, motivé·e et tu veux booster ta carrière
            avec une expérience professionnelle unique ? Rejoins-nous !
          </motion.p>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(179,44,37,0.4) 50%, transparent)' }} />

        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start">
              <motion.div variants={fadeInUp}><SectionLabel>Pourquoi nous rejoindre</SectionLabel></motion.div>
              <motion.h2 variants={fadeInUp} className="font-extrabold tracking-[-0.04em] leading-tight mt-4 mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text)' }}>
                Ce que tu gagneras en rejoignant UPSILON
              </motion.h2>
              <motion.div variants={fadeInUp}>
                <a href="#postuler" className="btn-red inline-flex items-center gap-2 text-sm">
                  Postuler maintenant <ArrowRight size={13} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[64%]">
              <div className="h-px" style={{ background: 'rgba(28,20,24,0.1)' }} />
              {benefits.map((b, i) => (
                <motion.div key={b.title} variants={fadeInUp} transition={{ delay: i * 0.07 }}
                  className="group flex items-start gap-5 py-6" style={{ borderBottom: '1px solid rgba(28,20,24,0.1)' }}>
                  <span className="font-mono text-[11px] shrink-0 tabular-nums pt-0.5" style={{ color: 'rgba(28,20,24,0.18)' }}>
                    {String(i+1).padStart(2,'0')}
                  </span>
                  <div>
                    <p className="font-bold mb-1 group-hover:translate-x-0.5 transition-transform duration-200"
                      style={{ fontSize: '1rem', color: 'var(--text)' }}>{b.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(28,20,24,0.42)' }}>{b.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-0)' }}>
        {/* Ghost overlay */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none" aria-hidden>
          <span className="font-black uppercase leading-none" style={{ fontSize: 'clamp(5rem, 16vw, 18rem)', letterSpacing: '-0.06em', color: 'rgba(28,20,24,0.04)', whiteSpace: 'nowrap' }}>
            Postes
          </span>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start">
              <motion.div variants={fadeInUp}><SectionLabel>Postes ouverts</SectionLabel></motion.div>
              <motion.h2 variants={fadeInUp} className="font-extrabold tracking-[-0.04em] leading-tight mt-4 mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text)' }}>
                Nos offres actuelles
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-sm leading-relaxed" style={{ color: 'rgba(28,20,24,0.4)' }}>
                Recrutement semestriel, ouvert aux étudiants de l&apos;Université de Toulouse en Master ou Ingénieur.
              </motion.p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[64%]">
              <div className="h-px" style={{ background: 'rgba(28,20,24,0.1)' }} />
              {openRoles.map((role, i) => (
                <motion.div key={role.role} variants={fadeInUp} transition={{ delay: i * 0.07 }}>
                  <button
                    onClick={() => document.getElementById('postuler')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group w-full flex items-center gap-5 py-6 text-left"
                    style={{ borderBottom: '1px solid rgba(28,20,24,0.1)' }}
                  >
                    <span className="font-mono text-[11px] shrink-0 tabular-nums" style={{ color: 'rgba(28,20,24,0.18)' }}>{String(i+1).padStart(2,'0')}</span>
                    <span className="flex-1 font-bold group-hover:translate-x-0.5 transition-transform duration-200"
                      style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', color: 'var(--text)' }}>{role.role}</span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-medium px-2.5 py-1 rounded-lg"
                        style={{ background: 'var(--bg-2)', border: '1px solid rgba(28,20,24,0.1)', color: 'rgba(28,20,24,0.4)' }}>
                        {role.pole}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg"
                        style={{ background: 'rgba(179,44,37,0.1)', border: '1px solid rgba(179,44,37,0.2)', color: 'var(--red)' }}>
                        {role.type}
                      </span>
                    </div>
                    <ArrowRight size={14} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--red)' }} />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start">
              <motion.div variants={fadeInUp}><SectionLabel>Processus de recrutement</SectionLabel></motion.div>
              <motion.h2 variants={fadeInUp} className="font-extrabold tracking-[-0.04em] leading-tight mt-4 mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text)' }}>
                Simple, rapide, transparent
              </motion.h2>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[64%]">
              <div className="h-px" style={{ background: 'rgba(28,20,24,0.1)' }} />
              {processSteps.map((step, i) => (
                <motion.div key={step.number} variants={fadeInUp} transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-5 py-6" style={{ borderBottom: '1px solid rgba(28,20,24,0.1)' }}>
                  <span className="font-mono text-[11px] shrink-0 tabular-nums pt-0.5 font-bold" style={{ color: 'var(--red)' }}>{step.number}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold mb-1" style={{ color: 'var(--text)', fontSize: '1rem' }}>{step.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(28,20,24,0.42)' }}>{step.description}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wide shrink-0" style={{ color: 'rgba(28,20,24,0.25)' }}>{step.duration}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section id="postuler" className="py-24 relative overflow-hidden scroll-mt-20" style={{ background: 'var(--bg-0)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start">
              <motion.div variants={fadeInUp}><SectionLabel>Postuler</SectionLabel></motion.div>
              <motion.h2 variants={fadeInUp} className="font-extrabold tracking-[-0.04em] leading-tight mt-4 mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text)' }}>
                Candidate dès maintenant
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-sm leading-relaxed" style={{ color: 'rgba(28,20,24,0.4)' }}>
                Remplis ce formulaire et notre équipe RH te contactera sous 5 jours ouvrés.
              </motion.p>
            </motion.div>

            <div className="lg:w-[64%]">
              {submitted ? (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center">
                  <CheckCircle size={48} style={{ color: '#10b981' }} className="mb-4" />
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Candidature envoyée !</h3>
                  <p className="text-sm" style={{ color: 'rgba(28,20,24,0.4)' }}>
                    Notre équipe RH analysera ton dossier et te contactera dans les 5 jours ouvrés.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Form fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: 'rgba(28,20,24,0.4)' }}>Nom complet *</label>
                      <input type="text" required value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                        style={{ background: 'var(--bg-2)', border: '1px solid rgba(28,20,24,0.1)', color: 'var(--text)' }}
                        placeholder="Prénom Nom" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: 'rgba(28,20,24,0.4)' }}>Email *</label>
                      <input type="email" required value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                        style={{ background: 'var(--bg-2)', border: '1px solid rgba(28,20,24,0.1)', color: 'var(--text)' }}
                        placeholder="prenom@univ-toulouse.fr" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: 'rgba(28,20,24,0.4)' }}>École / Formation *</label>
                      <input type="text" required value={formData.school}
                        onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                        style={{ background: 'var(--bg-2)', border: '1px solid rgba(28,20,24,0.1)', color: 'var(--text)' }}
                        placeholder="INSA Toulouse, UPS..." />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: 'rgba(28,20,24,0.4)' }}>Année d&apos;études *</label>
                      <select required value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors appearance-none"
                        style={{ background: 'var(--bg-2)', border: '1px solid rgba(28,20,24,0.1)', color: formData.year ? 'var(--text)' : 'rgba(28,20,24,0.3)' }}>
                        <option value="">Sélectionner...</option>
                        {['L1','L2','L3 / Bachelor','M1 / 4ème année','M2 / 5ème année'].map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: 'rgba(28,20,24,0.4)' }}>Pôle souhaité *</label>
                    <select required value={formData.pole}
                      onChange={(e) => setFormData({ ...formData, pole: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors appearance-none"
                      style={{ background: 'var(--bg-2)', border: '1px solid rgba(28,20,24,0.1)', color: formData.pole ? 'var(--text)' : 'rgba(28,20,24,0.3)' }}>
                      <option value="">Sélectionner un pôle...</option>
                      {['Direction','Commercial','IT & Développement','Qualité','Ressources Humaines','Communication','Missions (consultant·e)'].map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: 'rgba(28,20,24,0.4)' }}>Lettre de motivation *</label>
                    <textarea required rows={5} value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                      style={{ background: 'var(--bg-2)', border: '1px solid rgba(28,20,24,0.1)', color: 'var(--text)' }}
                      placeholder="Présente-toi en quelques lignes et explique-nous pourquoi tu souhaites rejoindre Upsilon..." />
                  </div>

                  <button type="submit" className="btn-red w-full justify-center py-3.5">
                    Envoyer ma candidature
                    <Send size={16} />
                  </button>

                  <p className="text-[11px] text-center" style={{ color: 'rgba(28,20,24,0.25)' }}>
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


