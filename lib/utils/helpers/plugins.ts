import * as fs from "fs";
import { integrationWebpack, questionResponse } from "./types";
import { setScriptFiles } from "../webpack-set.content";
import {
  avoidErrorsOptions,
  bannerOptions,
  bundleAnalyzerOptions,
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
import { transformQuestionToBoolean } from "./converter";

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

function setBundleAnalyzerSupport(options: bundleAnalyzerOptions) {
  return `
    new BundleAnalyzer({
      analyzerMode: ${options.analyzerMode},
      analyzerHost: ${options.analyzerHost},
      analyzerPort: ${options.analyzerPort},
      reportFilename: ${options.reportFilename},
      defaultSizes: ${options.defaultSizes},
      openAnalyzer: ${options.openAnalyzer},
      generateStatsFile: ${options.generateStatsFile},
      statsFilename: ${options.statsFilename},
      stats: {
        all: ${options.stats.all},
        assets: ${options.stats.assets},
        assetsSort: ${options.stats.assetsSort},
        builtAt: ${options.stats.builtAt},
        moduleAssets: ${options.stats.moduleAssets},
        chunkModulesSpace: ${options.stats.chunkModulesSpace},
        nestedModules: ${options.stats.nestedModules},
        cachedModules: ${options.stats.cachedModules},
        runtimeModules: ${options.stats.runtimeModules},
        dependentModules: ${options.stats.dependentModules},
        groupAssetsByChunk: ${options.stats.groupAssetsByChunk},
        groupAssetsByEmitStatus: ${options.stats.groupAssetsByEmitStatus},
        groupAssetsByExtension: ${options.stats.groupAssetsByExtension},
        groupAssetsByInfo: ${options.stats.groupAssetsByInfo},
        groupAssetsByPath: ${options.stats.groupAssetsByPath},
        groupModulesByAttributes: ${options.stats.groupModulesByAttributes},
        groupModulesByCacheStatus: ${options.stats.groupModulesByCacheStatus},
        groupModulesByExtension: ${options.stats.groupModulesByExtension},
        groupModulesByLayer: ${options.stats.groupModulesByLayer},
        groupModulesByPath: ${options.stats.groupModulesByPath},
        groupModulesByType: ${options.stats.groupModulesByType},
        groupReasonsByOrigin: ${options.stats.groupReasonsByOrigin},
        cachedAssets: ${options.stats.cachedAssets},
        children: ${options.stats.children},
        chunks: ${options.stats.chunks},
        chunkGroups: ${options.stats.chunkGroups},
        chunkModules: ${options.stats.chunkModules},
        chunkOrigins: ${options.stats.chunkOrigins},
        chunkModules: ${options.stats.chunkModules},
        chunkOrigins: ${options.stats.chunkOrigins},
        chunksSort: ${options.stats.chunksSort},
        context: ${options.stats.context},
        colors: ${options.stats.colors},
        depth: ${options.stats.depth},
        entrypoints: ${options.stats.entrypoints},
        env: ${options.stats.env},
        orphanModules: ${options.stats.orphanModules},
        errors: ${options.stats.errors},
        errorDetails: ${options.stats.errorDetails},
        errorStack: ${options.stats.excludeAssets},
        excludeAssets: ${options.stats.excludeAssets}
        excludeModules: ${options.stats.excludeModules},
        hash: ${options.stats.hash},
        logging: ${options.stats.logging},
        loggingDebug: ${options.stats.loggingDebug},
        loggingTrace: ${options.stats.loggingTrace},
        modules: ${options.stats.modules},
        modulesSort: ${options.stats.modulesSort},
        moduleTrace: ${options.stats.moduleTrace},
        optimizationBailout: ${options.stats.optimizationBailout},
        outputPath: ${options.stats.outputPath},
        performance: ${options.stats.performance},
        preset: ${options.stats.preset},
        providedExports: ${options.stats.providedExports},
        errorsCount: ${options.stats.errorsCount},
        warningsCount: ${options.stats.warningsCount},
        publicPath: ${options.stats.publicPath},
        reasons: ${options.stats.reasons},
        reasonsSpace: ${options.stats.reasonsSpace},
        relatedAassets: ${options.stats.relatedAssets},
        source: ${options.stats.source},
        timings: ${options.stats.timings},
        ids: ${options.stats.ids},
        usedExports: ${options.stats.usedExports},
        version: ${options.stats.version},
        chunkGroupAuxiliary: ${options.stats.chunkGroupAuxiliary},
        chunkGroupChildren: ${options.stats.chunkGroupChildren},
        chunkGroupMaxAssets: ${options.stats.chunkGroupMaxAssets},
        warnings: ${options.stats.warnings}
      },
      excludeAssets: ${options.excludeAssets},
      logLevel: ${options.logLevel}
    })
  `;
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
  setBundleAnalyzerSupport,
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
