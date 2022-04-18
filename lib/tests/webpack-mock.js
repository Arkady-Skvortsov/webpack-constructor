const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlMinimizerPlugin = requir('html-minimizer-webpack-plugin');const MiniCssExtractPlugin = require('mini-css-extract-plugin'); const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "${options.context}"),
  mode: "${options.devMode}",
  entry: ${setEntryPoint(options.entryPoint)},
  devtool: "${setSourceMaps(options.devMode)}",
  module: {
    rules: [
      ${langLoader(type)}
      ${setHTMLPreset(type)}
      {
        test: /\.s(a|c)ss$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
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
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
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
      ${setAlias(options.aliasPath)}
    },
    extensions: [
      "${generateExtensions(type)}",
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
    ${isHtmlWebpackPlugin(type, options)}
    ${setCssPlugin(options.devMode)}
    ${LinterChoose(type, options)}
    new CleanWebpackPlugin(),
    ${setVueLoader(type)}
    ${setWebpackNotifierPlugin(options.devMode)}
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      maxInitialRequest: Infinity,
      minsize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageTitle = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            return 'npm.' + packageTitle.replace('@', '');
          }
        }
      }
    },
    minimize: true,
    minimizer: [
      ${optimizeProductionCSS(options.devMode)}
      ${optimizeProductionHTML(options.devMode)}
      ${setTerserPlugin(options.devMode)}
    ],
  },
  output: {
    filename: "${outputFileName(options.devMode, "js")}",
    path: path.resolve(__dirname, "${options.outputFolder}"),
  },
  devServer: {
    port: ${options.devPort},
    compress: true,
    watchFiles: {
      paths: [${setWatchFiles(options.watchFiles)}],
      options: {
        usePolling: false,
      },
    },
  },
};