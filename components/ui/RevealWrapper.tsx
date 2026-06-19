'use client'

import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '@/animations'

interface RevealWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: keyof JSX.IntrinsicElements
}

export function RevealWrapper({ children, className, delay = 0, as = 'div' }: RevealWrapperProps) {
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div

  return (
    <MotionComponent
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}
