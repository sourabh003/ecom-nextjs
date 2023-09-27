/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			width: {
				"50vh": "50vh",
				"100vh": "100vh",
				"100vw": "100vw",
			},
			textColor: {
				primary: "#5578FC",
				secondary: "#FEC007",
			},
			backgroundColor: {
				primary: "#5578FC",
				secondary: "#FEC007",
			},
			screens: {
				"-2xl": { max: "1600px" },
				"-xl": { max: "1400px" },
				"-lg": { max: "1023px" },
				"-md": { max: "767px" },
				"-sm": { max: "639px" },
				"-xs": { max: "480px" },
			},
		},
	},
	plugins: [],
};
