import { execSync } from "child_process";
import { createSpinner } from "nanospinner";
import { promise } from "./promise";
import { stringParser } from "./parser";
import { parseString } from "../text";
async function installPackagesForPresets(presetType, mode, version, type) {
    let installationSpinner = createSpinner(`Install packages for ${presetType}`).start();
    await promise();
    //  ${
    //     version == 4
    //       ? parseString("webpack@4.41.5")
    //       : parseString("webpack@5.72.0")
    //   }
    execSync(`npm i -D webpack webpack-cli webpack-dev-server css-loader file-loader @types/webpack clean-webpack-plugin node-sass sass-loader image-webpack-loader imagemin-mozjpeg imagemin-svgo imagemin-pngquant copy-webpack-plugin ${presetType === "Typescript"
        ? parseString("typescript ts-loader tslint tslint-webpack-plugin")
        : presetType === "Javascript"
            ? parseString("@babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime")
            : presetType === "React"
                ? parseString("@babel/core babel-loader @babel/preset-react @babel/plugin-transform-runtime")
                : presetType === "Vue"
                    ? parseString("vue-style-loader vue-loader")
                    : presetType === "Svelte"
                        ? parseString("svelte-loader")
                        : stringParser("")} ${mode === "production"
        ? parseString("mini-css-extract-plugin css-minimizer-webpack-plugin html-minimizer-webpack-plugin terser-webpack-plugin")
        : mode === "development" && presetType !== "Vue"
            ? parseString("webpack-notifier")
            : parseString("webpack-notifier style-loader")}`);
    // : execSync(
    //     `npm i webpack webpack-cli ${
    //       customOptions.isDevServerSupport
    //         ? parseString("webpack-dev-server")
    //         : parseString("")
    //     } ${
    //       customOptions.isYamlSupport
    //         ? parseString("yaml-loader")
    //         : parseString("")
    //     } ${
    //       customOptions.isCoffeScriptSupport
    //         ? parseString("coffeescript coffee-loader")
    //         : parseString("")
    //     } ${
    //       customOptions.isCsvSupport
    //         ? parseString("csv-loader")
    //         : parseString("")
    //     } ${
    //       customOptions.isXmlSupport
    //         ? parseString("xml-loader")
    //         : parseString("")
    //     } ${
    //       customOptions.isPwaAnswer
    //         ? parseString("workbox-webpack-plugin http-server")
    //         : parseString("")
    //     } ${
    //       customOptions.isCompressionSupport
    //         ? parseString("compression-webpack-plugin")
    //         : parseString("")
    //     } ${
    //       customOptions.isAvoidErrorStyleSupport
    //         ? parseString("stylelint-webpack-plugin")
    //         : parseString("")
    //     } ${
    //       customOptions.isClosureSupport
    //         ? parseString("closure-webpack-plugin google-closure-compiler")
    //         : parseString("")
    //     } ${
    //       customOptions.isCleanPluginSUpport
    //         ? parseString("clean-webpack-plugin")
    //         : parseString("")
    //     } ${
    //       customOptions.isCopyPluginSupport
    //         ? parseString("copy-webpack-plugin")
    //         : parseString("")
    //     } ${
    //       customOptions.isImageSupport
    //         ? parseString("image-webpack-loader")
    //         : parseString("")
    //     } ${
    //       customOptions.isLocalizeSupport
    //         ? parseString("i18n-webpack-plugin")
    //         : parseString("")
    //     } @types/webpack`
    //   );
    installationSpinner.success({
        text: `Packages for ${presetType} had been installed`,
    });
}
export { installPackagesForPresets };
//# sourceMappingURL=packages.js.map