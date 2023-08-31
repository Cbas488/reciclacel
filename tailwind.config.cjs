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
				reciclacel_green: '#0DB14B',
				reciclacel_dark_blue: '#001F3F',
				reciclacel_light_blue: '#4BB3FD',
				reciclacel_yellow: '#FFC630'
			}
		},
		screens: {
			'sm': '567.98px',
			'md': '767.98px',
			'lg': '1023.98px',
			'xl': '1279.98px',
			'2xl': '1536px',
			'3xl': '1920px',
			'4xl': '2560px'
		  }
	},
	plugins: [],
}
