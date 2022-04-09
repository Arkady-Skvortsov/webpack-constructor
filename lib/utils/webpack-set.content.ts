import * as fs from "fs";
import { addScriptsForPackageJson } from "./add-scripts";
import { deleteLine } from "./delete-line";
import { WebpackConfigOptions } from "./handle-answers";
import { whitespace } from "./helpers/constants";
import { preset } from "./helpers/enum";
import { installPackagesForPresets } from "./helpers/packages";
import { figletText } from "./text";

type webpackOption = string | string[];

function setAlias(alias: webpackOption) {
  return typeof alias === "string"
    ? `"@/${alias.substring(
        alias.lastIndexOf("/") + 1,
        alias.length
      )}": path.resolve(__dirname, "${alias}")`
    : alias
        .map(
          (al) =>
            `"@/${al.substring(
              al.lastIndexOf("/") + 1,
              al.length
            )}": path.resolve(__dirname, "${al}")`
        )
        .join(", ");
}

function setScriptFiles(file: string | any) {
  return whitespace.test(file)
    ? `["${file
        .split(" ")
        .map((f: string) => `"${f}"`)
        .join(", ")}"]`
    : `"${file}"`;
}

function setEntryPoint(entrypoint: string | any) {
  return whitespace.test(entrypoint)
    ? `[${entrypoint
        .split(" ")
        .map((entry: string) => `"${entry}"`)
        .join(", ")}]`
    : `{main: "${entrypoint}"}`;
}

function setSourceMaps(mode: "production" | "development") {
  return mode === "production" ? "source-maps" : "eval-source-map";
}

async function generateWebpackConfig(type: preset) {
  try {
    await installPackagesForPresets(type);

    fs.writeFileSync("webpack.config.js", await WebpackConfigOptions());

    deleteLine("webpack.config.js");

    addScriptsForPackageJson("./package.json", "development");

    await figletText(preset.TYPESCRIPT);
  } catch (e) {
    console.log(e);
  }
}

export {
  setAlias,
  setSourceMaps,
  setScriptFiles,
  setEntryPoint,
  generateWebpackConfig,
};
