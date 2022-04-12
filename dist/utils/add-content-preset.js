"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContentToPreset = void 0;
var constants_1 = require("./helpers/constants");
var webpack_set_content_1 = require("./webpack-set.content");
var loaders_1 = require("./helpers/loaders");
var dev_mode_1 = require("./dev-mode");
var extensions_1 = require("./helpers/extensions");
var plugins_1 = require("./helpers/plugins");
function addContentToPreset(type, options) {
    return "\n".concat((0, constants_1.generateConstants)(type, options.devMode), "\nmodule.exports = {\n  context: path.resolve(__dirname, \"").concat(options.context, "\"),\n  mode: \"").concat(options.devMode, "\",\n  entry: ").concat((0, webpack_set_content_1.setEntryPoint)(options.entryPoint), ",\n  devtool: \"").concat((0, webpack_set_content_1.setSourceMaps)(options.devMode), "\",\n  module: {\n    rules: [\n      ").concat((0, loaders_1.langLoader)(type), "\n      {\n        test: /.s(a|c)ss$/,\n        use: [").concat((0, dev_mode_1.setCSSRuleUse)(options.devMode, type), ", \"css-loader\", \"sass-loader\"],\n      },\n      {\n        test: /.html$/,\n        loader: \"html-loader\",\n      },\n      {\n        test: /.(png|jpe?g|gif|webp)$/,\n        use: [\n          \"file-loader\",\n          {\n            loader: \"image-webpack-loader\",\n            options: {\n              mozjpeg: {\n                progressive: true,\n              },\n              optipng: {\n                enabled: false,\n              },\n              pngquant: {\n                quality: [0.65, 0.9],\n                speed: 4,\n              },\n              gifsicle: {\n                interlaced: false,\n              },\n              webp: {\n                quality: 85,\n              },\n            },\n          },\n        ],\n      },\n      {\n        test: /.(woff(2)?|ttf|eot|svg)(?v=d+.d+.d+)?$/,\n        use: {\n          loader: \"file-loader\",\n          options: {\n            name: \"[name].[ext]\",\n            outputPath: \"fonts/\",\n          },\n        },\n      },\n    ],\n  },\n  resolve: {\n    alias: {\n      ").concat((0, webpack_set_content_1.setAlias)(options.aliasPath), "\n    },\n    extensions: [\n      \"").concat((0, extensions_1.generateExtensions)(type), "\",\n      \".html\",\n      \".sass\",\n      \".scss\",\n      \".css\",\n      \".png\",\n      \".jpg\",\n      \".jpeg\",\n      \".webp\",\n    ],\n    symlinks: false,\n    cacheWithContext: false,\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      filename: \"").concat((0, dev_mode_1.outputFileName)(options.devMode, "html"), "\",\n      title: \"").concat(options.htmlTitle, "\",\n      template: \"").concat(options.htmlTemplate, "\",\n      minify: {\n        collapseWhiteSpaces: true,\n        removeAttributeQuotes: true,\n        removeComments: true,\n      },\n    }),\n    ").concat((0, dev_mode_1.setCssPlugin)(options.devMode), "\n    ").concat((0, plugins_1.LinterChoose)(type, options), "\n    new CleanWebpackPlugin(),\n    ").concat((0, plugins_1.setWebpackNotifierPlugin)(options.devMode), "\n  ],\n  optimization: {\n    splitChunks: {\n      chunks: \"all\",\n      maxInitialRequest: Infinity,\n      minsize: 0,\n      cacheGroups: {\n        vendor: {\n          test: /[\\/]node_modules[\\/]/,\n          name(module) {\n            const packageTitle = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];\n\n            return 'npm.' + packageTitle.replace('@', '');\n          }\n        }\n      }\n    },\n    minimize: true,\n    minimizer: [\n      ").concat((0, dev_mode_1.optimizeProductionCSS)(options.devMode), "\n      ").concat((0, dev_mode_1.optimizeProductionHTML)(options.devMode), "\n      new TerserPlugin({\n        parallel: 3,\n        cache: true,\n        sourceMap: ").concat((0, dev_mode_1.isSourceMaps)(options.devMode), ",\n        terserOptions: {\n          format: {\n            comments: false,\n          },\n        },\n        extractComments: false,\n      }),\n    ],\n  },\n  output: {\n    filename: \"").concat((0, dev_mode_1.outputFileName)(options.devMode, "js"), "\",\n    path: path.resolve(__dirname, \"").concat(options.outputFolder, "\"),\n  },\n  devServer: {\n    port: ").concat(options.devPort, ",\n    compress: true,\n    watchFiles: {\n      paths: [").concat((0, dev_mode_1.setWatchFiles)(options.watchFiles), "],\n      options: {\n        usePolling: false,\n      },\n    },\n  },\n};");
}
exports.addContentToPreset = addContentToPreset;
//# sourceMappingURL=add-content-preset.js.map