"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPackOfExtensions = exports.generateExtensions = void 0;
const text_1 = require("../text");
function generateExtensions(presetType) {
    return presetType === "Typescript"
        ? ".ts"
        : presetType === "Javascript"
            ? ".js"
            : presetType === "Vue"
                ? ".vue .ts".split(", ").join(" ")
                : presetType === "React"
                    ? ".ts .tsx".split(", ").join(" ")
                    : presetType === "Svelte"
                        ? ".svelte"
                        : (0, text_1.parseString)("");
}
exports.generateExtensions = generateExtensions;
function setPackOfExtensions(extensions) {
    return `${extensions.split(", ")}\n`;
}
exports.setPackOfExtensions = setPackOfExtensions;
//# sourceMappingURL=extensions.js.map