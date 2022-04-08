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
exports.customChoose = exports.firstChoose = void 0;
var inquirer_1 = __importDefault(require("inquirer"));
var start_1 = require("./start");
var webpack_set_content_1 = require("./webpack-set.content");
var basicSelect = function (text) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, text !== "Custom" ? choosePreset() : customChoose()];
}); }); };
var firstChoose = function () { return __awaiter(void 0, void 0, void 0, function () {
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
}); };
exports.firstChoose = firstChoose;
var customChoose = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); };
exports.customChoose = customChoose;
var choosePreset = function () { return __awaiter(void 0, void 0, void 0, function () {
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
}); };
var handleAnswer = function (presetOptions) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, webpack_set_content_1.generateWebpackConfig)(presetOptions)];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=handle-answers.js.map