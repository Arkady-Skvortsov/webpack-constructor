"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinterChoose = exports.setWebpackNotifierPlugin = void 0;
var webpack_set_content_1 = require("../webpack-set.content");
var text_1 = require("../text");
function setWebpackNotifierPlugin(mode) {
    return mode === "production"
        ? (0, text_1.parseString)("")
        : "\nnew WebpackNotifierPlugin({\n  title: 'Webpack', \n  emoji: true, \n  alwaysNotify: true\n})";
}
exports.setWebpackNotifierPlugin = setWebpackNotifierPlugin;
function LinterChoose(lang, options) {
    return lang === "Typescript"
        ? "new TsLintPlugin({\n        files: [".concat((0, webpack_set_content_1.setScriptFiles)(options.LintTypescriptFilesPath), "],\n        project: \"").concat(options.tslintFilePath, "\",\n        warningsAsError: true\n       }),")
        : "\nnew ESLintPlugin({\n  failOnError: true,\n  failOnWarning: false,\n  emitError: true,\n  emitWarning: true,\n}),";
}
exports.LinterChoose = LinterChoose;
//# sourceMappingURL=plugins.js.map