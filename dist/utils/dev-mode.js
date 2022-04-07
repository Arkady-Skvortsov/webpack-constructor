"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSourceMaps = exports.optimizeProductionCSS = exports.outputFileName = exports.setCssPlugin = exports.setCSSRuleUse = void 0;
var setCSSRuleUse = function (mode) {
    return mode === "production" ? "MiniCssExtractPlugin.loader" : "style-loader";
};
exports.setCSSRuleUse = setCSSRuleUse;
var setCssPlugin = function (mode, preset) {
    return mode == "production" && preset !== "Vue"
        ? "\n    new MiniCssExtractPlugin({\n      filename: \"[name].[contenthash].css\",\n      chunkFilename: \"[id].[contenthash].css\"\n    }),\n    ".split("")
        : mode === "production" && preset === "Vue"
            ? "vue-style-loader"
            : null;
};
exports.setCssPlugin = setCssPlugin;
var outputFileName = function (mode, type) {
    return mode === "production"
        ? "\"[name].[contenthash:8].".concat(type, "}\"").split("")
        : "\"[name].".concat(type, "\"").split("");
};
exports.outputFileName = outputFileName;
var optimizeProductionCSS = function (mode) {
    return mode === "production"
        ? "\nnew OptimizeCssAssetsPlugin({\n  cssProcessorOptions: {\n    map: {\n      inline: false,\n      annotation: true,\n    },\n  },\n}),"
        : null;
};
exports.optimizeProductionCSS = optimizeProductionCSS;
var isSourceMaps = function (mode) {
    return mode === "production" ? true : false;
};
exports.isSourceMaps = isSourceMaps;
//# sourceMappingURL=dev-mode.js.map