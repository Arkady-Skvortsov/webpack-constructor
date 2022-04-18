"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installPackagesForPresets = void 0;
const child_process_1 = require("child_process");
const nanospinner_1 = require("nanospinner");
const promise_1 = require("./promise");
const parser_1 = require("./parser");
const text_1 = require("../text");
async function installPackagesForPresets(presetType, mode, version, type) {
    let installationSpinner = (0, nanospinner_1.createSpinner)(`Install packages for ${presetType}`).start();
    await (0, promise_1.promise)();
    //  ${
    //     version == 4
    //       ? parseString("webpack@4.41.5")
    //       : parseString("webpack@5.72.0")
    //   }
    (0, child_process_1.execSync)(`npm i -D webpack webpack-cli webpack-dev-server css-loader file-loader @types/webpack clean-webpack-plugin node-sass sass-loader image-webpack-loader imagemin-mozjpeg imagemin-svgo imagemin-pngquant copy-webpack-plugin ${presetType === "Typescript"
        ? (0, text_1.parseString)("typescript ts-loader tslint tslint-webpack-plugin")
        : presetType === "Javascript"
            ? (0, text_1.parseString)("@babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime")
            : presetType === "React"
                ? (0, text_1.parseString)("@babel/core babel-loader @babel/preset-react @babel/plugin-transform-runtime")
                : presetType === "Vue"
                    ? (0, text_1.parseString)("vue-style-loader vue-loader")
                    : presetType === "Svelte"
                        ? (0, text_1.parseString)("svelte-loader")
                        : (0, parser_1.stringParser)("")} ${mode === "production"
        ? (0, text_1.parseString)("mini-css-extract-plugin css-minimizer-webpack-plugin html-minimizer-webpack-plugin terser-webpack-plugin")
        : mode === "development" && presetType !== "Vue"
            ? (0, text_1.parseString)("webpack-notifier")
            : (0, text_1.parseString)("webpack-notifier style-loader")}`);
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
exports.installPackagesForPresets = installPackagesForPresets;
//# sourceMappingURL=packages.js.map