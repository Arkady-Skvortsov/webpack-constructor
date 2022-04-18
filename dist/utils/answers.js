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
exports.isCreateChromeProfileFile = exports.setCompressionOptions = exports.setGlobalVariable = exports.isGlobalVariableAnswer = exports.isCompressionAnswer = exports.isMaximumChunkSize = exports.isMinimumChunkSize = exports.setLocalizeDetails = exports.isHMRAnswer = exports.isLocalizeAnswer = exports.setEnvironmentVariables = exports.setFilesCatalogesCopy = exports.isCopyStaticFiles = exports.isEnvironmentVariables = exports.chooseStaticFilesLoader = exports.isClosureLibrary = exports.addingBannerToChunk = exports.isCleanPlugin = exports.isCopyPlugin = exports.fontsOutDir = exports.isSplittingChunks = exports.isDiscoverPreviousCompilation = exports.supportSplitBundlesThroughDLL = exports.isSplitBundlesThroughDLL = exports.isFontsExtensionAnswer = exports.isImageExtensionAnswer = exports.isHtmlPreprocessorAnswer = exports.isCssPreprocessorsAnswer = exports.isCsvExtension = exports.cssPreprocessors = exports.contextAnswer = exports.isCacheWebpack = exports.isXmlExtension = exports.htmlPreprocessorsAnswer = exports.fontsExtensions = exports.isLazyLoading = exports.isImagesAnswer = exports.isFontsAnswer = exports.isDevServerAnswer = exports.fontsDir = exports.isAvoidErrorStyles = exports.isPwaSupport = exports.imageExtensions = exports.isYamlExtension = exports.entryPointsAnswer = exports.supportFromCoffeScriptAnswer = exports.staticLoader = exports.splitChunksWebpack = exports.outputDir = exports.integrationInstruments = void 0;
exports.isIgnoreSomeFilesWatchMode = exports.setFilesForIgnoreInWatchMode = exports.setFilesForIgnore = exports.setAliasAnswer = exports.setMinimumChunkSize = exports.setMaximumChunkSize = exports.isIntegrationInstrument = exports.isIgnoreSomeFiles = void 0;
var inquirer_1 = __importDefault(require("inquirer"));
var extensions_1 = require("./helpers/extensions");
var text_1 = require("./text");
function contextAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_context",
                        type: "input",
                        message: "What is the context would be in webpack config (example: ./src) ?",
                        default: "./src",
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.contextAnswer = contextAnswer;
function entryPointsAnswer(preset, entrypoint) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "entry_point",
                        type: "input",
                        message: "What is the entrypoint would be in webpack config (example: ".concat(entrypoint, "/main").concat((0, extensions_1.generateExtensions)(preset), ") ?"),
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.entryPointsAnswer = entryPointsAnswer;
function setAliasAnswer(context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "set_alias",
                        type: "input",
                        message: "What is the path for alias(es) would be in webpack config (example: ".concat(context, "/utils) ?"),
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.setAliasAnswer = setAliasAnswer;
function isImagesAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "is_images",
                        type: "list",
                        message: "Do you want to use images in you'r project ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isImagesAnswer = isImagesAnswer;
function isFontsAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "is_fonts",
                        type: "list",
                        message: "Do you want to use fonts in you'r project ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isFontsAnswer = isFontsAnswer;
function isDevServerAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "is_dev_server",
                        type: "list",
                        message: "Do you want to use DevServer in webpack ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isDevServerAnswer = isDevServerAnswer;
function isLazyLoading() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "is_lazy_loading",
                        type: "list",
                        message: "Do you want to use lazy loading in webpack ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isLazyLoading = isLazyLoading;
function isAvoidErrorStyles() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "is_avoid_error_styles",
                        type: "list",
                        message: "Do you want to use avoid error for styles ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isAvoidErrorStyles = isAvoidErrorStyles;
function isCacheWebpack() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "cache_webpack",
                        type: "list",
                        message: "Do you want to use cache in webpack ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isCacheWebpack = isCacheWebpack;
function splitChunksWebpack() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "split_chinks_webpack",
                        type: "list",
                        message: "",
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.splitChunksWebpack = splitChunksWebpack;
function supportFromCoffeScriptAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_coffe_script",
                        type: "list",
                        message: "Do you want to support CoffeScript ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.supportFromCoffeScriptAnswer = supportFromCoffeScriptAnswer;
function isCopyPlugin() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_copy_plugin",
                        type: "list",
                        message: "Do you want to copy individual files or entire directories, which already exist to the build directory ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isCopyPlugin = isCopyPlugin;
function isCleanPlugin() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_clean_plugin",
                        type: "list",
                        message: "Do you want that all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild would be removed ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isCleanPlugin = isCleanPlugin;
function isCopyStaticFiles() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "is_copy_static_files",
                        type: "list",
                        message: "Do you want copy ready catalogs/files in build folders ",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isCopyStaticFiles = isCopyStaticFiles;
function setFilesCatalogesCopy(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "set_files_cataloges_copy",
                            type: "input",
                            message: "What is files do you want that be copied in build catalog ?",
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.setFilesCatalogesCopy = setFilesCatalogesCopy;
function setFilesForIgnore(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "set_files_for_ignore",
                            type: "input",
                            message: "What is the files do you want to ignore ?",
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.setFilesForIgnore = setFilesForIgnore;
function isIgnoreSomeFilesWatchMode() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "is_ignore_some_files_watch_mode",
                        type: "list",
                        message: "Do you want to set files, which would be ignored in watch mode ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isIgnoreSomeFilesWatchMode = isIgnoreSomeFilesWatchMode;
function setFilesForIgnoreInWatchMode() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "set_files_for_ignore_in_watch_mode",
                        type: "input",
                        message: "What is the files do you want to ignore in watch mode ?",
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.setFilesForIgnoreInWatchMode = setFilesForIgnoreInWatchMode;
function isHtmlPreprocessorAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_html_preprocessor",
                        type: "list",
                        message: "Do you want to support by html preprocessor(s) ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isHtmlPreprocessorAnswer = isHtmlPreprocessorAnswer;
function htmlPreprocessorsAnswer(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_html_preprocessor",
                            type: "checkbox",
                            message: "What is html preprocessor(s) do you want to use ?",
                            choices: ["Pug", "Jade", "EJS", "HandleBars"],
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.htmlPreprocessorsAnswer = htmlPreprocessorsAnswer;
function isSplitBundlesThroughDLL() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_split_bundles_dll",
                        type: "list",
                        message: "Do you want to split bundles through DLL ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isSplitBundlesThroughDLL = isSplitBundlesThroughDLL;
function supportSplitBundlesThroughDLL(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 4];
                    _b = {};
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_context_split_bundles_dll",
                            type: "input",
                            message: "What is the name would be for bundle for DLL (example: bundle) ?",
                        })];
                case 1:
                    _b.name = _c.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_path_to_files",
                            type: "input",
                            message: "What is the path to files for DLL (example: ./src)",
                        })];
                case 2:
                    _b.path = _c.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_path_to_manifest_dll",
                            type: "input",
                            message: "What is the path to manifest for DLL (example: ./src/manifest.json) ?",
                        })];
                case 3:
                    _a = (_b.manifest = _c.sent(),
                        _b);
                    return [3 /*break*/, 5];
                case 4:
                    _a = void 0;
                    _c.label = 5;
                case 5: return [2 /*return*/, _a];
            }
        });
    });
}
exports.supportSplitBundlesThroughDLL = supportSplitBundlesThroughDLL;
function isDiscoverPreviousCompilation() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_discover_previous_compilation",
                        type: "list",
                        message: "Do you want to discover all modules from the previous compilation upfront while watching for changes, trying to improve the incremental build times. ",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isDiscoverPreviousCompilation = isDiscoverPreviousCompilation;
function isCssPreprocessorsAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_css_preprocessor",
                        type: "list",
                        message: "Do you want to support by css preprocessor(s) ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isCssPreprocessorsAnswer = isCssPreprocessorsAnswer;
function cssPreprocessors(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_css_preprocessor",
                            type: "checkbox",
                            message: "What is css preprocessor(s) do you want to use ?",
                            choices: ["(Sass/Scss)", "Less", "PostCSS", "Stylus"],
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.cssPreprocessors = cssPreprocessors;
function isImageExtensionAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_image_extensions",
                        type: "list",
                        message: "Do you want to use images in your project ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isImageExtensionAnswer = isImageExtensionAnswer;
function imageExtensions(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_image_extensions",
                            type: "checkbox",
                            message: "What is the image extension(s) do you want to use ?",
                            choices: [".png", ".jpeg", ".jpg", ".svg", ".gif", ".webp"],
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.imageExtensions = imageExtensions;
function isFontsExtensionAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_font_extensions",
                        type: "list",
                        message: "Do you want to use fonts in your project ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isFontsExtensionAnswer = isFontsExtensionAnswer;
function fontsExtensions(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_fonts_extensions",
                            type: "checkbox",
                            message: "What is fonts extension(s) do you want to use ?",
                            choices: [".woff", ".ttf", ".eot", ".svg", ".otf"],
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.fontsExtensions = fontsExtensions;
function fontsOutDir(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_fonts_dir",
                            type: "input",
                            message: "What is the directory would be an output for fonts ?",
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.fontsOutDir = fontsOutDir;
function isXmlExtension() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_xml_exension",
                        type: "list",
                        message: "Do you want to use .xml extension ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isXmlExtension = isXmlExtension;
function isYamlExtension() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_yaml_extension",
                        type: "list",
                        message: "Do you want to use .yaml extension ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isYamlExtension = isYamlExtension;
function isCsvExtension() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_csv_extension",
                        type: "list",
                        message: "Do you want to use .csv extension ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isCsvExtension = isCsvExtension;
function isPwaSupport() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_build_pwa",
                        type: "list",
                        message: "Do you want to build pwa ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isPwaSupport = isPwaSupport;
function isSplittingChunks() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_splitting_chunks",
                        type: "list",
                        message: "Do you want to split chunk ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isSplittingChunks = isSplittingChunks;
function addingBannerToChunk(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_adding_banner_to_chunk",
                            type: "list",
                            message: "Do you want to adding banner to chunk ?",
                            choices: ["Yes", "No"],
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.addingBannerToChunk = addingBannerToChunk;
function isClosureLibrary() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_closure_library",
                        type: "list",
                        message: "Do you want to adding support by Closure Library ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isClosureLibrary = isClosureLibrary;
function isEnvironmentVariables() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_environment_variables",
                        type: "list",
                        message: "Do you want to use environment variables in webpack ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isEnvironmentVariables = isEnvironmentVariables;
function setEnvironmentVariables(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 3];
                    _b = {};
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "set_environment_names",
                            type: "input",
                            message: "What is name would be for environment variable (example: PG_DB PG_PORT) ?",
                        })];
                case 1:
                    _b.name = _c.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "set_environment_values",
                            type: "input",
                            message: "What is value would be for environment variable (example: )",
                        })];
                case 2:
                    _a = (_b.value = _c.sent(),
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
exports.setEnvironmentVariables = setEnvironmentVariables;
function isLocalizeAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_localize",
                        type: "list",
                        message: "Do you want to localize in your application ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isLocalizeAnswer = isLocalizeAnswer;
function isHMRAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_hmr",
                        type: "list",
                        message: "Do you want to enable HMR(Hot module replacement) in webpack ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isHMRAnswer = isHMRAnswer;
function setLocalizeDetails(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_set_localize_details",
                            type: "input",
                            message: "What is the languages do you want to use (example: RU EN FR) ?",
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.setLocalizeDetails = setLocalizeDetails;
function isMinimumChunkSize(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_is_minimum_chunk_size",
                            type: "list",
                            message: "Do you want to set minimum chunk size ?",
                            choices: ["Yes", "No"],
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.isMinimumChunkSize = isMinimumChunkSize;
function isMaximumChunkSize(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_is_maximum_chunk_size",
                            type: "list",
                            message: "Do you want to set maximum chunk size ?",
                            choices: ["Yes", "No"],
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.isMaximumChunkSize = isMaximumChunkSize;
function isCompressionAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_compression_answer",
                        type: "list",
                        message: "Do you want to compress webpack ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isCompressionAnswer = isCompressionAnswer;
function isGlobalVariableAnswer() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_global_variable_answer",
                        type: "list",
                        message: "Do you want to have a global variables in your project ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isGlobalVariableAnswer = isGlobalVariableAnswer;
function setGlobalVariable(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 3];
                    _b = {};
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_set_global_variable_name",
                            type: "input",
                            message: "What is the name(s) do you want for you variable(s) (example: PRODUCTION BROWSER_SUPPORTS_HTML5) ?",
                        })];
                case 1:
                    _b.name = _c.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_set_global_variable_value",
                            type: "input",
                            message: "What is the value(s) do you want for you variable(s) (example: true true) ?",
                        })];
                case 2:
                    _a = (_b.value = _c.sent(),
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
exports.setGlobalVariable = setGlobalVariable;
function setCompressionOptions(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 4];
                    _b = {};
                    return [4 /*yield*/, inquirer_1.default.prompt({
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
                        })];
                case 1:
                    _b.ratio = _c.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_compression_level",
                            type: "list",
                            message: "What is the level for compression do you want to choose ?",
                            choices: ["1", "2", "3", "4"],
                        })];
                case 2:
                    _b.compressionLevel = _c.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_threshold_level",
                            type: "input",
                            message: "How many threshold would be for compression ?",
                        })];
                case 3:
                    _a = (_b.threshold = _c.sent(),
                        _b);
                    return [3 /*break*/, 5];
                case 4:
                    _a = void 0;
                    _c.label = 5;
                case 5: return [2 /*return*/, _a];
            }
        });
    });
}
exports.setCompressionOptions = setCompressionOptions;
function isCreateChromeProfileFile() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_create_chrome_profile_file",
                        type: "list",
                        message: "Do you want to create Chrome profile file ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isCreateChromeProfileFile = isCreateChromeProfileFile;
