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
				'regal-green': '#247616',
				'regal-yellow': '#FFEB3B',
				'regal-pink': '#E91E63',
				'regal-violet': '#9C27B0',
				'regal-white': '#F8F8FF',
				'regal-black': '#000000',
				'regal-beige': '#EBD7B2',
				'regal-darkGray': '#333333',
				'regal-lightGray': '#E5E7EB',
				'regal-bgLogo': '#00000080'
			},
			boxShadow: {
				'me-xl': '0 0 2rem 1rem rgba(36, 118, 22, 0.5)',
				'form': '0 0 2rem #9b9b9b9a'
			}
		}
	},
	plugins: [
		tailwindcssAnimate
	],
};
export default config;
