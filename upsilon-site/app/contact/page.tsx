'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'

const faq = [
  {
    question: 'Combien coûte une prestation Upsilon ?',
    answer: 'Le coût d\'une prestation varie selon la complexité de la mission, la durée et le nombre de consultants impliqués. Nous réalisons systématiquement un devis gratuit et personnalisé adapté à votre besoin et à votre budget.',
  },
  {
    question: 'Quels sont vos délais de réalisation ?',
    answer: 'Les délais dépendent de la nature de la mission. Une étude de marché s\'effectue généralement en 4 à 8 semaines, un développement logiciel en 1 à 5 mois. Nous vous proposons un planning détaillé dès le cadrage.',
  },
  {
    question: 'Qui réalise les missions ?',
    answer: 'Chaque mission est confiée à une équipe d\'étudiants sélectionnés pour leurs compétences spécifiques, encadrée par notre pôle qualité. Les membres sont des étudiants en Master, Doctorat ou grandes écoles de l\'Université de Toulouse.',
  },
  {
    question: 'Quel est le niveau de qualité garanti ?',
    answer: 'Upsilon est certifiée Marque Junior-Entreprise par la Confédération Nationale des JE. Nos prestations suivent des processus qualité stricts, avec audits internes et externes annuels. Nous garantissons des livrables professionnels.',
  },
  {
    question: 'Pouvez-vous travailler sur des projets confidentiels ?',
    answer: 'Absolument. Nous signons des accords de confidentialité (NDA) adaptés à vos exigences avant tout démarrage de mission. La confidentialité de vos données et de votre projet est une priorité absolue.',
  },
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@upsilon-toulouse.fr', href: 'mailto:contact@upsilon-toulouse.fr' },
  { icon: Phone, label: 'Téléphone', value: '+33 (0)5 61 55 83 93', href: 'tel:+33561558393' },
  { icon: MapPin, label: 'Adresse', value: 'Bât. Louis Lareng, 118 Route de Narbonne, 31062 Toulouse CEDEX 9', href: '#' },
  { icon: Clock, label: 'Disponibilité', value: 'Lun – Ven, 9h – 18h', href: '#' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#07070a] relative overflow-hidden">
        <div className="line-grid absolute inset-0 opacity-30" />
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[300px] bg-[#c41e3a] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Contact</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight mb-5">
              Démarrons votre <em className="not-italic text-gradient">projet ensemble</em>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base text-[rgba(245,245,247,0.6)] leading-relaxed max-w-xl">
              Une question, un projet, ou simplement envie d&apos;en savoir plus ?
              Notre équipe répond sous 48h. Le devis est gratuit et sans engagement.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 bg-[#0d0d12]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <CheckCircle size={56} className="text-[#10b981] mb-6" />
                  <h2 className="text-2xl font-bold text-[#f5f5f7] mb-3">Message envoyé !</h2>
                  <p className="text-sm text-[rgba(245,245,247,0.5)] max-w-sm leading-relaxed">
                    Merci pour votre message. Notre équipe analyse votre demande et vous répond
                    dans les 48 heures ouvrées.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  variants={fadeInLeft}
                  initial="hidden"
                  animate="visible"
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-8 space-y-5"
                >
                  <h2 className="text-lg font-bold text-[#f5f5f7] mb-6">Envoyer un message</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[rgba(245,245,247,0.6)] mb-2">Nom complet *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#f5f5f7] placeholder:text-[rgba(245,245,247,0.25)] focus:outline-none focus:border-[rgba(196,30,58,0.5)] transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[rgba(245,245,247,0.6)] mb-2">Email professionnel *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#f5f5f7] placeholder:text-[rgba(245,245,247,0.25)] focus:outline-none focus:border-[rgba(196,30,58,0.5)] transition-colors"
                        placeholder="jean@entreprise.fr"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[rgba(245,245,247,0.6)] mb-2">Entreprise / Organisation</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#f5f5f7] placeholder:text-[rgba(245,245,247,0.25)] focus:outline-none focus:border-[rgba(196,30,58,0.5)] transition-colors"
                        placeholder="Mon Entreprise SAS"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[rgba(245,245,247,0.6)] mb-2">Service concerné</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#f5f5f7] focus:outline-none focus:border-[rgba(196,30,58,0.5)] transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#141419]">Sélectionner...</option>
                        <option value="it" className="bg-[#141419]">Logiciels & IT</option>
                        <option value="marketing" className="bg-[#141419]">Marketing & Communication</option>
                        <option value="construction" className="bg-[#141419]">Construction & Environnement</option>
                        <option value="chimie" className="bg-[#141419]">Chimie & Biotechnologies</option>
                        <option value="electronique" className="bg-[#141419]">Électronique & Mécanique</option>
                        <option value="autre" className="bg-[#141419]">Autre / Général</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[rgba(245,245,247,0.6)] mb-2">Votre message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#f5f5f7] placeholder:text-[rgba(245,245,247,0.25)] focus:outline-none focus:border-[rgba(196,30,58,0.5)] transition-colors resize-none"
                      placeholder="Décrivez votre projet ou votre besoin en quelques lignes..."
                    />
                  </div>

                  <button type="submit" className="btn-red w-full justify-center py-3.5">
                    Envoyer le message
                    <Send size={16} />
                  </button>

                  <p className="text-xs text-center text-[rgba(245,245,247,0.3)]">
                    Réponse garantie sous 48h ouvrées · Devis gratuit · Sans engagement
                  </p>
                </motion.form>
              )}
            </div>

            {/* Right: Info */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 space-y-4"
            >
              {/* Contact info */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm font-bold text-[#f5f5f7] mb-5">Nos coordonnées</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[rgba(196,30,58,0.1)] border border-[rgba(196,30,58,0.2)] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon size={14} className="text-[#c41e3a]" />
                        </div>
                        <div>
                          <p className="text-[11px] text-[rgba(245,245,247,0.4)] mb-0.5">{info.label}</p>
                          <p className="text-sm text-[rgba(245,245,247,0.75)] group-hover:text-[#f5f5f7] transition-colors leading-snug">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass rounded-2xl overflow-hidden h-48 relative">
                <div className="absolute inset-0 dot-grid opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <MapPin size={24} className="text-[#c41e3a]" />
                  <p className="text-xs text-[rgba(245,245,247,0.5)] text-center px-4">
                    Bât. Louis Lareng<br />118 Route de Narbonne<br />31062 Toulouse
                  </p>
                </div>
              </div>

              {/* Quick stats */}
              <div className="glass rounded-2xl p-5 grid grid-cols-2 gap-4">
                {[
                  { n: '<48h', label: 'Délai de réponse' },
                  { n: '100%', label: 'Devis gratuit' },
                  { n: '9.2/10', label: 'Satisfaction' },
                  { n: 'NDA', label: 'Confidentialité' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-lg font-bold text-[#f5f5f7]">{s.n}</p>
                    <p className="text-[10px] text-[rgba(245,245,247,0.4)]">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#07070a]">
        <div className="max-w-[800px] mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>FAQ</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-2xl font-extrabold tracking-tight text-[#f5f5f7]">
              Questions fréquentes
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-3"
          >
            {faq.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left group"
                  >
                    <span className="text-sm font-semibold text-[rgba(245,245,247,0.85)] group-hover:text-[#f5f5f7] transition-colors pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-[rgba(245,245,247,0.4)] shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="px-6 pb-5"
                    >
                      <p className="text-sm text-[rgba(245,245,247,0.55)] leading-relaxed border-t border-white/[0.06] pt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
