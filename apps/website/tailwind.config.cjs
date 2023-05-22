module.exports = {
    content: [
      './public/**/*.html',
      './src/**/*.{astro,md,js,jsx,svelte,ts,tsx,vue}',
      '../../libs/**/*.{astro,md,js,jsx,svelte,ts,tsx,vue}',
    ],
    plugins: [
      require('tailwind-scrollbar')({ nocompatible: true }),
      require('@tailwindcss/typography'),
      require('daisyui')
    ],
    theme: {},
  };