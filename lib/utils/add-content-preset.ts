import { preset } from "./helpers/enum";
import { webpackConfig } from "./helpers/interfaces";
import { generateConstants } from "./helpers/constants";
import { setAlias, setEntryPoint, setSourceMaps } from "./webpack-set.content";
import { langLoader } from "./helpers/loaders";
import {
  isSourceMaps,
  optimizeProductionCSS,
  outputFileName,
  setCssPlugin,
  setCSSRuleUse,
  setWatchFiles,
} from "./dev-mode";
import { generateExtensions } from "./helpers/extensions";
import { LinterChoose, setWebpackNotifierPlugin } from "./helpers/plugins";

function addContentToPreset(type: preset, options: webpackConfig) {
  return `
${generateConstants(type)}
module.exports = {
  context: path.resolve(__dirname, "${options.context}"),
  mode: "${options.devMode}",
  entry: ${setEntryPoint(options.entryPoint)},
  devtool: "${setSourceMaps(options.devMode)}",
  module: {
    rules: [
      ${langLoader(type)}
      {
        test: /\.s(a|c)ss$/,
        use: [${setCSSRuleUse(
          options.devMode,
          type
        )}, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
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
    new HtmlWebpackPlugin({
      filename: "[name].html",
      title: "${options.htmlTitle}",
      template: "${options.htmlTemplate}",
      minify: {
        collapseWhiteSpaces: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
    ${setCssPlugin(options.devMode, type)}
    ${LinterChoose(type, options)}
    new CleanWebpackPlugin(),
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
      new HtmlMinimizerPlugin(),
      new TerserPlugin({
        parallel: 3,
        cache: true,
        sourceMap: ${isSourceMaps(options.devMode)},
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
`;
}

export { addContentToPreset };
