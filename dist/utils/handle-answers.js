"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebpackConfigCustom = exports.WebpackConfigOptions = exports.firstChoose = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const start_1 = require("./start");
const webpack_set_content_1 = require("./webpack-set.content");
const add_content_preset_1 = require("./add-content-preset");
const answers_1 = require("./answers");
const add_content_custom_1 = require("./add-content-custom");
async function firstChoose() {
    await (0, start_1.start)();
    const basicChoose = await inquirer_1.default.prompt({
        name: "question_1",
        type: "list",
        message: "Are you want a basic preset or you want to create a custom?",
        choices: ["Preset", "Custom"],
    });
    await choosePreset(basicChoose.question_1);
}
exports.firstChoose = firstChoose;
async function choosePreset(type) {
    const presetChoose = await inquirer_1.default.prompt({
        name: "question_2",
        type: "list",
        message: "What do you want to choose from presets?",
        choices: ["Vue", "React", "Svelte", "Typescript", "Javascript"],
    });
    const webpackVersion = await inquirer_1.default.prompt({
        name: "question_3",
        type: "list",
        message: "What is the version of webpack do you want to use?",
        choices: ["4", "5"],
    });
    const webpackMode = await inquirer_1.default.prompt({
        name: "question_4",
        type: "list",
        message: "What is the development mode do you want for webpack ?",
        choices: ["development", "production"],
    });
    await handleAnswer(presetChoose.question_2, webpackMode.question_4, webpackVersion.question_3, type);
}
async function handleAnswer(presetOptions, mode, webpackVersion, type) {
    await (0, webpack_set_content_1.generateWebpackConfig)(presetOptions, mode, webpackVersion, type);
    process.exit(1);
}
async function checkPresetTsConfig(preset) {
    return preset === "Typescript"
        ? {
            tslintFilePath: await inquirer_1.default.prompt({
                name: "question_12",
                type: "input",
                message: "What is the path to you'r tslint.json file (default: ./tslint.json)?",
                default: "./tslint.json",
            }),
        }
        : void 0;
}
async function checkPresetFrameworkConfig(preset) {
    return ["Vue", "React", "Svelte"].includes(preset)
        ? {
            langForFramework: await inquirer_1.default.prompt({
                name: "question_12",
                type: "list",
                message: "What is the language you want to select for that framework ?",
                choices: ["Javascript", "Typescript"],
            }),
        }
        : void 0;
}
async function checkPresetHTML(preset, text) {
    return ["React", "Vue", "Svelte"].includes(preset)
        ? {
            htmlTitle: await inquirer_1.default.prompt({
                name: "question_6",
                type: "input",
                message: "What is the title do you want in html page (example: Hello world) ?",
                default: "Hello world",
            }),
            htmlTemplate: await inquirer_1.default.prompt({
                name: "question_7",
                type: "input",
                message: `What is the html template would be in webpack config (example: ${text}/main.html) ?`,
            }),
        }
        : void 0;
}
async function WebpackConfigCustom(presetType, mode) {
    const contextPrintWrite = await (0, answers_1.contextAnswer)();
    const entryPointWrite = await (0, answers_1.entryPointsAnswer)(presetType, contextPrintWrite.question_context);
    const setAliasPathes = await (0, answers_1.setAliasAnswer)(contextPrintWrite.question_context);
    const checkLangPreset = await checkPresetFrameworkConfig(presetType);
    const isCoffescriptSupport = await (0, answers_1.supportFromCoffeScriptAnswer)();
    const isHtmlPreprocessorSupport = await (0, answers_1.isHtmlPreprocessorAnswer)();
    const htmlPreprocessors = await (0, answers_1.htmlPreprocessorsAnswer)(isHtmlPreprocessorSupport.question_is_html_preprocessor);
    const isCssPreprocessor = await (0, answers_1.isCssPreprocessorsAnswer)();
    const cssPreprocessorsSupport = await (0, answers_1.cssPreprocessors)(isCssPreprocessor.question_is_css_preprocessor);
    const isStaticLoaderSupport = await (0, answers_1.staticLoader)();
    const chooseStaticFilesLoaderSupport = await (0, answers_1.chooseStaticFilesLoader)(isStaticLoaderSupport.question_static_loader);
    const isImageExtension = await (0, answers_1.isImageExtensionAnswer)();
    const imageExtensionsSupport = await (0, answers_1.imageExtensions)(isImageExtension.question_is_image_extensions);
    const isFontsSupport = await (0, answers_1.isFontsAnswer)();
    const fontsExtensionsSupport = await (0, answers_1.fontsExtensions)(isFontsSupport.is_fonts);
    const fontsOutDirSupport = await (0, answers_1.fontsOutDir)(isFontsSupport.is_fonts);
    const isXmlSupport = await (0, answers_1.isXmlExtension)();
    const isYamlSupport = await (0, answers_1.isYamlExtension)();
    const isCsvSupport = await (0, answers_1.isCsvExtension)();
    const isLazyLoadingSupport = await (0, answers_1.isLazyLoading)();
    const isAvoidErrorStylesSupport = await (0, answers_1.isAvoidErrorStyles)();
    const isCacheWebpackSupport = await (0, answers_1.isCacheWebpack)();
    const isSplittingChunksSupport = await (0, answers_1.isSplittingChunks)();
    const isPwaAnswer = await (0, answers_1.isPwaSupport)();
    const isBannerSupport = await (0, answers_1.addingBannerToChunk)(isSplittingChunksSupport.question_is_splitting_chunks);
    const isClosureLibrarySupport = await (0, answers_1.isClosureLibrary)();
    const isGlobalVariableSupport = await (0, answers_1.isGlobalVariableAnswer)();
    const SetGlobalVariableSupport = await (0, answers_1.setGlobalVariable)(isGlobalVariableSupport.question_is_global_variable_answer);
    const isSplitBundlesThroughDLLSupport = await (0, answers_1.isSplitBundlesThroughDLL)();
    const supportSplitBundlesDLL = await (0, answers_1.supportSplitBundlesThroughDLL)(isSplitBundlesThroughDLLSupport.question_is_split_bundles_dll);
    const isEnvironmentVariablesSupport = await (0, answers_1.isEnvironmentVariables)();
    const setEnvironmentVariableNameAndValueSupport = await (0, answers_1.setEnvironmentVariables)(isEnvironmentVariablesSupport.question_environment_variables);
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
    const isCopyStaticFilesSupport = await (0, answers_1.isCopyStaticFiles)();
    const setFilesCatalogesCopySupport = await (0, answers_1.setFilesCatalogesCopy)(isCopyStaticFilesSupport.is_copy_static_files);
    const setOutputDirectory = await (0, answers_1.outputDir)();
    const isDevServerSupport = await (0, answers_1.isDevServerAnswer)();
    return (0, add_content_custom_1.addContentToCustom)(presetType, mode, {
        context: contextPrintWrite.question_context,
        entryPoint: entryPointWrite.entry_point,
        aliasPath: setAliasPathes.set_alias,
        isCoffeScriptSupport: isCoffescriptSupport.question_coffe_script,
        isHtmlPreprocessorSupport: isHtmlPreprocessorSupport.question_is_html_preprocessor,
        htmlPreprocessor: htmlPreprocessors?.question_html_preprocessor,
        tslintFilePath: checkLangPreset?.langForFramework.question_12,
        isCssPreprocessorSupport: isCssPreprocessor.question_is_css_preprocessor,
        cssPreprocessors: cssPreprocessorsSupport?.question_css_preprocessor,
        staticLoader: setFilesCatalogesCopySupport?.set_files_cataloges_copy,
        isImageSupport: isImageExtension.question_is_image_extensions,
        imageExtensionsSupport: imageExtensionsSupport?.question_image_extensions,
        isFontsSupport: isFontsSupport.is_fonts,
        fontsExtensionsSupport: fontsExtensionsSupport?.question_fonts_extensions,
        fontsOutputDirectory: fontsOutDirSupport?.question_fonts_dir,
        isXmlSupport: isXmlSupport.question_xml_exension,
        isYamlSupport: isYamlSupport.question_yaml_extension,
        isCsvSupport: isCsvSupport.question_csv_extension,
        fileLoaderSupport: chooseStaticFilesLoaderSupport?.question_is_choose_static_loader,
        isLazyLoadingSupport: isLazyLoadingSupport.is_lazy_loading,
        isAvoidErrorStyleSupport: isAvoidErrorStylesSupport.is_avoid_error_styles,
        isCacheWebpackSupport: isCacheWebpackSupport.cache_webpack,
        isSplittingChunksSupport: isSplittingChunksSupport.question_is_splitting_chunks,
        minimumChunkSizeSupport: setMinimumChunkSizeSupport?.question_minimum_chunk_size,
        maximumChunkSizeSupport: setMaximumChunkSizeSupport?.question_maximum_chunk_size,
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
        isCopyStaticFilesSupport: isCopyStaticFilesSupport.is_copy_static_files,
        filesCatalogesCopySupport: setFilesCatalogesCopySupport?.set_files_cataloges_copy,
        outputDirectory: setOutputDirectory.question_output_dir,
        isDevServerSupport: isDevServerSupport.is_dev_server,
        devMode: mode,
    });
}
exports.WebpackConfigCustom = WebpackConfigCustom;
async function WebpackConfigOptions(presetType, mode) {
    const contextPointWrite = await (0, answers_1.contextAnswer)();
    const entryPointWrite = await (0, answers_1.entryPointsAnswer)(presetType, contextPointWrite.question_context);
    const aliasPathWrite = await (0, answers_1.setAliasAnswer)(contextPointWrite.question_context);
    const portWrite = await inquirer_1.default.prompt({
        name: "question_8",
        type: "input",
        message: "What is the port would be in Dev Server (default: 3500) ?",
        default: 3500,
    });
    const outputFolder = await (0, answers_1.outputDir)();
    const htmlPreset = await checkPresetHTML(presetType, contextPointWrite.question_context);
    const checkLangPreset = await checkPresetFrameworkConfig(presetType);
    const checkTsConfigPreset = await checkPresetTsConfig(checkLangPreset?.langForFramework.question_12);
    const watchFilesPath = await inquirer_1.default.prompt({
        name: "question_13",
        type: "input",
        message: `What is the folder with files do you want to watch for changes with starting devServer (example: ${contextPointWrite.question_context}/html) ?`,
        default: `${contextPointWrite.question_context}/html`,
    });
    return (0, add_content_preset_1.addContentToPreset)(presetType, {
        context: contextPointWrite.question_context,
        entryPoint: entryPointWrite.entry_point,
        aliasPath: aliasPathWrite.set_alias,
        devPort: portWrite.question_8,
        htmlTitle: htmlPreset?.htmlTitle.question_6,
        htmlTemplate: htmlPreset?.htmlTemplate.question_7,
        tslintFilePath: checkTsConfigPreset?.tslintFilePath.question_12,
        outputFolder: outputFolder.question_output_dir,
        watchFiles: watchFilesPath.question_13,
        devMode: mode,
    });
}
exports.WebpackConfigOptions = WebpackConfigOptions;
//# sourceMappingURL=handle-answers.js.map