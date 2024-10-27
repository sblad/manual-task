import type { Config } from "tailwindcss";

// The configuration could be extracted to a separate files like fonts-config / colors-config etc.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'green-base': '#0B3B3C',
        'green-border': '#BDCDC5',
        'green-light': '#E8EFE9',
        'green-mid': '#6D8A83',
        'brand-red': '#7E0707'
      },
      fontSize: {
        'xs': ['0.625rem', '0.9375rem'],
        'sm': ['1rem', '1.875rem'],
        'md': ['1.125rem', '1.875rem'],
        'l': ['1.75rem', '2.5rem'],
        'xl': ['2.5rem', '3.75rem'],
        '2xl': ['5.625rem', '5.625rem'],
      }
    },
  },
  plugins: [],
};
export default config;
