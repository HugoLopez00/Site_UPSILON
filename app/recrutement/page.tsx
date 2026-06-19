'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Send } from 'lucide-react'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'

const benefits = [
  {
    icon: '🚀',
    title: 'Expérience professionnelle réelle',
    description: 'Gérez de vrais projets client dès vos premières années d\'études. Une expérience unique sur votre CV.',
  },
  {
    icon: '🧑‍🤝‍🧑',
    title: 'Réseau exceptionnel',
    description: 'Intégrez un réseau d\'anciens membres actifs dans les plus grandes entreprises et startups de France.',
  },
  {
    icon: '📚',
    title: 'Montée en compétences',
    description: 'Formations, workshops et mentoring par des professionnels. Développez votre expertise à une vitesse accélérée.',
  },
  {
    icon: '💼',
    title: 'Responsabilités réelles',
    description: 'Prenez en charge des missions à haute valeur ajoutée avec une vraie autonomie et des responsabilités concrètes.',
  },
  {
    icon: '💰',
    title: 'Rémunération des missions',
    description: 'Les membres réalisant des missions sont rémunérés selon les standards de la Confédération JE.',
  },
  {
    icon: '🏆',
    title: 'Certification Marque JE',
    description: 'Faites partie d\'une Junior-Entreprise certifiée, reconnue au niveau national par les entreprises.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Candidature en ligne',
    description: 'Remplissez le formulaire ci-dessous avec votre CV et une lettre de motivation personnalisée.',
    duration: '5 min',
  },
  {
    number: '02',
    title: 'Présélection des dossiers',
    description: 'Notre équipe RH étudie chaque candidature avec attention. Réponse sous 5 jours ouvrés.',
    duration: '5 jours',
  },
  {
    number: '03',
    title: 'Entretien de motivation',
    description: 'Échangez avec 2 membres de la direction pour nous présenter votre parcours et vos aspirations.',
    duration: '45 min',
  },
  {
    number: '04',
    title: 'Intégration',
    description: 'Bienvenue ! Journée d\'intégration, rencontre avec l\'équipe, et formation aux processus Upsilon.',
    duration: 'J+15',
  },
]

const openRoles = [
  { role: 'Développeur·se Web (React/Next.js)', pole: 'IT', type: 'Semestre' },
  { role: 'Data Analyst / ML Engineer', pole: 'IT', type: 'Semestre' },
  { role: 'Chargé·e de communication digitale', pole: 'Communication', type: 'Semestre' },
  { role: 'Consultant·e Marketing', pole: 'Commercial', type: 'Semestre' },
  { role: 'Ingénieur·e Génie Civil', pole: 'Construction', type: 'Semestre' },
  { role: 'Responsable Qualité adjoint·e', pole: 'Qualité', type: 'Annuel' },
]

