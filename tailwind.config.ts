import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        jiggle: "jiggle 0.6s ease-in-out 0.25s 1",
        // Action Sheet
        "action-sheet-hide": "action-sheet-hide 100ms ease-out forwards",
        "action-sheet-slide-in-bottom":
          "action-sheet-slide-in-bottom 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        "action-sheet-swipe-out-x":
          "action-sheet-swipe-out-x 100ms ease-out forwards",
        "action-sheet-swipe-out-y":
          "action-sheet-swipe-out-y 300ms ease-out forwards",
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
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
          // primary: "var(--color-brand-primary)",
          primary: {
            500: "var(--color-brand-primary-500)",
          },
          secondary: "var(--color-brand-secondary)",
          buttons: "var(--color-brand-buttons)",
          typography: "var(--color-brand-typography)",
        },
        "theme-1": {
          primary: {
            50: "var(--color-theme-1-primary-50)",
            100: "var(--color-theme-1-primary-100)",
            150: "var(--color-theme-1-primary-150)",
            300: "var(--color-theme-1-primary-300)",
            350: "var(--color-theme-1-primary-350)",
            400: "var(--color-theme-1-primary-400)",
            450: "var(--color-theme-1-primary-450)",
            500: "var(--color-theme-1-primary-500)",
            800: "var(--color-theme-1-primary-800)",
          },
          secondary: {
            500: "var(--color-theme-1-secondary-500)",
          },
        },
        // brand: {
        //   10: "#e9fcf3",
        //   30: "#d3f8e7",
        //   50: "#bcf5db",
        //   100: "#a6f2cf",
        //   150: "##90eec2",
        //   200: "#7aebb6",
        //   250: "#64e8aa",
        //   300: "#4ee49e",
        //   350: "#37e192",
        //   400: "#21de86",
        //   450: "#1ec878",
        //   500: "#1dbf74",
        //   600: "#1bb16b",
        //   700: "#179b5e",
        //   800: "#148550",
        //   900: "#116f43",
        //   1000: "#0d5936",
        // },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
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

        // Action Sheet
        "action-sheet-hide": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "action-sheet-slide-in-bottom": {
          "0%": { transform: `translateY(calc(100% + 1rem))` },
          "100%": { transform: "translateY(0)" },
        },
        "action-sheet-swipe-out-x": {
          "0%": {
            transform: "translateX(var(--allygory-action-sheet-swipe-end-x))",
          },
          "100%": {
            transform: `translateX(calc(100% + 1rem))`,
          },
        },
        "action-sheet-swipe-out-y": {
          "0%": {
            transform: "translateY(var(--allygory-action-sheet-swipe-end-y))",
          },
          "100%": {
            transform: `translateY(calc(100% + 1rem))`,
          },
        },
        jiggle: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@allygory/with-tailwind")],
} satisfies Config;

export default config;
