import * as fs from "fs";
import { integrationWebpack, questionResponse } from "./types";
import { setScriptFiles } from "../webpack-set.content";
import {
  avoidErrorsOptions,
  bannerOptions,
  cleanBuildOptions,
  compressionOptions,
  customWebpackConfig,
  dllOptions,
  environmentVariable,
  hashModuleIdsSupport,
  prefetchOptions,
  webpackConfig,
} from "./interfaces";
import { preset } from "./enum";
import { parseString } from "../text";
import { outputFileName } from "../dev-mode";

function setWebpackNotifierPlugin() {
  return `
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
  return ["Typescript", "Javascript"].some((value) => value == presetType)
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

function setClosureLibrary() {
  return `new ClosurePlugin(),`;
}

function setEnvironmentPlugin(variables: environmentVariable) {
  return `new webpack.DefinePlugin({
    ${Object.keys(variables).forEach((variable: any) => {
      variable;
    })}
   })`;
}

function setDLLPlugin(options: dllOptions) {
  return `new DllPlugin({ name: ${options.name}, path: path.resolve(__dirname, "${options.path}") }),`;
}

function setHashModuleIds(hashModuleDetails: hashModuleIdsSupport) {
  return `
      new webpack.ids.HashedModuleIdsPlugin({
        context: ${hashModuleDetails.context},
        hashFunction: ${hashModuleDetails.hashFunction},
        hashDigest: ${hashModuleDetails.hashDigest},
        hashDigestLength: ${hashModuleDetails.hashDigestLegnth}
      })
  `;
}

function setAutomaticPrefetchPlugin() {
  return `new webpack.AutomaticPrefetchPlugin(),`;
}

function setPrefetchPlugin(options: prefetchOptions) {
  return `
    new PrefetchPlugin({
      context: ${options.context},
      request: ${options.request}
    }),
  `;
}

function setI18nPlugin(response: questionResponse) {
  return response === "Yes"
    ? `new I18nPlugin(languageConfig, optionsObj),`
    : parseString("");
}

function setProfillingPlugin() {
  return `new ProfilingPlugin({
        outputPath: 'profiling/profileEvents.json'
       });`;
}

function setIgnorePlugin() {
  `new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
       });`;
}

function setIntegrationWebpack(integration: integrationWebpack) {
  const integrationInstrument =
    integration === "Grunt"
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

  fs.writeFileSync(`integration.${integration}.js`, integrationInstrument);
}

function setHMRPlugin() {
  return `new webpack.HotModuleReplacementPlugin(),`;
}

function setAvoidStyleErrorPlugin(options: avoidErrorsOptions) {
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

function setCompressionPlugin(options: compressionOptions) {
  return `new CompressionPlugin({compressionOptions: {level: ${options.level}}, threshold: ${options.threshold}, minRatio: ${options.ratio}}),`;
}

function setCopyWebpackPlugin() {
  return `new CopyWebpackPlugin(

  ),`;
}

function setBannerPlugin(options: bannerOptions) {
  return `
    new webpack.BannerPlugin({
      banner: ${options.banner},
      raw: ${options.raw},
      entryOnly: ${options.entryOnly},
      test: ${options.test},
      include: ${options.include},
      exclude: ${options.exclude},
      footer: ${options.footer}
    })
  `;
}

function setCleanWebpackPlugin(options: cleanBuildOptions) {
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

export {
  setWebpackNotifierPlugin,
  LinterChoose,
  isHtmlWebpackPlugin,
  setClosureLibrary,
  setEnvironmentPlugin,
  setDLLPlugin,
  setAutomaticPrefetchPlugin,
  setAvoidStyleErrorPlugin,
  setBannerPlugin,
  setCleanWebpackPlugin,
  setI18nPlugin,
  setProfillingPlugin,
  setIgnorePlugin,
  setPrefetchPlugin,
  setIntegrationWebpack,
  setHMRPlugin,
  setHashModuleIds,
  setCompressionPlugin,
  setCopyWebpackPlugin,
};
