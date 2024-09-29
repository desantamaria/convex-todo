import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
    "./node_modules/@nextui-org/theme/dist/components/circular-progress.js"
  ],
  theme: {
  	extend: {}
  },
  plugins: [nextui({
    themes: {
        dark: {
            colors: {
                primary: {
                    DEFAULT: "#a855f7",
                    foreground: "#000000",
                },
                focus: "#BEF264",
            }
        }
    }
  })],
};
export default config;
