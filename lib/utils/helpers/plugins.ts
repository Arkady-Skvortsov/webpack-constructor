import {
  integrationWebpack,
  questionResponse,
  webpackConfigType,
  webpackMode,
  webpackOption,
} from "./types";
import { setScriptFiles } from "../webpack-set.content";
import {
  compressionOptions,
  copyOptions,
  customWebpackConfig,
  dllOptions,
  webpackConfig,
} from "./interfaces";
import { preset } from "./enum";
import { parseString } from "../text";
import { outputFileName } from "../dev-mode";

function setWebpackNotifierPlugin(mode: webpackMode) {
  return mode === "production"
    ? parseString("")
    : `
new WebpackNotifierPlugin({
  title: 'Webpack', 
  emoji: true, 
  alwaysNotify: true
})`;
}

function LinterChoose(
  lang: preset,
  options: webpackConfig | customWebpackConfig
) {
  return lang === "Typescript"
    ? `new TsLintPlugin({
        files: [${setScriptFiles(options.LintTypescriptFilesPath)}],
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

function isHtmlWebpackPlugin(
  presetType: preset,
  options: webpackConfig | customWebpackConfig
) {
  return ["Typescript", "Javascript"].some((value) => value !== presetType)
    ? parseString(`
    new HtmlWebpackPlugin({
      filename: "${outputFileName(options.devMode, "html")}",
      title: "${options.htmlTitle}",
      template: "${options.htmlTemplate}",
      minify: {
        collapseWhiteSpaces: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),`)
    : parseString("");
}

function setClosureLibrary(response: questionResponse) {
  return response === "Yes" ? `new ClosurePlugin(),` : parseString("");
}

function setEnvironmentPlugin(response: questionResponse, variables: any) {
  return response === "Yes"
    ? `new DefinePlugin({

    }),`
    : parseString("");
}

function setDLLPlugin(response: questionResponse, options: dllOptions) {
  return response === "Yes"
    ? `new DllPlugin({ name: ${options.name}, path: path.resolve(__dirname, ${options.path}) }),`
    : parseString("");
}

function setAutomaticPrefechPlugin(response: questionResponse) {
  return response === "Yes"
    ? `new AutomaticPrefetchPlugin(),`
    : parseString("");
}

function setI18nPlugin(response: questionResponse) {
  return response === "Yes"
    ? `new I18nPlugin(languageConfig, optionsObj),`
    : parseString("");
}

function setProfillingPlugin(response: questionResponse) {
  return response === "Yes"
    ? `new ProfilingPlugin({
        outputPath: 'profiling/profileEvents.json'
       });`
    : parseString("");
}

function setIgnorePlugin(response: questionResponse) {
  return response === "Yes"
    ? `new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
       });`
    : parseString("");
}

function setIntegrationWebpack(integration: integrationWebpack) {
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
    : parseString("");
}

function setHMRPlugin(response: questionResponse) {
  return response === "Yes"
    ? `new webpack.HotModuleReplacementPlugin(),`
    : parseString("");
}

function setCompressionPlugin(
  response: questionResponse,
  options: compressionOptions
) {
  return response === "Yes"
    ? `new CompressionPlugin({compressionOptions: {level: ${options.level}}, threshold: ${options.threshold}, minRatio: ${options.ratio}}),`
    : parseString("");
}

function setCopyWebpackPlugin(response: questionResponse) {
  return response === "Yes" ? `new CopyWebpackPlugin(),` : parseString("");
}

function setCleanWebpackPlugin(response: questionResponse) {
  return response === "Yes" ? `new CleanWebpackPlugin(),` : parseString("");
}

export {
  setWebpackNotifierPlugin,
  LinterChoose,
  isHtmlWebpackPlugin,
  setClosureLibrary,
  setEnvironmentPlugin,
  setDLLPlugin,
  setAutomaticPrefechPlugin,
  setCleanWebpackPlugin,
  setI18nPlugin,
  setProfillingPlugin,
  setIgnorePlugin,
  setIntegrationWebpack,
  setHMRPlugin,
  setCompressionPlugin,
  setCopyWebpackPlugin,
};
