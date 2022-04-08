import { whitespace } from "./helpers/constants";
import { preset } from "./helpers/enum";
import { webpackMode } from "./helpers/types";
import { parseString } from "./text";

const setCSSRuleUse = (mode: webpackMode) =>
  mode === "production"
    ? parseString("MiniCssExtractPlugin.loader")
    : parseString("style-loader");

const setCssPlugin = (mode: webpackMode, preset: preset) =>
  mode == "production" && preset !== "Vue"
    ? parseString(`
new MiniCssExtractPlugin({
  filename: "[name].[contenthash].css",
  chunkFilename: "[id].[contenthash].css"
}),
    `)
    : mode === "production" && preset === "Vue"
    ? parseString("vue-style-loader")
    : false;

const setCssLoadMethod = (method: "async" | "sync") =>
  method === "async"
    ? parseString(`
new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
}),
  `)
    : parseString("style-loader");

const outputFileName = (mode: webpackMode, type: "js" | "css") =>
  mode === "production"
    ? parseString(`[name].[contenthash].${type}`)
    : parseString(`[name].${type}`);

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
