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
const fs = __importStar(require("fs"));
const text_1 = require("./text");
async function addScriptsForPackageJson(filePath, mode) {
    const content = fs.readFileSync(filePath, "utf8");
    const jsonContent = JSON.parse(content);
    let scripts = jsonContent.scripts;
    const confMode = mode === "production"
        ? (0, text_1.parseString)("--mode=production")
        : (0, text_1.parseString)("--mode=development");
    scripts["webpack:build"] = `webpack build --config webpack.config.js ${confMode}`;
    scripts["webpack:watch"] = `webpack --watch --config webpack.config.js ${confMode}`;
    scripts["webpack:start"] = `webpack serve --open --config webpack.config.js ${confMode}`;
    scripts["webpack:dev"] = `webpack-dev-server --open --config webpack.config.js ${confMode}`;
    fs.writeFileSync(filePath, JSON.stringify(jsonContent));
}
exports.addScriptsForPackageJson = addScriptsForPackageJson;
//# sourceMappingURL=add-scripts.js.map