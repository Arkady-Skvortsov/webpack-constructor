import * as fs from "fs";
import { addContentToPreset } from "../lib/utils/add-content-preset";
import { preset } from "../lib/utils/helpers/enum";

describe("Webpack", () => {
  it("Generate webpack config", () => {
    try {
      const presetContent = addContentToPreset(preset.JAVASCRIPT, {
        devMode: "production",
        context: "./src",
        entryPoint: "./src/main.js ./src/index.js",
        aliasPath: "./src/utils ./src/assets",
        htmlTemplate: "./src/assets/main.html",
        htmlTitle: "My HtML thing",
        outputFolder: "./dist",
        devPort: 5000,
        watchFiles: "./src/assets",
      });

      const content = fs.readFileSync("./webpack-mock.js");
      expect(presetContent).toBe(content);
    } catch (e) {
      console.log(e);
    }
  });

  it("Add scripts in package.json", () => {
    try {
    } catch (e) {
      console.log(e);
    }
  });

  it("Download plugins", () => {});
});
