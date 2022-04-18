"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFontsExtensions = exports.setImageExtensions = exports.setStaticLoader = exports.setCsvLoader = exports.setYamlLoader = exports.setXmlLoader = exports.setCoffeeScript = exports.setHtmlLoader = exports.setCssPreprocessorLoader = exports.langLoader = void 0;
const dev_mode_1 = require("../dev-mode");
const text_1 = require("../text");
const expression_1 = require("./expression");
function langLoader(presetType) {
    return presetType === "Typescript"
        ? `{
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },`
        : presetType === "Javascript"
            ? `{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: ["@babel/preset-env"]
        },
      },`
            : presetType === "Vue"
                ? `{
        test: /\.vue$/,
        exclude: /node_modules/,
        use: "vue-loader",
      },`
                : presetType === "React"
                    ? `{
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: ["@babel/preset-env", "@babel/preset-react"]
        },
      },`
                    : presetType === "Svelte"
                        ? `{
        test: /\.(html|svelte)$/,
        use: 'svelte-loader'
       },`
                        : (0, text_1.parseString)("");
}
exports.langLoader = langLoader;
function setCssPreprocessorLoader(loaderType, devMode, presetType) {
    const type = loaderType === "(Sass/Scss)"
        ? { expression: /\.s(a|c)ss$/, loader: "sass-loader" }
        : loaderType === "Less"
            ? { expression: /\.less$/, loader: `less-loader` }
            : loaderType === "PostCss"
                ? { expression: /\.css$/, loader: `postcss-loader` }
                : loaderType === "Stylus"
                    ? { expression: /\.styl$/, loader: `stylus-loader` }
                    : {};
    return `
    {
      test: ${type.expression},
      use: [${(0, dev_mode_1.setCSSRuleUse)(devMode, presetType)}, "css-loader", "${type.loader}"]
    }
  `;
}
exports.setCssPreprocessorLoader = setCssPreprocessorLoader;
function setHtmlLoader(loaderType, presetType) {
    const type = ["Vue", "React", "Svelte"].some((typePreset) => typePreset !== presetType)
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
    return `
    {
      test: ${type.expression},
      use: [${type.loader}]
    };`;
}
exports.setHtmlLoader = setHtmlLoader;
function setImageExtensions(response, loaderType, staticLoader) {
    if (response === "Yes") {
        const type = loaderType === ".gif"
            ? { extension: ".gif", option: `gifsicle: { interlaced: false }` }
            : loaderType === ".jpeg"
                ? { extension: ".jpeg", option: `mozjpeg: { progressive: true }` }
                : loaderType === ".jpg"
                    ? { extension: ".jpg" }
                    : loaderType === ".png"
                        ? { extension: ".png", option: `optipng: { enabled: false }` }
                        : loaderType === ".webp"
                            ? { extension: ".webp", option: `webp: { quality: 85 }` }
                            : loaderType === ".svg"
                                ? { extension: ".svg", option: `svgo: {  }` }
                                : {};
        `{
      test: ${(0, expression_1.setInExpression)(type.extension)},
      use: [
        ${setStaticLoader(staticLoader)},
        {
          loader: "image-webpack-loader",
          options: {
            ${type.option}
          }
        }
      ]
    }`;
    }
}
exports.setImageExtensions = setImageExtensions;
function setFontsExtensions(loaderType, staticLoader, fontsDir) {
    const type = loaderType === ".eot"
        ? `.eot`
        : loaderType === ".otf"
            ? `.otf`
            : loaderType === ".svg"
                ? `.svg`
                : loaderType === ".ttf"
                    ? `.ttf`
                    : loaderType === ".woff"
                        ? `.woff`
                        : (0, text_1.parseString)("");
    return `
    {
      test: ${(0, expression_1.setInExpression)(type)},
      use: {
        loader: ${staticLoader},
        options: {
          name: "[name].[ext]",
          outputPath: "${fontsDir}"
        }
      }
    }
  `;
}
exports.setFontsExtensions = setFontsExtensions;
function setCoffeeScript(response) {
    return response === "Yes"
        ? `{
        test: /\.coffee$/,
        loader: "coffee-loader",
       },`
        : (0, text_1.parseString)("");
}
exports.setCoffeeScript = setCoffeeScript;
function setXmlLoader(response) {
    return response === "Yes"
        ? `{ 
        test: /\.xml$/, 
        loader: 'xml-loader' 
       },`
        : (0, text_1.parseString)("");
}
exports.setXmlLoader = setXmlLoader;
function setYamlLoader(response) {
    return response === "Yes"
        ? `{
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      }`
        : (0, text_1.parseString)("");
}
exports.setYamlLoader = setYamlLoader;
function setCsvLoader(response) {
    return response === "Yes"
        ? `{
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }`
        : (0, text_1.parseString)("");
}
exports.setCsvLoader = setCsvLoader;
function setStaticLoader(loader) {
    return loader === "file-loader"
        ? `file-loader`
        : loader === "raw-loader"
            ? `raw-loader`
            : loader === "url-loader"
                ? `url-loader`
                : (0, text_1.parseString)("");
}
exports.setStaticLoader = setStaticLoader;
//# sourceMappingURL=loaders.js.map