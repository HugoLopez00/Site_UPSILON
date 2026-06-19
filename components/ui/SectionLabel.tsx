import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('badge mb-6', className)}>
      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--red)', boxShadow: '0 0 8px var(--red)' }} />
      {children}
    </div>
  )
}
