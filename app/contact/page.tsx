'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'

const faq = [
  { question: 'Combien coûte une prestation Upsilon ?', answer: 'Le coût varie selon la complexité de la mission, la durée et le nombre de consultants impliqués. Nous réalisons systématiquement un devis gratuit et personnalisé adapté à votre besoin et à votre budget.' },
  { question: 'Quels sont vos délais de réalisation ?', answer: 'Les délais dépendent de la nature de la mission. Une étude de marché s\'effectue généralement en 4 à 8 semaines, un développement logiciel en 1 à 5 mois. Nous vous proposons un planning détaillé dès le cadrage.' },
  { question: 'Qui réalise les missions ?', answer: 'Chaque mission est confiée à une équipe d\'étudiants sélectionnés pour leurs compétences spécifiques, encadrée par notre pôle qualité. Les membres sont des étudiants en Master, Doctorat ou grandes écoles de l\'Université de Toulouse.' },
  { question: 'Quel est le niveau de qualité garanti ?', answer: 'Upsilon est certifiée Marque Junior-Entreprise par la Confédération Nationale des JE. Nos prestations suivent des processus qualité stricts, avec audits internes et externes annuels.' },
  { question: 'Pouvez-vous travailler sur des projets confidentiels ?', answer: 'Absolument. Nous signons des accords de confidentialité (NDA) adaptés à vos exigences avant tout démarrage de mission. La confidentialité de vos données est une priorité absolue.' },
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@upsilon-toulouse.fr', href: 'mailto:contact@upsilon-toulouse.fr' },
  { icon: Phone, label: 'Téléphone', value: '+33 (0)5 61 55 83 93', href: 'tel:+33561558393' },
  { icon: MapPin, label: 'Adresse', value: 'Bât. Louis Lareng, 118 Route de Narbonne, 31062 Toulouse', href: '#' },
  { icon: Clock, label: 'Disponibilité', value: 'Lun – Ven, 9h – 18h', href: '#' },
]

