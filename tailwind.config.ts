import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#050712",
        steel: "#1A2030",
        neon: "#3B82F6",
        accent: "#63B3FF",
        foreground: "#E3EBFF",
        muted: "#8A94B8",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(99, 179, 255, 0.25), transparent 55%), linear-gradient(135deg, rgba(26, 32, 48, 0.95), rgba(5, 7, 18, 0.95))",
      },
      boxShadow: {
        glow: "0 0 30px rgba(59, 130, 246, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
