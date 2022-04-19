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
exports.generateWebpackConfig = exports.setEntryPoint = exports.setScriptFiles = exports.setSourceMaps = exports.setAlias = void 0;
const fs = __importStar(require("fs"));
const delete_line_1 = require("./delete-line");
const handle_answers_1 = require("./handle-answers");
const constants_1 = require("./helpers/constants");
const packages_1 = require("./helpers/packages");
const add_scripts_1 = require("./add-scripts");
const text_1 = require("./text");
function setAlias(alias) {
    return !constants_1.whitespace.test(alias)
        ? `"@/${alias.substring(alias.lastIndexOf("/") + 1, alias.length)}": path.resolve(__dirname, "${alias}")`
            .split(" ")
            .join(" ")
        : alias
            .split(" ")
            .map((al) => `"@/${al.substring(al.lastIndexOf("/") + 1, al.length)}": path.resolve(__dirname, "${al}") \n`)
            .join(", ");
}
exports.setAlias = setAlias;
function setScriptFiles(file) {
    return constants_1.whitespace.test(file)
        ? `["${file
            .split(" ")
            .map((f) => `"${f}"`)
            .join(", ")}"]`
        : `"${file}"`;
}
exports.setScriptFiles = setScriptFiles;
function setEntryPoint(entrypoint) {
    return constants_1.whitespace.test(entrypoint)
        ? `{${entrypoint
            .split(" ")
            .map((point) => `"${point
            .substring(point.lastIndexOf("/") + 1, point.length)
            .replace(/\.(js|ts|tsx|jsx|svelte|vue|sass|scss)$/g, "")}": "${point}"\n`)}}`
        : `{${entrypoint
            .substring(entrypoint.lastIndexOf("/") + 1, entrypoint.length)
            .replace(/\.(js|ts|tsx|jsx|svelte|vue)$/g, "")}: "${entrypoint}"}`;
}
exports.setEntryPoint = setEntryPoint;
function setSourceMaps(mode) {
    return mode === "production" ? "source-maps" : "eval-source-map";
}
exports.setSourceMaps = setSourceMaps;
async function generateWebpackConfig(type, mode, version, basicType) {
    try {
        let customOptions;
        const configType = async () => {
            if (basicType === "Preset")
                return await (0, handle_answers_1.WebpackConfigOptions)(type, mode);
            else {
                return await (0, handle_answers_1.WebpackConfigCustom)(type, mode);
            }
        };
        fs.writeFileSync("webpack.config.js", await configType());
        await (0, add_scripts_1.addScriptsForPackageJson)("package.json", mode);
        (0, delete_line_1.deleteLine)("webpack.config.js");
        await (0, text_1.figletText)(type);
        await (0, packages_1.installPackagesForPresets)(type, mode, version, basicType, await configType());
    }
    catch (e) {
        console.log(e);
    }
}
exports.generateWebpackConfig = generateWebpackConfig;
//# sourceMappingURL=webpack-set.content.js.map