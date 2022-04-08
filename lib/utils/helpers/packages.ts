import { execSync } from "child_process";
import { createSpinner } from "nanospinner";
import { preset } from "./enum";
import { promise } from "./promise";
import { stringParser } from "./parser";

async function installPackagesForPresets(presetType: preset) {
  let installationSpinner = createSpinner(
    `Install packages for ${presetType}`
  ).start();

  await promise();

  execSync(
    `npm i -D webpack webpack-cli webpack-dev-server css-loader file-loader @types/webpack clean-webpack-plugin node-sass sass-loader image-webpack-loader imagemin-mozjpeg imagemin-svgo imagemin-pngquant terser-webpack-plugin uglify-js webpack-notifier copy-webpack-plugin ${
      presetType === "Typescript"
        ? "typescript ts-loader tslint tslint-webpack-plugin @babel/plugin-transform-runtime"
        : presetType === "Javascript"
        ? "@babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime"
        : presetType === "React"
        ? "@babel/core babel-loader @babel/preset-react @babel/plugin-transform-runtime"
        : presetType === "Vue"
        ? "vue-style-loader vue-loader vue-server-renderer"
        : presetType === "Svelte"
        ? "svelte-loader"
        : stringParser("")
    }`
  );

  installationSpinner.success({
    text: `Packages for ${presetType} had been installed`,
  });
}

export { installPackagesForPresets };
