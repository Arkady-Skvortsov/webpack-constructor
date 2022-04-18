import { outputDir } from "./answers";
import { optimizeProductionCSS, optimizeProductionHTML, setTerserPlugin, } from "./dev-mode";
import { setCacheSupport } from "./helpers/cache";
import { generateConstants } from "./helpers/constants";
import { setPackOfExtensions } from "./helpers/extensions";
import { langLoader, setCoffeeScript, setCssPreprocessorLoader, setCsvLoader, setFontsExtensions, setHtmlLoader, setImageExtensions, setXmlLoader, setYamlLoader, } from "./helpers/loaders";
import { setHMRPlugin, setWebpackNotifierPlugin, LinterChoose, isHtmlWebpackPlugin, setCleanWebpackPlugin, setClosureLibrary, setCompressionPlugin, setCopyWebpackPlugin, setDLLPlugin, setEnvironmentPlugin, setI18nPlugin, setIgnorePlugin, setIntegrationWebpack, setProfillingPlugin, } from "./helpers/plugins";
import { setAlias, setEntryPoint, setSourceMaps } from "./webpack-set.content";
function addContentToCustom(presetType, mode, options) {
    return `
${generateConstants(presetType, options.devMode)}
module.exports = {
  context: path.resolve(__dirname, "${options.context}"),
  mode: "${options.devMode}",
  entry: ${setEntryPoint(options.entryPoint)},
  devtool: "${setSourceMaps(options.devMode)}",
  module: {
    rules: [
      ${langLoader(presetType)}
      ${setCoffeeScript(options.isCoffeScriptSupport)}
      ${setHtmlLoader(options.htmlPreprocessor, presetType)}
      ${setCssPreprocessorLoader(options.cssPreprocessors, mode, presetType)}
      ${setXmlLoader(options.isXmlSupport)}
      ${setYamlLoader(options.isYamlSupport)}
      ${setCsvLoader(options.isCsvSupport)}
      ${setImageExtensions(options.isImageSupport, options.imageExtensionsSupport, options.staticLoader)}
      ${setFontsExtensions(options.fontsExtensionsSupport, options.staticLoader, options.fontsOutputDirectory)}
    ]
  },
  cache: {
    ${setCacheSupport()}
  },
  resolve: {
    alias: {
      ${setAlias(options.aliasPath)}
    },
    extensions: [
      ${setPackOfExtensions(".ts .tsx .css .sass .scss .html .png .woff .ttf")}
    ]
  },
  plugins: [
    ${isHtmlWebpackPlugin(presetType, options)}
    ${LinterChoose(presetType, options)}
    ${setClosureLibrary(options.isClosureSupport)}
    ${setEnvironmentPlugin(options.isEnvironmentalVariablesSupport, options.environmentVariable)}
    ${setDLLPlugin(options.isSplitBundlesThroughDLLSupport, options.dllOptions)}
   
    ${setCleanWebpackPlugin(options.isCleanPluginSUpport)}
    ${setI18nPlugin(options.isLocalizeSupport)}
    ${setProfillingPlugin(options.isCreateChromeProfileFileSupport)}
    ${setIgnorePlugin(options.isIgnoreSomeFilesSupport)}
    ${setIntegrationWebpack(options.integrationSupport)}
    ${setHMRPlugin(options.isHMRSupport)}
    ${setCompressionPlugin(options.isCompressionSupport, options.compressionOptions)}
    ${setCopyWebpackPlugin(options.isCopyPluginSupport)}
    ${setWebpackNotifierPlugin(mode)}
  ],
  optimization: {
    minimizer: [
      ${optimizeProductionCSS(options.devMode)}
      ${optimizeProductionHTML(options.devMode)}
      ${setTerserPlugin(options.devMode)}
    ]
  },
  output: {
    ${outputDir()}
  }
};
  `;
}
export { addContentToCustom };
//# sourceMappingURL=add-content-custom.js.map