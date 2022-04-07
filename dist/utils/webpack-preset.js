"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePreset = void 0;
var generateConstants = function (presetType) {
    return presetType === "Javascript"
        ? false
        : presetType === "Typescript"
            ? true
            : presetType === "Vue"
                ? true
                : presetType === "React"
                    ? false
                    : presetType === "Svelte"
                        ? false
                        : true;
};
var generatePreset = function () { return ""; };
exports.generatePreset = generatePreset;
//# sourceMappingURL=webpack-preset.js.map