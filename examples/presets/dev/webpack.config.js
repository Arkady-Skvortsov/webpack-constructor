const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const TsLintPlugin = require("tslint-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  mode: "development",
  entry: {
    main: "./src/main.ts",
    index: "./src/index.ts",
    output: "./src/output.ts",
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /.s(a|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /.html$/,
        loader: "html-loader",
      },
      {
        test: /.(png|jpe?g|gif|webp)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 85,
              },
            },
          },
        ],
      },
      {
        test: /.(woff(2)?|ttf|eot|svg)(?v=d+.d+.d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/helpers": path.resolve(__dirname, "./src/helpers"),
    },
    extensions: [
      ".ts",
      ".html",
      ".sass",
      ".scss",
      ".css",
      ".png",
      ".jpg",
      ".jpeg",
      ".webp",
    ],
    symlinks: false,
    cacheWithContext: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "[name].html",
      title: "Hello world",
      template: "./src/main.html",
      minify: {
        collapseWhiteSpaces: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
    new TsLintPlugin({
      files: ["./src/main/**/*.ts"],
      project: "./tslint.json",
      warningsAsError: true,
    }),
    new CleanWebpackPlugin(),
    new WebpackNotifierPlugin({
      title: "Webpack",
      emoji: true,
      alwaysNotify: true,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      maxInitialRequest: Infinity,
      minsize: 0,
      cacheGroups: {
        vendor: {
          test: /[\/]node_modules[\/]/,
          name(module) {
            const packageTitle = module.context.match(
              /[\/]node_modules[\/](.*?)([\/]|$)/
            )[1];

            return "npm." + packageTitle.replace("@", "");
          },
        },
      },
    },
    minimize: true,
    minimizer: [],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    port: 3500,
    compress: true,
    watchFiles: {
      paths: ["./src/html"],
      options: {
        usePolling: false,
      },
    },
  },
};
