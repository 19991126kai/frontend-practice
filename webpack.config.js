const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: `${__dirname}/dist/`,
    filename: "bundle.js",
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        // 拡張子 css のファイル（正規表現）
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      // テンプレートになるHTMLファイルを指定
      template: "./src/index.html",
    }),
  ],
};
