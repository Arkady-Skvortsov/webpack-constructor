"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFontsExtensions = exports.setImageExtensions = exports.setStaticLoader = exports.setCsvLoader = exports.setYamlLoader = exports.setXmlLoader = exports.setCoffeeScript = exports.setHtmlLoader = exports.setCssPreprocessorLoader = exports.langLoader = void 0;
var text_1 = require("../text");
var enum_1 = require("./enum");
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
                        ? "{\n        test: /.(html|svelte)$/,\n        use: 'svelte-loader'\n       },"
                        : (0, text_1.parseString)("");
}
exports.langLoader = langLoader;
function setCssPreprocessorLoader(loaderType, devMode, presetType) {
    var type = loaderType === "(Sass/Scss)"
        ? { expression: /\.s(a|c)ss$/, loader: "sass-loader" }
        : loaderType === "Less"
            ? { expression: /\.less$/, loader: "less-loader" }
            : loaderType === "PostCss"
                ? { expression: /\.css$/, loader: "postcss-loader" }
                : loaderType === "Stylus"
                    ? { expression: /\.styl$/, loader: "stylus-loader" }
                    : (0, text_1.parseString)("");
    return Object.values(type).join(", ").split(" ");
}
exports.setCssPreprocessorLoader = setCssPreprocessorLoader;
console.log(setCssPreprocessorLoader("(Sass/Scss)", "development", enum_1.preset.JAVASCRIPT));
function setHtmlLoader(loaderType) {
    return loaderType === "EJS"
        ? "{\n      test: /.ejs$/,\n      use: [\"ejs-loader\"]\n    }"
        : loaderType === "HandleBars"
            ? "{ \n      test: /.hbs|handlebars$/, \n      use: [\"handlebars-loader\"] \n    }"
            : loaderType === "Pug"
                ? "{ \n      test: /.pug$/, \n      use: [\"pug-loader\"]\n    }"
                : loaderType === "Jade"
                    ? "\n      {\n        test: /.jade$/,\n        use: [\"jade-loader\"]\n      }\n    "
                    : "{\n      test: /.html$/,\n      use: [\"html-loader\"]\n    }";
}
exports.setHtmlLoader = setHtmlLoader;
function setImageExtensions(loaderType) {
    return loaderType === ".gif"
        ? ""
        : loaderType === ".jpeg"
            ? ""
            : loaderType === ".jpg"
                ? ""
                : loaderType === ".png"
                    ? ""
                    : loaderType === ".svg"
                        ? ""
                        : loaderType === ".webp"
                            ? ""
                            : (0, text_1.parseString)("");
}
exports.setImageExtensions = setImageExtensions;
function setFontsExtensions(loaderType) {
    return loaderType === ".eot"
        ? ""
        : loaderType === ".otf"
            ? ""
            : loaderType === ".svg"
                ? ""
                : loaderType === ".ttf"
                    ? ""
                    : loaderType === ".woff"
                        ? ""
                        : (0, text_1.parseString)("");
}
exports.setFontsExtensions = setFontsExtensions;
function setCoffeeScript(response) {
    return response === "Yes"
        ? "{\n        test: /.coffee$/,\n        loader: \"coffee-loader\",\n       },"
        : (0, text_1.parseString)("");
}
exports.setCoffeeScript = setCoffeeScript;
function setXmlLoader(response) {
    return response === "Yes"
        ? "{ \n        test: /.xml$/, \n        loader: 'xml-loader' \n       },"
        : (0, text_1.parseString)("");
}
exports.setXmlLoader = setXmlLoader;
function setYamlLoader(response) {
    return response === "Yes"
        ? "{\n        test: /.ya?ml$/,\n        use: 'yaml-loader'\n      }"
        : (0, text_1.parseString)("");
}
exports.setYamlLoader = setYamlLoader;
function setCsvLoader(response) {
    return response === "Yes"
        ? "{\n        test: /.csv$/,\n        loader: 'csv-loader',\n        options: {\n          dynamicTyping: true,\n          header: true,\n          skipEmptyLines: true\n        }\n      }"
        : (0, text_1.parseString)("");
}
exports.setCsvLoader = setCsvLoader;
function setStaticLoader(loader) {
    return loader === "file-loader"
        ? "file-loader"
        : loader === "raw-loader"
            ? "raw-loader"
            : loader === "url-loader"
                ? "url-loader"
                : (0, text_1.parseString)("");
}
exports.setStaticLoader = setStaticLoader;
//# sourceMappingURL=loaders.js.map