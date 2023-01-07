/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primaryBlack: "#0c0c0c",
				primaryWhite: "#e4e4e4",
				primaryText: "#737373",
			}
		},
	},
	plugins: [],
}
