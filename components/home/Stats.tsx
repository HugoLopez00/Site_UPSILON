'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { stats } from '@/lib/data/testimonials'

export function Stats() {
  return (
    <section className="py-20 border-y border-white/[0.06] bg-[#0d0d12] relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(196,30,58,0.04)] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-[clamp(2.4rem,4vw,3.5rem)] font-extrabold tracking-[-0.04em] text-[#f5f5f7] mb-2 leading-none">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-semibold text-[#f5f5f7] mb-1">{stat.label}</p>
              <p className="text-xs text-[rgba(245,245,247,0.4)] leading-relaxed max-w-[160px]">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
