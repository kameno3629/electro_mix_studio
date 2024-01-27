const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // 開発モード
  devtool: "inline-source-map", // ソースマップの設定
  entry: {
    application: "./app/javascript/packs/application.js", // エントリーポイント
  },
  output: {
    filename: "[name].js", // 出力ファイル名
    sourceMapFilename: "[file].map", // ソースマップファイル名
    path: path.resolve(__dirname, "app/assets/builds"), // 出力ディレクトリ
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1, // チャンク数の制限
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // 静的ファイルのディレクトリ
    },
    compress: true, // 圧縮を有効化
    port: 9000, // ポート番号
  },
  module: {
    rules: [
      {
        test: /\.css$/, // .css ファイル
        use: [
          "style-loader", // スタイルを DOM に注入
          "css-loader", // CSS を CommonJS に変換
          {
            loader: "postcss-loader", // PostCSS のローダー
            options: {
              postcssOptions: {
                plugins: [
                  require("tailwindcss"), // Tailwind CSS
                  require("autoprefixer"), // Autoprefixer
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/, // .scss ファイル
        use: [
          "style-loader", // スタイルを DOM に注入
          "css-loader", // CSS を CommonJS に変換
          "sass-loader", // SCSS を CSS にコンパイル
        ],
      },
      {
        test: /\.(js|jsx)$/, // .js および .jsx ファイル
        exclude: /node_modules/, // node_modules を除外
        use: {
          loader: "babel-loader", // Babel ローダー
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Babel プリセット
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // import 時の拡張子省略
  },
};
