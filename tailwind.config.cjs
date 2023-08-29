/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: 'Roboto',
				archivo: 'Archivo',
				kanit: 'Kanit'
			},
			colors: {
				reciclacel_green: '#0DB14B'
			}
		},
	},
	plugins: [],
}
