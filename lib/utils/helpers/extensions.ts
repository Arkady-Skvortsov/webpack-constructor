import { parseString } from "../text";
import { preset } from "./enum";

function generateExtensions(presetType: preset) {
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
    : parseString("");
}

export { generateExtensions };
