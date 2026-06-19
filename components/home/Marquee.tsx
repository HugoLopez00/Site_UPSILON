'use client'

import { motion } from 'framer-motion'

const items = [
  'Think Success', 'Make It Happen', 'IT & Logiciel', 'Marketing',
  'Construction', 'Chimie', 'Électronique', 'Toulouse', 'Junior-Entreprise', 'CNJE',
]

export function Marquee() {
  return (
    <section
      className="overflow-hidden relative"
      style={{
        background: 'var(--bg-1)',
        borderTop: '1px solid rgba(28,20,24,0.08)',
        borderBottom: '1px solid rgba(28,20,24,0.08)',
        padding: '18px 0',
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center shrink-0"
            style={{ gap: '28px', paddingRight: '28px' }}
          >
            <span
              className="text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{ color: i % 5 === 0 ? 'var(--red)' : 'rgba(28,20,24,0.22)' }}
            >
              {item}
            </span>
            <span style={{ color: 'rgba(28,20,24,0.1)', fontSize: '14px' }}>—</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}

