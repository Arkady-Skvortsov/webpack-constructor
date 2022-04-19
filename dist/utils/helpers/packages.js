"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installPackagesForPresets = void 0;
const child_process_1 = require("child_process");
const nanospinner_1 = require("nanospinner");
const promise_1 = require("./promise");
const parser_1 = require("./parser");
const text_1 = require("../text");
const loaders_1 = require("./loaders");
async function installPackagesForPresets(presetType, mode, version, type, customOptions) {
    let installationSpinner = (0, nanospinner_1.createSpinner)(`Install packages for ${presetType}`).start();
    await (0, promise_1.promise)();
    if (type === "Preset") {
        (0, child_process_1.execSync)(`npm i -D ${version == 4
            ? (0, text_1.parseString)("webpack@4.41.5")
            : (0, text_1.parseString)("webpack@5.72.0")} webpack-cli webpack-dev-server css-loader file-loader @types/webpack clean-webpack-plugin node-sass sass-loader image-webpack-loader imagemin-mozjpeg imagemin-svgo imagemin-pngquant copy-webpack-plugin ${presetType === "Typescript"
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
    }
    else {
        (0, child_process_1.execSync)(`npm i -D ${version == 4
            ? (0, text_1.parseString)("webpack@4.41.5")
            : (0, text_1.parseString)("webpack@5.72.0")} webpack-cli css-loader @types/webpack ${customOptions.isDevServerSupport
            ? (0, text_1.parseString)("webpack-dev-server")
            : (0, text_1.parseString)("")} ${customOptions.isYamlSupport
            ? (0, text_1.parseString)("yaml-loader")
            : (0, text_1.parseString)("")}
          ${customOptions.isCoffeScriptSupport
            ? (0, text_1.parseString)("coffeescript coffee-loader")
            : (0, text_1.parseString)("")} ${customOptions.isXmlSupport ? (0, text_1.parseString)("xml-loader") : (0, text_1.parseString)("")} ${customOptions.isCsvSupport ? (0, text_1.parseString)("csv-loader") : (0, text_1.parseString)("")} ${customOptions.isPwaAnswer &&
            !["Vue", "React", "Svelte"].includes(presetType)
            ? (0, text_1.parseString)("workbox-webpack-plugin http-server")
            : (0, text_1.parseString)("")} ${customOptions.isCompressionSupport
            ? (0, text_1.parseString)("compression-webpack-plugin")
            : (0, text_1.parseString)("")} ${customOptions.isClosureSupport
            ? (0, text_1.parseString)("closure-webpack-plugin google-closure-compiler")
            : (0, text_1.parseString)("")} ${customOptions.isCleanPluginSUpport
            ? (0, text_1.parseString)("clean-webpack-plugin")
            : (0, text_1.parseString)("")} ${customOptions.isCopyPluginSupport
            ? (0, text_1.parseString)("copy-webpack-plugin")
            : (0, text_1.parseString)("")} ${customOptions.isImageSupport
            ? (0, text_1.parseString)("image-webpack-loader")
            : (0, text_1.parseString)("")} ${customOptions.isLocalizeSupport
            ? (0, text_1.parseString)("i18n-webpack-plugin")
            : (0, text_1.parseString)("")} ${customOptions.isHtmlPreprocessorSupport
            ? (0, loaders_1.parseHtmlLoaders)(customOptions.htmlPreprocessor)
            : (0, text_1.parseString)("")} ${customOptions.isCssPreprocessorSupport
            ? (0, loaders_1.parseCssLoaders)(customOptions.cssPreprocessors)
            : (0, text_1.parseString)("")} ${customOptions.isIntegrationSupport
            ? (0, loaders_1.parseIntegration)(customOptions.integrationSupport)
            : (0, text_1.parseString)("")}`);
    }
    installationSpinner.success({
        text: `Packages for ${presetType} had been installed`,
    });
}
exports.installPackagesForPresets = installPackagesForPresets;
//# sourceMappingURL=packages.js.map