import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(110, 255, 214)',
        secondary: 'rgb(58, 31, 101)',
        background: 'rgb(20, 6, 43)',
      }
    },
  },
  plugins: [],
}
export default config
