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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWebpackConfig = exports.setEntryPoint = exports.setScriptFiles = exports.setSourceMaps = exports.setAlias = void 0;
var fs = __importStar(require("fs"));
var delete_line_1 = require("./delete-line");
var handle_answers_1 = require("./handle-answers");
var constants_1 = require("./helpers/constants");
var packages_1 = require("./helpers/packages");
var add_scripts_1 = require("./add-scripts");
var text_1 = require("./text");
function setAlias(alias) {
    return !constants_1.whitespace.test(alias)
        ? "\"@/".concat(alias.substring(alias.lastIndexOf("/") + 1, alias.length), "\": path.resolve(__dirname, \"").concat(alias, "\")")
            .split(" ")
            .join(" ")
        : alias
            .split(" ")
            .map(function (al) {
            return "\"@/".concat(al.substring(al.lastIndexOf("/") + 1, al.length), "\": path.resolve(__dirname, \"").concat(al, "\") \n");
        })
            .join(", ");
}
exports.setAlias = setAlias;
function setScriptFiles(file) {
    return constants_1.whitespace.test(file)
        ? "[\"".concat(file
            .split(" ")
            .map(function (f) { return "\"".concat(f, "\""); })
            .join(", "), "\"]")
        : "\"".concat(file, "\"");
}
exports.setScriptFiles = setScriptFiles;
function setEntryPoint(entrypoint) {
    return constants_1.whitespace.test(entrypoint)
        ? "{".concat(entrypoint
            .split(" ")
            .map(function (point) {
            return "\"".concat(point
                .substring(point.lastIndexOf("/") + 1, point.length)
                .replace(/\.(js|ts|tsx|jsx|svelte|vue|sass|scss)$/g, ""), "\": \"").concat(point, "\"\n");
        }), "}")
        : "{".concat(entrypoint
            .substring(entrypoint.lastIndexOf("/") + 1, entrypoint.length)
            .replace(/\.(js|ts|tsx|jsx|svelte|vue)$/g, ""), ": \"").concat(entrypoint, "\"}");
}
exports.setEntryPoint = setEntryPoint;
function setSourceMaps(mode) {
    return mode === "production" ? "source-maps" : "eval-source-map";
}
exports.setSourceMaps = setSourceMaps;
function generateWebpackConfig(type, mode, version, basicType) {
    return __awaiter(this, void 0, void 0, function () {
        var configType, _a, _b, _c, e_1;
        var _this = this;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, (0, packages_1.installPackagesForPresets)(type, mode, version, basicType)];
                case 1:
                    _d.sent();
                    configType = function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(basicType === "Preset")) return [3 /*break*/, 2];
                                    return [4 /*yield*/, (0, handle_answers_1.WebpackConfigOptions)(type, mode)];
                                case 1:
                                    _a = _b.sent();
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, (0, handle_answers_1.WebpackConfigCustom)(type, mode)];
                                case 3:
                                    _a = _b.sent();
                                    _b.label = 4;
                                case 4: return [2 /*return*/, _a];
                            }
                        });
                    }); };
                    _b = (_a = fs).writeFileSync;
                    _c = ["webpack.config.js"];
                    return [4 /*yield*/, configType()];
                case 2:
                    _b.apply(_a, _c.concat([_d.sent()]));
                    return [4 /*yield*/, (0, add_scripts_1.addScriptsForPackageJson)("package.json", mode)];
                case 3:
                    _d.sent();
                    return [4 /*yield*/, (0, text_1.figletText)(type)];
                case 4:
                    _d.sent();
                    (0, delete_line_1.deleteLine)("webpack.config.js");
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _d.sent();
                    console.log(e_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.generateWebpackConfig = generateWebpackConfig;
//# sourceMappingURL=webpack-set.content.js.map