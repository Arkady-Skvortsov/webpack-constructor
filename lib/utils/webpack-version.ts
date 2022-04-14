import { version } from "./helpers/types";
import { parseString } from "./text";

function chooseWebpackVersion(version: version) {
  return version == 4
    ? parseString("webpack@^4.41.5")
    : parseString("webpack@^5.72.0");
}

export { chooseWebpackVersion };
