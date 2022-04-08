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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addScriptsForPackageJson = void 0;
var fs = __importStar(require("fs"));
var text_1 = require("./text");
var addScriptsForPackageJson = function (filePath, mode) {
    var content = fs.readFileSync(filePath, "utf-8");
    var jsonContent = JSON.parse(content);
    var scripts = jsonContent["scripts"];
    var confMode = mode === "production"
        ? (0, text_1.parseString)("--mode=development")
        : (0, text_1.parseString)("--mode=production");
    scripts = {
        "webpack:build": "\"webpack build --config webpack.config.js ".concat(confMode, "\""),
        "webpack:watch": "\"webpack --watch --config webpack.config.js ".concat(confMode, "\""),
        "webpack:start": "\"webpack serve --open --config webpack.config.js ".concat(confMode, "\""),
        "webpack:dev": "\"webpack-dev-server --open --config webpack.config.js ".concat(confMode, "\""),
    };
    var wtf = fs.writeFileSync(jsonContent, JSON.stringify(scripts));
    console.log(wtf);
};
exports.addScriptsForPackageJson = addScriptsForPackageJson;
addScriptsForPackageJson("../../../package.json", "production");
//# sourceMappingURL=add-scripts.js.map