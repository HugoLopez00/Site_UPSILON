import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ children, className, hover = true, glow = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'card rounded-2xl relative overflow-hidden',
        hover && 'card-hover',
        glow && 'card-red',
        className
      )}
    >
      {children}
    </div>
  )
}
