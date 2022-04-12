import { parseString } from "../text";
import { preset } from "./enum";

function generateExtensions(presetType: preset) {
  return presetType === "Typescript"
    ? ".ts"
    : presetType === "Javascript"
    ? ".js"
    : presetType === "Vue"
    ? [".vue", ".ts"].join(", ")
    : presetType === "React"
    ? [".ts", ".tsx"].join(", ")
    : presetType === "Svelte"
    ? ".svelte"
    : parseString("");
}

export { generateExtensions };
