import { parseString } from "../text";
import { preset } from "./enum";

function generateExtensions(presetType: preset) {
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

function setPackOfExtensions(extensions: string) {
  return `${extensions.split(", ")}\n`;
}

export { generateExtensions, setPackOfExtensions };
