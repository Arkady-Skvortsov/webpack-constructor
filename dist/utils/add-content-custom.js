"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContentToCustom = void 0;
const answers_1 = require("./answers");
const dev_mode_1 = require("./dev-mode");
const cache_1 = require("./helpers/cache");
const constants_1 = require("./helpers/constants");
const extensions_1 = require("./helpers/extensions");
const loaders_1 = require("./helpers/loaders");
const plugins_1 = require("./helpers/plugins");
const webpack_set_content_1 = require("./webpack-set.content");
function addContentToCustom(presetType, mode, options) {
    return `
${(0, constants_1.generateConstants)(presetType, options.devMode)}
module.exports = {
  context: path.resolve(__dirname, "${options.context}"),
  mode: "${options.devMode}",
  entry: ${(0, webpack_set_content_1.setEntryPoint)(options.entryPoint)},
  devtool: "${(0, webpack_set_content_1.setSourceMaps)(options.devMode)}",
  module: {
    rules: [
      ${(0, loaders_1.langLoader)(presetType)}
      ${(0, loaders_1.setCoffeeScript)(options.isCoffeScriptSupport)}
      ${(0, loaders_1.setHtmlLoader)(options.htmlPreprocessor, presetType)}
      ${(0, loaders_1.setCssPreprocessorLoader)(options.cssPreprocessors, mode, presetType)}
      ${(0, loaders_1.setXmlLoader)(options.isXmlSupport)}
      ${(0, loaders_1.setYamlLoader)(options.isYamlSupport)}
      ${(0, loaders_1.setCsvLoader)(options.isCsvSupport)}
      ${(0, loaders_1.setImageExtensions)(options.isImageSupport, options.imageExtensionsSupport, options.staticLoader)}
      ${(0, loaders_1.setFontsExtensions)(options.fontsExtensionsSupport, options.staticLoader, options.fontsOutputDirectory)}
    ]
  },
  cache: {
    ${(0, cache_1.setCacheSupport)()}
  },
  resolve: {
    alias: {
      ${(0, webpack_set_content_1.setAlias)(options.aliasPath)}
    },
    extensions: [
      ${(0, extensions_1.setPackOfExtensions)(".ts .tsx .css .sass .scss .html .png .woff .ttf")}
    ]
  },
  plugins: [
    ${(0, plugins_1.isHtmlWebpackPlugin)(presetType, options)}
    ${(0, plugins_1.LinterChoose)(presetType, options)}
    ${(0, plugins_1.setClosureLibrary)(options.isClosureSupport)}
    ${(0, plugins_1.setEnvironmentPlugin)(options.isEnvironmentalVariablesSupport, options.environmentVariable)}
    ${(0, plugins_1.setDLLPlugin)(options.isSplitBundlesThroughDLLSupport, options.dllOptions)}
   
    ${(0, plugins_1.setCleanWebpackPlugin)(options.isCleanPluginSUpport)}
    ${(0, plugins_1.setI18nPlugin)(options.isLocalizeSupport)}
    ${(0, plugins_1.setProfillingPlugin)(options.isCreateChromeProfileFileSupport)}
    ${(0, plugins_1.setIgnorePlugin)(options.isIgnoreSomeFilesSupport)}
    ${(0, plugins_1.setIntegrationWebpack)(options.integrationSupport)}
    ${(0, plugins_1.setHMRPlugin)(options.isHMRSupport)}
    ${(0, plugins_1.setCompressionPlugin)(options.isCompressionSupport, options.compressionOptions)}
    ${(0, plugins_1.setCopyWebpackPlugin)(options.isCopyPluginSupport)}
    ${(0, plugins_1.setWebpackNotifierPlugin)(mode)}
  ],
  optimization: {
    minimizer: [
      ${(0, dev_mode_1.optimizeProductionCSS)(options.devMode)}
      ${(0, dev_mode_1.optimizeProductionHTML)(options.devMode)}
      ${(0, dev_mode_1.setTerserPlugin)(options.devMode)}
    ]
  },
  output: {
    ${(0, answers_1.outputDir)()}
  }
};
  `;
}
exports.addContentToCustom = addContentToCustom;
//# sourceMappingURL=add-content-custom.js.map