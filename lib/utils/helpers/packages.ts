import { execSync } from "child_process";
import { createSpinner } from "nanospinner";
import { preset } from "./enum";
import { promise } from "./promise";
import { stringParser } from "./parser";
import { version, webpackMode } from "./types";
import { parseString } from "../text";

async function installPackagesForPresets(
  presetType: preset,
  mode: webpackMode,
  version: version
) {
  let installationSpinner = createSpinner(
    `Install packages for ${presetType}`
  ).start();

  await promise();
  //  ${
  //     version == 4
  //       ? parseString("webpack@4.41.5")
  //       : parseString("webpack@5.72.0")
  //   }
  execSync(
    `npm i -D webpack webpack-cli webpack-dev-server css-loader file-loader @types/webpack clean-webpack-plugin node-sass sass-loader image-webpack-loader imagemin-mozjpeg imagemin-svgo imagemin-pngquant copy-webpack-plugin ${
      presetType === "Typescript"
        ? parseString("typescript ts-loader tslint tslint-webpack-plugin")
        : presetType === "Javascript"
        ? parseString(
            "@babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime"
          )
        : presetType === "React"
        ? parseString(
            "@babel/core babel-loader @babel/preset-react @babel/plugin-transform-runtime"
          )
        : presetType === "Vue"
        ? parseString("vue-style-loader vue-loader")
        : presetType === "Svelte"
        ? parseString("svelte-loader")
        : stringParser("")
    } ${
      mode === "production"
        ? parseString(
            "mini-css-extract-plugin css-minimizer-webpack-plugin html-minimizer-webpack-plugin terser-webpack-plugin"
          )
        : mode === "development" && presetType !== "Vue"
        ? parseString("webpack-notifier")
        : parseString("webpack-notifier style-loader")
    }`
  );

  installationSpinner.success({
    text: `Packages for ${presetType} had been installed`,
  });
}

export { installPackagesForPresets };
