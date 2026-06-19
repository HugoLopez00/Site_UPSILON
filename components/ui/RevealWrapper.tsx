'use client'

import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '@/animations'

interface RevealWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function RevealWrapper({ children, className, delay = 0 }: RevealWrapperProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
