import * as fs from "fs";
import { deleteLine } from "./delete-line";
import { WebpackConfigOptions } from "./handle-answers";
import { whitespace } from "./helpers/constants";
import { preset } from "./helpers/enum";
import { installPackagesForPresets } from "./helpers/packages";
import { addScriptsForPackageJson } from "./add-scripts";
import { figletText } from "./text";
import { version, webpackMode } from "./helpers/types";

function setAlias(alias: string) {
  return !whitespace.test(alias)
    ? `"@/${alias.substring(
        alias.lastIndexOf("/") + 1,
        alias.length
      )}": path.resolve(__dirname, "${alias}")`
        .split(" ")
        .join(" ")
    : alias
        .split(" ")
        .map(
          (al: string) =>
            `"@/${al.substring(
              al.lastIndexOf("/") + 1,
              al.length
            )}": path.resolve(__dirname, "${al}") \n`
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

async function generateWebpackConfig(
  type: preset,
  mode: webpackMode,
  version: version
) {
  try {
    await installPackagesForPresets(type, mode);

    fs.writeFileSync("webpack.config.js", await WebpackConfigOptions());

    setTimeout(() => deleteLine("webpack.config.js"), 1000);

    new Promise((reject, resolve) =>
      setTimeout(() => {
        addScriptsForPackageJson("package.json", mode);
        resolve();
      }, 2000)
    );

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