export default function RecrutementPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', school: '', year: '', pole: '', motivation: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#07070a] relative overflow-hidden">
        <div className="line-grid absolute inset-0 opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#B32C25] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Recrutement</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight mb-6">
              Rejoins l&apos;équipe qui <em className="not-italic text-gradient">fait la différence</em>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base text-[rgba(245,245,247,0.6)] leading-relaxed max-w-xl">
              Tu es étudiant·e à l&apos;Université de Toulouse, motivé·e et tu veux booster ta carrière
              avec une expérience professionnelle unique ? Rejoins-nous !
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              <SectionLabel>Pourquoi nous rejoindre</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight">
              Ce que tu gagneras <em className="not-italic text-gradient">en rejoignant Upsilon</em>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeInUp}>
                <div className="card card-hover rounded-2xl p-6 h-full">
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="text-sm font-bold text-[#f5f5f7] mb-2">{b.title}</h3>
                  <p className="text-sm text-[rgba(245,245,247,0.5)] leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 bg-[#07070a]">
        <div className="dot-grid absolute inset-0 opacity-20" />
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <SectionLabel>Postes ouverts</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl font-extrabold tracking-tight text-[#f5f5f7] mb-8">
              Nos offres actuelles
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-3"
          >
            {openRoles.map((role, i) => (
              <motion.div
                key={role.role}
                variants={fadeInUp}
                className="card card-hover rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group cursor-pointer"
                onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#B32C25] animate-pulse" />
                  <span className="text-sm font-semibold text-[#f5f5f7]">{role.role}</span>
                </div>
                <div className="flex items-center gap-3 ml-6 sm:ml-0">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[rgba(245,245,247,0.5)]">
                    Pôle {role.pole}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[rgba(196,30,58,0.1)] border border-[rgba(196,30,58,0.2)] text-[#B32C25] font-medium">
                    {role.type}
                  </span>
                  <ArrowRight size={14} className="text-[rgba(245,245,247,0.3)] group-hover:text-[#B32C25] group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
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
              <SectionLabel>Processus de recrutement</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight">
              Simple, rapide, <em className="not-italic text-gradient">transparent</em>
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                className="card rounded-2xl p-6 relative group"
              >
                <div className="text-4xl font-black text-[rgba(245,245,247,0.06)] font-mono mb-4">{step.number}</div>
                <h3 className="text-sm font-bold text-[#f5f5f7] mb-2">{step.title}</h3>
                <p className="text-xs text-[rgba(245,245,247,0.5)] leading-relaxed mb-4">{step.description}</p>
                <span className="text-[10px] font-bold text-[#B32C25] uppercase tracking-wider">{step.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-24 bg-[#07070a] relative overflow-hidden scroll-mt-20">
        <div className="line-grid absolute inset-0 opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B32C25] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[700px] mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Postuler</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold tracking-tight text-[#f5f5f7] mb-3">
              Candidate dès maintenant
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-sm text-[rgba(245,245,247,0.5)] leading-relaxed">
              Remplis ce formulaire et notre équipe RH te contactera sous 5 jours ouvrés.
            </motion.p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card rounded-2xl p-12 text-center"
            >
              <CheckCircle size={48} className="text-[#10b981] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#f5f5f7] mb-2">Candidature envoyée !</h3>
              <p className="text-sm text-[rgba(245,245,247,0.5)]">
                Notre équipe RH analysera ton dossier et te contactera dans les 5 jours ouvrés.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              onSubmit={handleSubmit}
              className="card rounded-2xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[rgba(245,245,247,0.6)] mb-2">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#f5f5f7] placeholder:text-[rgba(245,245,247,0.25)] focus:outline-none focus:border-[rgba(196,30,58,0.5)] transition-colors"
                    placeholder="Prénom Nom"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[rgba(245,245,247,0.6)] mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#f5f5f7] placeholder:text-[rgba(245,245,247,0.25)] focus:outline-none focus:border-[rgba(196,30,58,0.5)] transition-colors"
                    placeholder="prenom@univ-toulouse.fr"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[rgba(245,245,247,0.6)] mb-2">École / Formation *</label>
                  <input
                    type="text"
                    required
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#f5f5f7] placeholder:text-[rgba(245,245,247,0.25)] focus:outline-none focus:border-[rgba(196,30,58,0.5)] transition-colors"
                    placeholder="INSA Toulouse, UPS..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[rgba(245,245,247,0.6)] mb-2">Année d&apos;études *</label>
                  <select
                    required
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#f5f5f7] focus:outline-none focus:border-[rgba(196,30,58,0.5)] transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#141419]">Sélectionner...</option>
                    <option value="L1" className="bg-[#141419]">Licence 1</option>
                    <option value="L2" className="bg-[#141419]">Licence 2</option>
                    <option value="L3" className="bg-[#141419]">Licence 3 / Bachelor</option>
                    <option value="M1" className="bg-[#141419]">Master 1 / 4ème année</option>
                    <option value="M2" className="bg-[#141419]">Master 2 / 5ème année</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[rgba(245,245,247,0.6)] mb-2">Pôle souhaité *</label>
                <select
                  required
                  value={formData.pole}
                  onChange={(e) => setFormData({ ...formData, pole: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#f5f5f7] focus:outline-none focus:border-[rgba(196,30,58,0.5)] transition-colors appearance-none"
                >
                  <option value="" className="bg-[#141419]">Sélectionner un pôle...</option>
                  <option value="direction" className="bg-[#141419]">Direction</option>
                  <option value="commercial" className="bg-[#141419]">Commercial</option>
                  <option value="it" className="bg-[#141419]">IT & Développement</option>
                  <option value="qualite" className="bg-[#141419]">Qualité</option>
                  <option value="rh" className="bg-[#141419]">Ressources Humaines</option>
                  <option value="communication" className="bg-[#141419]">Communication</option>
                  <option value="missions" className="bg-[#141419]">Missions (consultant·e)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[rgba(245,245,247,0.6)] mb-2">Lettre de motivation *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#f5f5f7] placeholder:text-[rgba(245,245,247,0.25)] focus:outline-none focus:border-[rgba(196,30,58,0.5)] transition-colors resize-none"
                  placeholder="Présente-toi en quelques lignes et explique-nous pourquoi tu souhaites rejoindre Upsilon..."
                />
              </div>

              <button type="submit" className="btn-red w-full justify-center py-3.5">
                Envoyer ma candidature
                <Send size={16} />
              </button>

              <p className="text-xs text-center text-[rgba(245,245,247,0.3)]">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </>
  )
}
