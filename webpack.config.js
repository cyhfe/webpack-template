const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode = "production" }) => {
  const isDevelopment = mode === "development";
  const isProduction = mode === "production";
  return {
    mode,
    entry: {
      index: "./src/index.tsx",
    },

    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: path.resolve(__dirname, "public/index.html"),
          },
          true
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
    ],
    devtool: "inline-source-map",
    devServer: {
      static: "./dist",
      hot: true,
    },
    optimization: {
      // 将 runtime 代码拆分为一个单独的 chunk。将其设置为 single 来为所有 chunk 创建一个 runtime bundle：
      runtimeChunk: "single",
      //将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。因此通过实现以上步骤，利用 client 的长效缓存机制，命中缓存来消除请求，并减少向 server 获取资源，同时还能保证 client 代码和 server 代码版本一致。
      moduleIds: "deterministic",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    resolve: {
      // 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
      extensions: [".tsx", ".ts", ".js"],
    },
  };
};
