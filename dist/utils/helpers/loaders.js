"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFontsExtensions = exports.setImageExtensions = exports.setStaticLoader = exports.setCsvLoader = exports.setYamlLoader = exports.setXmlLoader = exports.setCoffeeScript = exports.setHtmlLoader = exports.setCssPreprocessorLoader = exports.langLoader = void 0;
var dev_mode_1 = require("../dev-mode");
var text_1 = require("../text");
var expression_1 = require("./expression");
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
                    : {};
    return "\n    {\n      test: ".concat(type.expression, ",\n      use: [").concat((0, dev_mode_1.setCSSRuleUse)(devMode, presetType), ", \"css-loader\", \"").concat(type.loader, "\"]\n    }\n  ");
}
exports.setCssPreprocessorLoader = setCssPreprocessorLoader;
function setHtmlLoader(loaderType, presetType) {
    var type = ["Vue", "React", "Svelte"].some(function (typePreset) { return typePreset !== presetType; })
        ? {}
        : loaderType === "EJS"
            ? { expression: /.ejs$/, loader: "ejs-loader" }
            : loaderType === "HandleBars"
                ? { expression: /.hbs|handlebars$/, loader: "handlebars-loader" }
                : loaderType === "Pug"
                    ? { expression: /.pug$/, loader: "pug-loader" }
                    : loaderType === "Jade"
                        ? { expression: /.jade$/, loader: "jade-loader" }
                        : { expression: /.html$/, loader: "html-loader" };
    return "\n    {\n      test: ".concat(type.expression, ",\n      use: [").concat(type.loader, "]\n    };");
}
exports.setHtmlLoader = setHtmlLoader;
function setImageExtensions(response, loaderType, staticLoader) {
    if (response === "Yes") {
        var type = loaderType === ".gif"
            ? { extension: ".gif", option: "gifsicle: { interlaced: false }" }
            : loaderType === ".jpeg"
                ? { extension: ".jpeg", option: "mozjpeg: { progressive: true }" }
                : loaderType === ".jpg"
                    ? { extension: ".jpg" }
                    : loaderType === ".png"
                        ? { extension: ".png", option: "optipng: { enabled: false }" }
                        : loaderType === ".webp"
                            ? { extension: ".webp", option: "webp: { quality: 85 }" }
                            : loaderType === ".svg"
                                ? { extension: ".svg", option: "svgo: {  }" }
                                : {};
        "{\n      test: ".concat((0, expression_1.setInExpression)(type.extension), ",\n      use: [\n        ").concat(setStaticLoader(staticLoader), ",\n        {\n          loader: \"image-webpack-loader\",\n          options: {\n            ").concat(type.option, "\n          }\n        }\n      ]\n    }");
    }
}
exports.setImageExtensions = setImageExtensions;
function setFontsExtensions(loaderType, staticLoader, fontsDir) {
    var type = loaderType === ".eot"
        ? ".eot"
        : loaderType === ".otf"
            ? ".otf"
            : loaderType === ".svg"
                ? ".svg"
                : loaderType === ".ttf"
                    ? ".ttf"
                    : loaderType === ".woff"
                        ? ".woff"
                        : (0, text_1.parseString)("");
    return "\n    {\n      test: ".concat((0, expression_1.setInExpression)(type), ",\n      use: {\n        loader: ").concat(staticLoader, ",\n        options: {\n          name: \"[name].[ext]\",\n          outputPath: \"").concat(fontsDir, "\"\n        }\n      }\n    }\n  ");
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