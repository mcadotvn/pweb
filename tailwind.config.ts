import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'apple-black': '#1d1d1f',
        'apple-gray': '#6e6e73',
        'apple-light-gray': '#f5f5f7',
        'apple-blue': '#0071e3',
      },
    },
  },
  plugins: [],
};
export default config;