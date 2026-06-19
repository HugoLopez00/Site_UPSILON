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
      /* ── Palette officielle charte graphique Upsilon ── */
      colors: {
        upsilon: {
          /* Rouge primaire */
          red: {
            DEFAULT: '#B32C25',
            light: '#CC3830',
            dark: '#8C2019',
            muted: 'rgba(179, 44, 37, 0.12)',
            glow: 'rgba(179, 44, 37, 0.25)',
          },
          /* Gris sombre (textes, fonds dark) */
          slate: {
            DEFAULT: '#4B474E',
            light: '#6B676E',
            dark: '#2E2B31',
          },
          /* Bleu-gris / acier */
          steel: {
            DEFAULT: '#477181',
            light: '#5A8EA0',
            dark: '#325464',
          },
          /* Gris neutre */
          gray: '#8E9599',
          /* Cyan / teal (accent secondaire) */
          teal: {
            DEFAULT: '#6DC3D5',
            dark: '#4BA8BC',
            muted: 'rgba(109, 195, 213, 0.12)',
          },
          /* Beige sable */
          sand: '#D2C3AB',
          /* Vert menthe clair */
          mint: '#B1D8D0',
          /* Crème (fond clair) */
          cream: '#FEF7EE',
          /* Fonds sombres UI */
          dark: {
            DEFAULT: '#07070a',
            surface: '#0e0e12',
            elevated: '#16161c',
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
        /* Police officielle : Helvetica (stack système) */
        sans: [
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        /* Dégradé rouge officiel */
        'upsilon-red': 'linear-gradient(135deg, #8C2019 0%, #B32C25 50%, #CC3830 100%)',
        /* Dégradé teal officiel */
        'upsilon-teal': 'linear-gradient(135deg, #477181 0%, #6DC3D5 100%)',
        /* Diagonal (motif logo) */
        'upsilon-diagonal': 'linear-gradient(135deg, #B32C25 0%, #8C2019 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },

      animation: {
        'gradient-x': 'gradientX 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'slide-diagonal': 'slideDiagonal 20s linear infinite',
      },

      keyframes: {
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideDiagonal: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(60px, 60px)' },
        },
      },

      boxShadow: {
        'glass': '0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.5)',
        'glass-hover': '0 0 0 1px rgba(255,255,255,0.1), 0 12px 48px rgba(0,0,0,0.6)',
        'red-glow': '0 0 40px rgba(179, 44, 37, 0.3)',
        'red-glow-lg': '0 0 80px rgba(179, 44, 37, 0.2)',
        'red-sm': '0 0 0 1px rgba(179, 44, 37, 0.4), 0 4px 20px rgba(179, 44, 37, 0.2)',
        'teal-glow': '0 0 40px rgba(109, 195, 213, 0.2)',
      },
    },
  },
  plugins: [],
}

export default config
