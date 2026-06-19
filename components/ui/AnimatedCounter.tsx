'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '@/hooks/useCountUp'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  className?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = '', className, duration = 2000 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp({ end: value, enabled: isInView, duration })

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}
