const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  mode: "development",
  // 处理自定义loader的路径问题。指可以从 node_modules和 ./myLoaders目录里面找。
  resolveLoader: {
    modules: ["node_modules", "./myLoaders"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          //   MiniCssExtractPlugin.loader,
          "kkb-style-loader",
          "kkb-css-loader",
          "kkb-less-loader",
        ],
      },
        {
          test: /\.js$/,
          use: [
            "replace-loader",
            {
              loader: "replace-loader-async",
              options: {   // 传参
                name: "老韩",
              },
            },
          ],
        },
    ],
  },
  //   plugins: [
  //     new MiniCssExtractPlugin({
  //       filename: "index.css",
  //     }),
  //   ],
};
