const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
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
  },
  target: ["web", "es5"],
  stats: { children: true },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ context: "./styles", from: "*.css", to: "styles" }],
    }),
    new HtmlWebpackPlugin({
      template: "./html/index.html",
      version: packageJson.version,
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
        },
      },
    ],
  },
  devServer: {
    static: BUILD_FOLDER,
    compress: true,
    port: 8080,
    open: true,
  },
  devtool: "source-map"
};
