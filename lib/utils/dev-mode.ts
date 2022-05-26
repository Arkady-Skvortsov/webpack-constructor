import { whitespace } from "./helpers/constants";
import { preset } from "./helpers/enum";
import { minifyJSONOptions } from "./helpers/interfaces";
import { webpackMode } from "./helpers/types";
import { parseString } from "./text";

function setCSSRuleUse(mode: webpackMode, presetType?: preset) {
  return mode === "production"
    ? parseString("MiniCssExtractPlugin.loader")
    : presetType === "Vue"
    ? `"vue-style-loader"`
    : `"style-loader"`;
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

function optimizeJSONFiles(mode: webpackMode, options: minifyJSONOptions) {
  return parseString(`new JsonMinimizerPlugin({
    test: ${options.test},
    include: ${options.include},
    exclude: ${options.exclude},
    minimizerOptions: {
      space: ${options.minimizerOptions.space}
    }
  })`);
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
  return ["Vue", "React", "Svelte"].some((type) => type !== presetType)
    ? parseString("")
    : parseString(`      
      {
        test: /\.html$/,
        loader: ""html-loader"",
      },`);
}

export {
  setCSSRuleUse,
  setCssPlugin,
  setTerserPlugin,
  outputFileName,
  optimizeProductionCSS,
  optimizeJSONFiles,
  optimizeProductionHTML,
  isSourceMaps,
  setVueLoader,
  setWatchFiles,
  setHTMLPreset,
};