function chooseStaticFilesLoader(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_is_choose_static_loader",
                            type: "list",
                            message: "What is the static files loader do you want to choose ?",
                            choices: ["file-loader", "url-loader", "raw-loader"],
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.chooseStaticFilesLoader = chooseStaticFilesLoader;
function isIgnoreSomeFiles() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_ignore_some_files",
                        type: "list",
                        message: "Do you want to ignore some files ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isIgnoreSomeFiles = isIgnoreSomeFiles;
function isIntegrationInstrument() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_is_integration",
                        type: "list",
                        message: "Do you want some integration with instruments(like: Gulp) in webpack ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.isIntegrationInstrument = isIntegrationInstrument;
function staticLoader() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_static_loader",
                        type: "list",
                        message: "What is the loader for static files do you want to use ?",
                        choices: ["Yes", "No"],
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.staticLoader = staticLoader;
function setMinimumChunkSize(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_minimum_chunk_size",
                            type: "input",
                            message: "What is the minimum chunk size would be (example: 1024) ?",
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.setMinimumChunkSize = setMinimumChunkSize;
function setMaximumChunkSize(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_maximum_chunk_size",
                            type: "input",
                            message: "What is the maximum chunk size would be (example: 1024) ?",
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.setMaximumChunkSize = setMaximumChunkSize;
function integrationInstruments(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_integration_instrument",
                            type: "list",
                            message: "What is integration do you want ?",
                            choices: ["Gulp", "Grunt", "Mocha", "Karma"],
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = void 0;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.integrationInstruments = integrationInstruments;
function fontsDir(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(response === "Yes")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_fonts_dir",
                            type: "input",
                            message: "What is the folder do you want, that be an output for fonts ?",
                        })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = (0, text_1.parseString)("");
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
}
exports.fontsDir = fontsDir;
function outputDir() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_output_dir",
                        type: "input",
                        message: "What is the folder do you want, that be an output (default: ./dist)",
                        default: "./dist",
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.outputDir = outputDir;
//# sourceMappingURL=answers.js.map