/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        zinc: {
          css: {
            '--tw-prose-pre-bg': 'white',
            '--tw-prose-headings': 'rgb(239, 254, 236)',
            '--tw-prose-links': 'rgb(3, 15, 1)',
            '--tw-prose-body': 'white',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
