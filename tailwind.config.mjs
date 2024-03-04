/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#161F2C',
				'light-blue': '#E0E3F1',
				'slate-blue': '#2B3C71',
				'dark-navy': '#000412',
			},
			fontFamily: {
        'fira-code': ['"Fira-Code"', ...defaultTheme.fontFamily.sans],
        'inter': ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
