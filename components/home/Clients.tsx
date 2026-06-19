'use client'

import { motion } from 'framer-motion'
import { clients } from '@/lib/data/testimonials'

export function Clients() {
  return (
    <section
      className="overflow-hidden relative"
      style={{
        background: 'var(--bg-1)',
        borderTop: '1px solid rgba(28,20,24,0.08)',
        borderBottom: '1px solid rgba(28,20,24,0.08)',
        padding: '20px 0',
      }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(90deg, var(--bg-1), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(-90deg, var(--bg-1), transparent)' }}
      />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        className="flex whitespace-nowrap"
      >
        {[...clients, ...clients].map((client, i) => (
          <span
            key={i}
            className="inline-flex items-center shrink-0"
            style={{ paddingRight: '48px' }}
          >
            <span
              className="text-[11px] font-bold uppercase tracking-[0.3em]"
              style={{ color: 'rgba(28,20,24,0.22)' }}
            >
              {client}
            </span>
            <span className="ml-12 text-[10px]" style={{ color: 'rgba(28,20,24,0.08)' }}>·</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}

