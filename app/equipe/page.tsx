'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Linkedin, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp, scaleIn, viewportOnce } from '@/animations'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { team } from '@/lib/data/team'
import { HomeCTA } from '@/components/home/HomeCTA'

export default function EquipePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#07070a] relative overflow-hidden">
        <div className="line-grid absolute inset-0 opacity-30" />
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-[#B32C25] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Notre Équipe</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] leading-tight mb-6">
              Les talents qui font <em className="not-italic text-gradient">la force d&apos;Upsilon</em>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base text-[rgba(245,245,247,0.6)] leading-relaxed max-w-xl">
              30+ étudiants passionnés, sélectionnés parmi les meilleurs de l&apos;Université de Toulouse.
              Chaque membre apporte son expertise unique et sa vision fraîche des enjeux d&apos;aujourd&apos;hui.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-16 bg-[#0d0d12] relative">
        <div className="dot-grid absolute inset-0 opacity-20" />

        <div className="max-w-[1200px] mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                variants={scaleIn}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden h-full relative">
                  {/* Card top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${member.color}, transparent)` }}
                  />

                  {/* Avatar */}
                  <div className="relative pt-8 pb-4 px-6 flex flex-col items-center">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300"
                      style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}80)` }}
                    >
                      {member.initials}
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-sm font-bold text-[#f5f5f7] text-center mb-0.5">{member.name}</h3>
                    <p className="text-xs font-semibold text-center mb-1" style={{ color: member.color }}>
                      {member.role}
                    </p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[rgba(245,245,247,0.4)]">
                      {member.department}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="mx-6 h-px bg-white/[0.06]" />

                  {/* Bio */}
                  <div className="p-5">
                    <p className="text-xs text-[rgba(245,245,247,0.5)] leading-relaxed mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] px-2 py-0.5 rounded-md text-[rgba(245,245,247,0.5)]"
                          style={{
                            background: `${member.color}10`,
                            border: `1px solid ${member.color}25`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* LinkedIn */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[rgba(245,245,247,0.35)] hover:text-[#0077b5] transition-colors group/link"
                      >
                        <Linkedin size={12} />
                        <span className="group-hover/link:underline">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-[#07070a] relative overflow-hidden">
        <div className="line-grid absolute inset-0 opacity-20" />
        <div className="max-w-[1200px] mx-auto px-6 relative text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Rejoindre Upsilon</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold tracking-tight text-[#f5f5f7] mb-4">
              Tu veux faire partie <em className="not-italic text-gradient">de l&apos;aventure ?</em>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[rgba(245,245,247,0.5)] text-sm leading-relaxed max-w-md mx-auto mb-8">
              Chaque semestre, nous recrutons des étudiants motivés et talentueux
              pour rejoindre notre équipe et participer à des projets ambitieux.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/recrutement" className="btn-red text-sm">
                Voir les offres de recrutement
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <HomeCTA />
    </>
  )
}
