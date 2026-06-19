'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewportOnce } from '@/animations'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { stats } from '@/lib/data/testimonials'

export function Stats() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'var(--bg-0)' }}>
      {/* Ligne de lumière en haut */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(179,44,37,0.5) 30%, rgba(109,195,213,0.5) 70%, transparent 100%)',
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.8) 50%, transparent 100%)',
      }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeInUp} transition={{ delay: i * 0.1 }}>
              <div
                className="card rounded-2xl p-6 text-center relative overflow-hidden group"
              >
                {/* Accent rouge discret */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(179,44,37,0.6), transparent)' }}
                />

                <div
                  className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold tracking-[-0.04em] leading-none mb-2"
                  style={{
                    color: 'var(--text)',
                    textShadow: '0 4px 16px rgba(0,0,0,0.6)',
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-bold mb-1" style={{ color: 'var(--text)' }}>{stat.label}</p>
                <p className="text-xs leading-snug" style={{ color: 'rgba(240,240,244,0.38)' }}>{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
