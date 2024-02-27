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
			lg: ['20px', '30px'],
			xl: ['24px', '34px'],
			'2xl': ['30px', '38px'],
			'3xl': ['36px', '42px'],
			'4xl': ['40px', '46px']
		},
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						
					},
				},
				red: {
				  css: [
					{
						'--tw-prose-body': theme('colors.red[200]'),
						'--tw-prose-headings': theme('colors.red[100]'),
						'--tw-prose-lead': theme('colors.red[700]'),
						'--tw-prose-links': theme('colors.red[900]'),
						'--tw-prose-bold': theme('colors.red[900]'),
						'--tw-prose-counters': theme('colors.red[600]'),
						'--tw-prose-bullets': theme('colors.red[400]'),
						'--tw-prose-hr': theme('colors.red[300]'),
						'--tw-prose-quotes': theme('colors.red[900]'),
						'--tw-prose-quote-borders': theme('colors.red[300]'),
						'--tw-prose-captions': theme('colors.red[700]'),
						'--tw-prose-code': theme('colors.red[900]'),
						'--tw-prose-pre-code': theme('colors.red[100]'),
						'--tw-prose-pre-bg': theme('colors.red[900]'),
						'--tw-prose-th-borders': theme('colors.red[300]'),
						'--tw-prose-td-borders': theme('colors.red[200]'),
						'--tw-prose-invert-body': theme('colors.red[200]'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.red[300]'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.red[400]'),
						'--tw-prose-invert-bullets': theme('colors.red[600]'),
						'--tw-prose-invert-hr': theme('colors.red[700]'),
						'--tw-prose-invert-quotes': theme('colors.red[100]'),
						'--tw-prose-invert-quote-borders': theme('colors.red[700]'),
						'--tw-prose-invert-captions': theme('colors.red[400]'),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.red[300]'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.red[600]'),
						'--tw-prose-invert-td-borders': theme('colors.red[700]'),
						h1: {fontWeight: '600', fontSize: '2em'},
						maxWidth: '120ch',
					},
				  ],
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
