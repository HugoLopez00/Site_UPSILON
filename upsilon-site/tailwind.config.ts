import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './animations/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        upsilon: {
          red: {
            DEFAULT: '#c41e3a',
            light: '#e02d4e',
            dark: '#9b1830',
            muted: 'rgba(196, 30, 58, 0.15)',
            glow: 'rgba(196, 30, 58, 0.3)',
          },
          dark: {
            DEFAULT: '#07070a',
            surface: '#0d0d12',
            elevated: '#141419',
            border: 'rgba(255, 255, 255, 0.06)',
            'border-hover': 'rgba(255, 255, 255, 0.12)',
          },
          text: {
            primary: '#f5f5f7',
            secondary: 'rgba(245, 245, 247, 0.7)',
            muted: 'rgba(245, 245, 247, 0.4)',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'upsilon-gradient': 'linear-gradient(135deg, #c41e3a 0%, #e02d4e 100%)',
        'upsilon-gradient-dark': 'linear-gradient(135deg, #9b1830 0%, #c41e3a 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'gradient-x': 'gradientX 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'glass': '0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.5)',
        'glass-hover': '0 0 0 1px rgba(255,255,255,0.1), 0 12px 48px rgba(0,0,0,0.6)',
        'red-glow': '0 0 40px rgba(196, 30, 58, 0.3)',
        'red-glow-lg': '0 0 80px rgba(196, 30, 58, 0.25)',
        'red-sm': '0 0 0 1px rgba(196, 30, 58, 0.5), 0 4px 20px rgba(196, 30, 58, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
