'use client'

import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '@/animations'
import { clients } from '@/lib/data/testimonials'

export function Clients() {
  return (
    <section className="py-16 border-y border-white/[0.06] bg-[#0d0d12] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-xs uppercase tracking-widest text-[rgba(245,245,247,0.35)] font-semibold mb-10"
        >
          Ils nous font confiance
        </motion.p>

        {/* Scrolling marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d0d12] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0d12] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            className="flex items-center gap-12 w-max"
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex items-center gap-3 shrink-0 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-lg font-bold text-[rgba(245,245,247,0.4)] group-hover:border-white/[0.15] group-hover:text-[rgba(245,245,247,0.7)] transition-all">
                  {client[0]}
                </div>
                <span className="text-sm font-medium text-[rgba(245,245,247,0.35)] group-hover:text-[rgba(245,245,247,0.6)] transition-colors whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
