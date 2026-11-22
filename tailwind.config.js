/** @type {import('tailwindcss').Config} */

// Design system: see CLAUDE.md. theme.colors is REPLACED (not extended) so that
// Tailwind's default palette (indigo-*, purple-*, …) does not exist in this project.
const paper = "#F8F7F4"; // background
const ink = "#111111"; // main text
const muted = "#555555"; // secondary text (6.96:1 on paper)
const rule = "#D9D6CF"; // 1px lines
const accent = "#0E6F86"; // logo cyan, darkened for AA (5.39:1 on paper)
const accentDark = "#0A5C70"; // accent hover / pressed
const logoCyan = "#3DD8F5"; // logo only, never text on paper

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      paper,
      ink,
      muted,
      rule,
      accent: { DEFAULT: accent, dark: accentDark },
      logo: logoCyan,

      // Legacy aliases – mapped onto the palette above so sections that are not
      // redesigned yet keep rendering. Remove each alias once no section uses it.
      canvas: paper,
      subtle: paper,
      surface: { DEFAULT: paper, hover: paper },
      line: { DEFAULT: rule, strong: rule },
      heading: ink,
      body: ink,
      faint: muted,
      white: paper,
      black: ink,
      night: { DEFAULT: ink, soft: ink, line: muted },
      brand: { 50: paper, 100: rule, 200: rule, 300: accentDark, 400: accent, 500: accent, 600: logoCyan },
      emerald: { 50: paper, 200: rule, 500: accent, 800: ink },
    },
    fontFamily: {
      sans: ["var(--font-sans)", "sans-serif"],
      display: ["var(--font-display)", "serif"],
      mono: ["var(--font-mono)", "monospace"],
    },
    // Square corners (0–4px). `full` stays for genuinely round things (dots).
    borderRadius: {
      none: "0",
      sm: "2px",
      DEFAULT: "2px",
      md: "4px",
      lg: "4px",
      xl: "4px",
      "2xl": "4px",
      "3xl": "4px",
      full: "9999px",
    },
    boxShadow: { none: "none" },
    container: {
      center: true,
      padding: { DEFAULT: "1rem", md: "1.5rem", lg: "3rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
