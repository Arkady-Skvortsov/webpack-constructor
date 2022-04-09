"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setWatchFiles = exports.isSourceMaps = exports.optimizeProductionCSS = exports.outputFileName = exports.setCssPlugin = exports.setCSSRuleUse = void 0;
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
    return mode == "production" && preset !== "Vue"
        ? (0, text_1.parseString)("\nnew MiniCssExtractPlugin({\n  filename: \"[name].[contenthash].css\",\n  chunkFilename: \"[id].[contenthash].css\"\n}),\n    ")
        : mode === "production" && preset === "Vue"
            ? (0, text_1.parseString)("vue-style-loader")
            : false;
}
exports.setCssPlugin = setCssPlugin;
function setCssLoadMethod(method) {
    return method === "async"
        ? (0, text_1.parseString)("\nnew MiniCssExtractPlugin({\n  filename: \"[name].css\",\n  chunkFilename: \"[id].css\"\n}),\n  ")
        : (0, text_1.parseString)("style-loader");
}
function outputFileName(mode, type) {
    return mode === "production"
        ? (0, text_1.parseString)("[name].[contenthash].".concat(type))
        : (0, text_1.parseString)("[name].".concat(type));
}
exports.outputFileName = outputFileName;
var optimizeProductionCSS = function (mode) {
    return mode === "production"
        ? (0, text_1.parseString)("\nnew OptimizeCssAssetsPlugin({\n  cssProcessorOptions: {\n    map: {\n      inline: false,\n      annotation: true,\n    },\n  }\n}),")
        : false;
};
exports.optimizeProductionCSS = optimizeProductionCSS;
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