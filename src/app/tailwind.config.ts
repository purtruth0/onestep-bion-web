import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        osb: {
          navy: "#00427A",
          green: "#008B72",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
