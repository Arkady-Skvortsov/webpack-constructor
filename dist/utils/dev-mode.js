"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHTMLPreset = exports.setWatchFiles = exports.setVueLoader = exports.isSourceMaps = exports.optimizeProductionHTML = exports.optimizeJSONFiles = exports.optimizeProductionCSS = exports.outputFileName = exports.setTerserPlugin = exports.setCssPlugin = exports.setCSSRuleUse = void 0;
const constants_1 = require("./helpers/constants");
const text_1 = require("./text");
function setCSSRuleUse(mode, presetType) {
    return mode === "production"
        ? (0, text_1.parseString)("MiniCssExtractPlugin.loader")
        : presetType === "Vue"
            ? `"vue-style-loader"`
            : `"style-loader"`;
}
exports.setCSSRuleUse = setCSSRuleUse;
function setCssPlugin(mode) {
    return mode === "production"
        ? (0, text_1.parseString)(`new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
          chunkFilename: "[id].[contenthash].css"
        }),`)
        : (0, text_1.parseString)("");
}
exports.setCssPlugin = setCssPlugin;
function outputFileName(mode, type) {
    return mode === "production"
        ? (0, text_1.parseString)(`[name].[contenthash].${type}`)
        : (0, text_1.parseString)(`[name].${type}`);
}
exports.outputFileName = outputFileName;
function optimizeProductionCSS(mode) {
    return mode === "production"
        ? (0, text_1.parseString)(`new CssMinimizerPlugin({
          parallel: true,
          minify: CssMinimizerPlugin.cleanCssMinify
        }),`)
        : (0, text_1.parseString)("");
}
exports.optimizeProductionCSS = optimizeProductionCSS;
function optimizeProductionHTML(mode) {
    return mode === "production"
        ? (0, text_1.parseString)(`new HtmlMinimizerPlugin(),`)
        : (0, text_1.parseString)("");
}
exports.optimizeProductionHTML = optimizeProductionHTML;
function optimizeJSONFiles(mode, options) {
    return (0, text_1.parseString)(`new JsonMinimizerPlugin({
    test: ${options.test},
    include: ${options.include},
    exclude: ${options.exclude},
    minimizerOptions: {
      space: ${options.minimizerOptions.space}
    }
  })`);
}
exports.optimizeJSONFiles = optimizeJSONFiles;
function isSourceMaps(mode) {
    return mode === "production" ? true : false;
}
exports.isSourceMaps = isSourceMaps;
function setTerserPlugin(mode) {
    return mode === "production"
        ? (0, text_1.parseString)(`new TerserPlugin({
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
        : (0, text_1.parseString)("");
}
exports.setTerserPlugin = setTerserPlugin;
function setVueLoader(presetType) {
    return presetType === "Vue"
        ? (0, text_1.parseString)("new VueLoaderPlugin(),")
        : (0, text_1.parseString)("");
}
exports.setVueLoader = setVueLoader;
function setWatchFiles(files) {
    return constants_1.whitespace.test(files)
        ? files
            .split(" ")
            .map((file) => `"${file}"`)
            .join(", ")
        : `"${files}"`;
}
exports.setWatchFiles = setWatchFiles;
function setHTMLPreset(presetType) {
    return ["Vue", "React", "Svelte"].some((type) => type !== presetType)
        ? (0, text_1.parseString)("")
        : (0, text_1.parseString)(`      
      {
        test: /\.html$/,
        loader: ""html-loader"",
      },`);
}
exports.setHTMLPreset = setHTMLPreset;
//# sourceMappingURL=dev-mode.js.map