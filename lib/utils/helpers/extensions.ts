import { parseString } from "../text";
import { preset } from "./enum";

function generateExtensions(
  presetType: preset,
  subType?: "Javascript" | "Typescript"
) {
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
    : parseString("");
}

function setPackOfExtensions(extensions: string) {
  return `${extensions.split(", ")}\n`;
}

export { generateExtensions, setPackOfExtensions };
