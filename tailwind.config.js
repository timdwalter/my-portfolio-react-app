/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Surfaces – light editorial theme
        canvas: "#ffffff", // page background
        subtle: "#f4f6f9", // alternating sections, inputs
        surface: { DEFAULT: "#ffffff", hover: "#fbfcfd" }, // cards
        line: { DEFAULT: "#e4e8ee", strong: "#cdd4de" }, // borders
        // Text
        heading: "#0b1220",
        body: "#334155",
        muted: "#5b6678",
        faint: "#8a94a6",
        // Dark block (contact section, footer accents)
        night: { DEFAULT: "#0b1220", soft: "#131c2e", line: "#24304a" },
        // Brand cyan (from the TimTech logo); 400+ is dark enough for text on white
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#155e75",
          400: "#0e7490",
          500: "#06b6d4",
          600: "#3dd8f5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,18,32,0.04), 0 12px 32px -12px rgba(11,18,32,0.14)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        flow: {
          from: { backgroundPosition: "0 -80px" },
          to: { backgroundPosition: "0 80px" },
        },
      },
      animation: {
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        flow: "flow 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};
