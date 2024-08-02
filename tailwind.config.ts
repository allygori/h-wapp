import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-180": "linear-gradient(180deg, var(--tw-gradient-stops))",
      },
      boxShadow: {
        simple: "0 10px 30px rgba(0,0,0,.08)",
      },
      colors: {
        // "brand-90": "#0b7ba8",
        // "brand-95": "#0c6359",
        // // "brand-100": "#137469",
        // "brand-100": "#6950f3",
        // // "brand-100": "#0c6359",
        // // "brand-95": "#137469",
        // "brand-200": "#e8f7f6",
        brand: {
          // 0: "#ffffff",   // 100%
          50: "#eae7fd", // 95%
          100: "#d6cffc", // 90%
          150: "#c1b7fa", // 85%
          200: "#ada0f8", // 80%
          250: "#9888f7", // 75%
          300: "#8470f5", // 70%
          350: "#6f58f3", // 65%
          400: "#6950f3", // 63%
          450: "#5b40f2", // 60%
          500: "#4628f0", // 55%
          550: "#3211ee", // 50%
          600: "#2d0fd7", // 45%
          650: "#280dbf", // 40%
          700: "#230ca7", // 35%
          750: "#1e0a8f", // 30%
          800: "#190877", // 25%
          850: "#14075f", // 20%
          900: "#0f0548", // 15%
          950: "#0a0330", // 10%
          1000: "#050218", // 5%
          // 1050: "#000000", // 0%
        },

        "brand-pi": {
          300: "#ff3352",
          350: "#ff1a3c",
          400: "#ff0025",
          450: "#e60022",
          500: "#cc001f",
        },

        "brand-neutral": {
          100: "#f6f6f6",
          150: "#f7f8fb",
        },

        gray: {
          100: "#f6f6f6",
        },
      },

      fontSize: {
        "2xs": ["0.65rem", "0.825rem"],
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
};
export default config;
