
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlMinimizerWebpackPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const TsLintPlugin = require("tslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "ytrtdfgvh"),
  mode: "production",
  entry: ["lib/utils", "/lib/helpers"],
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
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
      "@/helhers": path.resolve(__dirname, "lib/utils /lib/helhers")
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
      title: "Title",
      template: "main.html",
      minify: {
        collapseWhiteSpaces: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new TSLintPlugin({
      files: ["./lib/utils/**/*.ts"],
      project: "./tslint.json",
      warningsAsError: true
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
            const packageTitle = module.context.match(/[\/]node_modules[\/](.*?)([\/]|$)/)[1];

            return 'npm.' + packageTitle.replace('@', '');
          }
        }
      }
    },
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: { level: 2, parallel: true },
      }),
      new TerserPlugin({
        parallel: 3,
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
    path: path.resolve(__dirname, "/dis"),
  },
  devServer: {
    port: 8080,
    compress: true,
  },
};