import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "var(--black)",
      green: "var(--green)",
      white: "var(--white)",
      gray: {
        light: "var(--gray-light)",
        medium: "var(--gray-medium)",
        dark: "var(--gray-dark)",
      },
    },
  },
  plugins: [],
} satisfies Config;
