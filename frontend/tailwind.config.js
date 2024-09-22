/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Space Grotesk", "sans-serif"],
		},
		colors: {
			background: "#141414",
			"background-purple": "#240046",
			"bright-purple": "#5A189A",
			purple: "#9D4EDD",
			"light-purple": "#C77DFF",
			white: "#EBEBEB",
		},
		extend: {
			dropShadow: {
				"4xl": [
					"0 50px 70px rgba(157, 78,221,25%)",
					"0 -50px 70px rgba(157, 78,221,25%)",
				],
			},
		},
	},
	plugins: [],
};
