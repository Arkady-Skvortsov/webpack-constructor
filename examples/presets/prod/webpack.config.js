const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  mode: "production",
  entry: { index: "./src/main.js ./src/index.js" },
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: ["@babel/preset-env"],
        },
      },
      {
        test: /.s(a|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
      "@/": path.resolve(__dirname, ""),
      "@/helpers": path.resolve(__dirname, "./src/helpers"),
    },
    extensions: [
      ".js",
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
      filename: "[name].[contenthash].html",
      title: "Hello world",
      template: "./src/main.html",
      minify: {
        collapseWhiteSpaces: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new ESLintPlugin({
      failOnError: true,
      failOnWarning: false,
      emitError: true,
      emitWarning: true,
    }),
    new CleanWebpackPlugin(),
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
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
        minify: CssMinimizerPlugin.cleanCssMinify,
      }),
      new HtmlMinimizerPlugin(),
      new TerserPlugin({
        parallel: 3,
        cache: true,
        sourceMap: true,
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    port: 3500,
    compress: true,
    watchFiles: {
      paths: ["./src/helpers ./src/html ./src/sass"],
      options: {
        usePolling: false,
      },
    },
  },
};
