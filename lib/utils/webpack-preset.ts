import { preset } from "./helpers/enum";

const generateConstants = (presetType: preset) =>
  presetType === "Javascript"
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

const generatePreset = () => ``;

export { generatePreset };
