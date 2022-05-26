import {
  bundleAnalyzerDefaultSizes,
  bundleAnalyzerLogLevel,
  bundleAnalyzerMode,
  cacheCompression,
  cacheType,
  cssLoader,
  fontsExtensions,
  htmlLoader,
  integrationWebpack,
  questionResponse,
  staticLoader,
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
  isLinterSupport: questionResponse;
  esLintOptions: esLintOptions;
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
  avoidErrorStyleSupport: avoidErrorsOptions;
  isBundleAnalyzer: questionResponse;
  bundleAnalyzerOptions: bundleAnalyzerOptions;
  isCacheWebpackSupport: questionResponse;
  cacheTypeOptionsSupport: cacheType;
  cacheOptionsSettings: cacheOptions;
  isSplittingChunksSupport: questionResponse;
  splittingChunks: splitChunksOptions;
  minimumChunkSizeSupport: string;
  maximumChunkSizeSupport: string;
  isPwaAnswer: questionResponse;
  isBannerSupport: questionResponse;
  bannerOptionsSupport: bannerOptions;
  isPrefetchSupport: questionResponse;
  prefetchOptionsSupport: prefetchOptions;
  isAutomaticPrefetchSupport: questionResponse;
  isClosureSupport: questionResponse;
  isGlobalVariableSupport: questionResponse;
  isMinifyJsonFiles?: questionResponse;
  optimizeJsonFiles: minifyJSONOptions;
  globalVariable: globalVariable;
  isSplitBundlesThroughDLLSupport: questionResponse;
  dllOptions: dllOptions;
  isEnvironmentalVariablesSupport: questionResponse;
  environmentVariable: environmentVariable;
  isDiscoverPreviousCompilationSupport: questionResponse;
  isLocalizeSupport: questionResponse;
  localizeDetailsSupport: string;
  isCleanPluginSUpport: questionResponse;
  cleanPluginSupport: cleanBuildOptions;
  isCreateChromeProfileFileSupport: questionResponse;
  isIgnoreSomeFilesSupport: questionResponse;
  isIntegrationSupport: questionResponse;
  integrationSupport: integrationWebpack;
  isHMRSupport: questionResponse;
  isHashModuleSupport: questionResponse;
  hashModuleIdsSupport: hashModuleIdsSupport;
  isCompressionSupport: questionResponse;
  compressionOptions: compressionOptions;
  isCopyPluginSupport: questionResponse;
  isCopyStaticFilesSupport: questionResponse;
  copyOptions?: copyPluginOptions;
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

interface esLintOptions {
  context: any;
  eslintPath: any;
  extensions: any;
  exclude: any;
  files: any;
  fix: any;
  lintDirtyModulesOnly: any;
  threads: any;
  emitError: any;
  emitWarning: any;
  failOnError: any;
  failOnWarning: any;
  quiet: any;
}

interface tsLintOptions {
  files: string;
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

interface hashModuleIdsSupport {
  context: any;
  hashFunction: any;
  hashDigest: any;
  hashDigestLegnth: any;
}

interface globalVariable {
  name: any;
  value: any;
}

interface environmentVariable {
  name: any;
  value: any;
}

interface splitChunksOptions {
  chunks: any;
  minSize: any;
  maxSize: any;
  minRemainingSize: any;
  minChunks: any;
  maxAsyncRequests: any;
  maxAsyncSize: any;
  maxInitialRequests: any;
  enforceSizeThreshold: any;
  cacheGroups: {
    defaultVendors: {
      filename: any;
      test: any;
      priority: any;
      reuseExistingChunk: any;
      idHint: any;
    };
  };
}

interface bannerOptions {
  banner: any;
  raw: any;
  entryOnly: any;
  test: any;
  include: any;
  exclude: any;
  footer: any;
}

interface prefetchOptions {
  context: any;
  request: any;
}

interface closureOptions {
  mode: string;
  test: any;
  formatting: any;
  debug: any;
  renaming: any;
  output: any;
  extraCommandArgs: any;
}

interface bundleAnalyzerOptions {
  analyzerMode: bundleAnalyzerMode;
  analyzerHost: string;
  analyzerPort: number;
  reportFilename: string;
  reportTitle: string;
  defaultSizes: bundleAnalyzerDefaultSizes;
  openAnalyzer: boolean;
  generateStatsFile: boolean;
  statsFilename: string;
  statsOptions: {
    all: any;
    assets: boolean;
    assetsSort: string;
    builtAt: boolean;
    moduleAssets: boolean;
    assetsSpace: any;
    modulesSpace: any;
    chunkModulesSpace: any;
    nestedModules: any;
    nestedModulesSpace: any;
    cached: boolean;
    runtimeModules: boolean;
    dependentModules: any;
    groupAssetsByChunk: boolean;
    groupAssetsByEmitStatus: boolean;
    groupAssetsByExtension: boolean;
    groupAssetsByInfo: boolean;
    groupAssetsByPath: boolean;
    groupModulesByAttributes: boolean;
    groupModulesByCacheStatus: boolean;
    groupModulesByExtesion: boolean;
    groupModulesByLayer: boolean;
    groupModulesByPath: boolean;
    groupModulesByType: boolean;
    groupReasonsByOrigin: boolean;
    cachedAssets: boolean;
    children: boolean;
    chunks: boolean;
    chunkGroups: boolean;
    chunkModules: boolean;
    chunkOrigins: boolean;
    chunksSort: string;
    context: string;
    colors: boolean;
    depth: boolean;
    entrypoints: boolean;
    env: boolean;
    orphanModules: boolean;
    errors: boolean;
    errorDetails: boolean;
    errorStack: boolean;
    excludeAssets: string[];
    excludeModules: string[];
    hash: boolean;
    logging: "none" | "info" | "error" | "warn" | "log" | "verbose";
    loggingDebug: string[];
    loggingTrace: boolean;
    modules: boolean;
    modulesSort: string;
    moduleTrace: boolean;
    optimizationBailout: boolean;
    outputPath: boolean;
    performance: boolean;
    preset: string | false;
    providedExports: boolean;
    errorsCount: boolean;
    warningsCount: boolean;
    publicPath: boolean;
    reasons: boolean;
    reasonsSpace: number;
    relatedAssets: boolean;
    source: boolean;
    timings: boolean;
    ids: boolean;
    usedExports: boolean;
    version: boolean;
    chunkGroupAuxiliary: boolean;
    chunkGroupChildren: boolean;
    chunkGroupMaxAssets: number;
    warnings: boolean;
  };
  excludeAssets: any;
  logLevel: bundleAnalyzerLogLevel;
}

interface copyPluginOptions {
  patterns: [
    {
      from: string;
      to: string;
      context: string;
      globOptions: {
        ignore: any[];
      };
      filter: any;
      toType: any;
      force: any;
      priority: any;
      cache: boolean;
      noErrorOnMissing: boolean;
    }
  ];
  options: {
    concurrency: number;
  };
}

interface cleanBuildOptions {
  dry: any;
  verbose: any;
  cleanStaleWebpackAssets: any;
  protectWebpackAssets: any;
  cleanOnceBeforeBuildPatterns: any;
  cleanAfterEveryBuildPatterns: any;
  dangerouslyAllowCleanPatternsOutsideProject: any;
}

interface minifyJSONOptions {
  test: any;
  include: any;
  exclude: any;
  minimizerOptions: {
    space: any;
  };
}

interface avoidErrorsOptions {
  context: any;
  exclude: any;
  extensions: any;
  files: any;
  fix: any;
  formatter: any;
  lintDirtyModulesOnly: any;
  stylelintPath: any;
  threads: any;
  emitError: any;
  emitWarning: any;
  failOnError: any;
  failOnWarning: any;
  quiet: any;
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
  copyPluginOptions,
  dllOptions,
  avoidErrorsOptions,
  esLintOptions,
  cleanBuildOptions,
  bannerOptions,
  splitChunksOptions,
  tsLintOptions,
  prefetchOptions,
  minifyJSONOptions,
  bundleAnalyzerOptions,
  hashModuleIdsSupport,
  environmentVariable,
  globalVariable,
  cacheOptions,
};
