"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setWatchFiles = exports.isSourceMaps = exports.optimizeProductionHTML = exports.optimizeProductionCSS = exports.outputFileName = exports.setCssPlugin = exports.setCSSRuleUse = void 0;
var constants_1 = require("./helpers/constants");
var text_1 = require("./text");
function setCSSRuleUse(mode, presetType) {
    return mode === "production"
        ? (0, text_1.parseString)("MiniCssExtractPlugin.loader")
        : presetType === "Vue"
            ? "vue-style-loader"
            : (0, text_1.parseString)("style-loader");
}
exports.setCSSRuleUse = setCSSRuleUse;
function setCssPlugin(mode, preset) {
    return mode === "production" && preset !== "Vue"
        ? (0, text_1.parseString)("new MiniCssExtractPlugin({\n          filename: \"[name].[contenthash].css\",\n          chunkFilename: \"[id].[contenthash].css\"\n        }),")
        : mode === "production" && preset === "Vue"
            ? (0, text_1.parseString)("vue-style-loader")
            : (0, text_1.parseString)("");
}
exports.setCssPlugin = setCssPlugin;
function setCssLoadMethod(method) {
    return method === "async"
        ? (0, text_1.parseString)("new MiniCssExtractPlugin({\n          filename: \"[name].css\",\n          chunkFilename: \"[id].css\"\n        }),")
        : (0, text_1.parseString)("style-loader");
}
function outputFileName(mode, type) {
    return mode === "production"
        ? (0, text_1.parseString)("[name].[contenthash].".concat(type))
        : (0, text_1.parseString)("[name].".concat(type));
}
exports.outputFileName = outputFileName;
function optimizeProductionCSS(mode) {
    return mode === "production"
        ? (0, text_1.parseString)("new OptimizeCssAssetsPlugin({\n          cssProcessorOptions: {\n            map: {\n              inline: false,\n              annotation: true,\n            },\n          }\n        }),")
        : (0, text_1.parseString)("");
}
exports.optimizeProductionCSS = optimizeProductionCSS;
function optimizeProductionHTML(mode) {
    return mode === "production"
        ? (0, text_1.parseString)("new HtmlMinimizerPlugin(),")
        : (0, text_1.parseString)("");
}
exports.optimizeProductionHTML = optimizeProductionHTML;
function isSourceMaps(mode) {
    return mode === "production" ? true : false;
}
exports.isSourceMaps = isSourceMaps;
function setWatchFiles(files) {
    return constants_1.whitespace.test(files)
        ? files
            .split(" ")
            .map(function (file) { return "\"".concat(file, "\""); })
            .join(",")
        : "\"".concat(files, "\"");
}
exports.setWatchFiles = setWatchFiles;
//# sourceMappingURL=dev-mode.js.map