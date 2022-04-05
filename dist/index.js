#!/usr/bin/env node
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
import * as fs from "fs";
import { execSync } from "child_process";
import inquirer from "inquirer";
import * as gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
var promise = function (ms) {
    if (ms === void 0) { ms = 5000; }
    return new Promise(function (r) { return setTimeout(r, ms); });
};
var regExp = new RegExp("\\s", "g");
var configType;
(function (configType) {
    configType["ESLINT"] = "Eslint";
    configType["TSLINT"] = "Tslint";
    configType["PRETTIER"] = "Prettier";
    configType["BABEL"] = "Babel";
    configType["JEST"] = "Jest";
})(configType || (configType = {}));
var preset;
(function (preset) {
    preset["REACT"] = "React";
    preset["VUE"] = "Vue";
    preset["ANGULAR"] = "Angular";
    preset["SVELTE"] = "Svelte";
    preset["TYPESCRIPT"] = "Typescript";
    preset["JAVASCRIPT"] = "Javascript";
})(preset || (preset = {}));
function checkToWhiteSpaces() { }
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var webpackTitle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    webpackTitle = chalkAnimation.rainbow("Webpack-constructor \n");
                    return [4 /*yield*/, promise()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, webpackTitle.stop()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
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
        scripts["webpack:build"] =
            "webpack build --config ./webpack.config.js --stats verbose";
        scripts["webpack:watch"] = "webpack --watch";
        scripts["webpack:start"] = "webpack serve --open";
        scripts["webpack:dev"] = "webpack-dev-server";
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
                    return [4 /*yield*/, inquirer.prompt({
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
                case 0: return [4 /*yield*/, inquirer.prompt({
                        name: "question_2",
                        type: "list",
                        message: "What do you want to choose from presets?",
                        choices: ["Vue", "React", "Angular", "Svelte", "Typescript", "Javascript"],
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
    var readFile = fs.readFileSync(file, "utf-8");
    var changed = readFile.split("\n").slice(1).join("\n");
    fs.writeFileSync(readFile, changed);
};
function WebpackConfigOptions() {
    return __awaiter(this, void 0, void 0, function () {
        var contextPointWrite, entryPointWrite, aliasPathWrite, htmlTemplatePath, portWrite, outputFolder, cssMinimizerLevel, lintTypeScriptFilesPath, tslintFilePath, devMode, webpackSplitting;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer.prompt({
                        name: "question_3",
                        type: "input",
                        message: "What is the context would be in Webpack config?",
                    })];
                case 1:
                    contextPointWrite = _a.sent();
                    return [4 /*yield*/, inquirer.prompt({
                            name: "question_4",
                            type: "input",
                            message: "What is the entry point(s) would be in webpack config?",
                        })];
                case 2:
                    entryPointWrite = _a.sent();
                    return [4 /*yield*/, inquirer.prompt({
                            name: "question_5",
                            type: "input",
                            message: "What is the alias(es) would be in webpack config?",
                        })];
                case 3:
                    aliasPathWrite = _a.sent();
                    return [4 /*yield*/, inquirer.prompt({
                            name: "question_6",
                            type: "input",
                            message: "What is the html template would be in webpack config?",
                        })];
                case 4:
                    htmlTemplatePath = _a.sent();
                    return [4 /*yield*/, inquirer.prompt({
                            name: "question_7",
                            type: "input",
                            message: "What is the port would be in Dev Server?",
                        })];
                case 5:
                    portWrite = _a.sent();
                    return [4 /*yield*/, inquirer.prompt({
                            name: "question_8",
                            type: "input",
                            message: "What is the folder do you want that be an output?",
                        })];
                case 6:
                    outputFolder = _a.sent();
                    return [4 /*yield*/, inquirer.prompt({
                            name: "question_9",
                            type: "input",
                            message: "What is the level of minimization of css?",
                        })];
                case 7:
                    cssMinimizerLevel = _a.sent();
                    return [4 /*yield*/, inquirer.prompt({
                            name: "question_10",
                            type: "input",
                            message: "What is the path of you'r .ts file(s)?",
                        })];
                case 8:
                    lintTypeScriptFilesPath = _a.sent();
                    return [4 /*yield*/, inquirer.prompt({
                            name: "question_11",
                            type: "input",
                            message: "What is the path to you'r tslint.json file?",
                        })];
                case 9:
                    tslintFilePath = _a.sent();
                    return [4 /*yield*/, inquirer.prompt({
                            name: "question_12",
                            type: "list",
                            message: "What is the development mode do you want for webpack?",
                            choices: ["Production", "Development"],
                        })];
                case 10:
                    devMode = _a.sent();
                    return [4 /*yield*/, inquirer.prompt({
                            name: "question_13",
                            type: "list",
                            message: "What is the splitting do you want?",
                            choices: ["Chunks split", "Code split"],
                        })];
                case 11:
                    webpackSplitting = _a.sent();
                    return [2 /*return*/, addContent(preset.TYPESCRIPT, {
                            devMode: devMode.question_12,
                            context: contextPointWrite.question_3,
                            entryPoint: entryPointWrite.question_4,
                            aliasPath: aliasPathWrite.question_5,
                            htmlTemplate: htmlTemplatePath.question_6,
                            splitting: webpackSplitting.question_13,
                            cssMinimizerLevel: cssMinimizerLevel.question_9,
                            LintTypescriptFilesPath: lintTypeScriptFilesPath.question_10,
                            tslintFilePath: tslintFilePath.question_11,
                            outputFolder: outputFolder.question_8,
                            devPort: portWrite.question_7,
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
function spinner(text) {
    return __awaiter(this, void 0, void 0, function () {
        var spnr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    spnr = createSpinner("Installation deps for ".concat(text, " webpack config")).start();
                    return [4 /*yield*/, promise(2000)];
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
                    if (!(answer === "Angular")) return [3 /*break*/, 4];
                    return [4 /*yield*/, generateWebpackConfig(preset.ANGULAR)];
                case 3:
                    _a.sent();
                    process.exit(1);
                    _a.label = 4;
                case 4:
                    if (!(answer === "React")) return [3 /*break*/, 6];
                    return [4 /*yield*/, generateWebpackConfig(preset.REACT)];
                case 5:
                    _a.sent();
                    process.exit(1);
                    _a.label = 6;
                case 6:
                    if (!(answer === "Svelte")) return [3 /*break*/, 8];
                    return [4 /*yield*/, generateWebpackConfig(preset.SVELTE)];
                case 7:
                    _a.sent();
                    process.exit(1);
                    _a.label = 8;
                case 8:
                    if (!(answer === "Typescript")) return [3 /*break*/, 10];
                    return [4 /*yield*/, generateWebpackConfig(preset.TYPESCRIPT)];
                case 9:
                    _a.sent();
                    process.exit(1);
                    _a.label = 10;
                case 10:
                    if (!(answer === "Javascript")) return [3 /*break*/, 12];
                    return [4 /*yield*/, generateWebpackConfig(preset.JAVASCRIPT)];
                case 11:
                    _a.sent();
                    process.exit(1);
                    _a.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    });
}
function setScriptFiles(files) {
    if (typeof files === "string")
        return files;
    files.map(function (file) { return file; }).join(", ");
}
function setEntryPoint(entrypoint) {
    if (regExp.test(entrypoint)) {
        var entrypoints = entrypoint.split(" ");
        return entrypoints
            .map(function (entry) {
            var e = "[\"".concat(entry, "\"]");
            e.replace("/[|]/g", "");
        })
            .join(", ");
    }
    return "{main: \"".concat(entrypoint, "\"}");
}
function setAlias(alias) {
    var array;
    if (regExp.test(alias))
        array = alias.split(" ");
    array
        .map(function (al) {
        return "\"@/".concat(al.substring(al.lastIndexOf("/") + 1, al.length), "\": path.resolve(__dirname, \"").concat(al, "\")");
    })
        .join(", ");
    return "\"@/".concat(alias.substring(alias.lastIndexOf("/") + 1, alias.length), "\": path.resolve(__dirname, \"").concat(alias, "\")");
}
function addContent(type, options) {
    var content;
    if (type === "Vue") {
    }
    if (type === "React") {
    }
    if (type === "Angular") {
    }
    if (type === "Svelte") {
    }
    if (type === "Typescript") {
        content = "\nconst path = require(\"path\");\nconst HtmlWebpackPlugin = require(\"html-webpack-plugin\");\nconst HtmlMinimizerWebpackPlugin = require(\"html-minimizer-webpack-plugin\");\nconst MiniCssExtractPlugin = require(\"mini-css-extract-plugin\");\nconst CssMinimizerPlugin = require(\"css-minimizer-webpack-plugin\");\nconst TerserPlugin = require(\"terser-webpack-plugin\");\nconst CopyPlugin = require(\"copy-webpack-plugin\");\nconst TsConfigPathsPlugin = require(\"tsconfig-paths-webpack-plugin\");\nconst { CleanWebpackPlugin } = require(\"clean-webpack-plugin\");\n\nmodule.exports = {\n  context: path.resolve(__dirname, \"".concat(options.context, "\"),\n  mode: \"").concat(options.devMode, "\",\n  entry: ").concat(setEntryPoint(options.entryPoint), ",\n  module: {\n    rules: [\n      {\n        test: /.ts$/,\n        exclude: /node_modules/,\n        use: [\"babel-loader\", \"source-map-loader\"],\n      },\n      {\n        test: /.s(a|c)ss$/,\n        use: [MiniCssExtractPlugin.loader, \"css-loader\", \"sass-loader\"],\n      },\n      {\n        test: /.html$/,\n        loader: \"html-loader\",\n      },\n      {\n        test: /.(png|jpe?g|gif|webp)$/,\n        use: [\n          \"file-loader\",\n          {\n            loader: \"image-webpack-loader\",\n            options: {\n              mozjpeg: {\n                progressive: true,\n              },\n              optipng: {\n                enabled: false,\n              },\n              pngquant: {\n                quality: [0.65, 0.9],\n                speed: 4,\n              },\n              gifsicle: {\n                interlaced: false,\n              },\n              webp: {\n                quality: 85,\n              },\n            },\n          },\n        ],\n      },\n      {\n        test: /.(woff(2)?|ttf|eot|svg)(?v=d+.d+.d+)?$/,\n        use: {\n          loader: \"file-loader\",\n          options: {\n            name: \"[name].[ext]\",\n            outputPath: \"fonts/\",\n          },\n        },\n      },\n    ],\n  },\n  resolve: {\n    alias: {\n      ").concat(setAlias(options.aliasPath), "\n    },\n    extensions: [\n      \".ts\",\n      \".js\",\n      \".html\",\n      \".sass\",\n      \".scss\",\n      \".css\",\n      \".png\",\n      \".jpg\",\n      \".jpeg\",\n      \".webp\",\n    ],\n    symlinks: false,\n    cacheWithContext: false,\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      title: \"I \u2764\uFE0F you Webpack!)\",\n      template: \"").concat(options.htmlTemplate, "\",\n      minify: {\n        collapseWhiteSpaces: true,\n        removeAttributeQuotes: true,\n        removeComments: true,\n      },\n    }),\n    new MiniCssExtractPlugin({\n      filename: \"[name].[contenthash].css\",\n    }),\n    new TSLintPlugin({\n      files: [\"").concat(setScriptFiles(options.LintTypescriptFilesPath), "\"],\n      project: \"").concat(options.tslintFilePath, "\",\n      warningsAsError: true\n    }),\n    new CleanWebpackPlugin(),\n  ],\n  optimization: {\n    splitChunks: {\n      chunks: \"all\",\n      maxInitialRequest: Infinity,\n      minsize: 0,\n      cacheGroups: {\n        vendor: {\n          test: /[\\/]node_modules[\\/]/,\n          name(module) {\n            const packageTitle = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];\n\n            return 'npm.' + packageTitle.replace('@', '');\n          }\n        }\n      }\n    },\n    minimize: true,\n    minimizer: [\n      new CssMinimizerPlugin({\n        minimizerOptions: { level: ").concat(options.cssMinimizerLevel, ", parallel: true },\n      }),\n      new TerserPlugin({\n        terserOptions: {\n          format: {\n            comments: false,\n          },\n        },\n        extractComments: false,\n      }),\n    ],\n  },\n  output: {\n    filename: \"[name].[contenthash].js\",\n    path: path.resolve(__dirname, \"").concat(options.outputFolder, "\"),\n  },\n  devServer: {\n    port: ").concat(options.devPort, ",\n    compress: true,\n  },\n};");
    }
    return content;
}
function installPackages(presetType) {
    if (presetType === "React") {
        execSync("npm i");
        execSync("npm i");
    }
    if (presetType === "Vue") {
        execSync("");
        execSync("");
    }
    if (presetType === "Svelte") {
        execSync("");
        execSync("");
    }
    if (presetType === "Angular") {
        execSync("");
        execSync("");
    }
    if (presetType === "Typescript") {
        execSync("npm i webpack webpack-cli webpack-dev-server");
        execSync("npm i -D ts-loader typescript html-loader file-loader @babel/core @babel/preset-env @babel/preset-typescript babel-loader ts-jest css-loader sass-loader @types/webpack html-minimizer-webpack-plugin html-webpack-plugin css-minimizer-webpack-plugin clean-webpack-plugin image-webpack-loader imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin terser-webpack-plugin tslint tslint-webpack-plugin source-map-loader");
        insertInConfig(configType.TSLINT, "\n{\n    \"defaultSeverity\": \"error\",\n    \"extends\": [\n      \"tslint:all\",\n      \"tslint-config-prettier\",\n      \"tslint-plugin-prettier\"\n    ],\n    \"jsRules\": {},\n    \"rules\": {\n       \"prettier\": true,\n  \"cyclomatic-complexity\": false,\n  \"increment-decrement\": false,\n  \"newline-before-return\": false,\n  \"no-parameter-properties\": false,\n  \"no-parameter-reassignment\": false,\n  \"no-unused-variable\": false,\n  \"typedef\": false,\n  \"unnecessary-else\": false,\n  \"comment-format\": {\n    \"options\": [\n      \"check-space\"\n    ]\n  },\n  \"member-access\": true,\n  \"only-arrow-functions\": {\n    \"options\": [\n      \"allow-declarations\",\n      \"allow-named-functions\"\n    ]\n  },\n  \"completed-docs\": false,\n  \"no-any\": true,\n  \"no-magic-numbers\": true,\n  \"no-non-null-assertion\": false,\n  \"no-null-keyword\": false,\n  \"no-require-imports\": false,\n  \"no-unbound-method\": false,\n  \"no-unnecessary-qualifier\": false,\n  \"no-use-before-declare\": false,\n  \"no-void-expression\": false,\n  \"prefer-function-over-method\": false,\n  \"strict-comparisons\": false,\n  \"strict-type-predicates\": false,\n  \"triple-equals\": {\n    \"options\": [\n      \"allow-undefined-check\"\n    ]\n  },\n  \"ban\": {\n    \"options\": [\n      [\n        \"describe\",\n        \"only\"\n      ],\n      [\n        \"it\",\n        \"only\"\n      ]\n    ]\n  },\n  \"interface-name\": false,\n  \"file-header\": {\n    \"options\": [\n      \"Copyright \\d{4} Palantir Technologies, Inc.\"\n    ]\n  },\n  \"max-classes-per-file\": false,\n  \"member-ordering\": {\n    \"options\": {\n      \"order\": \"statics-first\"\n    }\n  },\n  \"no-console\": {\n    \"options\": [\n      \"log\"\n    ]\n  },\n  \"no-switch-case-fall-through\": true,\n  \"strict-boolean-expressions\": {\n    \"options\": [\n      \"allow-boolean-or-undefined\"\n    ]\n  },\n      \"switch-default\": false,\n      \"variable-name\": {\n        \"options\": [\n          \"ban-keywords\",\n          \"check-format\",\n          \"allow-leading-underscore\",\n          \"allow-pascal-case\"\n        ]\n      },\n      \"linebreak-style\": false\n    },\n    \"rulesDirectory\": []\n}");
        insertInConfig(configType.PRETTIER, "\n{\n  \"semi\": true,\n  \"trailingComma\": \"none\",\n  \"singleQuote\": true,\n  \"printWidth\": 80\n}\n      ");
        insertInConfig(configType.BABEL, "\n{\n  \"presets\": [\"@babel/typescript\"]\n}\n      ");
        insertInConfig(configType.JEST, "\nmodule.exports = { \n  preset: 'ts-jest', \n  testEnvironment: true \n}\n      ");
    }
    if (presetType === "Javascript") {
    }
}
function insertInConfig(type, content) {
    try {
        if (type === "Tslint") {
            fs.writeFileSync("tslint.json", content);
        }
        if (type === "Eslint") {
            fs.writeFileSync("eslint.json", content);
        }
        if (type === "Prettier") {
            fs.writeFileSync(".prettierrc", content);
        }
        if (type === "Babel") {
            fs.writeFileSync(".babelrc", content);
        }
        if (type === "Jest") {
            fs.writeFileSync("jest.config.js", content);
        }
    }
    catch (e) {
        console.log(e);
    }
}
function generateWebpackConfig(type) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, e_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 3, , 4]);
                    installPackages(preset.TYPESCRIPT);
                    return [4 /*yield*/, spinner(preset.TYPESCRIPT)];
                case 1:
                    _d.sent();
                    _b = (_a = fs).writeFileSync;
                    _c = ["webpack.config.js"];
                    return [4 /*yield*/, WebpackConfigOptions()];
                case 2:
                    _b.apply(_a, _c.concat([_d.sent()]));
                    addScriptsForPackageJson("./package.json", preset.TYPESCRIPT);
                    figlet("Webpack Typescript config had been generated like you wanted, use it like you want))", function (err, data) {
                        console.log(gradient.passion.multiline(data));
                    });
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _d.sent();
                    console.log(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// basicPreset();
console.log(setEntryPoint("Hello world suka"));
//# sourceMappingURL=index.js.map