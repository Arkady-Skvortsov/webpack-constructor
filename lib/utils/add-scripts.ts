import * as fs from "fs";
import { webpackMode } from "./helpers/types";
import { parseString } from "./text";

async function addScriptsForPackageJson(filePath: string, mode: webpackMode) {
  const content = fs.readFileSync(filePath, "utf-8");
  const jsonContent = JSON.parse(content);
  let scripts = jsonContent.scripts;
  const confMode =
    mode === "production"
      ? parseString("--mode=development")
      : parseString("--mode=production");

  scripts[
    "webpack:build"
  ] = `webpack build --config webpack.config.js ${confMode}`;
  scripts[
    "webpack:watch"
  ] = `webpack --watch --config webpack.config.js ${confMode}`;
  scripts[
    "webpack:start"
  ] = `webpack serve --open --config webpack.config.js ${confMode}`;
  scripts[
    "webpack:dev"
  ] = `webpack-dev-server --open --config webpack.config.js ${confMode}`;

  fs.writeFileSync(filePath, JSON.stringify(jsonContent));
}

export { addScriptsForPackageJson };
