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
  isHtmlSupport: questionResponse;
  isHtmlPreprocessorSupport: questionResponse;
  htmlPreprocessor: htmlLoader;
  htmlTemplate?: string;
  htmlTitle?: string;
  isLinterSupport: questionResponse;
  esLintOptions: esLintOptions;
  LintTypescriptFilesPath?: string;
  tslintFilePath?: string;
  isCssSupport: questionResponse;
  isCssPreprocessorSupport: questionResponse;
  cssPreprocessors: cssLoader;
  staticLoader: staticLoader;
  isImageSupport: questionResponse;
  imageExtensionsSupport: string;
  isFontsSupport: questionResponse;
  fontsExtensionsSupport: fontsExtensions;
  isNodeModulesSupport: questionResponse;
  isTwigSupport: questionResponse;
  isLuaSupport: questionResponse;
  luaOptions: luaOptions;
  isElmSupport: questionResponse;
  elmOptions: elmOptions;
  isThreadSupport: questionResponse;
  threadOptions: threadOptions;
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
  stats: {
    all: any;
    assets: any;
    assetsSort: any;
    builtAt: any;
    moduleAssets: any;
    assetsSpace: any;
    modulesSpace: any;
    chunkModulesSpace: any;
    nestedModules: any;
    nestedModulesSpace: any;
    cachedModules: any;
    runtimeModules: any;
    dependentModules: any;
    groupAssetsByChunk: any;
    groupAssetsByEmitStatus: any;
    groupAssetsByExtension: any;
    groupAssetsByInfo: any;
    groupAssetsByPath: any;
    groupModulesByAttributes: any;
    groupModulesByCacheStatus: any;
    groupModulesByExtension: any;
    groupModulesByLayer: any;
    groupModulesByPath: any;
    groupModulesByType: any;
    groupReasonsByOrigin: any;
    cachedAssets: any;
    children: any;
    chunks: any;
    chunkGroups: any;
    chunkModules: any;
    chunkOrigins: any;
    chunksSort: any;
    context: any;
    colors: any;
    depth: any;
    entrypoints: any;
    env: any;
    orphanModules: any;
    errors: any;
    errorDetails: any;
    errorStack: any;
    excludeAssets: any;
    excludeModules: any;
    hash: any;
    logging: any;
    loggingDebug: any;
    loggingTrace: any;
    modules: any;
    modulesSort: any;
    moduleTrace: any;
    optimizationBailout: any;
    outputPath: any;
    performance: any;
    preset: any;
    providedExports: any;
    errorsCount: any;
    warningsCount: any;
    publicPath: any;
    reasons: any;
    reasonsSpace: any;
    relatedAssets: any;
    source: any;
    timings: any;
    ids: any;
    usedExports: any;
    version: any;
    chunkGroupAuxiliary: any;
    chunkGroupChildren: any;
    chunkGroupMaxAssets: any;
    warnings: any;
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

interface copyOptions {
  patterns: [
    {
      from: string;
      to: string;
      context: string;
      globOptions: {
        dot: boolean;
        gitignore: boolean;
        ignore: string[];
      };
      filter: (filepath: string) => boolean;
      toType: "dir" | "file" | "template";
      force: boolean;
      priority: number;
      transform: (input: string, absoluteFilename: string) => string;
      transformAll: (
        data: {
          data: Buffer;
          sourceFilename: string;
          absoluteFilename: string;
        }[]
      ) => any;
      noErrorOnMissing: boolean;
      info: {
        minimized: boolean;
      };
    }
  ];
  options: {
    concurrency: number;
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

interface threadOptions {
  workers: number;
  workerParallelJobs: number;
  workerNodeArgs: string[];
  poolRespawn: boolean;
  poolTimeout: number;
  poolParallelJobs: number;
  name: string;
}

interface luaOptions {
  strip: boolean;
}

interface elmOptions {
  optimize: boolean;
  debug: boolean;
  runtimeOptions: string[];
  files: string[];
}

interface cacheOptions {
  type: cacheType;
  name?: string;
  allowCollectingMemory?: boolean;
  cacheDirectory?: boolean;
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
  bundleAnalyzerOptions,
  cleanBuildOptions,
  bannerOptions,
  splitChunksOptions,
  tsLintOptions,
  luaOptions,
  elmOptions,
  prefetchOptions,
  minifyJSONOptions,
  hashModuleIdsSupport,
  environmentVariable,
  globalVariable,
  cacheOptions,
};
