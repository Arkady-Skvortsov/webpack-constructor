"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExtensions = void 0;
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
                        : false;
}
exports.generateExtensions = generateExtensions;
//# sourceMappingURL=extensions.js.map