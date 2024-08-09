import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "fade-in-down": "fade-in-down 1s ease-in 0.25s 1",
        "overflay-show": "overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "content-show": "content-show 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        "content-hide":
          "100ms cubic-bezier(0.16, 1, 0.3, 1) reverse content-show",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-180": "linear-gradient(180deg, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        simple: "0 10px 30px rgba(0,0,0,.08)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      },
      fontSize: {
        "2xs": ["0.65rem", "0.825rem"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "overlay-show": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "content-show": {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
      },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
