"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinterChoose = exports.setWebpackNotifierPlugin = void 0;
var webpack_set_content_1 = require("../webpack-set.content");
var setWebpackNotifierPlugin = function (mode) {
    return mode === "production"
        ? null
        : mode === "development"
            ? "\nnew WebpackNotifierPlugin({\n  title: 'Webpack', \n  emoji: true, \n  alwaysNotify: true\n})"
            : null;
};
exports.setWebpackNotifierPlugin = setWebpackNotifierPlugin;
var LinterChoose = function (lang, options) {
    return lang === "Typescript"
        ? "\nnew TSLintPlugin({\n  files: [".concat((0, webpack_set_content_1.setScriptFiles)(options.LintTypescriptFilesPath), "],\n  project: \"").concat(options.tslintFilePath, "\",\n  warningsAsError: true\n}),")
        : "\nnew ESLintPlugin({\n  failOnError: true,\n  failOnWarning: false,\n  emitError: true,\n  emitWarning: true,\n}),";
};
exports.LinterChoose = LinterChoose;
//# sourceMappingURL=plugins.js.map