"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPackOfExtensions = exports.generateExtensions = void 0;
const text_1 = require("../text");
function generateExtensions(presetType, subType) {
    return presetType === "Vue" && subType === "Typescript"
        ? ".vue .ts".split(", ").join(" ")
        : presetType === "Vue" && subType === "Javascript"
            ? ".vue .js".split(", ").join(" ")
            : presetType === "React" && subType === "Typescript"
                ? ".tsx .ts".split(", ").join(" ")
                : presetType === "React" && subType === "Javascript"
                    ? ".jsx .js".split(", ").join(" ")
                    : presetType === "Typescript"
                        ? ".ts"
                        : presetType === "Javascript"
                            ? ".js"
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