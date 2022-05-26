"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCopyWebpackPlugin = exports.setCompressionPlugin = exports.setHashModuleIds = exports.setHMRPlugin = exports.setIntegrationWebpack = exports.setIgnorePlugin = exports.setProfillingPlugin = exports.setI18nPlugin = exports.setCleanWebpackPlugin = exports.setAvoidStyleErrorPlugin = exports.setAutomaticPrefechPlugin = exports.setDLLPlugin = exports.setEnvironmentPlugin = exports.setClosureLibrary = exports.isHtmlWebpackPlugin = exports.LinterChoose = exports.setWebpackNotifierPlugin = void 0;
const fs = __importStar(require("fs"));
const webpack_set_content_1 = require("../webpack-set.content");
const text_1 = require("../text");
const dev_mode_1 = require("../dev-mode");
function setWebpackNotifierPlugin() {
    return `
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
    return ["Typescript", "Javascript"].some((value) => value == presetType)
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
function setClosureLibrary() {
    return `new ClosurePlugin(),`;
}
exports.setClosureLibrary = setClosureLibrary;
function setEnvironmentPlugin(variables) {
    return `new webpack.DefinePlugin({
    ${Object.keys(variables).forEach((variable) => {
        variable;
    })}
   })`;
}
exports.setEnvironmentPlugin = setEnvironmentPlugin;
function setDLLPlugin(options) {
    return `new DllPlugin({ name: ${options.name}, path: path.resolve(__dirname, "${options.path}") }),`;
}
exports.setDLLPlugin = setDLLPlugin;
function setHashModuleIds(hashModuleDetails) {
    return `
      new webpack.ids.HashedModuleIdsPlugin({
        context: ${hashModuleDetails.context},
        hashFunction: ${hashModuleDetails.hashFunction},
        hashDigest: ${hashModuleDetails.hashDigest},
        hashDigestLength: ${hashModuleDetails.hashDigestLegnth}
      })
  `;
}
exports.setHashModuleIds = setHashModuleIds;
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
function setProfillingPlugin() {
    return `new ProfilingPlugin({
        outputPath: 'profiling/profileEvents.json'
       });`;
}
exports.setProfillingPlugin = setProfillingPlugin;
function setMinifyJSON(response) {
    return response === "Yes" ? `new new JsonMinimizerPlugin()` : (0, text_1.parseString)("");
}
function setIgnorePlugin() {
    `new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
       });`;
}
exports.setIgnorePlugin = setIgnorePlugin;
function setIntegrationWebpack(integration) {
    const integrationInstrument = integration === "Grunt"
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
    fs.writeFileSync(`integration.${integration}.js`, integrationInstrument);
}
exports.setIntegrationWebpack = setIntegrationWebpack;
function setHMRPlugin() {
    return `new webpack.HotModuleReplacementPlugin(),`;
}
exports.setHMRPlugin = setHMRPlugin;
function setAvoidStyleErrorPlugin(options) {
    return `
    new StylelintPlugin({
      context: ${options.context},
      exclude: ${options.exclude},
      extensions: ${options.extensions},
      files: ${options.files},
      fix: ${options.fix},
      formatter: ${options.formatter},
      lintDirtyModulesOnly: ${options.lintDirtyModulesOnly},
      stylelintPath: ${options.stylelintPath},
      threads: ${options.threads},
      emitError: ${options.emitError},
      emitWarning: ${options.emitWarning},
      failOnError: ${options.failOnError},
      failOnWarning: ${options.failOnWarning},
      quiet: ${options.quiet}
    }),
  `;
}
exports.setAvoidStyleErrorPlugin = setAvoidStyleErrorPlugin;
function setCompressionPlugin(options) {
    return `new CompressionPlugin({compressionOptions: {level: ${options.level}}, threshold: ${options.threshold}, minRatio: ${options.ratio}}),`;
}
exports.setCompressionPlugin = setCompressionPlugin;
function setCopyWebpackPlugin() {
    return `new CopyWebpackPlugin(

  ),`;
}
exports.setCopyWebpackPlugin = setCopyWebpackPlugin;
function setCleanWebpackPlugin(options) {
    return `
    new CleanWebpackPlugin(
      dry: ${options.dry},
      verbose: ${options.verbose},
      cleanStaleWebpackAssets: ${options.cleanStaleWebpackAssets},
      protectWebpackAssets: ${options.protectWebpackAssets},
      cleanOnceBeforeBuildPatterns: ${options.cleanOnceBeforeBuildPatterns},
      cleanAfterEveryBuildPatterns: ${options.cleanAfterEveryBuildPatterns},
      dangerouslyAllowCleanPatternsOutsideProject: ${options.dangerouslyAllowCleanPatternsOutsideProject}
    ),`;
}
exports.setCleanWebpackPlugin = setCleanWebpackPlugin;
//# sourceMappingURL=plugins.js.map