const heroWords = ['Parlons', 'Projet']

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
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pb-16 pt-32" style={{ background: 'var(--bg-0)' }}>
        <div className="absolute inset-0 pointer-events-none select-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(109,195,213,0.05) 0%, transparent 62%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(179,44,37,0.06) 0%, transparent 62%)' }} />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-14 relative z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.42em] mb-10" style={{ color: 'rgba(240,240,244,0.25)' }}>
            UPSILON · Devis gratuit · Réponse sous 48h
          </motion.p>
          {heroWords.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                initial={{ y: '108%', skewY: 2 }}
                animate={{ y: 0, skewY: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="block font-black uppercase select-none"
                style={{ fontSize: 'clamp(3rem, 12vw, 14rem)', lineHeight: 0.88, letterSpacing: '-0.04em', color: i === 1 ? 'var(--teal)' : 'var(--text)' }}
              >
                {word}
              </motion.span>
            </div>
          ))}
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
            className="text-sm leading-relaxed mt-8 max-w-lg" style={{ color: 'rgba(240,240,244,0.4)' }}>
            Une question, un projet, ou simplement envie d&apos;en savoir plus ? Notre équipe répond sous 48h.
            Le devis est gratuit et sans engagement.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT FORM + INFO ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(109,195,213,0.3) 50%, transparent)' }} />

        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">

            {/* LEFT: Form */}
            <div className="lg:w-[60%]">
              {submitted ? (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center">
                  <CheckCircle size={56} style={{ color: '#10b981' }} className="mb-6" />
                  <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>Message envoyé !</h2>
                  <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'rgba(240,240,244,0.42)' }}>
                    Merci pour votre message. Notre équipe analyse votre demande et vous répond dans les 48 heures ouvrées.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="h-px mb-8" style={{ background: 'rgba(255,255,255,0.07)' }} />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: 'rgba(240,240,244,0.4)' }}>Nom complet *</label>
                      <input type="text" required value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                        style={{ background: 'var(--bg-2)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text)' }}
                        placeholder="Jean Dupont" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: 'rgba(240,240,244,0.4)' }}>Email *</label>
                      <input type="email" required value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                        style={{ background: 'var(--bg-2)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text)' }}
                        placeholder="jean@entreprise.fr" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: 'rgba(240,240,244,0.4)' }}>Entreprise</label>
                      <input type="text" value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                        style={{ background: 'var(--bg-2)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text)' }}
                        placeholder="Mon Entreprise SAS" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: 'rgba(240,240,244,0.4)' }}>Service concerné</label>
                      <select value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none appearance-none"
                        style={{ background: 'var(--bg-2)', border: '1px solid rgba(255,255,255,0.08)', color: form.service ? 'var(--text)' : 'rgba(240,240,244,0.3)' }}>
                        <option value="">Sélectionner...</option>
                        {['Logiciels & IT','Marketing & Communication','Construction & Environnement','Chimie & Biotechnologies','Électronique & Mécanique','Autre'].map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: 'rgba(240,240,244,0.4)' }}>Votre message *</label>
                    <textarea required rows={5} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none resize-none"
                      style={{ background: 'var(--bg-2)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text)' }}
                      placeholder="Décrivez votre projet ou votre besoin en quelques lignes..." />
                  </div>

                  <button type="submit" className="btn-red w-full justify-center py-3.5">
                    Envoyer le message <Send size={16} />
                  </button>

                  <p className="text-[11px] text-center" style={{ color: 'rgba(240,240,244,0.25)' }}>
                    Réponse garantie sous 48h · Devis gratuit · Sans engagement
                  </p>
                </motion.form>
              )}
            </div>

            {/* RIGHT: Info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:w-[40%] lg:sticky lg:top-24 lg:self-start"
            >
              <div className="h-px mb-8" style={{ background: 'rgba(255,255,255,0.07)' }} />

              {/* Stats */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3 mb-8">
                {[{ n: '<48h', label: 'Réponse garantie' }, { n: '100%', label: 'Devis gratuit' }, { n: '9.2/10', label: 'Satisfaction' }, { n: 'NDA', label: 'Confidentialité' }].map((s) => (
                  <div key={s.label} className="rounded-xl p-4" style={{ background: 'var(--bg-2)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <p className="font-black tracking-[-0.04em] mb-0.5" style={{ fontSize: '1.5rem', color: 'var(--text)' }}>{s.n}</p>
                    <p className="text-[10px] uppercase tracking-wide" style={{ color: 'rgba(240,240,244,0.32)' }}>{s.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Contact info */}
              <motion.div variants={fadeInUp}>
                <p className="text-[10px] uppercase tracking-[0.3em] mb-5" style={{ color: 'rgba(240,240,244,0.25)' }}>Coordonnées</p>
                <div className="space-y-5">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    return (
                      <a key={info.label} href={info.href} className="group flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: 'rgba(179,44,37,0.1)', border: '1px solid rgba(179,44,37,0.2)' }}>
                          <Icon size={14} style={{ color: 'var(--red)' }} />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: 'rgba(240,240,244,0.3)' }}>{info.label}</p>
                          <p className="text-sm leading-snug group-hover:text-white transition-colors" style={{ color: 'rgba(240,240,244,0.65)' }}>{info.value}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-0)' }}>
        {/* Ghost overlay */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none" aria-hidden>
          <span className="font-black uppercase leading-none" style={{ fontSize: 'clamp(5rem, 15vw, 18rem)', letterSpacing: '-0.06em', color: 'rgba(255,255,255,0.018)', whiteSpace: 'nowrap', marginLeft: '-1vw' }}>
            FAQ
          </span>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[36%] lg:sticky lg:top-24 lg:self-start">
              <motion.div variants={fadeInUp}><SectionLabel>FAQ</SectionLabel></motion.div>
              <motion.h2 variants={fadeInUp} className="font-extrabold tracking-[-0.04em] leading-tight mt-4"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text)' }}>
                Questions fréquentes
              </motion.h2>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:w-[64%]">
              <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
              {faq.map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="group w-full flex items-center justify-between py-6 text-left"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <span className="text-sm font-semibold pr-8 group-hover:text-white transition-colors" style={{ color: 'rgba(240,240,244,0.8)' }}>
                      {item.question}
                    </span>
                    <ChevronDown size={16} className={`shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                      style={{ color: 'rgba(240,240,244,0.3)' }} />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="pb-6"
                    >
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,240,244,0.48)' }}>{item.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
