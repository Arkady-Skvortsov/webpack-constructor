"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebpackConfigCustom = exports.WebpackConfigOptions = exports.firstChoose = void 0;
const start_1 = require("./start");
const webpack_set_content_1 = require("./webpack-set.content");
const add_content_preset_1 = require("./add-content-preset");
const answers_1 = require("./answers");
const add_content_custom_1 = require("./add-content-custom");
async function firstChoose() {
    await (0, start_1.start)();
    const basic = await (0, answers_1.basicChoose)();
    await choosePreset(basic.question_basic_choose);
}
exports.firstChoose = firstChoose;
async function choosePreset(type) {
    const presetChoose = await (0, answers_1.chooseBasicPreset)();
    const webpackVersion = await (0, answers_1.chooseWebpackVersion)();
    const webpackMode = await (0, answers_1.chooseWebpackMode)();
    await handleAnswer(presetChoose.question_choose_basic_preset, webpackMode.question_is_webpack_mode, webpackVersion.question_webpack_version, type);
}
async function handleAnswer(presetOptions, mode, webpackVersion, type) {
    await (0, webpack_set_content_1.generateWebpackConfig)(presetOptions, mode, webpackVersion, type);
    process.exit(1);
}
async function WebpackConfigCustom(presetType, mode) {
    const contextPrintWrite = await (0, answers_1.contextAnswer)();
    const checkLangPreset = await (0, answers_1.checkPresetFrameworkConfig)(presetType);
    const entryPointWrite = await (0, answers_1.entryPointsAnswer)(presetType, contextPrintWrite.question_context, checkLangPreset?.langForFramework.question_preset_framework_config);
    const setAliasPathes = await (0, answers_1.setAliasAnswer)(contextPrintWrite.question_context);
    const isCoffescriptSupport = await (0, answers_1.supportFromCoffeScriptAnswer)();
    const isHtmlPreprocessorSupport = await (0, answers_1.isHtmlPreprocessorAnswer)();
    const htmlPreprocessors = await (0, answers_1.htmlPreprocessorsAnswer)(isHtmlPreprocessorSupport.question_is_html_preprocessor);
    const isCssPreprocessor = await (0, answers_1.isCssPreprocessorsAnswer)();
    const cssPreprocessorsSupport = await (0, answers_1.cssPreprocessors)(isCssPreprocessor.question_is_css_preprocessor);
    const isStaticLoaderSupport = await (0, answers_1.staticLoader)();
    const chooseStaticFilesLoaderSupport = await (0, answers_1.chooseStaticFilesLoader)(isStaticLoaderSupport.question_static_loader);
    const isImageExtension = await (0, answers_1.isImageExtensionAnswer)();
    const imageExtensionsSupport = await (0, answers_1.imageExtensions)(isImageExtension.question_is_image_extensions);
    const imageOutDirSupport = await (0, answers_1.imagesOutDir)(isImageExtension.question_is_image_extensions);
    const isFontsSupport = await (0, answers_1.isFontsAnswer)();
    const fontsExtensionsSupport = await (0, answers_1.fontsExtensions)(isFontsSupport.is_fonts);
    const fontsOutDirSupport = await (0, answers_1.fontsOutDir)(isFontsSupport.is_fonts);
    const isLinterSupport = await (0, answers_1.isLinter)();
    const isLinterTypeSupport = await (0, answers_1.isLinterType)(isLinterSupport.question_set_linter_support, checkLangPreset?.langForFramework.question_preset_framework_config);
    const setUpEslintSupport = await (0, answers_1.setUpEslint)(isLinterSupport.question_set_linter_support);
    const isHashModulePathSupport = await (0, answers_1.isHashModulePath)();
    const detailsOfHashModule = await (0, answers_1.hashModuleIdsSupport)(isHashModulePathSupport.question_is_hash_module_path);
    const isXmlSupport = await (0, answers_1.isXmlExtension)();
    const isYamlSupport = await (0, answers_1.isYamlExtension)();
    const isCsvSupport = await (0, answers_1.isCsvExtension)();
    const isJsonMinifySupport = await (0, answers_1.isMinifyJSONFiles)();
    const minimizeJsonFilesSupport = await (0, answers_1.minifyJSONOptions)(isJsonMinifySupport.question_is_minify_json_files);
    const isLazyLoadingSupport = await (0, answers_1.isLazyLoading)();
    const isAvoidErrorStylesSupport = await (0, answers_1.isAvoidErrorStyles)();
    const avoidErrorStylesSupport = await (0, answers_1.avoidErrorsOptions)(isAvoidErrorStylesSupport.is_avoid_error_styles);
    const isSplittingChunksSupport = await (0, answers_1.isSplittingChunks)();
    const splittingChunksOptions = await (0, answers_1.splitChunksWebpack)(isSplittingChunksSupport.question_is_splitting_chunks);
    const isPwaAnswer = await (0, answers_1.isPwaSupport)();
    const isBannerSupport = await (0, answers_1.addingBannerToChunk)(isSplittingChunksSupport.question_is_splitting_chunks);
    const isClosureLibrarySupport = await (0, answers_1.isClosureLibrary)();
    const isGlobalVariableSupport = await (0, answers_1.isGlobalVariableAnswer)();
    const SetGlobalVariableSupport = await (0, answers_1.setGlobalVariable)(isGlobalVariableSupport.question_is_global_variable_answer);
    const isCacheSupport = await (0, answers_1.isCacheWebpack)();
    const cacheTypeOptionsSupport = await (0, answers_1.cacheTypeOptions)(isCacheSupport.cache_webpack);
    const cacheOptions = await (0, answers_1.ChooseCacheOptions)(cacheTypeOptionsSupport?.question_cache_type);
    const isSplitBundlesThroughDLLSupport = await (0, answers_1.isSplitBundlesThroughDLL)();
    const supportSplitBundlesDLL = await (0, answers_1.supportSplitBundlesThroughDLL)(isSplitBundlesThroughDLLSupport.question_is_split_bundles_dll);
    const isEnvironmentVariablesSupport = await (0, answers_1.isEnvironmentVariables)();
    const setEnvironmentVariableNameAndValueSupport = await (0, answers_1.setEnvironmentVariables)();
    const isDiscoverPreviousCompilationSupport = await (0, answers_1.isDiscoverPreviousCompilation)();
    const isLocalizeSupport = await (0, answers_1.isLocalizeAnswer)();
    const setLocalizeDetailsSupport = await (0, answers_1.setLocalizeDetails)(isLocalizeSupport.question_is_localize);
    const setMinimumChunkSizeSupport = await (0, answers_1.setMinimumChunkSize)(isSplittingChunksSupport.question_is_splitting_chunks);
    const setMaximumChunkSizeSupport = await (0, answers_1.setMaximumChunkSize)(isSplittingChunksSupport.question_is_splitting_chunks);
    const isCreateChromeProfileFileSupport = await (0, answers_1.isCreateChromeProfileFile)();
    const isIgnoreSomeFilesSupport = await (0, answers_1.isIgnoreSomeFiles)();
    const isIntegrationSupport = await (0, answers_1.isIntegrationInstrument)();
    const setIntegrationSupport = await (0, answers_1.integrationInstruments)(isIntegrationSupport.question_is_integration);
    const isHMRSupport = await (0, answers_1.isHMRAnswer)();
    const isCompressionSupport = await (0, answers_1.isCompressionAnswer)();
    const setCompressionOptionsSupport = await (0, answers_1.setCompressionOptions)(isCompressionSupport.question_is_compression_answer);
    const isCopyPluginSupport = await (0, answers_1.isCopyPlugin)();
    const isCleanPluginSupport = await (0, answers_1.isCleanPlugin)();
    const cleanPluginSupport = await (0, answers_1.cleanPluginSetup)(isCleanPluginSupport.question_is_clean_plugin);
    const isCopyStaticFilesSupport = await (0, answers_1.isCopyStaticFiles)();
    const setFilesCatalogesCopySupport = await (0, answers_1.setFilesCatalogesCopy)(isCopyStaticFilesSupport.is_copy_static_files);
    const setOutputDirectory = await (0, answers_1.outputDir)();
    const isDevServerSupport = await (0, answers_1.isDevServerAnswer)();
    const devServerPortSupport = await (0, answers_1.devServerPort)();
    const customConf = {
        context: contextPrintWrite.question_context,
        entryPoint: entryPointWrite.entry_point,
        aliasPath: setAliasPathes.set_alias,
        isCoffeScriptSupport: isCoffescriptSupport.question_coffe_script,
        isHtmlPreprocessorSupport: isHtmlPreprocessorSupport.question_is_html_preprocessor,
        htmlPreprocessor: htmlPreprocessors?.question_html_preprocessor,
        tslintFilePath: checkLangPreset?.langForFramework.question_preset_framework_config,
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
        fileLoaderSupport: chooseStaticFilesLoaderSupport?.question_is_choose_static_loader,
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
        isSplittingChunksSupport: isSplittingChunksSupport.question_is_splitting_chunks,
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
                    reuseExistingChunk: splittingChunksOptions?.cacheGroups.defaultVendors
                        .reuseExistingChunk,
                    idHint: splittingChunksOptions?.cacheGroups.defaultVendors.idHint,
                },
            },
        },
        minimumChunkSizeSupport: setMinimumChunkSizeSupport?.question_minimum_chunk_size,
        maximumChunkSizeSupport: setMaximumChunkSizeSupport?.question_maximum_chunk_size,
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
        isClosureSupport: isClosureLibrarySupport.question_closure_library,
        isGlobalVariableSupport: isGlobalVariableSupport.question_is_global_variable_answer,
        globalVariable: {
            name: SetGlobalVariableSupport?.name,
            value: SetGlobalVariableSupport?.value,
        },
        isSplitBundlesThroughDLLSupport: isSplitBundlesThroughDLLSupport.question_is_split_bundles_dll,
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
            allowCollectingMemory: cacheOptions?.allowCollectingMemory?.question_allow_collecting_memory,
            cacheDirectory: cacheOptions?.cacheDirectory?.question_cache_directory,
            cacheLocation: cacheOptions?.cacheLocation?.question_cache_location,
            compression: cacheOptions?.compression?.question_cache_compression,
            hashAlgorithm: cacheOptions?.hashAlgorithm?.question_cache_hash_algorithm,
            idleTimeout: cacheOptions?.idleTimeout?.question_cache_idle_timeout,
            idleTimeoutForInitialStore: cacheOptions?.idleTimeoutForInitialStore
                ?.question_cache_idle_timeout_for_initial_store,
            idleTimeoutAfterLargeChanges: cacheOptions?.idleTimeoutAfterLargeChanges
                ?.question_cache_idle_timeout_after_large_changes,
            maxAge: cacheOptions?.maxAge?.question_cache_max_age,
            maxGenerations: cacheOptions?.maxGenerations?.question_cache_max_generations,
            maxMemoryGenerations: cacheOptions?.maxMemoryGenerations?.question_cache_memory_generations,
            profile: cacheOptions?.profile?.question_cache_profile,
            store: cacheOptions?.store?.question_cache_store,
            version: cacheOptions?.version?.question_cache_version,
        },
        isEnvironmentalVariablesSupport: isEnvironmentVariablesSupport.question_environment_variables,
        environmentVariable: {
            name: setEnvironmentVariableNameAndValueSupport?.name
                .set_environment_names,
            value: setEnvironmentVariableNameAndValueSupport?.value.set_environment_values,
        },
        isDiscoverPreviousCompilationSupport: isDiscoverPreviousCompilationSupport.question_discover_previous_compilation,
        isLocalizeSupport: isLocalizeSupport.question_is_localize,
        localizeDetailsSupport: setLocalizeDetailsSupport?.question_set_localize_details,
        isCreateChromeProfileFileSupport: isCreateChromeProfileFileSupport.question_is_create_chrome_profile_file,
        isIgnoreSomeFilesSupport: isIgnoreSomeFilesSupport.question_is_ignore_some_files,
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
            lintDirtyModulesOnly: isLinterTypeSupport?.linDirtyModulesOnly
                .question_is_lin_dirty_modules_only,
            threads: isLinterTypeSupport?.threads.question_is_threads,
            emitError: isLinterTypeSupport?.emitError.question_is_emit_error,
            emitWarning: isLinterTypeSupport?.emitWarning.question_is_emit_warning,
            failOnError: isLinterTypeSupport?.failOnError.question_is_fail_on_error,
            failOnWarning: isLinterTypeSupport?.failOnWarning.question_is_fail_on_warning,
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
            level: setCompressionOptionsSupport?.compressionLevel
                .question_compression_level,
            ratio: setCompressionOptionsSupport?.ratio
                .question_set_level_ratio_compression,
            threshold: setCompressionOptionsSupport?.threshold.question_threshold_level,
        },
        isCopyPluginSupport: isCopyPluginSupport.question_is_copy_plugin,
        isCleanPluginSUpport: isCleanPluginSupport.question_is_clean_plugin,
        cleanPluginSupport: {
            dry: cleanPluginSupport?.dry,
            verbose: cleanPluginSupport?.verbose,
            cleanStaleWebpackAssets: cleanPluginSupport?.cleanStaleWebpackAssets,
            protectWebpackAssets: cleanPluginSupport?.protectWebpackAssets,
            cleanOnceBeforeBuildPatterns: cleanPluginSupport?.cleanOnceBeforeBuildPlugin,
            cleanAfterEveryBuildPatterns: cleanPluginSupport?.cleanAfterEveryBuildPatterns,
            dangerouslyAllowCleanPatternsOutsideProject: cleanPluginSupport?.dangerouslyAllowCleanPatternsOutsideProject,
        },
        isCopyStaticFilesSupport: isCopyStaticFilesSupport.is_copy_static_files,
        filesCatalogesCopySupport: setFilesCatalogesCopySupport?.set_files_cataloges_copy,
        outputDirectory: setOutputDirectory.question_output_dir,
        isDevServerSupport: isDevServerSupport.is_dev_server,
        devServerPort: devServerPortSupport.question_dev_server_port,
        devMode: mode,
    };
    return (0, add_content_custom_1.addContentToCustom)(presetType, mode, customConf) ?? customConf;
}
exports.WebpackConfigCustom = WebpackConfigCustom;
async function WebpackConfigOptions(presetType, mode) {
    const contextPointWrite = await (0, answers_1.contextAnswer)();
    const checkLangPreset = await (0, answers_1.checkPresetFrameworkConfig)(presetType);
    const entryPointWrite = await (0, answers_1.entryPointsAnswer)(presetType, contextPointWrite.question_context, checkLangPreset?.langForFramework.question_preset_framework_config);
    const aliasPathWrite = await (0, answers_1.setAliasAnswer)(contextPointWrite.question_context);
    const portWrite = await (0, answers_1.devServerPort)();
    const outputFolder = await (0, answers_1.outputDir)();
    const htmlPreset = await (0, answers_1.checkPresetHTML)(presetType, contextPointWrite.question_context);
    const checkTsConfigPreset = await (0, answers_1.checkPresetTsConfig)(checkLangPreset?.langForFramework.question_preset_framework_config);
    const watchFilesPath = await (0, answers_1.chooseWatchFiles)(contextPointWrite.question_context);
    return (0, add_content_preset_1.addContentToPreset)(presetType, {
        context: contextPointWrite.question_context,
        entryPoint: entryPointWrite.entry_point,
        aliasPath: aliasPathWrite.set_alias,
        devPort: portWrite.question_dev_server_port,
        htmlTitle: htmlPreset?.htmlTitle.question_preset_html,
        htmlTemplate: htmlPreset?.htmlTemplate.question_7,
        tslintFilePath: checkTsConfigPreset?.tslintFilePath.question_check_preset_ts_config,
        outputFolder: outputFolder.question_output_dir,
        watchFiles: watchFilesPath.question_13,
        devMode: mode,
    });
}
exports.WebpackConfigOptions = WebpackConfigOptions;
//# sourceMappingURL=handle-answers.js.map