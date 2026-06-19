'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Linkedin, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { team } from '@/lib/data/team'
import { HomeCTA } from '@/components/home/HomeCTA'

const heroWords = ['Notre', 'Équipe']

export default function EquipePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden pb-16 pt-32" style={{ background: 'var(--bg-0)' }}>
        <div className="absolute inset-0 pointer-events-none select-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(179,44,37,0.06) 0%, transparent 62%)' }} />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-14 relative z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.42em] mb-10" style={{ color: 'rgba(240,240,244,0.25)' }}>
            UPSILON · 30+ membres · Université de Toulouse
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
            className="text-sm leading-relaxed mt-8 max-w-lg" style={{ color: 'rgba(240,240,244,0.4)' }}>
            30+ étudiants passionnés, sélectionnés parmi les meilleurs de l&apos;Université de Toulouse.
            Chaque membre apporte son expertise unique et sa vision fraîche.
          </motion.p>
        </div>
      </section>

      {/* ── TEAM LIST ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'var(--bg-1)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(179,44,37,0.35) 50%, transparent)' }} />

        <div className="max-w-[1200px] mx-auto px-6">
          {/* Group by department */}
          {(() => {
            const depts = Array.from(new Set(team.map((m) => m.department)))
            return depts.map((dept) => {
              const members = team.filter((m) => m.department === dept)
              return (
                <div key={dept} className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    className="flex items-center gap-4 mb-6"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '12px' }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.35em] font-bold" style={{ color: 'var(--red)' }}>
                      {dept}
                    </span>
                    <span className="text-[10px]" style={{ color: 'rgba(240,240,244,0.2)' }}>
                      {members.length} membre{members.length > 1 ? 's' : ''}
                    </span>
                  </motion.div>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                  >
                    {members.map((member, i) => (
                      <motion.div
                        key={member.id}
                        variants={fadeInUp}
                        transition={{ delay: i * 0.07 }}
                        className="group flex items-center gap-5 py-5"
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                      >
                        {/* Avatar */}
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0"
                          style={{ background: `linear-gradient(145deg, ${member.color}, ${member.color}80)`, boxShadow: `0 4px 12px ${member.color}25` }}
                        >
                          {member.initials}
                        </div>

                        {/* Name + role */}
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm group-hover:translate-x-0.5 transition-transform duration-200" style={{ color: 'var(--text)' }}>
                            {member.name}
                          </p>
                          <p className="text-[11px]" style={{ color: 'rgba(240,240,244,0.38)' }}>{member.role}</p>
                        </div>

                        {/* Skills */}
                        <div className="hidden sm:flex flex-wrap gap-1.5 shrink-0 max-w-[260px] justify-end">
                          {member.skills.slice(0, 3).map((skill) => (
                            <span key={skill} className="text-[10px] px-2 py-0.5 rounded-md"
                              style={{ background: `${member.color}12`, border: `1px solid ${member.color}22`, color: 'rgba(240,240,244,0.45)' }}>
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* LinkedIn */}
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                            className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ color: 'rgba(240,240,244,0.4)' }}>
                            <Linkedin size={14} />
                          </a>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )
            })
          })()}
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-0)' }}>
        {/* Ghost overlay */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none" aria-hidden>
          <span className="font-black uppercase leading-none" style={{ fontSize: 'clamp(6rem, 18vw, 20rem)', letterSpacing: '-0.06em', color: 'rgba(255,255,255,0.018)', whiteSpace: 'nowrap' }}>
            Rejoins
          </span>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.div variants={fadeInUp}><SectionLabel>Rejoindre UPSILON</SectionLabel></motion.div>
            <motion.h2 variants={fadeInUp} className="font-black tracking-[-0.04em] leading-tight mt-4 mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text)' }}>
              Tu veux faire partie de l&apos;aventure ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-sm leading-relaxed mb-10 max-w-md" style={{ color: 'rgba(240,240,244,0.42)' }}>
              Chaque semestre, nous recrutons des étudiants motivés et talentueux pour participer à des projets ambitieux.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/recrutement" className="btn-red inline-flex items-center gap-2 text-sm">
                Voir les offres de recrutement <ArrowRight size={13} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <HomeCTA />
    </>
  )
}
