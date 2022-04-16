"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebpackConfigCustom = exports.WebpackConfigOptions = exports.firstChoose = void 0;
var inquirer_1 = __importDefault(require("inquirer"));
var start_1 = require("./start");
var webpack_set_content_1 = require("./webpack-set.content");
var add_content_preset_1 = require("./add-content-preset");
var answers_1 = require("./answers");
var add_content_custom_1 = require("./add-content-custom");
function firstChoose() {
    return __awaiter(this, void 0, void 0, function () {
        var basicChoose;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, start_1.start)()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_1",
                            type: "list",
                            message: "Are you want a basic preset or you want to create a custom?",
                            choices: ["Preset", "Custom"],
                        })];
                case 2:
                    basicChoose = _a.sent();
                    return [4 /*yield*/, choosePreset(basicChoose.question_1)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.firstChoose = firstChoose;
function choosePreset(type) {
    return __awaiter(this, void 0, void 0, function () {
        var presetChoose, webpackVersion, webpackMode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_2",
                        type: "list",
                        message: "What do you want to choose from presets?",
                        choices: ["Vue", "React", "Svelte", "Typescript", "Javascript"],
                    })];
                case 1:
                    presetChoose = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_3",
                            type: "list",
                            message: "What is the version of webpack do you want to use?",
                            choices: ["4", "5"],
                        })];
                case 2:
                    webpackVersion = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_4",
                            type: "list",
                            message: "What is the development mode do you want for webpack ?",
                            choices: ["development", "production"],
                        })];
                case 3:
                    webpackMode = _a.sent();
                    return [4 /*yield*/, handleAnswer(presetChoose.question_2, webpackMode.question_4, webpackVersion.question_3)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleAnswer(presetOptions, mode, webpackVersion) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, webpack_set_content_1.generateWebpackConfig)(presetOptions, mode, webpackVersion)];
                case 1:
                    _a.sent();
                    process.exit(1);
                    return [2 /*return*/];
            }
        });
    });
}
function checkPresetTsConfig(preset) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(preset === "Typescript")) return [3 /*break*/, 2];
                    _b = {};
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_12",
                            type: "input",
                            message: "What is the path to you'r tslint.json file (default: ./tslint.json)?",
                            default: "./tslint.json",
                        })];
                case 1:
                    _a = (_b.tslintFilePath = _c.sent(),
                        _b);
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _c.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
function checkPresetFrameworkConfig(preset) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!["Javascript", "Typescript"].some(function (value) { return value !== preset; })) return [3 /*break*/, 2];
                    _b = {};
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_12",
                            type: "list",
                            message: "What is the language you want to select for that framework ?",
                            choices: ["Javascript", "Typescript"],
                        })];
                case 1:
                    _a = (_b.langForFramework = _c.sent(),
                        _b);
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _c.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
function checkPresetHTML(preset, text) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!["React", "Vue", "Svelte"].some(function (value) { return value !== preset; })) return [3 /*break*/, 3];
                    _b = {};
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_6",
                            type: "input",
                            message: "What is the title do you want in html page (example: Hello world) ?",
                            default: "Hello world",
                        })];
                case 1:
                    _b.htmlTitle = _c.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_7",
                            type: "input",
                            message: "What is the html template would be in webpack config (example: ".concat(text, "/main.html) ?"),
                        })];
                case 2:
                    _a = (_b.htmlTemplate = _c.sent(),
                        _b);
                    return [3 /*break*/, 4];
                case 3:
                    _a = void 0;
                    _c.label = 4;
                case 4: return [2 /*return*/, _a];
            }
        });
    });
}
function WebpackConfigCustom(presetType, mode) {
    return __awaiter(this, void 0, void 0, function () {
        var contextPrintWrite, entryPointWrite, setAliasPathes, isCoffescriptSupport, isHtmlPreprocessorSupport, htmlPreprocessors, isCssPreprocessor, cssPreprocessorsSupport, isImageExtension, imageExtensionsSupport, isFontsSupport, fontsExtensionsSupport, isXmlSupport, isYamlSupport, isCsvSupport, fileLoaderSupport, isLazyLoadingSupport, isAvoidErrorStylesSupport, isCacheWebpackSupport, isSplittingChunksSupport, isPwaAnswer, isBannerSupport, isClosureLibrarySupport, isGlobalVariableSupport, SetGlobalVariableNameSupport, SetGloabalVariableValueSupport, isSplitBundlesThroughDLLSupport, splitBundlesThroughDLLContextSupport, manifestBundlesThroughDLLSupport, isEnvironmentVariablesSupport, setEnvironmentVariableNameAndValueSupport, isDiscoverPreviousCompilationSupport, isLocalizeSupport, setLocalizeDetailsSupport, setMinimumChunkSizeSupport, setMaximumChunkSizeSupport, isCreateChromeProfileFileSupport, isIgnoreSomeFilesSupport, isIntegrationSupport, setIntegrationSupport, isHMRSupport, isCompressionSupport, setCompressionLevelSupport, setCompressionRatioSupport, isCopyStaticFilesSupport, setFilesCatalogesCopySupport, setOutputDirectory, isDevServerSupport;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, answers_1.contextAnswer)()];
                case 1:
                    contextPrintWrite = _a.sent();
                    return [4 /*yield*/, (0, answers_1.entryPointsAnswer)(presetType, contextPrintWrite.question_context)];
                case 2:
                    entryPointWrite = _a.sent();
                    return [4 /*yield*/, (0, answers_1.setAliasAnswer)(contextPrintWrite.question_context)];
                case 3:
                    setAliasPathes = _a.sent();
                    return [4 /*yield*/, (0, answers_1.supportFromCoffeScriptAnswer)()];
                case 4:
                    isCoffescriptSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isHtmlPreprocessorAnswer)()];
                case 5:
                    isHtmlPreprocessorSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.htmlPreprocessorsAnswer)(isHtmlPreprocessorSupport.question_is_html_preprocessor)];
                case 6:
                    htmlPreprocessors = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isCssPreprocessorsAnswer)()];
                case 7:
                    isCssPreprocessor = _a.sent();
                    return [4 /*yield*/, (0, answers_1.cssPreprocessors)(isCssPreprocessor.question_is_css_preprocessor)];
                case 8:
                    cssPreprocessorsSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isImageExtensionAnswer)()];
                case 9:
                    isImageExtension = _a.sent();
                    return [4 /*yield*/, (0, answers_1.imageExtensions)(isImageExtension.question_is_image_extensions)];
                case 10:
                    imageExtensionsSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isFontsAnswer)()];
                case 11:
                    isFontsSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.fontsExtensions)(isFontsSupport.is_fonts)];
                case 12:
                    fontsExtensionsSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isXmlExtension)()];
                case 13:
                    isXmlSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isYamlExtension)()];
                case 14:
                    isYamlSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isCsvExtension)()];
                case 15:
                    isCsvSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.chooseStaticFilesLoader)("Yes")];
                case 16:
                    fileLoaderSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isLazyLoading)()];
                case 17:
                    isLazyLoadingSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isAvoidErrorStyles)()];
                case 18:
                    isAvoidErrorStylesSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isCacheWebpack)()];
                case 19:
                    isCacheWebpackSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isSplittingChunks)()];
                case 20:
                    isSplittingChunksSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isPwaSupport)()];
                case 21:
                    isPwaAnswer = _a.sent();
                    return [4 /*yield*/, (0, answers_1.addingBannerToChunk)(isSplittingChunksSupport.question_is_splitting_chunks)];
                case 22:
                    isBannerSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isClosureLibrary)()];
                case 23:
                    isClosureLibrarySupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isGlobalVariableAnswer)()];
                case 24:
                    isGlobalVariableSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.setGlobalVariableName)(isGlobalVariableSupport.question_is_global_variable_answer)];
                case 25:
                    SetGlobalVariableNameSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.setGlobalVariableValue)(isGlobalVariableSupport.question_is_global_variable_answer)];
                case 26:
                    SetGloabalVariableValueSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isSplitBundlesThroughDLL)()];
                case 27:
                    isSplitBundlesThroughDLLSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.contextSplitBundlesThroughDLL)(isSplitBundlesThroughDLLSupport.question_is_split_bundles_dll)];
                case 28:
                    splitBundlesThroughDLLContextSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.pathToManifestForDLL)(isSplitBundlesThroughDLLSupport.question_is_split_bundles_dll)];
                case 29:
                    manifestBundlesThroughDLLSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isEnvironmentVariables)()];
                case 30:
                    isEnvironmentVariablesSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.setEnvironmentVariables)(isEnvironmentVariablesSupport.question_environment_variables)];
                case 31:
                    setEnvironmentVariableNameAndValueSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isDiscoverPreviousCompilation)()];
                case 32:
                    isDiscoverPreviousCompilationSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isLocalizeAnswer)()];
                case 33:
                    isLocalizeSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.setLocalizeDetails)(isLocalizeSupport.question_is_localize)];
                case 34:
                    setLocalizeDetailsSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.setMinimumChunkSize)(isSplittingChunksSupport.question_is_splitting_chunks)];
                case 35:
                    setMinimumChunkSizeSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.setMaximumChunkSize)(isSplittingChunksSupport.question_is_splitting_chunks)];
                case 36:
                    setMaximumChunkSizeSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isCreateChromeProfileFile)()];
                case 37:
                    isCreateChromeProfileFileSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isIgnoreSomeFiles)()];
                case 38:
                    isIgnoreSomeFilesSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isIntegrationInstrument)()];
                case 39:
                    isIntegrationSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.integrationInstruments)(isIntegrationSupport.question_is_integration)];
                case 40:
                    setIntegrationSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isHMRAnswer)()];
                case 41:
                    isHMRSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isCompressionAnswer)()];
                case 42:
                    isCompressionSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.compressionLevel)(isCompressionSupport.question_is_compression_answer)];
                case 43:
                    setCompressionLevelSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.setLevelRatioCompression)(isCompressionSupport.question_is_compression_answer)];
                case 44:
                    setCompressionRatioSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isCopyStaticFiles)()];
                case 45:
                    isCopyStaticFilesSupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.setFilesCatalogesCopy)(isCopyStaticFilesSupport.is_copy_static_files)];
                case 46:
                    setFilesCatalogesCopySupport = _a.sent();
                    return [4 /*yield*/, (0, answers_1.outputDir)()];
                case 47:
                    setOutputDirectory = _a.sent();
                    return [4 /*yield*/, (0, answers_1.isDevServerAnswer)()];
                case 48:
                    isDevServerSupport = _a.sent();
                    (0, add_content_custom_1.addContentToCustom)(presetType, mode, {
                        context: contextPrintWrite.question_context,
                        entryPoint: entryPointWrite.entry_point,
                        aliasPath: setAliasPathes.set_alias,
                        isCoffeScriptSupport: isCoffescriptSupport.question_coffe_script,
                        isHtmlPreprocessorSupport: isHtmlPreprocessorSupport.question_is_html_preprocessor,
                        htmlPreprocessor: htmlPreprocessors === null || htmlPreprocessors === void 0 ? void 0 : htmlPreprocessors.question_html_preprocessor,
                        isCssPreprocessorSupport: isCssPreprocessor.question_is_css_preprocessor,
                        cssPreprocessors: cssPreprocessorsSupport === null || cssPreprocessorsSupport === void 0 ? void 0 : cssPreprocessorsSupport.question_css_preprocessor,
                        isImageSupport: isImageExtension.question_is_image_extensions,
                        imageExtensionsSupport: imageExtensionsSupport === null || imageExtensionsSupport === void 0 ? void 0 : imageExtensionsSupport.question_image_extensions,
                        isFontsSupport: isFontsSupport.is_fonts,
                        fontsExtensionsSupport: fontsExtensionsSupport === null || fontsExtensionsSupport === void 0 ? void 0 : fontsExtensionsSupport.question_fonts_extensions,
                        isXmlSupport: isXmlSupport.question_xml_exension,
                        isYamlSupport: isYamlSupport.question_yaml_extension,
                        isCsvSupport: isCsvSupport.question_csv_extension,
                        fileLoaderSupport: fileLoaderSupport === null || fileLoaderSupport === void 0 ? void 0 : fileLoaderSupport.choose_static_files_loader,
                        isLazyLoadingSupport: isLazyLoadingSupport.is_lazy_loading,
                        isAvoidErrorStyleSupport: isAvoidErrorStylesSupport.is_avoid_error_styles,
                        isCacheWebpackSupport: isCacheWebpackSupport.cache_webpack,
                        isSplittingChunksSupport: isSplittingChunksSupport.question_is_splitting_chunks,
                        minimumChunkSizeSupport: setMinimumChunkSizeSupport === null || setMinimumChunkSizeSupport === void 0 ? void 0 : setMinimumChunkSizeSupport.question_minimum_chunk_size,
                        maximumChunkSizeSupport: setMaximumChunkSizeSupport === null || setMaximumChunkSizeSupport === void 0 ? void 0 : setMaximumChunkSizeSupport.question_maximum_chunk_size,
                        isPwaAnswer: isPwaAnswer.question_build_pwa,
                        isBannerSupport: isBannerSupport === null || isBannerSupport === void 0 ? void 0 : isBannerSupport.question_adding_banner_to_chunk,
                        isClosureSupport: isClosureLibrarySupport.question_closure_library,
                        isGlobalVariableSupport: isGlobalVariableSupport.question_is_global_variable_answer,
                        globalVariableName: SetGlobalVariableNameSupport === null || SetGlobalVariableNameSupport === void 0 ? void 0 : SetGlobalVariableNameSupport.question_set_global_variable_name,
                        globalVariableValue: SetGloabalVariableValueSupport === null || SetGloabalVariableValueSupport === void 0 ? void 0 : SetGloabalVariableValueSupport.question_set_global_variable_value,
                        isSplitBundlesThroughDLLSupport: isSplitBundlesThroughDLLSupport.question_is_split_bundles_dll,
                        splitBundlesThroughDLLContextSupport: splitBundlesThroughDLLContextSupport === null || splitBundlesThroughDLLContextSupport === void 0 ? void 0 : splitBundlesThroughDLLContextSupport.question_context_split_bundles_dll,
                        manifestBundlesThroughDLLSupport: manifestBundlesThroughDLLSupport === null || manifestBundlesThroughDLLSupport === void 0 ? void 0 : manifestBundlesThroughDLLSupport.question_path_to_manifest_dll,
                        isEnvironmentalVariablesSupport: isEnvironmentVariablesSupport.question_environment_variables,
                        environmentVariableName: setEnvironmentVariableNameAndValueSupport === null || setEnvironmentVariableNameAndValueSupport === void 0 ? void 0 : setEnvironmentVariableNameAndValueSupport.name.set_environment_names,
                        environmentVariableValue: setEnvironmentVariableNameAndValueSupport === null || setEnvironmentVariableNameAndValueSupport === void 0 ? void 0 : setEnvironmentVariableNameAndValueSupport.value.set_environment_values,
                        isDiscoverPreviousCompilationSupport: isDiscoverPreviousCompilationSupport.question_discover_previous_compilation,
                        isLocalizeSupport: isLocalizeSupport.question_is_localize,
                        localizeDetailsSupport: setLocalizeDetailsSupport === null || setLocalizeDetailsSupport === void 0 ? void 0 : setLocalizeDetailsSupport.question_set_localize_details,
                        isCreateChromeProfileFileSupport: isCreateChromeProfileFileSupport.question_is_create_chrome_profile_file,
                        isIgnoreSomeFilesSupport: isIgnoreSomeFilesSupport.question_is_ignore_some_files,
                        isIntegrationSupport: isIntegrationSupport.question_is_integration,
                        integrationSupport: setIntegrationSupport === null || setIntegrationSupport === void 0 ? void 0 : setIntegrationSupport.question_integration_instrument,
                        isHMRSupport: isHMRSupport.question_is_hmr,
                        isCompressionSupport: isCompressionSupport.question_is_compression_answer,
                        compressionLevelSupport: setCompressionLevelSupport === null || setCompressionLevelSupport === void 0 ? void 0 : setCompressionLevelSupport.question_compression_level,
                        compressionRatioSupport: setCompressionRatioSupport === null || setCompressionRatioSupport === void 0 ? void 0 : setCompressionRatioSupport.question_set_level_ratio_compression,
                        isCopyStaticFilesSupport: isCopyStaticFilesSupport.is_copy_static_files,
                        filesCatalogesCopySupport: setFilesCatalogesCopySupport === null || setFilesCatalogesCopySupport === void 0 ? void 0 : setFilesCatalogesCopySupport.set_files_cataloges_copy,
                        outputDirectory: setOutputDirectory.question_output_dir,
                        isDevServerSupport: isDevServerSupport.is_dev_server,
                        devMode: mode,
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.WebpackConfigCustom = WebpackConfigCustom;
function WebpackConfigOptions(presetType, mode) {
    return __awaiter(this, void 0, void 0, function () {
        var contextPointWrite, entryPointWrite, aliasPathWrite, portWrite, outputFolder, htmlPreset, checkLangPreset, checkTsConfigPreset, watchFilesPath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, answers_1.contextAnswer)()];
                case 1:
                    contextPointWrite = _a.sent();
                    return [4 /*yield*/, (0, answers_1.entryPointsAnswer)(presetType, contextPointWrite.question_context)];
                case 2:
                    entryPointWrite = _a.sent();
                    return [4 /*yield*/, (0, answers_1.setAliasAnswer)(contextPointWrite.question_context)];
                case 3:
                    aliasPathWrite = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_8",
                            type: "input",
                            message: "What is the port would be in Dev Server (default: 3500) ?",
                            default: 3500,
                        })];
                case 4:
                    portWrite = _a.sent();
                    return [4 /*yield*/, (0, answers_1.outputDir)()];
                case 5:
                    outputFolder = _a.sent();
                    return [4 /*yield*/, checkPresetHTML(presetType, contextPointWrite.question_context)];
                case 6:
                    htmlPreset = _a.sent();
                    return [4 /*yield*/, checkPresetFrameworkConfig(presetType)];
                case 7:
                    checkLangPreset = _a.sent();
                    return [4 /*yield*/, checkPresetTsConfig(checkLangPreset === null || checkLangPreset === void 0 ? void 0 : checkLangPreset.langForFramework.question_12)];
                case 8:
                    checkTsConfigPreset = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_13",
                            type: "input",
                            message: "What is the folder with files do you want to watch for changes with starting devServer (example: ".concat(contextPointWrite.question_context, "/html) ?"),
                            default: "".concat(contextPointWrite.question_context, "/html"),
                        })];
                case 9:
                    watchFilesPath = _a.sent();
                    return [2 /*return*/, (0, add_content_preset_1.addContentToPreset)(presetType, {
                            context: contextPointWrite.question_context,
                            entryPoint: entryPointWrite.entry_point,
                            aliasPath: aliasPathWrite.set_alias,
                            devPort: portWrite.question_8,
                            htmlTitle: htmlPreset === null || htmlPreset === void 0 ? void 0 : htmlPreset.htmlTitle.question_6,
                            htmlTemplate: htmlPreset === null || htmlPreset === void 0 ? void 0 : htmlPreset.htmlTemplate.question_7,
                            tslintFilePath: checkTsConfigPreset === null || checkTsConfigPreset === void 0 ? void 0 : checkTsConfigPreset.tslintFilePath.question_12,
                            outputFolder: outputFolder.question_output_dir,
                            watchFiles: watchFilesPath.question_13,
                            devMode: mode,
                        })];
            }
        });
    });
}
exports.WebpackConfigOptions = WebpackConfigOptions;
//# sourceMappingURL=handle-answers.js.map