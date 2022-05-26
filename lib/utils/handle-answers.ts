import { basicTypes, version, webpackMode } from "./helpers/types";
import { start } from "./start";
import { preset } from "./helpers/enum";
import { generateWebpackConfig } from "./webpack-set.content";
import { addContentToPreset } from "./add-content-preset";
import {
  setCompressionOptions,
  contextAnswer,
  cssPreprocessors,
  entryPointsAnswer,
  fontsExtensions,
  chooseStaticFilesLoader,
  htmlPreprocessorsAnswer,
  imageExtensions,
  integrationInstruments,
  isAvoidErrorStyles,
  isCacheWebpack,
  isClosureLibrary,
  isCompressionAnswer,
  isCopyStaticFiles,
  isCreateChromeProfileFile,
  isCssPreprocessorsAnswer,
  isCsvExtension,
  isDevServerAnswer,
  isDiscoverPreviousCompilation,
  isEnvironmentVariables,
  isFontsAnswer,
  isGlobalVariableAnswer,
  isHMRAnswer,
  isHtmlPreprocessorAnswer,
  isIgnoreSomeFiles,
  isImageExtensionAnswer,
  isIntegrationInstrument,
  isLazyLoading,
  isLocalizeAnswer,
  isPwaSupport,
  isSplitBundlesThroughDLL,
  isSplittingChunks,
  isXmlExtension,
  isYamlExtension,
  outputDir,
  setAliasAnswer,
  setEnvironmentVariables,
  setFilesCatalogesCopy,
  setGlobalVariable,
  setLocalizeDetails,
  setMaximumChunkSize,
  setMinimumChunkSize,
  supportFromCoffeScriptAnswer,
  supportSplitBundlesThroughDLL,
  staticLoader,
  isCopyPlugin,
  isCleanPlugin,
  fontsOutDir,
  checkPresetFrameworkConfig,
  basicChoose,
  chooseBasicPreset,
  chooseWebpackVersion,
  chooseWebpackMode,
  devServerPort,
  checkPresetTsConfig,
  checkPresetHTML,
  chooseWatchFiles,
  ChooseCacheOptions,
  imagesOutDir,
  isLinter,
  setUpEslint,
  isHashModulePath,
  hashModuleIdsSupport,
  isLinterType,
  cacheTypeOptions,
  isMinifyJSONFiles,
  minifyJSONOptions,
  splitChunksWebpack,
  avoidErrorsOptions,
  cleanPluginSetup,
  isBannerPlugin,
  bannerOptionsSupport,
  isPrefetch,
  prefetchOptionsSupport,
  isAutomaticPrefetch,
} from "./answers";
import { addContentToCustom } from "./add-content-custom";
import { customWebpackConfig } from "./helpers/interfaces";
import { setHashModuleIds } from "./helpers/plugins";
import { optimizeJSONFiles } from "./dev-mode";

async function firstChoose() {
  await start();

  const basic = await basicChoose();

  await choosePreset(basic.question_basic_choose);
}

async function choosePreset(type: basicTypes) {
  const presetChoose = await chooseBasicPreset();

  const webpackVersion = await chooseWebpackVersion();

  const webpackMode = await chooseWebpackMode();

  await handleAnswer(
    presetChoose.question_choose_basic_preset,
    webpackMode.question_is_webpack_mode,
    webpackVersion.question_webpack_version,
    type
  );
}

async function handleAnswer(
  presetOptions: preset,
  mode: webpackMode,
  webpackVersion: version,
  type: basicTypes
) {
  await generateWebpackConfig(presetOptions, mode, webpackVersion, type);
  process.exit(1);
}

