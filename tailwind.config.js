/** @type {import('tailwindcss').Config} */

// Design system: see CLAUDE.md. theme.colors is REPLACED (not extended) so that
// Tailwind's default palette (indigo-*, purple-*, …) does not exist in this project.
const paper = "#F8F7F4"; // background
const ink = "#111111"; // main text
const muted = "#555555"; // secondary text (6.96:1 on paper)
const rule = "#D9D6CF"; // 1px lines
const accent = "#0E6F86"; // the one accent (5.39:1 on paper); links, active state, logo
const accentDark = "#0A5C70"; // accent hover / pressed
const accentLight = "#8FBAC3"; // 55% paper tint of the accent – logo cube top face only, never text

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
      accent: { DEFAULT: accent, dark: accentDark, light: accentLight },

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
    extend: {
      // Spacing scale (CLAUDE.md): use these names for new and redesigned sections.
      spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "48px", "2xl": "96px" },
    },
  },
  // .container is defined in globals.css (fixed max width + responsive gutter on the spacing scale)
  corePlugins: { container: false },
  plugins: [],
};
