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
const text_1 = require("./text");
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
      ${options.isCoffeScriptSupport ? (0, loaders_1.setCoffeeScript)() : (0, text_1.parseString)("")}
      ${options.isHtmlPreprocessorSupport
        ? (0, loaders_1.setHtmlLoader)(options.htmlPreprocessor, presetType)
        : (0, text_1.parseString)("")}
      ${options.isCssPreprocessorSupport
        ? (0, loaders_1.setCssPreprocessorLoader)(options.cssPreprocessors, mode, presetType)
        : (0, text_1.parseString)("")}
      ${options.isXmlSupport ? (0, loaders_1.setXmlLoader)() : (0, text_1.parseString)("")}
      ${options.isYamlSupport ? (0, loaders_1.setYamlLoader)() : (0, text_1.parseString)("")}
      ${options.isCsvSupport ? (0, loaders_1.setCsvLoader)() : (0, text_1.parseString)("")}
      ${options.isImageSupport
        ? (0, loaders_1.setImageExtensions)(options.imageExtensionsSupport, options.staticLoader)
        : (0, text_1.parseString)("")}
      ${options.isFontsSupport
        ? (0, loaders_1.setFontsExtensions)(options.fontsExtensionsSupport, options.staticLoader, options.fontsOutputDirectory)
        : (0, text_1.parseString)("")}
    ]
  },
  ${options.isCacheWebpackSupport
        ? (0, cache_1.setCacheSupport)(options.cacheOptionsSettings)
        : (0, text_1.parseString)("cache: false,")}
  resolve: {
    alias: {
      ${(0, webpack_set_content_1.setAlias)(options.aliasPath)}
    },
    extensions: [
      ${(0, extensions_1.setPackOfExtensions)(`${options.htmlPreprocessor}${options.cssPreprocessors}${options.htmlPreprocessor}${options.fontsExtensionsSupport}${options.imageExtensionsSupport}${options.isCsvSupport ? ".csv" : void 0}${options.isXmlSupport ? ".xml" : void 0}
        ${options.isYamlSupport ? ".yaml" : void 0}${options.isCoffeScriptSupport ? ".coffee" : void 0}`)}
    ]
  },
  plugins: [
    ${(0, plugins_1.isHtmlWebpackPlugin)(presetType, options)}
    ${(0, plugins_1.LinterChoose)(presetType, options)}
    ${options.isClosureSupport ? (0, plugins_1.setClosureLibrary)() : (0, text_1.parseString)("")}
    ${options.isEnvironmentalVariablesSupport
        ? (0, answers_1.setEnvironmentVariables)()
        : (0, text_1.parseString)("")}
    ${options.isSplitBundlesThroughDLLSupport
        ? (0, plugins_1.setDLLPlugin)(options.dllOptions)
        : (0, text_1.parseString)("")}
    ${(0, plugins_1.setI18nPlugin)(options.isLocalizeSupport)}
    ${options.isCreateChromeProfileFileSupport
        ? (0, plugins_1.setProfillingPlugin)()
        : (0, text_1.parseString)("")}
    ${options.isIgnoreSomeFilesSupport ? (0, plugins_1.setIgnorePlugin)() : (0, text_1.parseString)("")}
    ${options.isIntegrationSupport
        ? (0, plugins_1.setIntegrationWebpack)(options.integrationSupport)
        : (0, text_1.parseString)("")}
    ${options.isHMRSupport ? (0, plugins_1.setHMRPlugin)() : (0, text_1.parseString)("")}
    ${options.isCompressionSupport
        ? (0, plugins_1.setCompressionPlugin)(options.compressionOptions)
        : (0, text_1.parseString)("")}
    ${options.devMode === "development"
        ? (0, plugins_1.setWebpackNotifierPlugin)()
        : (0, text_1.parseString)("")}
    ${options.isHashModuleSupport
        ? (0, plugins_1.setHashModuleIds)(options.hashModuleIdsSupport)
        : (0, text_1.parseString)("")}
    ${options.isEnvironmentalVariablesSupport
        ? (0, plugins_1.setEnvironmentPlugin)(options.environmentVariable)
        : (0, text_1.parseString)("")}
    ${options.isAvoidErrorStyleSupport
        ? (0, plugins_1.setAvoidStyleErrorPlugin)(options.avoidErrorStyleSupport)
        : (0, text_1.parseString)("")}
    ${options.isCleanPluginSUpport
        ? (0, plugins_1.setCleanWebpackPlugin)(options.cleanPluginSupport)
        : (0, text_1.parseString)("")}
    ${options.isCopyPluginSupport ? (0, plugins_1.setCopyWebpackPlugin)() : (0, text_1.parseString)("")}
  ],
  optimization: {
    minimizer: [
      ${(0, dev_mode_1.optimizeProductionCSS)(options.devMode)}
      ${(0, dev_mode_1.optimizeProductionHTML)(options.devMode)}
      ${(0, dev_mode_1.setTerserPlugin)(options.devMode)}
      ${(0, dev_mode_1.optimizeJSONFiles)(options.devMode, options.optimizeJsonFiles)}
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