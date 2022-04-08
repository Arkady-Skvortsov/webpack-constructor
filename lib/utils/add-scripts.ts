import * as fs from "fs";
import { webpackMode } from "./helpers/types";
import { parseString } from "./text";

const addScriptsForPackageJson = (filePath: string, mode: webpackMode) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const jsonContent = JSON.parse(content);
  let scripts = jsonContent["scripts"];
  const confMode =
    mode === "production"
      ? parseString("--mode=development")
      : parseString("--mode=production");

  scripts = {
    "webpack:build": `"webpack build --config webpack.config.js ${confMode}"`,
    "webpack:watch": `"webpack --watch --config webpack.config.js ${confMode}"`,
    "webpack:start": `"webpack serve --open --config webpack.config.js ${confMode}"`,
    "webpack:dev": `"webpack-dev-server --open --config webpack.config.js ${confMode}"`,
  };

  const wtf = fs.writeFileSync(jsonContent, JSON.stringify(scripts));

  console.log(wtf);
};

addScriptsForPackageJson("../../../package.json", "production");

export { addScriptsForPackageJson };
