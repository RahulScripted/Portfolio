/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary palette
        paper:          "#FBFAF5",
        "paper-warm":   "#F5F0E8",
        "paper-bright": "#FDFCF8",
        "paper-deep":   "#E8E0D0",
        ink:            "#16140F",
        "ink-soft":     "#6B6459",
        "ink-faint":    "#B8AFA6",
        stamp:          "#A6382C",
        "stamp-bright": "#C0392B",
        rule:           "#D4C9BC",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        text:    ['"Playfair Display"', "Georgia", "serif"],
        gothic:  ['"Space Mono"', "monospace"],
        mono:    ['"Space Mono"', "monospace"],
        // legacy alias
        serif:   ['"Playfair Display"', "Georgia", "serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },
      maxWidth: {
        "8xl": "1180px",
      },
    },
  },
  plugins: [],
};
