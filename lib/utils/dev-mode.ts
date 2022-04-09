import { whitespace } from "./helpers/constants";
import { preset } from "./helpers/enum";
import { webpackMode } from "./helpers/types";
import { parseString } from "./text";

function setCSSRuleUse(mode: webpackMode, presetType?: preset) {
  return mode === "production"
    ? parseString("MiniCssExtractPlugin.loader")
    : presetType === "Vue"
    ? "vue-style-loader"
    : parseString("style-loader");
}

function setCssPlugin(mode: webpackMode, preset: preset) {
  return mode == "production" && preset !== "Vue"
    ? parseString(
        `new MiniCssExtractPlugin({
  filename: "[name].[contenthash].css",
  chunkFilename: "[id].[contenthash].css"
}),`
      )
    : mode === "production" && preset === "Vue"
    ? parseString("vue-style-loader")
    : false;
}

function setCssLoadMethod(method: "async" | "sync") {
  return method === "async"
    ? parseString(
        `new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
}),`
      )
    : parseString("style-loader");
}

function outputFileName(mode: webpackMode, type: "js" | "css") {
  return mode === "production"
    ? parseString(`[name].[contenthash].${type}`)
    : parseString(`[name].${type}`);
}

const optimizeProductionCSS = (mode: webpackMode) =>
  mode === "production"
    ? parseString(`
new OptimizeCssAssetsPlugin({
  cssProcessorOptions: {
    map: {
      inline: false,
      annotation: true,
    },
  }
}),`)
    : false;

function isSourceMaps(mode: webpackMode) {
  return mode === "production" ? true : false;
}

function setWatchFiles(files: string) {
  return whitespace.test(files)
    ? files
        .split(" ")
        .map((file) => `"${file}"`)
        .join(",")
    : `"${files}"`;
}

export {
  setCSSRuleUse,
  setCssPlugin,
  outputFileName,
  optimizeProductionCSS,
  isSourceMaps,
  setWatchFiles,
};
