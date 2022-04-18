import { parseString } from "../text";
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
                        : parseString("");
}
function setPackOfExtensions(extensions) {
    return `${extensions.split(", ")}\n`;
}
export { generateExtensions, setPackOfExtensions };
//# sourceMappingURL=extensions.js.map