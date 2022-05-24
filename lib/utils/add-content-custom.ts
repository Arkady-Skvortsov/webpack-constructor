import { outputDir, setEnvironmentVariables } from "./answers";
import {
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
  setAutomaticPrefechPlugin,
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
      ${
        options.isCoffeScriptSupport
          ? setCoffeeScript(options.isCoffeScriptSupport)
          : parseString("")
      }
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
      ${
        options.isXmlSupport
          ? setXmlLoader(options.isXmlSupport)
          : parseString("")
      }
      ${
        options.isYamlSupport
          ? setYamlLoader(options.isYamlSupport)
          : parseString("")
      }
      ${
        options.isCsvSupport
          ? setCsvLoader(options.isCsvSupport)
          : parseString("")
      }
      ${
        options.isImageSupport
          ? setImageExtensions(
              options.isImageSupport,
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
      ? setCacheSupport(
          options.isCacheWebpackSupport,
          options.cacheOptionsSettings
        )
      : parseString("")
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
    ${
      options.isClosureSupport
        ? setClosureLibrary(options.isClosureSupport)
        : parseString("")
    }
    ${
      options.isEnvironmentalVariablesSupport
        ? setEnvironmentVariables(options.isEnvironmentalVariablesSupport)
        : parseString("")
    }
    ${
      options.isSplitBundlesThroughDLLSupport
        ? setDLLPlugin(
            options.isSplitBundlesThroughDLLSupport,
            options.dllOptions
          )
        : parseString("")
    }
    ${setCleanWebpackPlugin(options.isCleanPluginSUpport)}
    ${setI18nPlugin(options.isLocalizeSupport)}
    ${
      options.isCreateChromeProfileFileSupport
        ? setProfillingPlugin(options.isCreateChromeProfileFileSupport)
        : parseString("")
    }
    ${
      options.isIgnoreSomeFilesSupport
        ? setIgnorePlugin(options.isIgnoreSomeFilesSupport)
        : parseString("")
    }
    ${setIntegrationWebpack(options.integrationSupport)}
    ${
      options.isHMRSupport
        ? setHMRPlugin(options.isHMRSupport)
        : parseString("")
    }
    ${
      options.isCompressionSupport
        ? setCompressionPlugin(
            options.isCompressionSupport,
            options.compressionOptions
          )
        : parseString("")
    }
    ${setCopyWebpackPlugin(options.isCopyPluginSupport)}
    ${setWebpackNotifierPlugin(mode)}
    ${
      options.isHashModuleSupport
        ? setHashModuleIds(
            options.isHashModuleSupport,
            options.hashModuleIdsSupport
          )
        : parseString("")
    }
    ${
      options.isEnvironmentalVariablesSupport
        ? setEnvironmentPlugin(
            options.isEnvironmentalVariablesSupport,
            options.environmentVariable
          )
        : parseString("")
    }
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
