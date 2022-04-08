"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.langLoader = void 0;
var langLoader = function (presetType) {
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
                        : null;
};
exports.langLoader = langLoader;
var setCssPreprocessorLoader = function (loaderType) {
    return loaderType === "(Sass/Scss)"
        ? "sass-loader"
        : loaderType === "Less"
            ? "less-loader"
            : loaderType === "PostCss"
                ? ""
                : loaderType === "Stylus"
                    ? ""
                    : null;
};
var setHtmlLoader = function () { };
//# sourceMappingURL=loaders.js.map