const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const packageJson = require("./package.json");

const BUILD_FOLDER = path.join(__dirname, "build");

module.exports = {
  mode: "development",
  entry: "./scripts/main.mjs",
  output: {
    path: BUILD_FOLDER,
    filename: "bundle.js",
    publicPath: "",
  },
  target: ["web", "es5"],
  stats: { children: true },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./html/sudoku.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    contentBase: BUILD_FOLDER,
  },
};