async function WebpackConfigCustom(presetType: preset, mode: webpackMode) {
  const contextPrintWrite = await contextAnswer();
  const checkLangPreset = await checkPresetFrameworkConfig(presetType);
  const entryPointWrite = await entryPointsAnswer(
    presetType,
    contextPrintWrite.question_context,
    checkLangPreset?.langForFramework.question_preset_framework_config
  );
  const setAliasPathes = await setAliasAnswer(
    contextPrintWrite.question_context
  );
  const isCoffescriptSupport = await supportFromCoffeScriptAnswer();
  const isHtmlPreprocessorSupport = await isHtmlPreprocessorAnswer();
  const htmlPreprocessors = await htmlPreprocessorsAnswer(
    isHtmlPreprocessorSupport.question_is_html_preprocessor
  );
  const isCssPreprocessor = await isCssPreprocessorsAnswer();
  const cssPreprocessorsSupport = await cssPreprocessors(
    isCssPreprocessor.question_is_css_preprocessor
  );
  const isStaticLoaderSupport = await staticLoader();
  const chooseStaticFilesLoaderSupport = await chooseStaticFilesLoader(
    isStaticLoaderSupport.question_static_loader
  );
  const isImageExtension = await isImageExtensionAnswer();
  const imageExtensionsSupport = await imageExtensions(
    isImageExtension.question_is_image_extensions
  );
  const imageOutDirSupport = await imagesOutDir(
    isImageExtension.question_is_image_extensions
  );
  const isFontsSupport = await isFontsAnswer();
  const fontsExtensionsSupport = await fontsExtensions(isFontsSupport.is_fonts);
  const fontsOutDirSupport = await fontsOutDir(isFontsSupport.is_fonts);
  const isLinterSupport = await isLinter();
  const isLinterTypeSupport = await isLinterType(
    isLinterSupport.question_set_linter_support,
    checkLangPreset?.langForFramework.question_preset_framework_config
  );
  const setUpEslintSupport = await setUpEslint(
    isLinterSupport.question_set_linter_support
  );
  const isHashModulePathSupport = await isHashModulePath();
  const detailsOfHashModule = await hashModuleIdsSupport(
    isHashModulePathSupport.question_is_hash_module_path
  );
  const isXmlSupport = await isXmlExtension();
  const isYamlSupport = await isYamlExtension();
  const isCsvSupport = await isCsvExtension();
  const isJsonMinifySupport = await isMinifyJSONFiles();
  const minimizeJsonFilesSupport = await minifyJSONOptions(
    isJsonMinifySupport.question_is_minify_json_files
  );
  const isLazyLoadingSupport = await isLazyLoading();
  const isAvoidErrorStylesSupport = await isAvoidErrorStyles();
  const avoidErrorStylesSupport = await avoidErrorsOptions(
    isAvoidErrorStylesSupport.is_avoid_error_styles
  );
  const isSplittingChunksSupport = await isSplittingChunks();
  const splittingChunksOptions = await splitChunksWebpack(
    isSplittingChunksSupport.question_is_splitting_chunks
  );
  const isPwaAnswer = await isPwaSupport();
  const isBannerSupport = await isBannerPlugin();
  const bannerPluginSupport = await bannerOptionsSupport(
    isBannerSupport.question_adding_banner_to_chunk
  );
  const isPrefetchSupport = await isPrefetch();
  const prefetchPluginSupport = await prefetchOptionsSupport(
    isPrefetchSupport.question_is_prefetch_plugin
  );
  const isAutomaticPrefetchSupport = await isAutomaticPrefetch();
  const isClosureLibrarySupport = await isClosureLibrary();
  const isGlobalVariableSupport = await isGlobalVariableAnswer();
  const SetGlobalVariableSupport = await setGlobalVariable(
    isGlobalVariableSupport.question_is_global_variable_answer
  );
  const isCacheSupport = await isCacheWebpack();
  const cacheTypeOptionsSupport = await cacheTypeOptions(
    isCacheSupport.cache_webpack
  );
  const cacheOptions = await ChooseCacheOptions(
    cacheTypeOptionsSupport?.question_cache_type
  );
  const isSplitBundlesThroughDLLSupport = await isSplitBundlesThroughDLL();
  const supportSplitBundlesDLL = await supportSplitBundlesThroughDLL(
    isSplitBundlesThroughDLLSupport.question_is_split_bundles_dll
  );
  const isEnvironmentVariablesSupport = await isEnvironmentVariables();
  const setEnvironmentVariableNameAndValueSupport =
    await setEnvironmentVariables();
  const isDiscoverPreviousCompilationSupport =
    await isDiscoverPreviousCompilation();
  const isLocalizeSupport = await isLocalizeAnswer();
  const setLocalizeDetailsSupport = await setLocalizeDetails(
    isLocalizeSupport.question_is_localize
  );
  const setMinimumChunkSizeSupport = await setMinimumChunkSize(
    isSplittingChunksSupport.question_is_splitting_chunks
  );
  const setMaximumChunkSizeSupport = await setMaximumChunkSize(
    isSplittingChunksSupport.question_is_splitting_chunks
  );
  const isCreateChromeProfileFileSupport = await isCreateChromeProfileFile();
  const isIgnoreSomeFilesSupport = await isIgnoreSomeFiles();
  const isIntegrationSupport = await isIntegrationInstrument();
  const setIntegrationSupport = await integrationInstruments(
    isIntegrationSupport.question_is_integration
  );
  const isHMRSupport = await isHMRAnswer();
  const isCompressionSupport = await isCompressionAnswer();
  const setCompressionOptionsSupport = await setCompressionOptions(
    isCompressionSupport.question_is_compression_answer
  );
  const isCopyPluginSupport = await isCopyPlugin();
  const isCleanPluginSupport = await isCleanPlugin();
  const cleanPluginSupport = await cleanPluginSetup(
    isCleanPluginSupport.question_is_clean_plugin
  );
  const isCopyStaticFilesSupport = await isCopyStaticFiles();
  const setFilesCatalogesCopySupport = await setFilesCatalogesCopy(
    isCopyStaticFilesSupport.is_copy_static_files
  );
  const setOutputDirectory = await outputDir();
  const isDevServerSupport = await isDevServerAnswer();
  const devServerPortSupport = await devServerPort();

  const customConf: customWebpackConfig = {
    context: contextPrintWrite.question_context,
    entryPoint: entryPointWrite.entry_point,
    aliasPath: setAliasPathes.set_alias,
    isCoffeScriptSupport: isCoffescriptSupport.question_coffe_script,
    isHtmlPreprocessorSupport:
      isHtmlPreprocessorSupport.question_is_html_preprocessor,
    htmlPreprocessor: htmlPreprocessors?.question_html_preprocessor,
    tslintFilePath:
      checkLangPreset?.langForFramework.question_preset_framework_config,
    isCssPreprocessorSupport: isCssPreprocessor.question_is_css_preprocessor,
    cssPreprocessors: cssPreprocessorsSupport?.question_css_preprocessor,
    staticLoader: setFilesCatalogesCopySupport?.set_files_cataloges_copy,
    isImageSupport: isImageExtension.question_is_image_extensions,
    imageExtensionsSupport: imageExtensionsSupport?.question_image_extensions,
    imagesOutputDirectory: imageOutDirSupport?.question_images_dir,
    isFontsSupport: isFontsSupport.is_fonts,
    fontsExtensionsSupport: fontsExtensionsSupport?.question_fonts_extensions,
    fontsOutputDirectory: fontsOutDirSupport?.question_fonts_dir,
    isXmlSupport: isXmlSupport.question_xml_exension,
    isYamlSupport: isYamlSupport.question_yaml_extension,
    isCsvSupport: isCsvSupport.question_csv_extension,
    fileLoaderSupport:
      chooseStaticFilesLoaderSupport?.question_is_choose_static_loader,
    isLazyLoadingSupport: isLazyLoadingSupport.is_lazy_loading,
    isAvoidErrorStyleSupport: isAvoidErrorStylesSupport.is_avoid_error_styles,
    avoidErrorStyleSupport: {
      context: avoidErrorStylesSupport?.context,
      exclude: avoidErrorStylesSupport?.exclude,
      extensions: avoidErrorStylesSupport?.extensions,
      files: avoidErrorStylesSupport?.files,
      fix: avoidErrorStylesSupport?.fix,
      formatter: avoidErrorStylesSupport?.formatter,
      lintDirtyModulesOnly: avoidErrorStylesSupport?.lintDirtyModulesOnly,
      stylelintPath: avoidErrorStylesSupport?.stylelintPath,
      threads: avoidErrorStylesSupport?.threads,
      emitError: avoidErrorStylesSupport?.emitError,
      emitWarning: avoidErrorStylesSupport?.emitWarning,
      failOnError: avoidErrorStylesSupport?.failOnError,
      failOnWarning: avoidErrorStylesSupport?.failOnWarning,
      quiet: avoidErrorStylesSupport?.quiet,
    },
    isSplittingChunksSupport:
      isSplittingChunksSupport.question_is_splitting_chunks,
    splittingChunks: {
      chunks: splittingChunksOptions?.chunks,
      minSize: splittingChunksOptions?.minSize,
      maxSize: splittingChunksOptions?.maxSize,
      minRemainingSize: splittingChunksOptions?.minRemainingSize,
      minChunks: splittingChunksOptions?.minChunks,
      maxAsyncRequests: splittingChunksOptions?.maxAsyncRequests,
      maxAsyncSize: splittingChunksOptions?.maxAsyncSize,
      maxInitialRequests: splittingChunksOptions?.maxInitialRequests,
      enforceSizeThreshold: splittingChunksOptions?.enforceSizeThreshold,
      cacheGroups: {
        defaultVendors: {
          filename: splittingChunksOptions?.cacheGroups.defaultVendors.filename,
          test: splittingChunksOptions?.cacheGroups.defaultVendors.test,
          priority: splittingChunksOptions?.cacheGroups.defaultVendors.priority,
          reuseExistingChunk:
            splittingChunksOptions?.cacheGroups.defaultVendors
              .reuseExistingChunk,
          idHint: splittingChunksOptions?.cacheGroups.defaultVendors.idHint,
        },
      },
    },
    minimumChunkSizeSupport:
      setMinimumChunkSizeSupport?.question_minimum_chunk_size,
    maximumChunkSizeSupport:
      setMaximumChunkSizeSupport?.question_maximum_chunk_size,
    isMinifyJsonFiles: isJsonMinifySupport.question_is_minify_json_files,
    optimizeJsonFiles: {
      test: minimizeJsonFilesSupport?.test,
      include: minimizeJsonFilesSupport?.include,
      exclude: minimizeJsonFilesSupport?.exclude,
      minimizerOptions: {
        space: minimizeJsonFilesSupport?.minimizerOptions.space,
      },
    },
    isPwaAnswer: isPwaAnswer.question_build_pwa,
    isBannerSupport: isBannerSupport?.question_adding_banner_to_chunk,
    bannerOptionsSupport: {
      banner: bannerPluginSupport?.banner,
      raw: bannerPluginSupport?.raw,
      entryOnly: bannerPluginSupport?.entryOnly,
      test: bannerPluginSupport?.test,
      include: bannerPluginSupport?.include,
      exclude: bannerPluginSupport?.exclude,
      footer: bannerPluginSupport?.footer,
    },
    isPrefetchSupport: isPrefetchSupport.question_is_prefetch_plugin,
    prefetchOptionsSupport: {
      context: prefetchPluginSupport?.context,
      request: prefetchPluginSupport?.request,
    },
    isAutomaticPrefetchSupport:
      isAutomaticPrefetchSupport.question_automatic_prefetch,
    isClosureSupport: isClosureLibrarySupport.question_closure_library,
    isGlobalVariableSupport:
      isGlobalVariableSupport.question_is_global_variable_answer,
    globalVariable: {
      name: SetGlobalVariableSupport?.name,
      value: SetGlobalVariableSupport?.value,
    },
    isSplitBundlesThroughDLLSupport:
      isSplitBundlesThroughDLLSupport.question_is_split_bundles_dll,
    dllOptions: {
      name: supportSplitBundlesDLL?.name.question_context_split_bundles_dll,
      path: supportSplitBundlesDLL?.path.question_path_to_files,
      manifest: supportSplitBundlesDLL?.manifest.question_path_to_manifest_dll,
    },
    isCacheWebpackSupport: isCacheSupport.cache_webpack,
    cacheTypeOptionsSupport: cacheTypeOptionsSupport?.question_cache_type,
    cacheOptionsSettings: {
      name: cacheOptions?.name?.question_cache_name,
      type: cacheTypeOptionsSupport?.question_cache_type,
      allowCollectingMemory:
        cacheOptions?.allowCollectingMemory?.question_allow_collecting_memory,
      cacheDirectory: cacheOptions?.cacheDirectory?.question_cache_directory,
      cacheLocation: cacheOptions?.cacheLocation?.question_cache_location,
      compression: cacheOptions?.compression?.question_cache_compression,
      hashAlgorithm: cacheOptions?.hashAlgorithm?.question_cache_hash_algorithm,
      idleTimeout: cacheOptions?.idleTimeout?.question_cache_idle_timeout,
      idleTimeoutForInitialStore:
        cacheOptions?.idleTimeoutForInitialStore
          ?.question_cache_idle_timeout_for_initial_store,
      idleTimeoutAfterLargeChanges:
        cacheOptions?.idleTimeoutAfterLargeChanges
          ?.question_cache_idle_timeout_after_large_changes,
      maxAge: cacheOptions?.maxAge?.question_cache_max_age,
      maxGenerations:
        cacheOptions?.maxGenerations?.question_cache_max_generations,
      maxMemoryGenerations:
        cacheOptions?.maxMemoryGenerations?.question_cache_memory_generations,
      profile: cacheOptions?.profile?.question_cache_profile,
      store: cacheOptions?.store?.question_cache_store,
      version: cacheOptions?.version?.question_cache_version,
    },
    isEnvironmentalVariablesSupport:
      isEnvironmentVariablesSupport.question_environment_variables,
    environmentVariable: {
      name: setEnvironmentVariableNameAndValueSupport?.name
        .set_environment_names,
      value:
        setEnvironmentVariableNameAndValueSupport?.value.set_environment_values,
    },
    isDiscoverPreviousCompilationSupport:
      isDiscoverPreviousCompilationSupport.question_discover_previous_compilation,
    isLocalizeSupport: isLocalizeSupport.question_is_localize,
    localizeDetailsSupport:
      setLocalizeDetailsSupport?.question_set_localize_details,
    isCreateChromeProfileFileSupport:
      isCreateChromeProfileFileSupport.question_is_create_chrome_profile_file,
    isIgnoreSomeFilesSupport:
      isIgnoreSomeFilesSupport.question_is_ignore_some_files,
    isIntegrationSupport: isIntegrationSupport.question_is_integration,
    integrationSupport: setIntegrationSupport?.question_integration_instrument,
    isHMRSupport: isHMRSupport.question_is_hmr,
    isLinterSupport: isLinterSupport.question_set_linter_support,
    esLintOptions: {
      context: isLinterTypeSupport?.context.question_is_context,
      eslintPath: isLinterTypeSupport?.eslintPath.question_is_eslint_path,
      extensions: isLinterTypeSupport?.extensions.question_eslint_extensions,
      exclude: isLinterTypeSupport?.exclude.question_is_exclude,
      files: isLinterTypeSupport?.files.question_is_files,
      fix: isLinterTypeSupport?.fix.question_is_fix,
      lintDirtyModulesOnly:
        isLinterTypeSupport?.linDirtyModulesOnly
          .question_is_lin_dirty_modules_only,
      threads: isLinterTypeSupport?.threads.question_is_threads,
      emitError: isLinterTypeSupport?.emitError.question_is_emit_error,
      emitWarning: isLinterTypeSupport?.emitWarning.question_is_emit_warning,
      failOnError: isLinterTypeSupport?.failOnError.question_is_fail_on_error,
      failOnWarning:
        isLinterTypeSupport?.failOnWarning.question_is_fail_on_warning,
      quiet: isLinterTypeSupport?.quiet.question_is_quiet,
    },
    isHashModuleSupport: isHashModulePathSupport.question_is_hash_module_path,
    hashModuleIdsSupport: {
      context: detailsOfHashModule?.context,
      hashFunction: detailsOfHashModule?.hashFunction,
      hashDigest: detailsOfHashModule?.hashDigest,
      hashDigestLegnth: detailsOfHashModule?.hashDigestLength,
    },
    isCompressionSupport: isCompressionSupport.question_is_compression_answer,
    compressionOptions: {
      level:
        setCompressionOptionsSupport?.compressionLevel
          .question_compression_level,
      ratio:
        setCompressionOptionsSupport?.ratio
          .question_set_level_ratio_compression,
      threshold:
        setCompressionOptionsSupport?.threshold.question_threshold_level,
    },
    isCopyPluginSupport: isCopyPluginSupport.question_is_copy_plugin,
    isCleanPluginSUpport: isCleanPluginSupport.question_is_clean_plugin,
    cleanPluginSupport: {
      dry: cleanPluginSupport?.dry,
      verbose: cleanPluginSupport?.verbose,
      cleanStaleWebpackAssets: cleanPluginSupport?.cleanStaleWebpackAssets,
      protectWebpackAssets: cleanPluginSupport?.protectWebpackAssets,
      cleanOnceBeforeBuildPatterns:
        cleanPluginSupport?.cleanOnceBeforeBuildPlugin,
      cleanAfterEveryBuildPatterns:
        cleanPluginSupport?.cleanAfterEveryBuildPatterns,
      dangerouslyAllowCleanPatternsOutsideProject:
        cleanPluginSupport?.dangerouslyAllowCleanPatternsOutsideProject,
    },
    isCopyStaticFilesSupport: isCopyStaticFilesSupport.is_copy_static_files,
    filesCatalogesCopySupport:
      setFilesCatalogesCopySupport?.set_files_cataloges_copy,
    outputDirectory: setOutputDirectory.question_output_dir,
    isDevServerSupport: isDevServerSupport.is_dev_server,
    devServerPort: devServerPortSupport.question_dev_server_port,
    devMode: mode,
  };

  return addContentToCustom(presetType, mode, customConf) ?? customConf;
}

