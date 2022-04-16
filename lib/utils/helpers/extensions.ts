import { parseString } from "../text";
import { preset } from "./enum";

function generateExtensions(presetType: preset) {
  return presetType === "Typescript"
    ? ".ts"
    : presetType === "Javascript"
    ? ".js"
    : presetType === "Vue"
    ? [".vue", ".ts"].join(" ").split(", ")
    : presetType === "React"
    ? [".ts", ".tsx"].join(" ").split(", ")
    : presetType === "Svelte"
    ? ".svelte"
    : parseString("");
}

export { generateExtensions };
