import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'spectral': ['Spectral', 'serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif']
			},
			colors: {
				'regal-green': '#4caf50',
				'regal-yellow': '#FFEB3B',
				'regal-pink': '#E91E63',
				'regal-violet': '#9C27B0',
				'regal-white': '#F8F8FF',
				'regal-black': '#000',
				'regal-beige': '#EBD7B2',
				'regal-darkGray': '#333333',
				'regal-lightGray': '#E5E7EB'
			},
		}
	},
	plugins: [
		tailwindcssAnimate
	],
};
export default config;
