import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ['Grandstander', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          300: '#75aadb',
          500: '#4e89bf',
          700: "#2596be",
        },
        secondary: {
          600: '#fcbf45',
        },
      },
      dropShadow: {
        text: 'drop-shadow-[0_1.2px_1.2px_var(--tw-shadow-color)]',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config