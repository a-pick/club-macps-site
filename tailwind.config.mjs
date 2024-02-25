/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': '360px',
			'md': '640px',
			'lg': '768px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		fontSize: {
			xs: ['12px', '18px'],
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			lg: ['20px', '26px'],
			xl: ['24px', '32px'],
			'2xl': ['30px', '36px'],
		},
		extend: {},
	},
	plugins: [],
}
