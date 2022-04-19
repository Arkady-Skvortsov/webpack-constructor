#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLocalizeAnswer = exports.setEnvironmentVariables = exports.setFilesCatalogesCopy = exports.isCopyStaticFiles = exports.isEnvironmentVariables = exports.chooseStaticFilesLoader = exports.isClosureLibrary = exports.addingBannerToChunk = exports.isCleanPlugin = exports.isCopyPlugin = exports.fontsOutDir = exports.isSplittingChunks = exports.isDiscoverPreviousCompilation = exports.supportSplitBundlesThroughDLL = exports.isSplitBundlesThroughDLL = exports.isFontsExtensionAnswer = exports.isImageExtensionAnswer = exports.isHtmlPreprocessorAnswer = exports.isCssPreprocessorsAnswer = exports.isCsvExtension = exports.cssPreprocessors = exports.contextAnswer = exports.isCacheWebpack = exports.isXmlExtension = exports.htmlPreprocessorsAnswer = exports.fontsExtensions = exports.isLazyLoading = exports.isImagesAnswer = exports.isFontsAnswer = exports.isDevServerAnswer = exports.checkPresetFrameworkConfig = exports.checkPresetHTML = exports.chooseWebpackMode = exports.chooseWebpackVersion = exports.chooseBasicPreset = exports.checkPresetTsConfig = exports.fontsDir = exports.devServerPort = exports.chooseWatchFiles = exports.isAvoidErrorStyles = exports.basicChoose = exports.isPwaSupport = exports.imageExtensions = exports.isYamlExtension = exports.entryPointsAnswer = exports.supportFromCoffeScriptAnswer = exports.staticLoader = exports.splitChunksWebpack = exports.outputDir = exports.integrationInstruments = void 0;
exports.isIgnoreSomeFilesWatchMode = exports.setFilesForIgnoreInWatchMode = exports.setFilesForIgnore = exports.setAliasAnswer = exports.setMinimumChunkSize = exports.setMaximumChunkSize = exports.isIntegrationInstrument = exports.isIgnoreSomeFiles = exports.isCreateChromeProfileFile = exports.setCompressionOptions = exports.setGlobalVariable = exports.isGlobalVariableAnswer = exports.isCompressionAnswer = exports.isMaximumChunkSize = exports.isMinimumChunkSize = exports.setLocalizeDetails = exports.isHMRAnswer = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const extensions_1 = require("./helpers/extensions");
const text_1 = require("./text");
async function basicChoose() {
    return await inquirer_1.default.prompt({
        name: "question_basic_choose",
        type: "list",
        message: "Are you want a basic preset or you want to create a custom?",
        choices: ["Preset", "Custom"],
    });
}
exports.basicChoose = basicChoose;
async function chooseBasicPreset() {
    return await inquirer_1.default.prompt({
        name: "question_choose_basic_preset",
        type: "list",
        message: "What do you want to choose from presets?",
        choices: ["Vue", "React", "Svelte", "Typescript", "Javascript"],
    });
}
exports.chooseBasicPreset = chooseBasicPreset;
async function chooseWebpackVersion() {
    return await inquirer_1.default.prompt({
        name: "question_webpack_version",
        type: "list",
        message: "What is the version of webpack do you want to use?",
        choices: ["4", "5"],
    });
}
exports.chooseWebpackVersion = chooseWebpackVersion;
async function chooseWebpackMode() {
    return await inquirer_1.default.prompt({
        name: "question_is_webpack_mode",
        type: "list",
        message: "What is the development mode do you want for webpack ?",
        choices: ["development", "production"],
    });
}
exports.chooseWebpackMode = chooseWebpackMode;
async function contextAnswer() {
    return await inquirer_1.default.prompt({
        name: "question_context",
        type: "input",
        message: "What is the context would be in webpack config (example: ./src) ?",
        default: "./src",
    });
}
exports.contextAnswer = contextAnswer;
async function entryPointsAnswer(preset, entrypoint) {
    return await inquirer_1.default.prompt({
        name: "entry_point",
        type: "input",
        message: `What is the entrypoint would be in webpack config (example: ${entrypoint}/main${(0, extensions_1.generateExtensions)(preset)}) ?`,
    });
}
exports.entryPointsAnswer = entryPointsAnswer;
async function checkPresetTsConfig(preset) {
    return preset === "Typescript"
        ? {
            tslintFilePath: await inquirer_1.default.prompt({
                name: "question_check_preset_ts_config",
                type: "input",
                message: "What is the path to you'r tslint.json file (default: ./tslint.json)?",
                default: "./tslint.json",
            }),
        }
        : void 0;
}
exports.checkPresetTsConfig = checkPresetTsConfig;
async function checkPresetFrameworkConfig(preset) {
    return ["Vue", "React", "Svelte"].includes(preset)
        ? {
            langForFramework: await inquirer_1.default.prompt({
                name: "question_preset_framework_config",
                type: "list",
                message: "What is the language you want to select for that framework ?",
                choices: ["Javascript", "Typescript"],
            }),
        }
        : void 0;
}
exports.checkPresetFrameworkConfig = checkPresetFrameworkConfig;
async function checkPresetHTML(preset, text) {
    return !["React", "Vue", "Svelte"].includes(preset)
        ? {
            htmlTitle: await inquirer_1.default.prompt({
                name: "question_preset_html",
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
exports.checkPresetHTML = checkPresetHTML;
async function setAliasAnswer(context) {
    return await inquirer_1.default.prompt({
        name: "set_alias",
        type: "input",
        message: `What is the path for alias(es) would be in webpack config (example: ${context}/utils) ?`,
    });
}
exports.setAliasAnswer = setAliasAnswer;
async function isImagesAnswer() {
    return await inquirer_1.default.prompt({
        name: "is_images",
        type: "list",
        message: "Do you want to use images in you'r project ?",
        choices: ["Yes", "No"],
    });
}
exports.isImagesAnswer = isImagesAnswer;
async function isFontsAnswer() {
    return await inquirer_1.default.prompt({
        name: "is_fonts",
        type: "list",
        message: "Do you want to use fonts in you'r project ?",
        choices: ["Yes", "No"],
    });
}
exports.isFontsAnswer = isFontsAnswer;
async function isDevServerAnswer() {
    return await inquirer_1.default.prompt({
        name: "is_dev_server",
        type: "list",
        message: "Do you want to use DevServer in webpack ?",
        choices: ["Yes", "No"],
    });
}
exports.isDevServerAnswer = isDevServerAnswer;
async function isLazyLoading() {
    return await inquirer_1.default.prompt({
        name: "is_lazy_loading",
        type: "list",
        message: "Do you want to use lazy loading in webpack ?",
        choices: ["Yes", "No"],
    });
}
exports.isLazyLoading = isLazyLoading;
async function isAvoidErrorStyles() {
    return await inquirer_1.default.prompt({
        name: "is_avoid_error_styles",
        type: "list",
        message: "Do you want to use avoid error for styles ?",
        choices: ["Yes", "No"],
    });
}
exports.isAvoidErrorStyles = isAvoidErrorStyles;
async function isCacheWebpack() {
    return await inquirer_1.default.prompt({
        name: "cache_webpack",
        type: "list",
        message: "Do you want to use cache in webpack ?",
        choices: ["Yes", "No"],
    });
}
exports.isCacheWebpack = isCacheWebpack;
async function splitChunksWebpack() {
    return await inquirer_1.default.prompt({
        name: "split_chinks_webpack",
        type: "list",
        message: "",
    });
}
exports.splitChunksWebpack = splitChunksWebpack;
async function supportFromCoffeScriptAnswer() {
    return await inquirer_1.default.prompt({
        name: "question_coffe_script",
        type: "list",
        message: "Do you want to support CoffeScript ?",
        choices: ["Yes", "No"],
    });
}
exports.supportFromCoffeScriptAnswer = supportFromCoffeScriptAnswer;
async function isCopyPlugin() {
    return await inquirer_1.default.prompt({
        name: "question_is_copy_plugin",
        type: "list",
        message: "Do you want to copy individual files or entire directories, which already exist to the build directory ?",
        choices: ["Yes", "No"],
    });
}
exports.isCopyPlugin = isCopyPlugin;
async function isCleanPlugin() {
    return await inquirer_1.default.prompt({
        name: "question_is_clean_plugin",
        type: "list",
        message: "Do you want that all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild would be removed ?",
        choices: ["Yes", "No"],
    });
}
exports.isCleanPlugin = isCleanPlugin;
async function isCopyStaticFiles() {
    return await inquirer_1.default.prompt({
        name: "is_copy_static_files",
        type: "list",
        message: "Do you want copy ready catalogs/files in build folders ",
        choices: ["Yes", "No"],
    });
}
exports.isCopyStaticFiles = isCopyStaticFiles;
async function setFilesCatalogesCopy(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "set_files_cataloges_copy",
            type: "input",
            message: "What is files do you want that be copied in build catalog ?",
        })
        : void 0;
}
exports.setFilesCatalogesCopy = setFilesCatalogesCopy;
async function setFilesForIgnore(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "set_files_for_ignore",
            type: "input",
            message: "What is the files do you want to ignore ?",
        })
        : void 0;
}
exports.setFilesForIgnore = setFilesForIgnore;
async function isIgnoreSomeFilesWatchMode() {
    return await inquirer_1.default.prompt({
        name: "is_ignore_some_files_watch_mode",
        type: "list",
        message: "Do you want to set files, which would be ignored in watch mode ?",
        choices: ["Yes", "No"],
    });
}
exports.isIgnoreSomeFilesWatchMode = isIgnoreSomeFilesWatchMode;
async function setFilesForIgnoreInWatchMode() {
    return await inquirer_1.default.prompt({
        name: "set_files_for_ignore_in_watch_mode",
        type: "input",
        message: "What is the files do you want to ignore in watch mode ?",
    });
}
exports.setFilesForIgnoreInWatchMode = setFilesForIgnoreInWatchMode;
async function isHtmlPreprocessorAnswer() {
    return await inquirer_1.default.prompt({
        name: "question_is_html_preprocessor",
        type: "list",
        message: "Do you want to support by html preprocessor(s) ?",
        choices: ["Yes", "No"],
    });
}
exports.isHtmlPreprocessorAnswer = isHtmlPreprocessorAnswer;
async function htmlPreprocessorsAnswer(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_html_preprocessor",
            type: "checkbox",
            message: "What is html preprocessor(s) do you want to use ?",
            choices: ["Pug", "Jade", "EJS", "HandleBars"],
        })
        : void 0;
}
exports.htmlPreprocessorsAnswer = htmlPreprocessorsAnswer;
async function isSplitBundlesThroughDLL() {
    return await inquirer_1.default.prompt({
        name: "question_is_split_bundles_dll",
        type: "list",
        message: "Do you want to split bundles through DLL ?",
        choices: ["Yes", "No"],
    });
}
exports.isSplitBundlesThroughDLL = isSplitBundlesThroughDLL;
async function supportSplitBundlesThroughDLL(response) {
    return response === "Yes"
        ? {
            name: await inquirer_1.default.prompt({
                name: "question_context_split_bundles_dll",
                type: "input",
                message: "What is the name would be for bundle for DLL (example: bundle) ?",
            }),
            path: await inquirer_1.default.prompt({
                name: "question_path_to_files",
                type: "input",
                message: "What is the path to files for DLL (example: ./src)",
            }),
            manifest: await inquirer_1.default.prompt({
                name: "question_path_to_manifest_dll",
                type: "input",
                message: "What is the path to manifest for DLL (example: ./src/manifest.json) ?",
            }),
        }
        : void 0;
}
exports.supportSplitBundlesThroughDLL = supportSplitBundlesThroughDLL;
async function isDiscoverPreviousCompilation() {
    return await inquirer_1.default.prompt({
        name: "question_discover_previous_compilation",
        type: "list",
        message: "Do you want to discover all modules from the previous compilation upfront while watching for changes, trying to improve the incremental build times. ",
        choices: ["Yes", "No"],
    });
}
exports.isDiscoverPreviousCompilation = isDiscoverPreviousCompilation;
async function isCssPreprocessorsAnswer() {
    return await inquirer_1.default.prompt({
        name: "question_is_css_preprocessor",
        type: "list",
        message: "Do you want to support by css preprocessor(s) ?",
        choices: ["Yes", "No"],
    });
}
exports.isCssPreprocessorsAnswer = isCssPreprocessorsAnswer;
async function cssPreprocessors(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_css_preprocessor",
            type: "checkbox",
            message: "What is css preprocessor(s) do you want to use ?",
            choices: ["(Sass/Scss)", "Less", "PostCSS", "Stylus"],
        })
        : void 0;
}
exports.cssPreprocessors = cssPreprocessors;
async function isImageExtensionAnswer() {
    return await inquirer_1.default.prompt({
        name: "question_is_image_extensions",
        type: "list",
        message: "Do you want to use images in your project ?",
        choices: ["Yes", "No"],
    });
}
exports.isImageExtensionAnswer = isImageExtensionAnswer;
async function imageExtensions(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_image_extensions",
            type: "checkbox",
            message: "What is the image extension(s) do you want to use ?",
            choices: [".png", ".jpeg", ".jpg", ".svg", ".gif", ".webp"],
        })
        : void 0;
}
exports.imageExtensions = imageExtensions;
async function isFontsExtensionAnswer() {
    return await inquirer_1.default.prompt({
        name: "question_is_font_extensions",
        type: "list",
        message: "Do you want to use fonts in your project ?",
        choices: ["Yes", "No"],
    });
}
exports.isFontsExtensionAnswer = isFontsExtensionAnswer;
async function fontsExtensions(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_fonts_extensions",
            type: "checkbox",
            message: "What is fonts extension(s) do you want to use ?",
            choices: [".woff", ".ttf", ".eot", ".svg", ".otf"],
        })
        : void 0;
}
exports.fontsExtensions = fontsExtensions;
async function fontsOutDir(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_fonts_dir",
            type: "input",
            message: "What is the directory would be an output for fonts ?",
        })
        : void 0;
}
exports.fontsOutDir = fontsOutDir;
async function isXmlExtension() {
    return await inquirer_1.default.prompt({
        name: "question_xml_exension",
        type: "list",
        message: "Do you want to use .xml extension ?",
        choices: ["Yes", "No"],
    });
}
exports.isXmlExtension = isXmlExtension;
async function isYamlExtension() {
    return await inquirer_1.default.prompt({
        name: "question_yaml_extension",
        type: "list",
        message: "Do you want to use .yaml extension ?",
        choices: ["Yes", "No"],
    });
}
exports.isYamlExtension = isYamlExtension;
async function isCsvExtension() {
    return await inquirer_1.default.prompt({
        name: "question_csv_extension",
        type: "list",
        message: "Do you want to use .csv extension ?",
        choices: ["Yes", "No"],
    });
}
exports.isCsvExtension = isCsvExtension;
async function isPwaSupport() {
    return await inquirer_1.default.prompt({
        name: "question_build_pwa",
        type: "list",
        message: "Do you want to build pwa ?",
        choices: ["Yes", "No"],
    });
}
exports.isPwaSupport = isPwaSupport;
async function isSplittingChunks() {
    return await inquirer_1.default.prompt({
        name: "question_is_splitting_chunks",
        type: "list",
        message: "Do you want to split chunk ?",
        choices: ["Yes", "No"],
    });
}
exports.isSplittingChunks = isSplittingChunks;
async function addingBannerToChunk(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_adding_banner_to_chunk",
            type: "list",
            message: "Do you want to adding banner to chunk ?",
            choices: ["Yes", "No"],
        })
        : void 0;
}
exports.addingBannerToChunk = addingBannerToChunk;
async function isClosureLibrary() {
    return await inquirer_1.default.prompt({
        name: "question_closure_library",
        type: "list",
        message: "Do you want to adding support by Closure Library ?",
        choices: ["Yes", "No"],
    });
}
exports.isClosureLibrary = isClosureLibrary;
async function isEnvironmentVariables() {
    return await inquirer_1.default.prompt({
        name: "question_environment_variables",
        type: "list",
        message: "Do you want to use environment variables in webpack ?",
        choices: ["Yes", "No"],
    });
}
exports.isEnvironmentVariables = isEnvironmentVariables;
async function setEnvironmentVariables(response) {
    return response === "Yes"
        ? {
            name: await inquirer_1.default.prompt({
                name: "set_environment_names",
                type: "input",
                message: "What is name would be for environment variable (example: PG_DB PG_PORT) ?",
            }),
            value: await inquirer_1.default.prompt({
                name: "set_environment_values",
                type: "input",
                message: "What is value would be for environment variable (example: )",
            }),
        }
        : void 0;
}
exports.setEnvironmentVariables = setEnvironmentVariables;
async function isLocalizeAnswer() {
    return await inquirer_1.default.prompt({
        name: "question_is_localize",
        type: "list",
        message: "Do you want to localize in your application ?",
        choices: ["Yes", "No"],
    });
}
exports.isLocalizeAnswer = isLocalizeAnswer;
async function isHMRAnswer() {
    return await inquirer_1.default.prompt({
        name: "question_is_hmr",
        type: "list",
        message: "Do you want to enable HMR(Hot module replacement) in webpack ?",
        choices: ["Yes", "No"],
    });
}
exports.isHMRAnswer = isHMRAnswer;
async function setLocalizeDetails(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_set_localize_details",
            type: "input",
            message: "What is the languages do you want to use (example: RU EN FR) ?",
        })
        : void 0;
}
exports.setLocalizeDetails = setLocalizeDetails;
async function isMinimumChunkSize(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_is_minimum_chunk_size",
            type: "list",
            message: "Do you want to set minimum chunk size ?",
            choices: ["Yes", "No"],
        })
        : void 0;
}
exports.isMinimumChunkSize = isMinimumChunkSize;
async function isMaximumChunkSize(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_is_maximum_chunk_size",
            type: "list",
            message: "Do you want to set maximum chunk size ?",
            choices: ["Yes", "No"],
        })
        : void 0;
}
exports.isMaximumChunkSize = isMaximumChunkSize;
async function isCompressionAnswer() {
    return await inquirer_1.default.prompt({
        name: "question_is_compression_answer",
        type: "list",
        message: "Do you want to compress webpack ?",
        choices: ["Yes", "No"],
    });
}
exports.isCompressionAnswer = isCompressionAnswer;
async function isGlobalVariableAnswer() {
    return await inquirer_1.default.prompt({
        name: "question_is_global_variable_answer",
        type: "list",
        message: "Do you want to have a global variables in your project ?",
        choices: ["Yes", "No"],
    });
}
exports.isGlobalVariableAnswer = isGlobalVariableAnswer;
async function setGlobalVariable(response) {
    return response === "Yes"
        ? {
            name: await inquirer_1.default.prompt({
                name: "question_set_global_variable_name",
                type: "input",
                message: "What is the name(s) do you want for you variable(s) (example: PRODUCTION BROWSER_SUPPORTS_HTML5) ?",
            }),
            value: await inquirer_1.default.prompt({
                name: "question_set_global_variable_value",
                type: "input",
                message: "What is the value(s) do you want for you variable(s) (example: true true) ?",
            }),
        }
        : void 0;
}
exports.setGlobalVariable = setGlobalVariable;
async function setCompressionOptions(response) {
    return response === "Yes"
        ? {
            ratio: await inquirer_1.default.prompt({
                name: "question_set_level_ratio_compression",
                type: "list",
                message: "What is ratio level do you want to set for compression ?",
                choices: [
                    "0",
                    "0.1",
                    "0.2",
                    "0.3",
                    "0.4",
                    "0.5",
                    "0.6",
                    "0.7",
                    "0.8",
                    "0.9",
                    "1",
                ],
            }),
            compressionLevel: await inquirer_1.default.prompt({
                name: "question_compression_level",
                type: "list",
                message: "What is the level for compression do you want to choose ?",
                choices: ["1", "2", "3", "4"],
            }),
            threshold: await inquirer_1.default.prompt({
                name: "question_threshold_level",
                type: "input",
                message: "How many threshold would be for compression ?",
            }),
        }
        : void 0;
}
exports.setCompressionOptions = setCompressionOptions;
async function isCreateChromeProfileFile() {
    return await inquirer_1.default.prompt({
        name: "question_is_create_chrome_profile_file",
        type: "list",
        message: "Do you want to create Chrome profile file ?",
        choices: ["Yes", "No"],
    });
}
exports.isCreateChromeProfileFile = isCreateChromeProfileFile;
async function chooseStaticFilesLoader(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_is_choose_static_loader",
            type: "list",
            message: "What is the static files loader do you want to choose ?",
            choices: ["file-loader", "url-loader", "raw-loader"],
        })
        : void 0;
}
exports.chooseStaticFilesLoader = chooseStaticFilesLoader;
async function isIgnoreSomeFiles() {
    return await inquirer_1.default.prompt({
        name: "question_is_ignore_some_files",
        type: "list",
        message: "Do you want to ignore some files ?",
        choices: ["Yes", "No"],
    });
}
exports.isIgnoreSomeFiles = isIgnoreSomeFiles;
async function isIntegrationInstrument() {
    return await inquirer_1.default.prompt({
        name: "question_is_integration",
        type: "list",
        message: "Do you want some integration with instruments(like: Gulp) in webpack ?",
        choices: ["Yes", "No"],
    });
}
exports.isIntegrationInstrument = isIntegrationInstrument;
async function staticLoader() {
    return await inquirer_1.default.prompt({
        name: "question_static_loader",
        type: "list",
        message: "What is the loader for static files do you want to use ?",
        choices: ["Yes", "No"],
    });
}
exports.staticLoader = staticLoader;
async function setMinimumChunkSize(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_minimum_chunk_size",
            type: "input",
            message: "What is the minimum chunk size would be (example: 1024) ?",
        })
        : void 0;
}
exports.setMinimumChunkSize = setMinimumChunkSize;
async function setMaximumChunkSize(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_maximum_chunk_size",
            type: "input",
            message: "What is the maximum chunk size would be (example: 1024) ?",
        })
        : void 0;
}
exports.setMaximumChunkSize = setMaximumChunkSize;
async function integrationInstruments(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_integration_instrument",
            type: "list",
            message: "What is integration do you want ?",
            choices: ["Gulp", "Grunt", "Mocha", "Karma"],
        })
        : void 0;
}
exports.integrationInstruments = integrationInstruments;
async function fontsDir(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_fonts_dir",
            type: "input",
            message: `What is the folder do you want, that be an output for fonts ?`,
        })
        : (0, text_1.parseString)("");
}
exports.fontsDir = fontsDir;
async function outputDir() {
    return await inquirer_1.default.prompt({
        name: "question_output_dir",
        type: "input",
        message: "What is the folder do you want, that be an output (default: ./dist)",
        default: "./dist",
    });
}
exports.outputDir = outputDir;
async function devServerPort() {
    return await inquirer_1.default.prompt({
        name: "question_dev_server_port",
        type: "input",
        message: "What is the port would be in Dev Server (default: 3500) ?",
        default: 3500,
    });
}
exports.devServerPort = devServerPort;
async function chooseWatchFiles(port) {
    return await inquirer_1.default.prompt({
        name: "question_13",
        type: "input",
        message: `What is the folder with files do you want to watch for changes with starting devServer (example: ${port.dev_server_port}/html) ?`,
        default: `${port.dev_server_port}/html`,
    });
}
exports.chooseWatchFiles = chooseWatchFiles;
//# sourceMappingURL=answers.js.map