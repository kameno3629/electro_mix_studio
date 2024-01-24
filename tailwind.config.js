/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    // React コンポーネントファイルのパスを追加
    "./app/javascript/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
