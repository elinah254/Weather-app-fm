import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0B0C21',
        'deep-navy': '#050517',
        'panel': 'rgba(20, 24, 45, 0.65)'
      },
      spacing: {
        '18': '4.5rem'
      },
      borderRadius: {
        'xl2': '1rem'
      }
    },
  },
  plugins: [],
}
export default config
