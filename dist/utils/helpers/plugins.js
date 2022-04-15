"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHtmlWebpackPlugin = exports.LinterChoose = exports.setWebpackNotifierPlugin = void 0;
var webpack_set_content_1 = require("../webpack-set.content");
var text_1 = require("../text");
var dev_mode_1 = require("../dev-mode");
function setWebpackNotifierPlugin(mode) {
    return mode === "production"
        ? (0, text_1.parseString)("")
        : "\nnew WebpackNotifierPlugin({\n  title: 'Webpack', \n  emoji: true, \n  alwaysNotify: true\n})";
}
exports.setWebpackNotifierPlugin = setWebpackNotifierPlugin;
function LinterChoose(lang, options) {
    return lang === "Typescript"
        ? "new TsLintPlugin({\n        files: [".concat((0, webpack_set_content_1.setScriptFiles)(options.LintTypescriptFilesPath), "],\n        project: \"").concat(options.tslintFilePath, "\",\n        warningsAsError: true\n       }),")
        : "new ESLintPlugin({\n        failOnError: true,\n        failOnWarning: false,\n        emitError: true,\n        emitWarning: true,\n      }),";
}
exports.LinterChoose = LinterChoose;
function isHtmlWebpackPlugin(presetType, options) {
    return ["Typescript", "Javascript"].some(function (value) { return value !== presetType; })
        ? (0, text_1.parseString)("\n    new HtmlWebpackPlugin({\n      filename: \"".concat((0, dev_mode_1.outputFileName)(options.devMode, "html"), "\",\n      title: \"").concat(options.htmlTitle, "\",\n      template: \"").concat(options.htmlTemplate, "\",\n      minify: {\n        collapseWhiteSpaces: true,\n        removeAttributeQuotes: true,\n        removeComments: true,\n      },\n    }),"))
        : (0, text_1.parseString)("");
}
exports.isHtmlWebpackPlugin = isHtmlWebpackPlugin;
//# sourceMappingURL=plugins.js.map