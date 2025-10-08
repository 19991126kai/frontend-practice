const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: `${__dirname}/dist/`,
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        // 拡張子 css のファイル（正規表現）
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader", // Babelを利用する
            options: {
              // Babel のオプションを指定する
              presets: [
                "@babel/preset-env", // プリセットを指定することで、新しいESをES5に変換
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // テンプレートになるHTMLファイルを指定
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  target: ["web", "es5"], //ES5(IE11等)向けの設定
};
