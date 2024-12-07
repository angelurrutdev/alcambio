/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },

      colors:{
        dusky: '#0b0a10',
				'dusky-alt': 'rgba(11,10,16,0.5)',
        'raisin-black': '#1c1e23',
        'cuber-black': '#23262e',
        moonlit: '#f5f5f7',
				midnight: '#343436',
        primary: '#4ade80 '
      }
    },
  },
  plugins: [],
};