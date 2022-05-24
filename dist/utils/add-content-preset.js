"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContentToPreset = void 0;
const constants_1 = require("./helpers/constants");
const webpack_set_content_1 = require("./webpack-set.content");
const loaders_1 = require("./helpers/loaders");
const dev_mode_1 = require("./dev-mode");
const extensions_1 = require("./helpers/extensions");
const plugins_1 = require("./helpers/plugins");
function addContentToPreset(type, options) {
    return `
${(0, constants_1.generateConstants)(type, options.devMode)}
module.exports = {
  context: path.resolve(__dirname, "${options.context}"),
  mode: "${options.devMode}",
  entry: ${(0, webpack_set_content_1.setEntryPoint)(options.entryPoint)},
  devtool: "${(0, webpack_set_content_1.setSourceMaps)(options.devMode)}",
  module: {
    rules: [
      ${(0, loaders_1.langLoader)(type)}
      ${(0, dev_mode_1.setHTMLPreset)(type)}
      {
        test: /\.s(a|c)ss$/,
        use: [${(0, dev_mode_1.setCSSRuleUse)(options.devMode, type)}, "css-loader", "sass-loader"],
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
      ${(0, webpack_set_content_1.setAlias)(options.aliasPath)}
    },
    extensions: [
      "${(0, extensions_1.generateExtensions)(type, options.language)}",
      ".html",
      ".sass",
      ".scss",
      ".css",
      ".png",
      ".jpg",
      ".jpeg",
      ".webp",
      ".ttf",
      ".eot",
      ".svg"
    ],
    symlinks: false,
    cacheWithContext: false,
  },
  plugins: [
    ${(0, plugins_1.isHtmlWebpackPlugin)(type, options)}
    ${(0, dev_mode_1.setCssPlugin)(options.devMode)}
    ${(0, plugins_1.LinterChoose)(type, options)}
    new CleanWebpackPlugin(),
    ${(0, dev_mode_1.setVueLoader)(type)}
    ${(0, plugins_1.setWebpackNotifierPlugin)(options.devMode)}
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
      ${(0, dev_mode_1.optimizeProductionCSS)(options.devMode)}
      ${(0, dev_mode_1.optimizeProductionHTML)(options.devMode)}
      ${(0, dev_mode_1.setTerserPlugin)(options.devMode)}
    ],
  },
  output: {
    filename: "${(0, dev_mode_1.outputFileName)(options.devMode, "js")}",
    path: path.resolve(__dirname, "${options.outputFolder}"),
  },
  devServer: {
    port: ${options.devPort},
    compress: true,
    watchFiles: {
      paths: [${(0, dev_mode_1.setWatchFiles)(options.watchFiles)}],
      options: {
        usePolling: false,
      },
    },
  },
};`;
}
exports.addContentToPreset = addContentToPreset;
//# sourceMappingURL=add-content-preset.js.map