async function WebpackConfigOptions(presetType: preset, mode: webpackMode) {
  const contextPointWrite = await contextAnswer();

  const checkLangPreset = await checkPresetFrameworkConfig(presetType);

  const entryPointWrite = await entryPointsAnswer(
    presetType,
    contextPointWrite.question_context,
    checkLangPreset?.langForFramework.question_preset_framework_config
  );

  const aliasPathWrite = await setAliasAnswer(
    contextPointWrite.question_context
  );

  const portWrite = await devServerPort();

  const outputFolder = await outputDir();

  const htmlPreset = await checkPresetHTML(
    presetType,
    contextPointWrite.question_context
  );

  const checkTsConfigPreset = await checkPresetTsConfig(
    checkLangPreset?.langForFramework.question_preset_framework_config
  );

  const watchFilesPath = await chooseWatchFiles(
    contextPointWrite.question_context
  );

  return addContentToPreset(presetType, {
    context: contextPointWrite.question_context,
    entryPoint: entryPointWrite.entry_point,
    aliasPath: aliasPathWrite.set_alias,
    devPort: portWrite.question_dev_server_port,
    htmlTitle: htmlPreset?.htmlTitle.question_preset_html,
    htmlTemplate: htmlPreset?.htmlTemplate.question_7,
    tslintFilePath:
      checkTsConfigPreset?.tslintFilePath.question_check_preset_ts_config,
    outputFolder: outputFolder.question_output_dir,
    watchFiles: watchFilesPath.question_13,
    devMode: mode,
  });
}

export { firstChoose, WebpackConfigOptions, WebpackConfigCustom };
