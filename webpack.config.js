const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: "Output Management",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  //   optimization: {
  //     runtimeChunk: "single",
  //     moduleIds: "deterministic",
  //     splitChunks: {
  //       cacheGroups: {
  //         vendor: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name: "vendors",
  //           chunks: "all",
  //         },
  //       },
  //     },
  //   },
};
