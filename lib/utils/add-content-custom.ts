import {
  bannerOptionsSupport,
  outputDir,
  setEnvironmentVariables,
} from "./answers";
import {
  optimizeJSONFiles,
  optimizeProductionCSS,
  optimizeProductionHTML,
  setTerserPlugin,
} from "./dev-mode";
import { setCacheSupport } from "./helpers/cache";
import { generateConstants } from "./helpers/constants";
import { preset } from "./helpers/enum";
import { setPackOfExtensions } from "./helpers/extensions";
import { customWebpackConfig } from "./helpers/interfaces";
import {
  langLoader,
  setCoffeeScript,
  setCssPreprocessorLoader,
  setCsvLoader,
  setFontsExtensions,
  setHtmlLoader,
  setImageExtensions,
  setXmlLoader,
  setYamlLoader,
} from "./helpers/loaders";
import {
  setHMRPlugin,
  setWebpackNotifierPlugin,
  LinterChoose,
  isHtmlWebpackPlugin,
  setAutomaticPrefetchPlugin,
  setCleanWebpackPlugin,
  setClosureLibrary,
  setCompressionPlugin,
  setCopyWebpackPlugin,
  setDLLPlugin,
  setEnvironmentPlugin,
  setI18nPlugin,
  setIgnorePlugin,
  setIntegrationWebpack,
  setProfillingPlugin,
  setHashModuleIds,
  setAvoidStyleErrorPlugin,
  setBannerPlugin,
  setPrefetchPlugin,
} from "./helpers/plugins";
import { webpackMode } from "./helpers/types";
import { parseString } from "./text";
import { setAlias, setEntryPoint, setSourceMaps } from "./webpack-set.content";

function addContentToCustom(
  presetType: preset,
  mode: webpackMode,
  options: customWebpackConfig
) {
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
      ${options.isCoffeScriptSupport ? setCoffeeScript() : parseString("")}
      ${
        options.isHtmlPreprocessorSupport
          ? setHtmlLoader(options.htmlPreprocessor, presetType)
          : parseString("")
      }
      ${
        options.isCssPreprocessorSupport
          ? setCssPreprocessorLoader(options.cssPreprocessors, mode, presetType)
          : parseString("")
      }
      ${options.isXmlSupport ? setXmlLoader() : parseString("")}
      ${options.isYamlSupport ? setYamlLoader() : parseString("")}
      ${options.isCsvSupport ? setCsvLoader() : parseString("")}
      ${
        options.isImageSupport
          ? setImageExtensions(
              options.imageExtensionsSupport,
              options.staticLoader
            )
          : parseString("")
      }
      ${
        options.isFontsSupport
          ? setFontsExtensions(
              options.fontsExtensionsSupport,
              options.staticLoader,
              options.fontsOutputDirectory
            )
          : parseString("")
      }
    ]
  },
  ${
    options.isCacheWebpackSupport
      ? setCacheSupport(options.cacheOptionsSettings)
      : parseString("cache: false,")
  }
  resolve: {
    alias: {
      ${setAlias(options.aliasPath)}
    },
    extensions: [
      ${setPackOfExtensions(
        `${options.htmlPreprocessor}${options.cssPreprocessors}${
          options.htmlPreprocessor
        }${options.fontsExtensionsSupport}${options.imageExtensionsSupport}${
          options.isCsvSupport ? ".csv" : void 0
        }${options.isXmlSupport ? ".xml" : void 0}
        ${options.isYamlSupport ? ".yaml" : void 0}${
          options.isCoffeScriptSupport ? ".coffee" : void 0
        }`
      )}
    ]
  },
  plugins: [
    ${isHtmlWebpackPlugin(presetType, options)}
    ${LinterChoose(presetType, options)}
    ${options.isClosureSupport ? setClosureLibrary() : parseString("")}
    ${
      options.isEnvironmentalVariablesSupport
        ? setEnvironmentVariables()
        : parseString("")
    }
    ${
      options.isSplitBundlesThroughDLLSupport
        ? setDLLPlugin(options.dllOptions)
        : parseString("")
    }
    ${setI18nPlugin(options.isLocalizeSupport)}
    ${
      options.isCreateChromeProfileFileSupport
        ? setProfillingPlugin()
        : parseString("")
    }
    ${options.isIgnoreSomeFilesSupport ? setIgnorePlugin() : parseString("")}
    ${
      options.isIntegrationSupport
        ? setIntegrationWebpack(options.integrationSupport)
        : parseString("")
    }
    ${options.isHMRSupport ? setHMRPlugin() : parseString("")}
    ${
      options.isCompressionSupport
        ? setCompressionPlugin(options.compressionOptions)
        : parseString("")
    }
    ${
      options.devMode === "development"
        ? setWebpackNotifierPlugin()
        : parseString("")
    }
    ${
      options.isAutomaticPrefetchSupport
        ? setAutomaticPrefetchPlugin()
        : parseString("")
    }
    ${
      options.isHashModuleSupport
        ? setHashModuleIds(options.hashModuleIdsSupport)
        : parseString("")
    }
    ${
      options.isPrefetchSupport
        ? setPrefetchPlugin(options.prefetchOptionsSupport)
        : parseString("")
    }
    ${
      options.isAutomaticPrefetchSupport
        ? setAutomaticPrefetchPlugin()
        : parseString("")
    }
    ${
      options.isEnvironmentalVariablesSupport
        ? setEnvironmentPlugin(options.environmentVariable)
        : parseString("")
    }
    ${
      options.isAvoidErrorStyleSupport
        ? setAvoidStyleErrorPlugin(options.avoidErrorStyleSupport)
        : parseString("")
    }
    ${
      options.isCleanPluginSUpport
        ? setCleanWebpackPlugin(options.cleanPluginSupport)
        : parseString("")
    }
    ${options.isCopyPluginSupport ? setCopyWebpackPlugin() : parseString("")}
    ${
      options.isBannerSupport
        ? setBannerPlugin(options.bannerOptionsSupport)
        : parseString("")
    }
  ],
  optimization: {
    minimizer: [
      ${optimizeProductionCSS(options.devMode)}
      ${optimizeProductionHTML(options.devMode)}
      ${setTerserPlugin(options.devMode)}
      ${optimizeJSONFiles(options.devMode, options.optimizeJsonFiles)}
    ]
  },
  output: {
    ${outputDir()}
  }
};
  `;
}

export { addContentToCustom };
