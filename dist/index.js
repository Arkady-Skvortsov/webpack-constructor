#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var fs = __importStar(require("fs"));
var child_process_1 = require("child_process");
var inquirer_1 = __importDefault(require("inquirer"));
var gradient_string_1 = __importDefault(require("gradient-string"));
var chalk_animation_1 = __importDefault(require("chalk-animation"));
var figlet_1 = __importDefault(require("figlet"));
var nanospinner_1 = require("nanospinner");
var plugins_1 = require("./utils/helpers/plugins");
var dev_mode_1 = require("./utils/dev-mode");
var promise = function (ms) {
    if (ms === void 0) { ms = 5000; }
    return new Promise(function (r) { return setTimeout(r, ms); });
};
var regExp = new RegExp(/^.+\s.+$/, "g");
var preset;
(function (preset) {
    preset["REACT"] = "React";
    preset["VUE"] = "Vue";
    preset["SVELTE"] = "Svelte";
    preset["TYPESCRIPT"] = "Typescript";
    preset["JAVASCRIPT"] = "Javascript";
})(preset || (preset = {}));
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var webpackTitle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    webpackTitle = chalk_animation_1.default.rainbow("Webpack-constructor \n");
                    return [4 /*yield*/, promise(5000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, webpackTitle.stop()];
            }
        });
    });
}
function addSplitting(options) {
    if (options === "") {
    }
}
function addScriptsForPackageJson(filePath, presetOptions) {
    try {
        var content = fs.readFileSync(filePath, "utf-8");
        var jsonContent = JSON.parse(content);
        var scripts = jsonContent["scripts"];
        scripts = {};
        scripts["webpack:build"] = "webpack build --config ./webpack.config.js --mode development";
        scripts["webpack:watch"] = "webpack --watch --config ./webpack.config.js";
        scripts["webpack:start"] = "webpack serve --open";
        scripts["webpack:dev"] = "webpack-dev-server";
        scripts["webpack:run-pwa"] = "http-server ./dist";
        fs.appendFileSync(filePath, JSON.stringify(scripts));
    }
    catch (e) {
        console.log(e);
    }
}
function basicPreset() {
    return __awaiter(this, void 0, void 0, function () {
        var basicChoose;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, start()];
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
function choosePreset() {
    return __awaiter(this, void 0, void 0, function () {
        var presetChoose;
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
                    return [4 /*yield*/, handleAnswer(presetChoose.question_2)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var deleteLine = function (file) {
    return fs.readFile(file, "utf-8", function (err, data) {
        var changed = data.split("\n").slice(1).join("\n");
        fs.writeFileSync(file, changed);
    });
};
function WebpackConfigOptions() {
    return __awaiter(this, void 0, void 0, function () {
        var contextPointWrite, entryPointWrite, aliasPathWrite, htmlTitle, htmlTemplatePath, portWrite, outputFolder, lintTypeScriptFilesPath, tslintFilePath, devMode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                        name: "question_3",
                        type: "input",
                        message: "What is the context would be in Webpack config?",
                    })];
                case 1:
                    contextPointWrite = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_4",
                            type: "input",
                            message: "What is the entry point(s) would be in webpack config ?",
                        })];
                case 2:
                    entryPointWrite = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_5",
                            type: "input",
                            message: "What is the alias(es) would be in webpack config ?",
                        })];
                case 3:
                    aliasPathWrite = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_6",
                            type: "input",
                            message: "What is the title do you want in html page ?",
                        })];
                case 4:
                    htmlTitle = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_7",
                            type: "input",
                            message: "What is the html template would be in webpack config?",
                        })];
                case 5:
                    htmlTemplatePath = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_8",
                            type: "input",
                            message: "What is the port would be in Dev Server?",
                        })];
                case 6:
                    portWrite = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_9",
                            type: "input",
                            message: "What is the folder do you want that be an output?",
                        })];
                case 7:
                    outputFolder = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_11",
                            type: "input",
                            message: "What is the path of you'r .ts file(s)?",
                        })];
                case 8:
                    lintTypeScriptFilesPath = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_12",
                            type: "input",
                            message: "What is the path to you'r tslint.json file (default: ./tslint.json) ?",
                            default: "./tslint.json",
                        })];
                case 9:
                    tslintFilePath = _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "question_13",
                            type: "list",
                            message: "What is the development mode do you want for webpack?",
                            choices: ["production", "development", "both"],
                        })];
                case 10:
                    devMode = _a.sent();
                    return [2 /*return*/, addContent(preset.TYPESCRIPT, {
                            devMode: devMode.question_13,
                            context: contextPointWrite.question_3,
                            entryPoint: entryPointWrite.question_4,
                            aliasPath: aliasPathWrite.question_5,
                            htmlTitle: htmlTitle.question_6,
                            htmlTemplate: htmlTemplatePath.question_7,
                            LintTypescriptFilesPath: lintTypeScriptFilesPath.question_11,
                            tslintFilePath: tslintFilePath.question_12,
                            outputFolder: outputFolder.question_9,
                            devPort: portWrite.question_8,
                        })];
            }
        });
    });
}
function basicSelect(text) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (text !== "Custom")
                choosePreset();
            return [2 /*return*/];
        });
    });
}
var sourceMaps = function (mode) {
    return mode === "development" ? "evel-source-map" : "source-maps";
};
function spinner(text) {
    return __awaiter(this, void 0, void 0, function () {
        var spnr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    spnr = (0, nanospinner_1.createSpinner)("Creating webpack config for ".concat(text)).start();
                    return [4 /*yield*/, promise(5000)];
                case 1:
                    _a.sent();
                    if (text !== "Custom")
                        spnr.success({
                            text: "Ok than, we would generated you a ".concat(text, " preset for Webpack)"),
                        });
                    else {
                        spnr.success({
                            text: "Ok than, we would generated a custom preset for you)",
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function handleAnswer(answer) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(answer === "Vue")) return [3 /*break*/, 2];
                    return [4 /*yield*/, generateWebpackConfig(preset.VUE)];
                case 1:
                    _a.sent();
                    process.exit(1);
                    _a.label = 2;
                case 2:
                    if (!(answer === "React")) return [3 /*break*/, 4];
                    return [4 /*yield*/, generateWebpackConfig(preset.REACT)];
                case 3:
                    _a.sent();
                    process.exit(1);
                    _a.label = 4;
                case 4:
                    if (!(answer === "Svelte")) return [3 /*break*/, 6];
                    return [4 /*yield*/, generateWebpackConfig(preset.SVELTE)];
                case 5:
                    _a.sent();
                    process.exit(1);
                    _a.label = 6;
                case 6:
                    if (!(answer === "Typescript")) return [3 /*break*/, 8];
                    return [4 /*yield*/, generateWebpackConfig(preset.TYPESCRIPT)];
                case 7:
                    _a.sent();
                    process.exit(1);
                    _a.label = 8;
                case 8:
                    if (!(answer === "Javascript")) return [3 /*break*/, 10];
                    return [4 /*yield*/, generateWebpackConfig(preset.JAVASCRIPT)];
                case 9:
                    _a.sent();
                    process.exit(1);
                    _a.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    });
}
var setScriptFiles = function (file) {
    return regExp.test(file)
        ? "[\"".concat(file
            .split(" ")
            .map(function (f) { return "\"".concat(f, "\""); })
            .join(", "), "\"]")
        : "\"".concat(file, "\"");
};
var setEntryPoint = function (entrypoint) {
    return regExp.test(entrypoint)
        ? "[".concat(entrypoint
            .split(" ")
            .map(function (entry) { return "\"".concat(entry, "\""); })
            .join(", "), "]")
        : "{main: \"".concat(entrypoint, "\"}");
};
var setAlias = function (alias) {
    return regExp.test(alias)
        ? alias
            .split(" ")
            .map(function (ar) {
            return "\"@/".concat(ar.substring(ar.lastIndexOf("/") + 1, ar.length), "\": path.resolve(__dirname, \"").concat(ar, "\")");
        })
            .join(", ")
        : "\"@/".concat(alias.substring(alias.lastIndexOf("/") + 1, alias.length), "\": path.resolve(__dirname, \"").concat(alias, "\")");
};
function addContent(type, options) {
    return "\nconst path = require(\"path\");\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst HtmlMinimizerWebpackPlugin = require('html-minimizer-webpack-plugin');\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\nconst CssMinimizerPlugin = require('css-minimizer-webpack-plugin');\nconst TerserPlugin = require('terser-webpack-plugin');\nconst TsLintPlugin = require('tslint-webpack-plugin');\nconst CopyPlugin = require('copy-webpack-plugin');\nconst { CleanWebpackPlugin } = require('clean-webpack-plugin');\nconst WorkboxPlugin = require('workbox-webpack-plugin');\nconst WebpackNotifierPlugin = require('webpack-nofitier');\nconst ESLintPlugin = require('eslint-webpack-plugin');\n\nmodule.exports = {\n  context: path.resolve(__dirname, \"".concat(options.context, "\"),\n  mode: \"").concat(options.devMode, "\",\n  entry: ").concat(setEntryPoint(options.entryPoint), ",\n  devtool: \"").concat(sourceMaps(options.devMode), "\",\n  module: {\n    rules: [\n      {\n        test: /.ts$/,\n        exclude: /node_modules/,\n        use: \"ts-loader\",\n      },\n      {\n        test: /.s(a|c)ss$/,\n        use: [").concat(dev_mode_1.setCSSRuleUse, ", \"css-loader\", \"sass-loader\"],\n      },\n      {\n        test: /.html$/,\n        loader: \"html-loader\",\n      },\n      {\n        test: /.(png|jpe?g|gif|webp)$/,\n        use: [\n          \"file-loader\",\n          {\n            loader: \"image-webpack-loader\",\n            options: {\n              mozjpeg: {\n                progressive: true,\n              },\n              optipng: {\n                enabled: false,\n              },\n              pngquant: {\n                quality: [0.65, 0.9],\n                speed: 4,\n              },\n              gifsicle: {\n                interlaced: false,\n              },\n              webp: {\n                quality: 85,\n              },\n            },\n          },\n        ],\n      },\n      {\n        test: /.(woff(2)?|ttf|eot|svg)(?v=d+.d+.d+)?$/,\n        use: {\n          loader: \"file-loader\",\n          options: {\n            name: \"[name].[ext]\",\n            outputPath: \"fonts/\",\n          },\n        },\n      },\n    ],\n  },\n  resolve: {\n    alias: {\n      ").concat(setAlias(options.aliasPath), "\n    },\n    extensions: [\n      \".ts\",\n      \".html\",\n      \".sass\",\n      \".scss\",\n      \".css\",\n      \".png\",\n      \".jpg\",\n      \".jpeg\",\n      \".webp\",\n    ],\n    symlinks: false,\n    cacheWithContext: false,\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      filename: \"").concat(options.htmlTemplate, "\",\n      title: \"").concat(options.htmlTitle, "\",\n      template: \"").concat(options.htmlTemplate, "\",\n      minify: {\n        collapseWhiteSpaces: true,\n        removeAttributeQuotes: true,\n        removeComments: true,\n      },\n    }),\n    ").concat((0, dev_mode_1.setCssPlugin)(options.devMode, type), "\n    ").concat((0, plugins_1.LinterChoose)("Typescript", options), "\n    new CleanWebpackPlugin(),\n    new WorkboxPlugin.GenerateSW({\n      clientsClaim: true,\n      skipWaiting: true,\n    }),\n    ").concat((0, plugins_1.setWebpackNotifierPlugin)(options.devMode), "\n  ],\n  optimization: {\n    splitChunks: {\n      chunks: \"all\",\n      maxInitialRequest: Infinity,\n      minsize: 0,\n      cacheGroups: {\n        vendor: {\n          test: /[\\/]node_modules[\\/]/,\n          name(module) {\n            const packageTitle = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];\n\n            return 'npm.' + packageTitle.replace('@', '');\n          }\n        }\n      }\n    },\n    minimize: true,\n    minimizer: [\n      ").concat((0, dev_mode_1.optimizeProductionCSS)(options.devMode), "\n      new TerserPlugin({\n        parallel: 3,\n        cache: true,\n        sourceMap: ").concat((0, dev_mode_1.isSourceMaps)(options.devMode), ",\n        terserOptions: {\n          format: {\n            comments: false,\n          },\n        },\n        extractComments: false,\n      }),\n    ],\n  },\n  output: {\n    filename: \"").concat((0, dev_mode_1.outputFileName)(options.devMode, "js"), "\",\n    path: path.resolve(__dirname, \"").concat(options.outputFolder, "\"),\n  },\n  devServer: {\n    port: ").concat(options.devPort, ",\n    compress: true,\n    watchFiles: {\n      paths: ['src/**/*.php', 'public/**/*'],\n      options: {\n        usePolling: false,\n      },\n    },\n  },\n};");
}
function installPackages(presetType) {
    return __awaiter(this, void 0, void 0, function () {
        var installationSpinner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    installationSpinner = (0, nanospinner_1.createSpinner)("Install packages for ".concat(presetType)).start();
                    if (presetType === "React") {
                        (0, child_process_1.execSync)("npm i -D webpack webpack-cli webpack-dev-server css-loader node-sass file-loader typescript @types/webpack sass-loader babel-loader @babel/core @babel/preset-react css-minimizer-webpack-plugin clean-webpack-plugin node-sass image-webpack-loader imagemin-mozjpeg imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin tslint terser-webpack-plugin tslint-webpack-plugin uglify-js webpack-notifier copy-webpack-plugin");
                    }
                    if (presetType === "Vue") {
                        (0, child_process_1.execSync)("npm i -D  webpack webpack-cli webpack-dev-server ts-loader typescript file-loader vue-loader vue-style-loader babel-loader css-loader sass-loader @types/webpack @babel/core @babel/preset-env @babel/preset-typescript css-minimizer-webpack-plugin clean-webpack-plugin node-sass image-webpack-loader imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin tslint terser-webpack-plugin tslint-webpack-plugin uglify-js vue-style-loader vue-server-renderer webpack-notifier copy-webpack-plugin");
                    }
                    if (presetType === "Svelte") {
                        (0, child_process_1.execSync)("npm i -D  webpack webpack-cli webpack-dev-server ts-loader typescript file-loader svelter-loader css-loader sass-loader @types/webpack css-minimizer-webpack-plugin clean-webpack-plugin node-sass image-webpack-loader imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin webpack-notifier copy-webpack-plugin");
                    }
                    if (!(presetType === "Typescript")) return [3 /*break*/, 2];
                    return [4 /*yield*/, promise(5000)];
                case 1:
                    _a.sent();
                    (0, child_process_1.execSync)("npm i -D  webpack webpack-cli webpack-dev-server ts-loader typescript file-loader css-loader sass-loader @types/webpack html-webpack-plugin css-minimizer-webpack-plugin clean-webpack-plugin node-sass image-webpack-loader imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin terser-webpack-plugin tslint tslint-webpack-plugin uglify-js workbox-webpack-plugin http-server webpack-notifier copy-webpack-plugin");
                    installationSpinner.success({
                        text: "Packages for Typescript had been installed",
                    });
                    _a.label = 2;
                case 2:
                    if (!(presetType === "Javascript")) return [3 /*break*/, 4];
                    return [4 /*yield*/, promise(5000)];
                case 3:
                    _a.sent();
                    (0, child_process_1.execSync)("npm i -D webpack webpack-cli webpack-dev-server file-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-loader css-loader sass-loader @types/webpack html-webpack-plugin css-minimizer-webpack-plugin clean-webpack-plugin image-webpack-loader imagemin-loader imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin terser-webpack-plugin uglify-js workbox-webpack-plugin http-server webpack-notifier copy-webpack-plugin");
                    installationSpinner.success({
                        text: "Packages for Javascript had been installed",
                    });
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function generateWebpackConfig(type) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, e_1;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 10, , 11]);
                    if (!(type === preset.TYPESCRIPT)) return [3 /*break*/, 4];
                    return [4 /*yield*/, installPackages(preset.TYPESCRIPT)];
                case 1:
                    _g.sent();
                    _b = (_a = fs).writeFileSync;
                    _c = ["webpack.config.js"];
                    return [4 /*yield*/, WebpackConfigOptions()];
                case 2:
                    _b.apply(_a, _c.concat([_g.sent()]));
                    deleteLine("webpack.config.js");
                    addScriptsForPackageJson("./package.json", preset.TYPESCRIPT);
                    return [4 /*yield*/, figletText(preset.TYPESCRIPT)];
                case 3:
                    _g.sent();
                    _g.label = 4;
                case 4:
                    if (!(type === preset.JAVASCRIPT)) return [3 /*break*/, 9];
                    return [4 /*yield*/, installPackages(preset.TYPESCRIPT)];
                case 5:
                    _g.sent();
                    _e = (_d = fs).writeFileSync;
                    _f = ["webpack.config.js"];
                    return [4 /*yield*/, WebpackConfigOptions()];
                case 6:
                    _e.apply(_d, _f.concat([_g.sent()]));
                    addScriptsForPackageJson("./package.json", preset.JAVASCRIPT);
                    deleteLine("webpack.config.js");
                    return [4 /*yield*/, promise(2000)];
                case 7:
                    _g.sent();
                    return [4 /*yield*/, figletText(preset.JAVASCRIPT)];
                case 8:
                    _g.sent();
                    _g.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    e_1 = _g.sent();
                    console.log(e_1);
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}
function figletText(preset) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.clear();
            (0, figlet_1.default)("Webpack ".concat(preset, " config had been generated"), {
                font: "Ghost",
                horizontalLayout: "default",
                verticalLayout: "default",
                width: 200,
                whitespaceBreak: true,
            }, function (err, data) {
                console.log(gradient_string_1.default.instagram(data));
            });
            return [2 /*return*/];
        });
    });
}
basicPreset();
//# sourceMappingURL=index.js.map