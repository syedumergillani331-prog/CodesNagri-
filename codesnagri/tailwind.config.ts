import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#0E1330", brand: "#4F46E5", mint: "#14B8A6", paper: "#F7F8FC" },
    fontFamily: { display: ["var(--font-display)", "system-ui", "sans-serif"], sans: ["var(--font-body)", "system-ui", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
