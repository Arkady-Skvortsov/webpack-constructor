"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHtmlLoader = exports.setCssPreprocessorLoader = exports.langLoader = void 0;
var text_1 = require("../text");
function langLoader(presetType) {
    return presetType === "Typescript"
        ? "{\n        test: /.ts$/,\n        exclude: /node_modules/,\n        use: \"ts-loader\",\n      },"
        : presetType === "Javascript"
            ? "{\n        test: /.m?js$/,\n        exclude: /node_modules/,\n        use: {\n          loader: \"babel-loader\",\n          options: [\"@babel/preset-env\"]\n        },\n      },"
            : presetType === "Vue"
                ? "{\n        test: /.vue$/,\n        exclude: /node_modules/,\n        use: \"vue-loader\",\n      },"
                : presetType === "React"
                    ? "{\n        test: /.tsx$/,\n        exclude: /node_modules/,\n        use: {\n          loader: \"babel-loader\",\n          options: [\"@babel/preset-env\", \"@babel/preset-react\"]\n        },\n      },"
                    : presetType === "Svelte"
                        ? "{\n        test: /.(html|svelte)$/,\n        use: 'svelte-loader'\n      },"
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
        ? "{\n      test: /.ejs$/,\n      use: [\"ejs-loader\"]\n    }"
        : loaderType === "hbs"
            ? "{ \n      test: /.hbs|handlebars$/, \n      use: [\"handlebars-loader\"] \n    }"
            : loaderType === "pug"
                ? "{ \n      test: /.pug$/, \n      use: [\"pug-loader\"]\n    }"
                : "{\n      test: /.html$/,\n      use: [\"html-loader\"]\n    }";
}
exports.setHtmlLoader = setHtmlLoader;
//# sourceMappingURL=loaders.js.map