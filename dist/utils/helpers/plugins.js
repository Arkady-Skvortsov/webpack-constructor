"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCopyWebpackPlugin = exports.setCompressionPlugin = exports.setHMRPlugin = exports.setIntegrationWebpack = exports.setIgnorePlugin = exports.setProfillingPlugin = exports.setI18nPlugin = exports.setCleanWebpackPlugin = exports.setAutomaticPrefechPlugin = exports.setDLLPlugin = exports.setEnvironmentPlugin = exports.setClosureLibrary = exports.isHtmlWebpackPlugin = exports.LinterChoose = exports.setWebpackNotifierPlugin = void 0;
const webpack_set_content_1 = require("../webpack-set.content");
const text_1 = require("../text");
const dev_mode_1 = require("../dev-mode");
function setWebpackNotifierPlugin(mode) {
    return mode === "production"
        ? (0, text_1.parseString)("")
        : `
new WebpackNotifierPlugin({
  title: 'Webpack', 
  emoji: true, 
  alwaysNotify: true
})`;
}
exports.setWebpackNotifierPlugin = setWebpackNotifierPlugin;
function LinterChoose(lang, options) {
    return lang === "Typescript"
        ? `new TsLintPlugin({
        files: [${(0, webpack_set_content_1.setScriptFiles)(options.LintTypescriptFilesPath)}],
        project: "${options.tslintFilePath}",
        warningsAsError: true
       }),`
        : `new ESLintPlugin({
        failOnError: true,
        failOnWarning: false,
        emitError: true,
        emitWarning: true,
      }),`;
}
exports.LinterChoose = LinterChoose;
function isHtmlWebpackPlugin(presetType, options) {
    return ["Typescript", "Javascript"].some((value) => value !== presetType)
        ? (0, text_1.parseString)(`
    new HtmlWebpackPlugin({
      filename: "${(0, dev_mode_1.outputFileName)(options.devMode, "html")}",
      title: "${options.htmlTitle}",
      template: "${options.htmlTemplate}",
      minify: {
        collapseWhiteSpaces: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),`)
        : (0, text_1.parseString)("");
}
exports.isHtmlWebpackPlugin = isHtmlWebpackPlugin;
function setClosureLibrary(response) {
    return response === "Yes" ? `new ClosurePlugin(),` : (0, text_1.parseString)("");
}
exports.setClosureLibrary = setClosureLibrary;
function setEnvironmentPlugin(response, variables) {
    return response === "Yes"
        ? `new DefinePlugin({

    }),`
        : (0, text_1.parseString)("");
}
exports.setEnvironmentPlugin = setEnvironmentPlugin;
function setDLLPlugin(response, options) {
    return response === "Yes"
        ? `new DllPlugin({ name: ${options.name}, path: path.resolve(__dirname, ${options.path}) }),`
        : (0, text_1.parseString)("");
}
exports.setDLLPlugin = setDLLPlugin;
function setAutomaticPrefechPlugin(response) {
    return response === "Yes"
        ? `new AutomaticPrefetchPlugin(),`
        : (0, text_1.parseString)("");
}
exports.setAutomaticPrefechPlugin = setAutomaticPrefechPlugin;
function setI18nPlugin(response) {
    return response === "Yes"
        ? `new I18nPlugin(languageConfig, optionsObj),`
        : (0, text_1.parseString)("");
}
exports.setI18nPlugin = setI18nPlugin;
function setProfillingPlugin(response) {
    return response === "Yes"
        ? `new ProfilingPlugin({
        outputPath: 'profiling/profileEvents.json'
       });`
        : (0, text_1.parseString)("");
}
exports.setProfillingPlugin = setProfillingPlugin;
function setIgnorePlugin(response) {
    return response === "Yes"
        ? `new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
       });`
        : (0, text_1.parseString)("");
}
exports.setIgnorePlugin = setIgnorePlugin;
function setIntegrationWebpack(integration) {
    return integration === "Grunt"
        ? `
const webpackConfig = require('./webpack.config.js');

module.exports = function (grunt) {
  grunt.initConfig({
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
      },
      prod: webpackConfig,
      dev: Object.assign({ watch: true }, webpackConfig),
    },
  });

  grunt.loadNpmTasks('grunt-webpack');
};`
        : integration === "Gulp"
            ? `
const gulp = require('gulp');
const webpack = require('webpack-stream');
gulp.task('default', function () {
  return gulp
    .src('src/entry.js')
    .pipe(
      webpack({
        // Any configuration options...
      })
    )
    .pipe(gulp.dest('dist/'));
}); 
    `
            : integration === "Karma"
                ? `
module.exports = function (config) {
  config.set({
    frameworks: ['webpack'],
    files: [
      { pattern: 'test/*_test.js', watched: false },
      { pattern: 'test/**/*_test.js', watched: false },
    ],
    preprocessors: {
      'test/*_test.js': ['webpack'],
      'test/**/*_test.js': ['webpack'],
    },
    webpack: {
      // Any custom webpack configuration...
    },
    plugins: ['karma-webpack'],
  });
};
    `
                : integration === "Mocha"
                    ? `Mocha`
                    : (0, text_1.parseString)("");
}
exports.setIntegrationWebpack = setIntegrationWebpack;
function setHMRPlugin(response) {
    return response === "Yes"
        ? `new webpack.HotModuleReplacementPlugin(),`
        : (0, text_1.parseString)("");
}
exports.setHMRPlugin = setHMRPlugin;
function setCompressionPlugin(response, options) {
    return response === "Yes"
        ? `new CompressionPlugin({compressionOptions: {level: ${options.level}}, threshold: ${options.threshold}, minRatio: ${options.ratio}}),`
        : (0, text_1.parseString)("");
}
exports.setCompressionPlugin = setCompressionPlugin;
function setCopyWebpackPlugin(response) {
    return response === "Yes" ? `new CopyWebpackPlugin(),` : (0, text_1.parseString)("");
}
exports.setCopyWebpackPlugin = setCopyWebpackPlugin;
function setCleanWebpackPlugin(response) {
    return response === "Yes" ? `new CleanWebpackPlugin(),` : (0, text_1.parseString)("");
}
exports.setCleanWebpackPlugin = setCleanWebpackPlugin;
//# sourceMappingURL=plugins.js.map