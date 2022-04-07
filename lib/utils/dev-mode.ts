import { preset } from "./helpers/enum";
import { webpackMode } from "./helpers/types";

const setCSSRuleUse = (mode: webpackMode) =>
  mode === "production" ? "MiniCssExtractPlugin.loader" : "style-loader";

const setCssPlugin = (mode: webpackMode, preset: preset) =>
  mode == "production" && preset !== "Vue"
    ? `
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    }),
    `.split("")
    : mode === "production" && preset === "Vue"
    ? "vue-style-loader"
    : null;

const outputFileName = (mode: webpackMode, type: "js") =>
  mode === "production"
    ? `"[name].[contenthash].${type}}"`.split("")
    : `"[name].${type}"`.split("");

const optimizeProductionCSS = (mode: webpackMode) =>
  mode === "production"
    ? `
new OptimizeCssAssetsPlugin({
  cssProcessorOptions: {
    map: {
      inline: false,
      annotation: true,
    },
  },
}),`
    : null;

const isSourceMaps = (mode: webpackMode) =>
  mode === "production" ? true : false;

export {
  setCSSRuleUse,
  setCssPlugin,
  outputFileName,
  optimizeProductionCSS,
  isSourceMaps,
};

console.log(outputFileName("development", "js"));