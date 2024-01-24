module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'), // Tailwind CSSを追加
    require('autoprefixer'), // autoprefixerを明示的に追加
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}

