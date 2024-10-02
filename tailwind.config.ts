import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'regal-green': '#4caf50',
				'regal-yellow': '#FFEB3B',
				'regal-pink': '#E91E63',
				'regal-violet': '#9C27B0',
				'regal-white': '#F8F8FF'
			},
		}
	},
	plugins: [
		require("tailwindcss-animate")
	],
};
export default config;
