import { preset } from "./helpers/enum";
import { webpackConfig } from "./helpers/interfaces";
import { generateConstants } from "./helpers/constants";
import { setAlias, setEntryPoint, setSourceMaps } from "./webpack-set.content";
import { langLoader } from "./helpers/loaders";
import {
  optimizeProductionCSS,
  optimizeProductionHTML,
  outputFileName,
  setCssPlugin,
  setCSSRuleUse,
  setHTMLPreset,
  setTerserPlugin,
  setVueLoader,
  setWatchFiles,
} from "./dev-mode";
import { generateExtensions } from "./helpers/extensions";
import {
  isHtmlWebpackPlugin,
  LinterChoose,
  setWebpackNotifierPlugin,
} from "./helpers/plugins";
import { parseString } from "./text";

function addContentToPreset(type: preset, options: webpackConfig) {
  return `
${generateConstants(type, options.devMode)}
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
        use: [${setCSSRuleUse(
          options.devMode,
          type
        )}, "css-loader", "sass-loader"],
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
      "${generateExtensions(type, options.language!)}",
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
    ${isHtmlWebpackPlugin(type, options)}
    ${setCssPlugin(options.devMode)}
    ${LinterChoose(type, options)}
    new CleanWebpackPlugin(),
    ${setVueLoader(type)}
    ${
      options.devMode === "development"
        ? setWebpackNotifierPlugin()
        : parseString("")
    }
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
};`;
}

export { addContentToPreset };
