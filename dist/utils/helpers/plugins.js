"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCopyWebpackPlugin = exports.setCompressionPlugin = exports.setHMRPlugin = exports.setIntegrationWebpack = exports.setIgnorePlugin = exports.setProfillingPlugin = exports.setI18nPlugin = exports.setAutomaticPrefechPlugin = exports.setDLLPlugin = exports.setEnvironmentPlugin = exports.setClosureLibrary = exports.isHtmlWebpackPlugin = exports.LinterChoose = exports.setWebpackNotifierPlugin = void 0;
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
function setClosureLibrary(response) {
    return response === "Yes" ? "new ClosurePlugin()," : (0, text_1.parseString)("");
}
exports.setClosureLibrary = setClosureLibrary;
function setEnvironmentPlugin(response, variables) {
    return response === "Yes"
        ? "new DefinePlugin(".concat(variables, "),")
        : (0, text_1.parseString)("");
}
exports.setEnvironmentPlugin = setEnvironmentPlugin;
function setDLLPlugin(response, options) {
    return response === "Yes" ? "new DllPlugin(".concat(options, "),") : (0, text_1.parseString)("");
}
exports.setDLLPlugin = setDLLPlugin;
function setAutomaticPrefechPlugin(response) {
    return response === "Yes"
        ? "new AutomaticPrefetchPlugin(),"
        : (0, text_1.parseString)("");
}
exports.setAutomaticPrefechPlugin = setAutomaticPrefechPlugin;
function setI18nPlugin(response) {
    return response === "Yes"
        ? "new I18nPlugin(languageConfig, optionsObj),"
        : (0, text_1.parseString)("");
}
exports.setI18nPlugin = setI18nPlugin;
function setProfillingPlugin(response) {
    return response === "Yes"
        ? "new ProfilingPlugin({\n        outputPath: 'profiling/profileEvents.json'\n       });"
        : (0, text_1.parseString)("");
}
exports.setProfillingPlugin = setProfillingPlugin;
function setIgnorePlugin(response) {
    return response === "Yes"
        ? "new webpack.IgnorePlugin({\n        resourceRegExp: /^./locale$/,\n        contextRegExp: /moment$/\n       });"
        : (0, text_1.parseString)("");
}
exports.setIgnorePlugin = setIgnorePlugin;
function setIntegrationWebpack(integration) {
    return integration === "Grunt"
        ? "\nconst webpackConfig = require('./webpack.config.js');\n\nmodule.exports = function (grunt) {\n  grunt.initConfig({\n    webpack: {\n      options: {\n        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',\n      },\n      prod: webpackConfig,\n      dev: Object.assign({ watch: true }, webpackConfig),\n    },\n  });\n\n  grunt.loadNpmTasks('grunt-webpack');\n};"
        : integration === "Gulp"
            ? "\nconst gulp = require('gulp');\nconst webpack = require('webpack-stream');\ngulp.task('default', function () {\n  return gulp\n    .src('src/entry.js')\n    .pipe(\n      webpack({\n        // Any configuration options...\n      })\n    )\n    .pipe(gulp.dest('dist/'));\n}); \n    "
            : integration === "Karma"
                ? "\nmodule.exports = function (config) {\n  config.set({\n    frameworks: ['webpack'],\n    files: [\n      { pattern: 'test/*_test.js', watched: false },\n      { pattern: 'test/**/*_test.js', watched: false },\n    ],\n    preprocessors: {\n      'test/*_test.js': ['webpack'],\n      'test/**/*_test.js': ['webpack'],\n    },\n    webpack: {\n      // Any custom webpack configuration...\n    },\n    plugins: ['karma-webpack'],\n  });\n};\n    "
                : integration === "Mocha"
                    ? "Mocha"
                    : (0, text_1.parseString)("");
}
exports.setIntegrationWebpack = setIntegrationWebpack;
function setHMRPlugin(response) {
    return response === "Yes"
        ? "new webpack.HotModuleReplacementPlugin(),"
        : (0, text_1.parseString)("");
}
exports.setHMRPlugin = setHMRPlugin;
function setCompressionPlugin(response, options) {
    return response === "Yes"
        ? "new CompressionPlugin({compressionOptions: {level: ".concat(options.level, "}, threshold: ").concat(options.threshold, ", minRatio: ").concat(options.ratio, "}),")
        : (0, text_1.parseString)("");
}
exports.setCompressionPlugin = setCompressionPlugin;
function setCopyWebpackPlugin(response, options) {
    return response === "Yes"
        ? "new CopyPlugin({ patterns: [ { from: \"".concat(options.from, "\", to: \"").concat(options.to, "\" } ] }),")
        : (0, text_1.parseString)("");
}
exports.setCopyWebpackPlugin = setCopyWebpackPlugin;
//# sourceMappingURL=plugins.js.map