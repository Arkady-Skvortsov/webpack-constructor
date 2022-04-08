"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setWatchFiles = exports.isSourceMaps = exports.optimizeProductionCSS = exports.outputFileName = exports.setCssPlugin = exports.setCSSRuleUse = void 0;
var constants_1 = require("./helpers/constants");
var setCSSRuleUse = function (mode) {
    return mode === "production" ? "MiniCssExtractPlugin.loader" : "style-loader";
};
exports.setCSSRuleUse = setCSSRuleUse;
var setCssPlugin = function (mode, preset) {
    return mode == "production" && preset !== "Vue"
        ? "\nnew MiniCssExtractPlugin({\n  filename: \"[name].[contenthash].css\",\n  chunkFilename: \"[id].[contenthash].css\"\n}),\n    "
        : mode === "production" && preset === "Vue"
            ? "vue-style-loader".split(" ").join(" ")
            : null;
};
exports.setCssPlugin = setCssPlugin;
var setCssLoadMethod = function (method) {
    return method === "async"
        ? "\nnew MiniCssExtractPlugin({\n  filename: \"[name].css\",\n  chunkFilename: \"[id].css\"\n}),\n  "
        : "style-loader";
};
var outputFileName = function (mode, type) {
    return mode === "production" ? "[name].[contenthash].".concat(type) : "[name].".concat(type);
};
exports.outputFileName = outputFileName;
var optimizeProductionCSS = function (mode) {
    return mode === "production"
        ? "\nnew OptimizeCssAssetsPlugin({\n  cssProcessorOptions: {\n    map: {\n      inline: false,\n      annotation: true,\n    },\n  }\n}),"
        : null;
};
exports.optimizeProductionCSS = optimizeProductionCSS;
var isSourceMaps = function (mode) {
    return mode === "production" ? true : false;
};
exports.isSourceMaps = isSourceMaps;
var setWatchFiles = function (files) {
    return constants_1.whitespace.test(files)
        ? files
            .split(" ")
            .map(function (file) { return "\"".concat(file, "\""); })
            .join(",")
        : "\"".concat(files, "\"");
};
exports.setWatchFiles = setWatchFiles;
//# sourceMappingURL=dev-mode.js.map