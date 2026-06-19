export * from './variants'

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const
export const EASE_IN_OUT = [0.25, 0.46, 0.45, 0.94] as const
export const EASE_SPRING = [0.34, 1.56, 0.64, 1] as const

export const DURATION = {
  fast: 0.3,
  normal: 0.55,
  slow: 0.75,
  verySlow: 1.0,
} as const

export const DELAY = {
  none: 0,
  xs: 0.05,
  sm: 0.1,
  md: 0.2,
  lg: 0.35,
  xl: 0.5,
} as const
