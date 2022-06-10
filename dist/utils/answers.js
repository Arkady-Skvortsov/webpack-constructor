#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCssPreprocessorsAnswer = exports.isCsvExtension = exports.cssPreprocessors = exports.contextAnswer = exports.imagesOutDir = exports.isCacheWebpack = exports.isXmlExtension = exports.htmlPreprocessorsAnswer = exports.fontsExtensions = exports.isLazyLoading = exports.isImagesAnswer = exports.isFontsAnswer = exports.isDevServerAnswer = exports.checkPresetFrameworkConfig = exports.checkPresetHTML = exports.chooseWebpackMode = exports.chooseWebpackVersion = exports.chooseBasicPreset = exports.checkPresetTsConfig = exports.fontsDir = exports.devServerPort = exports.chooseWatchFiles = exports.ChooseCacheOptions = exports.copyPluginSetup = exports.cacheTypeOptions = exports.avoidErrorsOptions = exports.isAvoidErrorStyles = exports.basicChoose = exports.isPwaSupport = exports.prefetchOptionsSupport = exports.isAutomaticPrefetch = exports.isPrefetch = exports.bannerOptionsSupport = exports.hashModuleIdsSupport = exports.isCss = exports.isHtml = exports.isHashModulePath = exports.splitChunksWebpack = exports.minifyJSONOptions = exports.setUpEslint = exports.isLinterType = exports.isLinter = exports.isMinifyJSONFiles = exports.imageExtensions = exports.isYamlExtension = exports.entryPointsAnswer = exports.supportFromCoffeScriptAnswer = exports.staticLoader = exports.outputDir = exports.integrationInstruments = void 0;
exports.isIgnoreSomeFilesWatchMode = exports.setFilesForIgnoreInWatchMode = exports.setFilesForIgnore = exports.setAliasAnswer = exports.setMinimumChunkSize = exports.setMaximumChunkSize = exports.isIntegrationInstrument = exports.isIgnoreSomeFiles = exports.isCreateChromeProfileFile = exports.setCompressionOptions = exports.setGlobalVariable = exports.isGlobalVariableAnswer = exports.isCompressionAnswer = exports.isMaximumChunkSize = exports.isMinimumChunkSize = exports.setLocalizeDetails = exports.isHMRAnswer = exports.isLocalizeAnswer = exports.setEnvironmentVariables = exports.setFilesCatalogesCopy = exports.isCopyStaticFiles = exports.isEnvironmentVariables = exports.chooseStaticFilesLoader = exports.isClosureLibrary = exports.isBundleAnalyzer = exports.bundleAnalyzerSupport = exports.isBannerPlugin = exports.cleanPluginSetup = exports.isCleanPlugin = exports.isCopyPlugin = exports.fontsOutDir = exports.isSplittingChunks = exports.isDiscoverPreviousCompilation = exports.supportSplitBundlesThroughDLL = exports.isSplitBundlesThroughDLL = exports.isFontsExtensionAnswer = exports.isImageExtensionAnswer = exports.isHtmlPreprocessorAnswer = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const extensions_1 = require("./helpers/extensions");
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
async function entryPointsAnswer(preset, entrypoint, subType) {
    return await inquirer_1.default.prompt({
        name: "entry_point",
        type: "input",
        message: `What is the entrypoint would be in webpack config (example: ${entrypoint}/main${(0, extensions_1.generateExtensions)(preset, subType)}) ?`,
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
async function avoidErrorsOptions(response) {
    return response === "Yes"
        ? {
            context: await inquirer_1.default.prompt({
                name: "is_avoid_context",
                type: "input",
                message: "What is the root dir for you'r files would be ?",
            }),
            exclude: await inquirer_1.default.prompt({
                name: "is_avoid_exclude",
                type: "input",
                message: "What is the files/dirs you would be exclude (example: node_modules) ?",
            }),
            extensions: await inquirer_1.default.prompt({
                name: "is_avoid_extensions",
                type: "input",
                message: "What is the extensions should be checked (example: css scss sass less) ?",
            }),
            files: await inquirer_1.default.prompt({
                name: "is_avoid_files",
                type: "input",
                message: `What is the files/catalogs inside context would be traversed recursively looking for files matching ?`,
            }),
            fix: await inquirer_1.default.prompt({
                name: "is_avoid_fix",
                type: "list",
                message: "Do you want to fix as many errors as possible. (All unfixed errors will be reported) ?",
                choices: ["Yes", "No"],
            }),
            formatter: await inquirer_1.default.prompt({
                name: "is_avoid_formatter",
                type: "list",
                message: "What is the formatter would be to use like a format for your results?",
                choices: ["compact", "json", "string", "tap", "unix", "verbose"],
            }),
            lintDirtyModulesOnly: await inquirer_1.default.prompt({
                name: "is_avoid_lint_dirty_modules_only",
                type: "list",
                message: "Do you want to lint only changed files, skip lint on start. ?",
                choices: ["Yes", "No"],
            }),
            stylelintPath: await inquirer_1.default.prompt({
                name: "is_avoid_style_lint_path",
                type: "input",
                message: "What is the path would be 'stylelint' instance used for linting (example: stylelint) ?",
            }),
            threads: await inquirer_1.default.prompt({
                name: "is_avoid_threads",
                type: "list",
                message: "Do you want to auto-select pool size based number of cpus ?",
                choices: ["Yes", "No"],
            }),
            emitError: await inquirer_1.default.prompt({
                name: "is_avoid_emit_error",
                type: "list",
                message: "Do you want that erros found would be emitted ?",
                choices: ["Yes", "No"],
            }),
            emitWarning: await inquirer_1.default.prompt({
                name: "is_avoid_emit_warning",
                type: "list",
                message: "Do you want that warnings found would be emitted ?",
                choices: ["Yes", "No"],
            }),
            failOnError: await inquirer_1.default.prompt({
                name: "is_avoid_fail_on_error",
                type: "list",
                message: "Do you want to stop building process if there are any errors ?",
                choices: ["Yes", "No"],
            }),
            failOnWarning: await inquirer_1.default.prompt({
                name: "is_avoid_fail_on_warning",
                type: "list",
                message: "Do you want to stop building process if there are any warnings ?",
                choices: ["Yes", "No"],
            }),
            quiet: await inquirer_1.default.prompt({
                name: "is_avoid_quiet",
                type: "list",
                message: "Do you want that process and report errors only and ignore warnings ?",
                choices: ["Yes", "No"],
            }),
        }
        : void 0;
}
exports.avoidErrorsOptions = avoidErrorsOptions;
async function isCacheWebpack() {
    return await inquirer_1.default.prompt({
        name: "cache_webpack",
        type: "list",
        message: "Do you want to use cache in webpack ?",
        choices: ["Yes", "No"],
    });
}
exports.isCacheWebpack = isCacheWebpack;
async function splitChunksWebpack(response) {
    return response === "Yes"
        ? {
            chunks: await inquirer_1.default.prompt({
                name: "split_chinks_chunks",
                type: "list",
                message: "What is the chunks would be selected for optimization ?",
                choices: ["async", "initial", "all"],
            }),
            minSize: await inquirer_1.default.prompt({
                name: "split_chinks_min_size",
                type: "input",
                message: "What is the minimun size in bytes would be for generated chunk ?",
            }),
            maxSize: await inquirer_1.default.prompt({
                name: "split_chinks_max_size",
                type: "input",
                message: "What is the maximum size in bytes would be trying to split chunks bigger than maxSize bytes into smaller parts (So that it is usable when using long term caching and doesn't require records. maxSize is only a hint and could be violated when modules are bigger than maxSize or splitting would violate minSize.) ?",
            }),
            minRemainingSize: await inquirer_1.default.prompt({
                name: "split_chinks_min_remaining_size",
                type: "list",
                message: "What is the maxx chunks would be selected for optimization ?",
                choices: ["async", "initial", "all"],
            }),
            minChunks: await inquirer_1.default.prompt({
                name: "split_chinks_min_chunks",
                type: "input",
                message: "What is the minimum time must a module be shared among chunks before splitting (example: 1) ?",
            }),
            maxAsyncRequests: await inquirer_1.default.prompt({
                name: "split_chinks_max_async_requests",
                type: "input",
                message: "What is the maximum number of parallel requests would be on-demand loading (example: 20) ?",
            }),
            maxAsyncSize: await inquirer_1.default.prompt({
                name: "split_chinks_min_size",
                type: "input",
                message: "What is the minimun size in bytes would be only affect on-demand loading chunks ?",
            }),
            maxInitialRequests: await inquirer_1.default.prompt({
                name: "split_chinks_max_initial_requests",
                type: "input",
                message: "What is the maximum number of parallel requests would be at an entry point. (example: 30) ?",
            }),
            enforceSizeThreshold: await inquirer_1.default.prompt({
                name: "split_chinks_enforce_size_threshold",
                type: "input",
                message: "What is the size threshold would be at splitting is enforced and other restrictions (minRemainingSize, maxAsyncRequests, maxInitialRequests) are ignored. ?",
            }),
            cacheGroups: {
                defaultVendors: {
                    filename: await inquirer_1.default.prompt({
                        name: "split_chinks_filename",
                        type: "input",
                        message: "Allows to override the filename when and only when it's an initial chunk. (All placeholders available in output.filename are also available here) (example: [name].bundle.js) ?",
                    }),
                    test: await inquirer_1.default.prompt({
                        name: "split_chinks_test",
                        type: "list",
                        message: "What is the chunks would be selected for optimization ?",
                        choices: ["async", "initial", "all"],
                    }),
                    priority: await inquirer_1.default.prompt({
                        name: "split_chinks_priority",
                        type: "input",
                        message: "What is the optimization would be prefer the cache group with a higher priority. The default groups have a negative priority to allow custom groups to take higher priority (example: -20) ?",
                    }),
                    reuseExistingChunk: await inquirer_1.default.prompt({
                        name: "split_chinks_reuse_existing_chunk",
                        type: "list",
                        message: "Do you want that modules already split out from the main bundle will be reused instead of a new being generated. (This can affect the resulting file name of the chunk)?",
                        choices: ["Yes", "No"],
                    }),
                    idHint: await inquirer_1.default.prompt({
                        name: "split_chinks_id_hint",
                        type: "input",
                        message: "What is the hint for chunk id would be. (it will be added to chunk's filename); (examplel: vendors) ?",
                    }),
                },
            },
        }
        : void 0;
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
async function cleanPluginSetup(response) {
    return response === "Yes"
        ? {
            dry: await inquirer_1.default.prompt({
                name: "question_is_copy_plugin",
                type: "list",
                message: "Do you want to simulate the removal of files ?",
                choices: ["Yes", "No"],
            }),
            verbose: await inquirer_1.default.prompt({
                name: "question_is_copy_plugin",
                type: "list",
                message: "Do you want to write logs in console ?",
                choices: ["Yes", "No"],
            }),
            cleanStaleWebpackAssets: await inquirer_1.default.prompt({
                name: "question_is_copy_plugin",
                type: "list",
                message: "Do you want to automatically remove all unused webpack assets on rebuild ?",
                choices: ["Yes", "No"],
            }),
            protectWebpackAssets: await inquirer_1.default.prompt({
                name: "question_is_copy_plugin",
                type: "list",
                message: "Do you want to not allow removal of current webpack assets ?",
                choices: ["Yes", "No"],
            }),
            cleanOnceBeforeBuildPlugin: await inquirer_1.default.prompt({
                name: "question_clean_once_before_build_plugin",
                type: "input",
                message: "What is the files would be to remove after every build (including watch mode) that match this pattern(Used for files that are not created directly by Webpack) ?",
            }),
            cleanAfterEveryBuildPatterns: await inquirer_1.default.prompt({
                name: "question_clean_after_every_build_patterns",
                type: "input",
                message: "What is the files would be to Removes files once prior to Webpack compilation. Not included in rebuilds (watch mode)?",
            }),
            dangerouslyAllowCleanPatternsOutsideProject: await inquirer_1.default.prompt({
                name: "question_dangerously_allow_clean_patterns_outside_project",
                type: "list",
                message: "Do you want to allow clean patterns outside of process.cwd() (requires dry option to be explicitly set) ?",
                choices: ["Yes", "No"],
            }),
        }
        : void 0;
}
exports.cleanPluginSetup = cleanPluginSetup;
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
async function isHtmlPreprocessorAnswer(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_is_html_preprocessor",
            type: "list",
            message: "Do you want to support by html preprocessor(s) ?",
            choices: ["Yes", "No"],
        })
        : void 0;
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
async function isCssPreprocessorsAnswer(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_is_css_preprocessor",
            type: "list",
            message: "Do you want to support by css preprocessor(s) ?",
            choices: ["Yes", "No"],
        })
        : void 0;
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
async function imagesOutDir(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_images_dir",
            type: "input",
            message: "What is the directory would be an output for images (example: ./src/images) ?",
        })
        : void 0;
}
exports.imagesOutDir = imagesOutDir;
async function isFontsExtensionAnswer() {
    return await inquirer_1.default.prompt({
        name: "question_is_font_extensions",
        type: "list",
        message: "Do you want to use fonts in your project ?",
        choices: ["Yes", "No"],
    });
}
exports.isFontsExtensionAnswer = isFontsExtensionAnswer;
async function isCachingSupport() { }
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
            message: "What is the directory would be an output for fonts (example: ./src/fonts) ?",
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
        message: "Do you want to split project to chunks ?",
        choices: ["Yes", "No"],
    });
}
exports.isSplittingChunks = isSplittingChunks;
async function isPrefetch() {
    return await inquirer_1.default.prompt({
        name: "question_is_prefetch_plugin",
        type: "list",
        message: "Do you want to realise prefetch normal module requests, causing them to be resolved and built before the first import or require of that module occurs. (Using this plugin can boost performance. Try to profile the build first to determine clever prefetching points) ?",
        choices: ["Yes", "No"],
    });
}
exports.isPrefetch = isPrefetch;
async function prefetchOptionsSupport(response) {
    return response === "Yes"
        ? {
            context: await inquirer_1.default.prompt({
                name: "question_context",
                type: "input",
                message: "What is the absolute path would be to directory ?",
            }),
            request: await inquirer_1.default.prompt({
                name: "question_request",
                type: "input",
                message: "What is the request string for a normal module ?",
            }),
        }
        : void 0;
}
exports.prefetchOptionsSupport = prefetchOptionsSupport;
async function isAutomaticPrefetch() {
    return await inquirer_1.default.prompt({
        name: "question_automatic_prefetch",
        type: "list",
        message: "Do you want to discover all modules from the previous compilation upfront while watching for changes, trying to improve the incremental build times ?",
        choices: ["Yes", "No"],
    });
}
exports.isAutomaticPrefetch = isAutomaticPrefetch;
async function isBannerPlugin() {
    return await inquirer_1.default.prompt({
        name: "question_adding_banner_to_chunk",
        type: "list",
        message: "Do you want to adding banner to chunk ?",
        choices: ["Yes", "No"],
    });
}
exports.isBannerPlugin = isBannerPlugin;
async function bannerOptionsSupport(response) {
    return response === "Yes"
        ? {
            banner: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "What is the name of you'r banner would be ?",
            }),
            raw: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "list",
                message: "Do you want that you'r banner would be wrapped in a comment ?",
                choices: ["Yes", "No"],
            }),
            entryOnly: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "list",
                message: "Do you want that you'r banner would be only added to the entry chunks ?",
                choices: ["Yes", "No"],
            }),
            test: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
            include: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
            exclude: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
            footer: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "list",
                message: "Do you want that you'r banner would be placed at the end of the compilation ?",
                choices: ["Yes", "No"],
            }),
        }
        : void 0;
}
exports.bannerOptionsSupport = bannerOptionsSupport;
async function isClosureLibrary() {
    return await inquirer_1.default.prompt({
        name: "question_closure_library",
        type: "list",
        message: "Do you want to adding support by Closure Library ?",
        choices: ["Yes", "No"],
    });
}
exports.isClosureLibrary = isClosureLibrary;
async function isHtml() {
    return await inquirer_1.default.prompt({
        name: "question_is_html",
        type: "list",
        message: "Do you want to use html in you'r project ?",
        choices: ["Yes", "No"],
    });
}
exports.isHtml = isHtml;
async function isCss() {
    return await inquirer_1.default.prompt({
        name: "question_is_css",
        type: "list",
        message: "Do you want to use css in you'r project ?",
        choices: ["Yes", "No"],
    });
}
exports.isCss = isCss;
async function isBundleAnalyzer() {
    return await inquirer_1.default.prompt({
        name: "question_is_bundle_analyzer",
        type: "list",
        message: "Do you want to analyze you'r bundle ?",
        choices: ["Yes", "No"],
    });
}
exports.isBundleAnalyzer = isBundleAnalyzer;
async function bundleAnalyzerSupport(response) {
    return response === "Yes"
        ? {
            analyzerMode: await inquirer_1.default.prompt({
                name: "question_analyzer_mode",
                type: "list",
                message: "(BundleAnalyzer) What is the mode for analyzer would be ?",
                choices: ["server", "static", "json", "disabled"],
                default: "server",
            }),
            analyzerHost: await inquirer_1.default.prompt({
                name: "question_analyzer_host",
                type: "input",
                message: "(BundleAnalyzer) What is the host for analyzer would be (example: 127.0.0.1) ?",
            }),
            analyzerPort: await inquirer_1.default.prompt({
                name: "question_analyzer_port",
                type: "input",
                message: "(BundleAnalyzer) What is the port would be using in server mode(example: 8888) ?",
            }),
            reportFilename: await inquirer_1.default.prompt({
                name: "question_analyzer_report_filename",
                type: "input",
                message: "(BundleAnalyzer) What is the path would be to report file (example: report.html) ?",
            }),
            reportTitle: await inquirer_1.default.prompt({
                name: "question_analyzer_report_title",
                type: "input",
                message: "(BundleAnalyzer)",
            }),
            defaultSizes: await inquirer_1.default.prompt({
                name: "question_analyzer_default_sizes",
                type: "list",
                message: "(BundleAnalyzer) What is the size would be to show in report by default ?",
                choices: ["stat", "parsed", "gzip"],
            }),
            openAnalyzer: await inquirer_1.default.prompt({
                name: "question_analyzer_open",
                type: "list",
                message: "(BundleAnalyzer) Do you want to automatically open report in default browser ?",
                choices: ["Yes", "No"],
            }),
            generateStatsFile: await inquirer_1.default.prompt({
                name: "question_analyzer_generate_stats_file",
                type: "list",
                message: "(BundleAnalyzer) Do you want to generate webpack stats JSON file in bundle output directory ?",
                choices: ["Yes", "No"],
            }),
            statsFilename: await inquirer_1.default.prompt({
                name: "question_analyzer_stats_filename",
                type: "input",
                message: "(BundleAnalyzer) What is the name would be at webpack stats JSON file ?",
            }),
            stats: {
                all: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_all",
                    type: "input",
                    message: "(BundleAnalyzer.stats) What is the A fallback value for stats options would be (when an option is not defined. It has precedence over local webpack defaults) ?",
                }),
                assets: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_assets",
                    type: "list",
                    message: "(BundleAnalyzer.stats) Do you want to see an assets information ?",
                    choices: ["Yes", "No"],
                }),
                assetsSort: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_assets_sort",
                    type: "input",
                    message: "(BundleAnalyzer) What is the A fallback value for stats options would be (when an option is not defined. It has precedence over local webpack defaults) ?",
                }),
                buildAt: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_build_at",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want that stats would added build data and the build time information ? ?",
                    choices: ["Yes", "No"],
                }),
                moduleAssets: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_module_assets",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want that added information about assets inside modules ?",
                    choices: ["Yes", "No"],
                }),
                assetsSpace: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_assets_space",
                    type: "input",
                    message: "(BundleAnalyzer) How many items of assets should be displayed (example: 15) ?",
                }),
                modulesSpace: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_modules_space",
                    type: "input",
                    message: "(BundleAnalyzer) How many items of modules should be displayed (example: 15) ?",
                }),
                chunkModulesSpace: await inquirer_1.default.prompt({
                    name: "question_chunk_modules_space",
                    type: "input",
                    message: "(BundleAnalyzer) How many items of chunk modules should be displayed (groups will be collapsed to fit this space) ?",
                }),
                nestedModules: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_nested_modules",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add information about modules nested in other modules ?",
                    choices: ["Yes", "No"],
                }),
                nestedModulesSpace: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_nested_modules_space",
                    type: "input",
                    message: "(BundleAnalyzer) How many items of nested modules should be displayed (example: 15) ?",
                }),
                cachedModules: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_cached_modules",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add information about cached (not built) modules ?",
                    choices: ["Yes", "No"],
                }),
                runtimeModules: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_runtime_modules",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add information about runtime modules ?",
                    choices: ["Yes", "No"],
                }),
                dependentModules: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_dependent_modules",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to show chunk modules that are dependencies of other modules of the chunk ?",
                    choices: ["Yes", "No"],
                }),
                groupAssetsByChunk: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_group_assets_by_chunk",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to group assets by how their are related to chunks ?",
                    choices: ["Yes", "No"],
                }),
                groupAssetsByEmitStatus: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_all",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to group assets by their status (emitted, compared for emit or cache) ?",
                    choices: ["Yes", "No"],
                }),
                groupAssetsByExtension: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_all",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to group assets by their extension ?",
                    choices: ["Yes", "No"],
                }),
                groupAssetsByInfo: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_group_assets_by_info",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to group assets by their asset info (immutable, development, hotModuleReplacement and etc) ?",
                    choices: ["Yes", "No"],
                }),
                groupAssetsByPath: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_group_assets_by_path",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to group assets by their asset path ?",
                    choices: ["Yes", "No"],
                }),
                groupModulesByAttributes: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_group_modules_by_attributes",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to group modules by their attributes (errors, warnings, assets, optional, orphan or dependent) ?",
                    choices: ["Yes", "No"],
                }),
                groupModulesByCacheStatus: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_group_modules_by_cache_status",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to group modules by their cache status (cached or built and cacheable) ?",
                    choices: ["Yes", "No"],
                }),
                groupModulesByExtension: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_group_modules_by_extension",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to group modules by their extension ?",
                    choices: ["Yes", "No"],
                }),
                groupModulesByLayer: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_group_modules_by_layer",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to group modules by their layer ?",
                    choices: ["Yes", "No"],
                }),
                groupModulesByPath: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_group_modules_by_path",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to group modules by their path ?",
                    choices: ["Yes", "No"],
                }),
                groupModulesByType: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_group_modules_by_type",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to group modules by their type ?",
                    choices: ["Yes", "No"],
                }),
                groupReasonsByOrigin: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_group_reasons_by_origin",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to group reasons by their origin module to avoid large set of reasons ?",
                    choices: ["Yes", "No"],
                }),
                cachedAssets: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_cached_assets",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add information about the cached assets (if 'No' - it's tell to only show the emitted files) ?",
                    choices: ["Yes", "No"],
                }),
                children: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_children",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add information about the children ?",
                    choices: ["Yes", "No"],
                }),
                chunks: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_chunks",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add information about the chunk ?",
                    choices: ["Yes", "No"],
                }),
                chunkGroups: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_chunk_groups",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add information about the namedChunkGroups ?",
                    choices: ["Yes", "No"],
                }),
                chunkModules: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_chunk_modules",
                    type: "input",
                    message: "(BundleAnalyzer) Do you want to add information about the built modules to information about the chunk ?",
                }),
                chunkOrigins: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_chunk_origins",
                    type: "input",
                    message: "(BundleAnalyzer) Do you want to add information about the origins of chunks merging ?",
                }),
                chunkSort: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_chunk_sort",
                    type: "list",
                    message: "(BundleAnalyzer) What is the field would be for .... ?",
                    choices: [
                        "id",
                        "name",
                        "size",
                        "chunks",
                        "erros",
                        "warnings",
                        "failed",
                        "cacheable",
                        "built",
                        "prefetched",
                        "optional",
                        "identifier",
                        "index",
                        "index2",
                        "profile",
                        "issuer",
                        "issuerId",
                        "issuerName",
                        "issuerPath",
                    ],
                }),
                context: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_context",
                    type: "input",
                    message: "(BundleAnalyzer) What is the directory path for shortening the request information would be ?",
                }),
                colors: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_colors",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to have output in the different colors ?",
                    choices: ["Yes", "No"],
                }),
                depth: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_depth",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to display the distance from the entry point for each module ?",
                    choices: ["Yes", "No"],
                }),
                entrypoints: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_entrypoints",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to display the entry points with the corresponding bundles ?",
                    choices: ["Yes", "No"],
                }),
                env: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_env",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to display the --env information ?",
                    choices: ["Yes", "No"],
                }),
                orphanModules: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_orphan_modules",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to hide orhpan modules (orphan - it's modules, which not included in any chunk) ?",
                    choices: ["Yes", "No"],
                }),
                errors: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_errors",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to display errors ?",
                    choices: ["Yes", "No"],
                }),
                errorDetails: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_error_details",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add the details to the erros ?",
                    choices: ["Yes", "No"],
                }),
                errorStack: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_error_stack",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to show stack trace of errors ?",
                    choices: ["Yes", "No"],
                }),
                excludeAssets: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_exclude_assets",
                    type: "input",
                    message: "(BundleAnalyzer) What is the A fallback value for stats options would be (when an option is not defined. It has precedence over local webpack defaults) ?",
                }),
                excludeModules: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_exclude_modules",
                    type: "input",
                    message: "(BundleAnalyzer) What is the A fallback value for stats options would be (when an option is not defined. It has precedence over local webpack defaults) ?",
                }),
                hash: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_hash",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add information about the hash of the compilation ?",
                    choices: ["Yes", "No"],
                }),
                logging: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_logging",
                    type: "list",
                    message: "(BundleAnalyzer) What is the logging output do you want to add ?",
                    choices: ["none", "error", "info", "warn", "log", "verbose"],
                }),
                loggingDebug: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_logging_debug",
                    type: "input",
                    message: "(BundleAnalyzer) What is the A fallback value for stats options would be (when an option is not defined. It has precedence over local webpack defaults) ?",
                }),
                loggingTrace: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_logging_trace",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to enable stack straces in the logging ouput for errors, warning and traces ?",
                    choices: ["Yes", "No"],
                }),
                modules: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_modules",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add information about the built modules ?",
                    choices: ["Yes", "No"],
                }),
                modulesSort: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_module_sort",
                    type: "list",
                    message: "(BundleAnalyzer) What is the field you want to use for sort the modules ?",
                    choices: [
                        "id",
                        "name",
                        "size",
                        "chunks",
                        "erros",
                        "warnings",
                        "failed",
                        "cacheable",
                        "built",
                        "prefetched",
                        "optional",
                        "identifier",
                        "index",
                        "index2",
                        "profile",
                        "issuer",
                        "issuerId",
                        "issuerName",
                        "issuerPath",
                    ],
                }),
                moduleTrace: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_module_trace",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to show dependencies and the origin of warnings/erros ?",
                    choices: ["Yes", "No"],
                }),
                optimizationBailout: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_optimization_bailout",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to show the reasons why optimization bailed out for modules ?",
                    choices: ["Yes", "No"],
                }),
                outputPath: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_output_path",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to show an outputPath ?",
                    choices: ["Yes", "No"],
                }),
                performance: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_performance",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to show performance hint when the file size exceeds ?",
                    choices: ["Yes", "No"],
                }),
                preset: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_preset",
                    type: "list",
                    message: "(BundleAnalyzer) What is the type of preset you would choose that gets displayed ?",
                    choices: [
                        "errors-only",
                        "errors-warnings",
                        "minimal",
                        "none",
                        "normal",
                        "verbose",
                        "detailed",
                        "summary",
                    ],
                }),
                providedExports: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_provided_exports",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to show the exports of the modules ?",
                    choices: ["Yes", "No"],
                }),
                errorsCount: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_errors_count",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add errors count ?",
                    choices: ["Yes", "No"],
                }),
                warningsCount: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_warnings_count",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add warnings count ?",
                    choices: ["Yes", "No"],
                }),
                publicPath: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_public_path",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to show the publicPath ?",
                    choices: ["Yes", "No"],
                }),
                reasons: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_reasons",
                    type: "list",
                    message: "(BundleAnalyzer) Do you want to add information about the reasons of why modules are included ?",
                    choices: ["Yes", "No"],
                }),
                reasonsSpace: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_reasons_space",
                    type: "input",
                    message: "(BundleAnalyzer) How many reasons would be displayed (example: 100000) ?",
                }),
                relatedAssets: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_related_assets",
                    type: "list",
                    message: "(BundleAnalyzer.stats) Do you want to add information about assets that are related to other assets(like SourceMaps for assets) ?",
                    choices: ["Yes", "No"],
                }),
                source: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_source",
                    type: "list",
                    message: "(BundleAnalyzer.stats) Do you want to add the source code of modules ?",
                    choices: ["Yes", "No"],
                }),
                timings: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_timings",
                    type: "list",
                    message: "(BundleAnalyzer.stats) Do you want to add the timings information ?",
                    choices: ["Yes", "No"],
                }),
                ids: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_ids",
                    type: "list",
                    message: "(BundleAnalyzer.stats) Do you want to add IDs of modules and chunks ?",
                    choices: ["Yes", "No"],
                }),
                usedExports: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_used_exports",
                    type: "list",
                    message: "(BundleAnalyzer.stats) Do you want to show which exports of a module are used ?",
                    choices: ["Yes", "No"],
                }),
                version: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_version",
                    type: "list",
                    message: "(BundleAnalyzer.stats) Do you want to add information about the webpack version used ?",
                    choices: ["Yes", "No"],
                }),
                chunkGroupAuxiliary: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_chunk_group_auxiliary",
                    type: "list",
                    message: "(BundleAnalyzer.stats) Do you want to display auxiliary assets in chunk groups",
                    choices: ["Yes", "No"],
                }),
                chunkGroupChildren: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_chunk_group_children",
                    type: "list",
                    message: "(BundleAnalyzer.stats) Do you want to display children of the chunk groups (e.g. prefetched, preloaded chunks and assets) ?",
                    choices: ["Yes", "No"],
                }),
                chunkGroupMaxAssets: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_chunk_group_max_assets",
                    type: "input",
                    message: "(BundleAnalyzer.stats) What is the limit of assets displayed in chunk groups would be ?",
                }),
                warnings: await inquirer_1.default.prompt({
                    name: "question_analyzer_statsoptions_all",
                    type: "list",
                    message: "(BundleAnalyzer.stats) Do you want to add warnings ?",
                    choices: ["Yes", "No"],
                }),
            },
            excludeAssets: await inquirer_1.default.prompt({
                name: "question_analyzer_exclude_assets",
                type: "input",
                message: "What is the assets do you want to exclude ?",
            }),
            logLevel: await inquirer_1.default.prompt({
                name: "question_analyzer_log_level",
                type: "list",
                message: "(BundleAnalyzer) What is the log level would be used for checked how much details the plugin outputs ?",
                choices: ["info", "warn", "error", "silent"],
            }),
        }
        : void 0;
}
exports.bundleAnalyzerSupport = bundleAnalyzerSupport;
async function closureLibrarySupport(response) {
    return response === "Yes" ? {} : void 0;
}
async function isEnvironmentVariables() {
    return await inquirer_1.default.prompt({
        name: "question_environment_variables",
        type: "list",
        message: "Do you want to use environment variables in webpack ?",
        choices: ["Yes", "No"],
    });
}
exports.isEnvironmentVariables = isEnvironmentVariables;
async function setEnvironmentVariables() {
    return {
        name: await inquirer_1.default.prompt({
            name: "set_environment_names",
            type: "input",
            message: "What is name would be for environment variable (example: PG_DB PG_PORT) ?",
        }),
        value: await inquirer_1.default.prompt({
            name: "set_environment_values",
            type: "input",
            message: "What is value would be for environment variable (example: mydatabase 5423)",
        }),
    };
}
exports.setEnvironmentVariables = setEnvironmentVariables;
async function isLinter() {
    return await inquirer_1.default.prompt({
        name: "question_set_linter_support",
        type: "list",
        message: "Do you want to support a linter in you'r project ?",
        choices: ["Yes", "No"],
    });
}
exports.isLinter = isLinter;
async function isLinterType(response, type) {
    return setUpEslint(response);
}
exports.isLinterType = isLinterType;
async function setUpEslint(response) {
    return response === "Yes"
        ? {
            context: await inquirer_1.default.prompt({
                name: "question_is_context",
                type: "input",
                message: "What is the root would be for eslint(example: ./src/utils)?",
            }),
            eslintPath: await inquirer_1.default.prompt({
                name: "question_is_eslint_path",
                type: "input",
                message: "What is the path to eslint instance that would be used for linting (default: eslint)?",
                default: "eslint",
            }),
            extensions: await inquirer_1.default.prompt({
                name: "question_eslint_extensions",
                type: "input",
                message: "What is the specify extensions that would be checked (example: .js .ts .tsx)?",
            }),
            exclude: await inquirer_1.default.prompt({
                name: "question_is_exclude",
                type: "input",
                message: "What is the specify files and/or directories to exclude(example: node_modules file.js file2.js)?",
            }),
            files: await inquirer_1.default.prompt({
                name: "question_is_files",
                type: "input",
                message: "What is the specify directories, files, or globs would be (example: ./src/utils)?",
            }),
            fix: await inquirer_1.default.prompt({
                name: "question_is_fix",
                type: "list",
                message: "Be careful: this option will change source files",
                choices: ["Yes", "No"],
            }),
            linDirtyModulesOnly: await inquirer_1.default.prompt({
                name: "question_is_lin_dirty_modules_only",
                type: "list",
                message: "Do you want to lint only changed files, skip lint on start ?",
                choices: ["Yes", "No"],
            }),
            threads: await inquirer_1.default.prompt({
                name: "question_is_threads",
                type: "input",
                message: "What is the pool size would be for run lint tasks across thread pool (example: 2) ?",
            }),
            emitError: await inquirer_1.default.prompt({
                name: "question_is_emit_error",
                type: "list",
                message: "Do you want, that errors found will always be emitted ?",
                choices: ["Yes", "No"],
            }),
            emitWarning: await inquirer_1.default.prompt({
                name: "question_is_emit_warning",
                type: "list",
                message: "Do you want, that warnings found will always be emitted ?",
                choices: ["Yes", "No"],
            }),
            failOnError: await inquirer_1.default.prompt({
                name: "question_is_fail_on_error",
                type: "list",
                message: "Do you want, that will cause the module build to fail if there are any errors ?",
                choices: ["Yes", "No"],
            }),
            failOnWarning: await inquirer_1.default.prompt({
                name: "question_is_fail_on_warning",
                type: "list",
                message: "Do you want, that will cause the module build to fail if there are any warnings ?",
                choices: ["Yes", "No"],
            }),
            quiet: await inquirer_1.default.prompt({
                name: "question_is_quiet",
                type: "list",
                message: "Do you want, that will process and report erros only and ignore warnings ?",
                choices: ["Yes", "No"],
            }),
        }
        : void 0;
}
exports.setUpEslint = setUpEslint;
async function isHashModulePath() {
    return await inquirer_1.default.prompt({
        name: "question_is_hash_module_path",
        type: "list",
        message: "Do you want to cause hashes to be based on the relative path of the module, generating a four character string as the module id ?",
        choices: ["Yes", "No"],
    });
}
exports.isHashModulePath = isHashModulePath;
async function hashModuleIdsSupport(response) {
    return response === "Yes"
        ? {
            context: await inquirer_1.default.prompt({
                name: "question_is_context",
                type: "input",
                message: "What is the context directory(absolute path) would be for creating names ?",
            }),
            hashFunction: await inquirer_1.default.prompt({
                name: "question_is_hash_algorithm",
                type: "input",
                message: "What is the hashing algorithm would be to use (defaut: md4) ?",
                default: "md4",
            }),
            hashDigest: await inquirer_1.default.prompt({
                name: "question_is_hash_digest",
                type: "input",
                message: "What is the encoding to use when generating the hash (default: base64) ?",
                default: "base64",
            }),
            hashDigestLength: await inquirer_1.default.prompt({
                name: "question_is_hash_digest_list",
                type: "input",
                message: "What is the prefix length of the hash digest to use (default: 4) ?",
                default: "4",
            }),
        }
        : void 0;
}
exports.hashModuleIdsSupport = hashModuleIdsSupport;
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
async function cacheTypeOptions(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_cache_type",
            type: "list",
            message: "What is the cache type would be ?",
            choices: ["memory", "filesystem"],
        })
        : void 0;
}
exports.cacheTypeOptions = cacheTypeOptions;
async function ChooseCacheOptions(cacheType) {
    return cacheType === "filesystem"
        ? {
            cacheType: cacheType,
            name: await inquirer_1.default.prompt({
                name: "question_cache_name",
                type: "input",
                message: "What is the name would be a cache (example: someCache) ?",
            }),
            allowCollectingMemory: await inquirer_1.default.prompt({
                name: "question_allow_collecting_memory",
                type: "list",
                message: "Do you want to collect unused memory allocated during deserialization ?",
                choices: ["Yes", "No"],
            }),
            cacheDirectory: await inquirer_1.default.prompt({
                name: "question_cache_directory",
                type: "input",
                message: "What is the path to cache directory would be (example: ./src/cache) ?",
            }),
            cacheLocation: await inquirer_1.default.prompt({
                name: "question_cache_location",
                type: "input",
                message: "What is the location of cache would be (example: ./src/cache/name_of_cache) ?",
            }),
            compression: await inquirer_1.default.prompt({
                name: "question_cache_compression",
                type: "list",
                message: "What is the cache compression would be ?",
                choices: ["gzip", "brotli"],
            }),
            hashAlgorithm: await inquirer_1.default.prompt({
                name: "question_cache_hash_algorithm",
                type: "input",
                message: "What is the hash algorithm would be for cache (example: sha256)?",
            }),
            idleTimeout: await inquirer_1.default.prompt({
                name: "question_cache_idle_timeout",
                type: "input",
                message: "What is the period of time after which the cache should be saved (example: 10) ?",
            }),
            idleTimeoutAfterLargeChanges: await inquirer_1.default.prompt({
                name: "question_cache_idle_timeout_after_large_changes",
                type: "input",
                message: "What is the time period after which the cache storing should happen when larger changes have been detected (example: 200) ?",
            }),
            idleTimeoutForInitialStore: await inquirer_1.default.prompt({
                name: "question_cache_idle_timeout_for_initial_store",
                type: "input",
                message: " is the time period after which the initial cache storing should happen (example: 200) ?",
            }),
            maxAge: await inquirer_1.default.prompt({
                name: "question_cache_max_age",
                type: "input",
                message: "What is the amount of time, in milliseconds, that unused cache entries can remain in the filesystem cache(the default is one month) ?",
            }),
            maxMemoryGenerations: await inquirer_1.default.prompt({
                name: "question_cache_memory_generations",
                type: "list",
                message: "What will be the lifetime of unused cache entries in memory cache?",
                choices: ["0", "1", "10"],
            }),
            profile: await inquirer_1.default.prompt({
                name: "question_cache_profile",
                type: "list",
                message: "Do you want to track and log detailed timing information for individual cache items ?",
                choices: ["Yes", "No"],
            }),
            store: await inquirer_1.default.prompt({
                name: "question_cache_store",
                type: "list",
                message: "Do you want to store data when the compiler is idle in one file for all cached items ?",
                choices: ["Yes", "No"],
            }),
            version: await inquirer_1.default.prompt({
                name: "question_cache_version",
                type: "input",
                message: "What version of the data cache will be? (details: different versions do not allow cache reuse and override existing content. Update the version if the configuration is changed in such a way that it does not allow cache reuse. This will invalidate the cache)",
            }),
        }
        : cacheType === "memory"
            ? {
                maxGenerations: await inquirer_1.default.prompt({
                    name: "question_cache_max_generations",
                    type: "list",
                    message: "What will be the lifetime of unused cache entries in memory cache?",
                    choices: ["1", "Infinity"],
                }),
            }
            : void 0;
}
exports.ChooseCacheOptions = ChooseCacheOptions;
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
                message: "How many threshold would be for compression (example: 5320) ?",
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
async function copyPluginSetup() {
    return {
        patterns: {
            from: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
            to: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
            context: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
            globOptions: {
                ignore: await inquirer_1.default.prompt({
                    name: "question_copy_concurrency",
                    type: "input",
                    message: "How many limits the number of simultaneous requests would be to fs ?",
                }),
            },
            filter: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
            toType: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
            force: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
            priority: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
            cache: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
            noErrorOnMissing: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
        },
        options: {
            concurrency: await inquirer_1.default.prompt({
                name: "question_copy_concurrency",
                type: "input",
                message: "How many limits the number of simultaneous requests would be to fs ?",
            }),
        },
    };
}
exports.copyPluginSetup = copyPluginSetup;
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
        message: "Do you want to use loader for static files ?",
        choices: ["Yes", "No"],
    });
}
exports.staticLoader = staticLoader;
async function setMinimumChunkSize(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_minimum_chunk_size",
            type: "input",
            message: "What is the minimum chunk size would be (example: 800) ?",
        })
        : void 0;
}
exports.setMinimumChunkSize = setMinimumChunkSize;
async function setMaximumChunkSize(response) {
    return response === "Yes"
        ? await inquirer_1.default.prompt({
            name: "question_maximum_chunk_size",
            type: "input",
            message: "What is the maximum chunk size would be (example: 2400) ?",
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
        : void 0;
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
async function isMinifyJSONFiles() {
    return await inquirer_1.default.prompt({
        name: "question_is_minify_json_files",
        type: "list",
        message: "If you have a .json files, than you want to minimize them ?",
        choices: ["Yes", "No"],
    });
}
exports.isMinifyJSONFiles = isMinifyJSONFiles;
async function minifyJSONOptions(response) {
    return response === "Yes"
        ? {
            test: await inquirer_1.default.prompt({
                name: "question_is_test_regexp",
                type: "input",
                message: "What is the test regular expression would be (default: /.json(?.*)?$/i) ?",
                default: "/.json(?.*)?$/i",
            }),
            include: await inquirer_1.default.prompt({
                name: "question_is_include_files",
                type: "input",
                message: "What is the files would be include like a regular expression (example: /includes/) ?",
            }),
            exclude: await inquirer_1.default.prompt({
                name: "question_is_exclude_files",
                type: "input",
                message: "What is the files would be exclude like a regular expression (example: /excludes/) ?",
            }),
            minimizerOptions: {
                space: await inquirer_1.default.prompt({
                    name: "question_is_space",
                    type: "input",
                    message: "What is the space would be for json minimizer (example: \t) ?",
                }),
            },
        }
        : void 0;
}
exports.minifyJSONOptions = minifyJSONOptions;
async function chooseWatchFiles(port) {
    return await inquirer_1.default.prompt({
        name: "question_13",
        type: "input",
        message: `What is the folder with files do you want to watch for changes with starting devServer (example: ${port}/html) ?`,
        default: `${port}/html`,
    });
}
exports.chooseWatchFiles = chooseWatchFiles;
//# sourceMappingURL=answers.js.map