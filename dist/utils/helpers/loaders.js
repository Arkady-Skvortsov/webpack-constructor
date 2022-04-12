"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHtmlLoader = exports.setCssPreprocessorLoader = exports.langLoader = void 0;
var text_1 = require("../text");
function langLoader(presetType) {
    return presetType === "Typescript"
        ? "{\n        test: /.ts$/,\n        exclude: /node_modules/,\n        use: \"ts-loader\",\n      },\n    "
        : presetType === "Javascript"
            ? "\n      {\n        test: /.m?js$/,\n        exclude: /node_modules/,\n        use: {\n          loader: \"babel-loader\",\n          options: [\"@babel/preset-env\"]\n        },\n      },\n    "
            : presetType === "Vue"
                ? "\n      {\n        test: /.vue$/,\n        exclude: /node_modules/,\n        use: \"vue-loader\",\n      },\n    "
                : presetType === "React"
                    ? "\n      {\n        test: /.tsx$/,\n        exclude: /node_modules/,\n        use: {\n          loader: \"babel-loader\",\n          options: [\"@babel/preset-env\", \"@babel/preset-react\"]\n        },\n      },\n    "
                    : presetType === "Svelte"
                        ? "\n      {\n        test: /.(html|svelte)$/,\n        use: 'svelte-loader'\n      },\n    "
                        : (0, text_1.parseString)("");
}
exports.langLoader = langLoader;
function setCssPreprocessorLoader(loaderType) {
    return loaderType === "(Sass/Scss)"
        ? "sass-loader"
        : loaderType === "Less"
            ? "less-loader"
            : loaderType === "PostCss"
                ? "postcss-loader"
                : loaderType === "Stylus"
                    ? "stylus-loader"
                    : (0, text_1.parseString)("");
}
exports.setCssPreprocessorLoader = setCssPreprocessorLoader;
function setHtmlLoader(loaderType) {
    return loaderType === "ejs"
        ? "\n    {\n      test: /.ejs$/,\n      use: [\"ejs-loader\"]\n    }\n    "
        : loaderType === "hbs"
            ? "\n    { \n      test: /.hbs|handlebars$/, \n      use: [\"handlebars-loader\"] \n    }\n    "
            : loaderType === "pug"
                ? "\n    { \n      test: /.pug$/, \n      use: [\"pug-loader\"]\n    }\n    "
                : "\n    {\n      test: /.html$/,\n      use: [\"html-loader\"]\n    }\n    ";
}
exports.setHtmlLoader = setHtmlLoader;
//# sourceMappingURL=loaders.js.map