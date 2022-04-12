"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExtensions = void 0;
var text_1 = require("../text");
function generateExtensions(presetType) {
    return presetType === "Typescript"
        ? ".ts"
        : presetType === "Javascript"
            ? ".js"
            : presetType === "Vue"
                ? ".vue"
                : presetType === "React"
                    ? [".ts", ".tsx"].join(", ")
                    : presetType === "Svelte"
                        ? ".svelte"
                        : (0, text_1.parseString)("");
}
exports.generateExtensions = generateExtensions;
//# sourceMappingURL=extensions.js.map