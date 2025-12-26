/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base Palette (Industrial Neutrals)
        'light-base': '#F5F5F2',
        'charcoal': '#1A1A1A',
        'deep-black': '#0D0D0D',
        
        // Gray Scale
        'gray': {
          100: '#E8E9EB',
          300: '#D7D9DD',
          500: '#7C7F84',
          700: '#4A4A4A',
        },
        
        // Accent Palette
        'orange': {
          DEFAULT: '#FF5C1C',
          hover: '#E54E15',
          light: '#FFF0EB',
        },
        
        // Support Colors (UI Only)
        'success': {
          DEFAULT: '#3CB371',
          light: '#E8F5E9',
        },
        'error': {
          DEFAULT: '#D64545',
          light: '#FFEBEE',
        },
        'warning': {
          DEFAULT: '#E6A100',
          light: '#FFF8E1',
        },
        'info': {
          DEFAULT: '#2196F3',
          light: '#E3F2FD',
        },
      },
      
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      
      fontSize: {
        // Display
        'display': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-mobile': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        
        // Headings
        'h1': ['56px', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h1-mobile': ['36px', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2-mobile': ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['32px', { lineHeight: '1.25', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h3-mobile': ['24px', { lineHeight: '1.25', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.3', fontWeight: '500' }],
        'h4-mobile': ['20px', { lineHeight: '1.3', fontWeight: '500' }],
        'h5': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'h5-mobile': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        
        // Body
        'body-l': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-l-mobile': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-m': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-m-mobile': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-s': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-s-mobile': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        
        // Utility
        'caption': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
        'caption-mobile': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
        'overline': ['12px', { lineHeight: '1.3', letterSpacing: '0.04em', fontWeight: '600' }],
        'overline-mobile': ['11px', { lineHeight: '1.3', letterSpacing: '0.04em', fontWeight: '600' }],
      },
      
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
      },
      
      maxWidth: {
        'narrow': '680px',
        'default': '1120px',
        'wide': '1280px',
      },
      
      borderRadius: {
        DEFAULT: '4px',
        'card': '8px',
      },
      
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      transitionDuration: {
        'micro': '150ms',
        'ui': '200ms',
        'content': '300ms',
        'page': '400ms',
      },
      
      animation: {
        'fade-up': 'fadeUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
