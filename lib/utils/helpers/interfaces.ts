import { questionResponse, version, webpackMode } from "./types";

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
  htmlPreprocessor: string;
  htmlTemplate?: string;
  htmlTitle?: string;
  isCssPreprocessorSupport: questionResponse;
  cssPreprocessors: string;
  isImageSupport: questionResponse;
  imageExtensionsSupport: string;
  isFontsSupport: questionResponse;
  fontsExtensionsSupport: string;
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
  globalVariableName: string;
  globalVariableValue: string;
  isSplitBundlesThroughDLLSupport: questionResponse;
  splitBundlesThroughDLLContextSupport: string;
  manifestBundlesThroughDLLSupport: string;
  isEnvironmentalVariablesSupport: questionResponse;
  environmentVariableName: string;
  environmentVariableValue: string;
  isDiscoverPreviousCompilationSupport: questionResponse;
  isLocalizeSupport: questionResponse;
  localizeDetailsSupport: string;
  isCreateChromeProfileFileSupport: questionResponse;
  isIgnoreSomeFilesSupport: questionResponse;
  isIntegrationSupport: questionResponse;
  integrationSupport: string;
  isHMRSupport: questionResponse;
  isCompressionSupport: questionResponse;
  compressionLevelSupport: string;
  compressionRatioSupport: string;
  isCopyStaticFilesSupport: questionResponse;
  filesCatalogesCopySupport: string;
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

export { webpackConfig, customWebpackConfig, compressionOptions, copyOptions };
