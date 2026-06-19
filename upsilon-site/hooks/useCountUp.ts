'use client'

import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  end: number
  start?: number
  duration?: number
  enabled?: boolean
}

export function useCountUp({ end, start = 0, duration = 2000, enabled = true }: UseCountUpOptions) {
  const [count, setCount] = useState(start)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) return

    const startTime = performance.now()
    const diff = end - start

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(start + diff * eased))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setCount(end)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [end, start, duration, enabled])

  return count
}
