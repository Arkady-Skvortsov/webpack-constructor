import { preset } from "./enum";

function setMainExtension(presetOption: preset) {
  return presetOption !== "Javascript" ? "js" : "ts";
}

export { setMainExtension };
