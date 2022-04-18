import {
  cssLoader,
  fontsExtensions,
  htmlLoader,
  integrationWebpack,
  questionResponse,
  staticLoader,
  version,
  webpackMode,
} from "./types";

interface webpackConfig {
  devMode: "production" | "development";
  context: string;
  entryPoint: string;
  aliasPath: string;
  htmlTemplate?: string;
  htmlTitle?: string;
  LintTypescriptFilesPath?: string;
  tslintFilePath?: string;
  outputFolder: string;
  devPort: number;
  watchFiles: string;
}

interface customWebpackConfig {
  context: string;
  entryPoint: string;
  aliasPath: string;
  isCoffeScriptSupport: questionResponse;
  isHtmlPreprocessorSupport: questionResponse;
  htmlPreprocessor: htmlLoader;
  htmlTemplate?: string;
  htmlTitle?: string;
  LintTypescriptFilesPath?: string;
  tslintFilePath?: string;
  isCssPreprocessorSupport: questionResponse;
  cssPreprocessors: cssLoader;
  staticLoader: staticLoader;
  isImageSupport: questionResponse;
  imageExtensionsSupport: string;
  isFontsSupport: questionResponse;
  fontsExtensionsSupport: fontsExtensions;
  isXmlSupport: questionResponse;
  isYamlSupport: questionResponse;
  isCsvSupport: questionResponse;
  fileLoaderSupport: string;
  isLazyLoadingSupport: questionResponse;
  isAvoidErrorStyleSupport: questionResponse;
  isCacheWebpackSupport: questionResponse;
  isSplittingChunksSupport: questionResponse;
  minimumChunkSizeSupport: string;
  maximumChunkSizeSupport: string;
  isPwaAnswer: questionResponse;
  isBannerSupport: questionResponse;
  isClosureSupport: questionResponse;
  isGlobalVariableSupport: questionResponse;
  globalVariable: globalVariable;
  isSplitBundlesThroughDLLSupport: questionResponse;
  dllOptions: dllOptions;
  isEnvironmentalVariablesSupport: questionResponse;
  environmentVariable: environmentVariable;
  isDiscoverPreviousCompilationSupport: questionResponse;
  isLocalizeSupport: questionResponse;
  localizeDetailsSupport: string;
  isCleanPluginSUpport: questionResponse;
  isCreateChromeProfileFileSupport: questionResponse;
  isIgnoreSomeFilesSupport: questionResponse;
  isIntegrationSupport: questionResponse;
  integrationSupport: integrationWebpack;
  isHMRSupport: questionResponse;
  isCompressionSupport: questionResponse;
  compressionOptions: compressionOptions;
  isCopyPluginSupport: questionResponse;
  isCopyStaticFilesSupport: questionResponse;
  copyOptions?: copyOptions;
  filesCatalogesCopySupport: string;
  fontsOutputDirectory: string;
  outputDirectory: string;
  isDevServerSupport: questionResponse;
  devMode: webpackMode;
}

interface compressionOptions {
  level: number;
  threshold: number;
  ratio: number;
}

interface copyOptions {
  from: string;
  to: string;
}

interface dllOptions {
  name: string;
  path: string;
  manifest: string;
}

interface environmentVariable {
  name: any;
  value: any;
}

interface globalVariable {
  name: any;
  value: any;
}

export {
  webpackConfig,
  customWebpackConfig,
  compressionOptions,
  copyOptions,
  dllOptions,
  environmentVariable,
  globalVariable,
};
