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
        'jr-gray-500': '#737974',
        'jr-blue-500': '#8caaee',
        'jr-blue-900': '#303446',
      },
      width: {
        120: '30rem',
        125: '31.25rem', 
      },
      height: {
        125: '31.25rem',
      },
    },
  },
  plugins: [],
}
export default config
