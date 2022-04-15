import { whitespace } from "./helpers/constants";
import { preset } from "./helpers/enum";
import { webpackMode } from "./helpers/types";
import { parseString } from "./text";

function setCSSRuleUse(mode: webpackMode, presetType?: preset) {
  return mode === "production"
    ? parseString("MiniCssExtractPlugin.loader")
    : presetType === "Vue"
    ? "vue-style-loader".toString()
    : "style-loader".toString();
}

function setCssPlugin(mode: webpackMode) {
  return mode === "production"
    ? parseString(
        `new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
          chunkFilename: "[id].[contenthash].css"
        }),`
      )
    : parseString("");
}

function outputFileName(mode: webpackMode, type: "js" | "css" | "html") {
  return mode === "production"
    ? parseString(`[name].[contenthash].${type}`)
    : parseString(`[name].${type}`);
}

function optimizeProductionCSS(mode: webpackMode) {
  return mode === "production"
    ? parseString(
        `new CssMinimizerPlugin({
          parallel: true,
          minify: CssMinimizerPlugin.cleanCssMinify
        }),`
      )
    : parseString("");
}

function optimizeProductionHTML(mode: webpackMode) {
  return mode === "production"
    ? parseString(`new HtmlMinimizerPlugin(),`)
    : parseString("");
}

function isSourceMaps(mode: webpackMode) {
  return mode === "production" ? true : false;
}

function setTerserPlugin(mode: webpackMode) {
  return mode === "production"
    ? parseString(`new TerserPlugin({
        parallel: 3,
        cache: true,
        sourceMap: ${isSourceMaps(mode)},
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),`)
    : parseString("");
}

function setVueLoader(presetType: preset) {
  return presetType === "Vue"
    ? parseString("new VueLoaderPlugin(),")
    : parseString("");
}

function setWatchFiles(files: string) {
  return whitespace.test(files)
    ? files
        .split(" ")
        .map((file) => `"${file}"`)
        .join(", ")
    : `"${files}"`;
}

function setHTMLPreset(presetType: preset) {
  return presetType === "Vue" ?? "React" ?? "Svelte"
    ? parseString("")
    : parseString(`      
      {
        test: /\.html$/,
        loader: "html-loader",
      },`);
}

export {
  setCSSRuleUse,
  setCssPlugin,
  setTerserPlugin,
  outputFileName,
  optimizeProductionCSS,
  optimizeProductionHTML,
  isSourceMaps,
  setVueLoader,
  setWatchFiles,
  setHTMLPreset,
};
