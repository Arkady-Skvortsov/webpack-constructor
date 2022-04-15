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
exports.WebpackConfigOptions = exports.customChoose = exports.firstChoose = void 0;
var inquirer_1 = __importDefault(require("inquirer"));
var start_1 = require("./start");
var webpack_set_content_1 = require("./webpack-set.content");
var add_content_preset_1 = require("./add-content-preset");
var extensions_1 = require("./helpers/extensions");
function basicSelect(text) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, text !== "Custom" ? choosePreset() : customChoose()];
        });
    });
}
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
                    return [4 /*yield*/, basicSelect(basicChoose.question_1)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.firstChoose = firstChoose;
function customChoose() {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); });
}
exports.customChoose = customChoose;
function choosePreset() {
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
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(preset === "Typescript")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_12",
                            type: "input",
                            message: "What is the path to you'r tslint.json file (default: ./tslint.json)?",
                            default: "./tslint.json",
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
function checkPresetFrameworkConfig(preset) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!((_a = preset !== "Javascript") !== null && _a !== void 0 ? _a : preset !== "Typescript")) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_12",
                            type: "list",
                            message: "What is the language you want to select for that framework ?",
                            choices: ["Javascript", "Typescript"],
                        })];
                case 1:
                    _b = _d.sent();
                    return [3 /*break*/, 6];
                case 2:
                    if (!(preset === "Typescript")) return [3 /*break*/, 4];
                    return [4 /*yield*/, checkPresetTsConfig(preset)];
                case 3:
                    _c = _d.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _c = void 0;
                    _d.label = 5;
                case 5:
                    _b = _c;
                    _d.label = 6;
                case 6: return [2 /*return*/, _b];
            }
        });
    });
}
function checkPresetHTML(preset, text) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!((_a = preset !== "Vue") !== null && _a !== void 0 ? _a : preset !== "React")) return [3 /*break*/, 3];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_6",
                            type: "input",
                            message: "What is the title do you want in html page (example: Hello world) ?",
                            default: "Hello world",
                        })];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_7",
                            type: "input",
                            message: "What is the html template would be in webpack config (example: ".concat(text, "/main.html) ?"),
                        })];
                case 2:
                    _b = (_c.sent());
                    return [3 /*break*/, 4];
                case 3:
                    _b = void 0;
                    _c.label = 4;
                case 4: return [2 /*return*/, _b];
            }
        });
    });
}
function WebpackConfigOptions(presetType, mode) {
    return __awaiter(this, void 0, void 0, function () {
        var contextPointWrite, entryPointWrite, aliasPathWrite, portWrite, outputFolder, watchFilesPath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_3",
                        type: "input",
                        message: "What is the context would be in Webpack config (example: ./src) ?",
                    })];
                case 1:
                    contextPointWrite = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_4",
                            type: "input",
                            message: "What is the entry point(s) would be in webpack config (example: ".concat(contextPointWrite.question_3, "/main").concat((0, extensions_1.generateExtensions)(presetType), ") ?"),
                        })];
                case 2:
                    entryPointWrite = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_5",
                            type: "input",
                            message: "What is the path for alias(es) would be in webpack config (example: ".concat(contextPointWrite.question_3, "/utils) ?"),
                        })];
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
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_9",
                            type: "input",
                            message: "What is the folder do you want that be an output (example: ./dist) ?",
                            default: "./dist",
                        })];
                case 5:
                    outputFolder = _a.sent();
                    return [4 /*yield*/, checkPresetHTML(presetType, contextPointWrite.question_3)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, checkPresetFrameworkConfig(presetType)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, checkPresetTsConfig(presetType)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_13",
                            type: "input",
                            message: "What is the folder with files do you want to watch for changes with starting devServer (example: ".concat(contextPointWrite.question_3, "/html) ?"),
                            default: "".concat(contextPointWrite.question_3, "/html"),
                        })];
                case 9:
                    watchFilesPath = _a.sent();
                    return [2 /*return*/, (0, add_content_preset_1.addContentToPreset)(presetType, {
                            context: contextPointWrite.question_3,
                            entryPoint: entryPointWrite.question_4,
                            aliasPath: aliasPathWrite.question_5,
                            devPort: portWrite.question_8,
                            outputFolder: outputFolder.question_9,
                            watchFiles: watchFilesPath.question_13,
                            devMode: mode,
                        })];
            }
        });
    });
}
exports.WebpackConfigOptions = WebpackConfigOptions;
//# sourceMappingURL=handle-answers.js.map