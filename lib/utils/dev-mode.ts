import { whitespace } from "./helpers/constants";
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
    `
    : mode === "production" && preset === "Vue"
    ? "vue-style-loader".split(" ").join(" ")
    : null;

const setCssLoadMethod = (method: "async" | "sync") =>
  method === "async"
    ? `
new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
}),
  `
    : "style-loader";

const outputFileName = (mode: webpackMode, type: "js" | "css") =>
  mode === "production" ? `[name].[contenthash].${type}` : `[name].${type}`;

const optimizeProductionCSS = (mode: webpackMode) =>
  mode === "production"
    ? `
new OptimizeCssAssetsPlugin({
  cssProcessorOptions: {
    map: {
      inline: false,
      annotation: true,
    },
  }
}),`
    : null;

const isSourceMaps = (mode: webpackMode) =>
  mode === "production" ? true : false;

const setWatchFiles = (files: string) =>
  whitespace.test(files)
    ? files
        .split(" ")
        .map((file) => `"${file}"`)
        .join(",")
    : `"${files}"`;

export {
  setCSSRuleUse,
  setCssPlugin,
  outputFileName,
  optimizeProductionCSS,
  isSourceMaps,
  setWatchFiles,
};
