import * as fs from "fs";
import { deleteLine } from "./delete-line";
import { WebpackConfigCustom, WebpackConfigOptions } from "./handle-answers";
import { whitespace } from "./helpers/constants";
import { preset } from "./helpers/enum";
import { installPackagesForPresets } from "./helpers/packages";
import { addScriptsForPackageJson } from "./add-scripts";
import { figletText } from "./text";
import { basicTypes, version, webpackMode } from "./helpers/types";
import { customWebpackConfig } from "./helpers/interfaces";

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

function setEntryPoint(entrypoint: string) {
  return whitespace.test(entrypoint)
    ? `{${entrypoint
        .split(" ")
        .map(
          (point: string) =>
            `"${point
              .substring(point.lastIndexOf("/") + 1, point.length)
              .replace(
                /\.(js|ts|tsx|jsx|svelte|vue|sass|scss)$/g,
                ""
              )}": "${point}"\n`
        )}}`
    : `{${entrypoint
        .substring(entrypoint.lastIndexOf("/") + 1, entrypoint.length)
        .replace(/\.(js|ts|tsx|jsx|svelte|vue)$/g, "")}: "${entrypoint}"}`;
}

function setSourceMaps(mode: "production" | "development") {
  return mode === "production" ? "source-maps" : "eval-source-map";
}

async function generateWebpackConfig(
  type: preset,
  mode: webpackMode,
  version: version,
  basicType: basicTypes
) {
  try {
    let customOptions: customWebpackConfig;

    const configType = async () => {
      if (basicType === "Preset") return await WebpackConfigOptions(type, mode);
      else {
        return await WebpackConfigCustom(type, mode);
      }
    };

    fs.writeFileSync("webpack.config.js", await configType());

    await addScriptsForPackageJson("package.json", mode);

    deleteLine("webpack.config.js");

    await figletText(type);

    await installPackagesForPresets(
      type,
      mode,
      version,
      basicType,
      await configType()
    );
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
