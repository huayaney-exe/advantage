import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        midnight: {
          DEFAULT: '#0A1128',
          50: '#E8EBF0',
          100: '#D1D6E1',
          200: '#A3AEC3',
          300: '#7585A5',
          400: '#475D87',
          500: '#193469',
          600: '#0A1128',
          700: '#080D1F',
          800: '#050916',
          900: '#03050D',
        },
        coral: {
          DEFAULT: '#FF6B6B',
          50: '#FFF5F5',
          100: '#FFE3E3',
          200: '#FFC9C9',
          300: '#FFA8A8',
          400: '#FF8787',
          500: '#FF6B6B',
          600: '#FA5252',
          700: '#F03E3E',
          800: '#E03131',
          900: '#C92A2A',
        },
        // Accent Colors
        sunrise: {
          DEFAULT: '#FF8E53',
          50: '#FFF4EE',
          100: '#FFE8DC',
          200: '#FFD1B9',
          300: '#FFBA96',
          400: '#FFA473',
          500: '#FF8E53',
          600: '#FF7028',
          700: '#FC5200',
          800: '#C74100',
          900: '#923000',
        },
        emerald: {
          DEFAULT: '#00D9A3',
          50: '#E6FBF5',
          100: '#CCF7EB',
          200: '#99EFD7',
          300: '#66E7C3',
          400: '#33DFAF',
          500: '#00D9A3',
          600: '#00AE82',
          700: '#008262',
          800: '#005741',
          900: '#002B21',
        },
        wisdom: {
          DEFAULT: '#8B7AB8',
          50: '#F4F2F9',
          100: '#E9E5F3',
          200: '#D3CBE7',
          300: '#BDB1DB',
          400: '#A796CF',
          500: '#8B7AB8',
          600: '#7562A4',
          700: '#5E4E84',
          800: '#473A63',
          900: '#302742',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '900' }],
        'hero-mobile': ['2rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '900' }],
        'section': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'section-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      spacing: {
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
