import {
  cacheCompression,
  cacheType,
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
  language?: "Typescript" | "Javascript";
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
  cacheOptionsSettings: cacheOptions;
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
  imagesOutputDirectory: string;
  outputDirectory: string;
  isDevServerSupport: questionResponse;
  devServerPort: number;
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

interface cacheOptions {
  type: cacheType;
  name?: string;
  allowCollectingMemory?: boolean;
  cacheDirectory?: string;
  cacheLocation: string;
  compression: cacheCompression;
  hashAlgorithm?: string;
  idleTimeout?: number;
  idleTimeoutAfterLargeChanges?: number;
  idleTimeoutForInitialStore?: number;
  maxAge?: number;
  maxGenerations?: any | 1;
  maxMemoryGenerations?: 0 | 1 | any;
  maxCacheUnaffected?: boolean;
  profile?: boolean;
  store?: "pack";
  version?: string;
}

export {
  webpackConfig,
  customWebpackConfig,
  compressionOptions,
  copyOptions,
  dllOptions,
  environmentVariable,
  globalVariable,
  cacheOptions,
};
