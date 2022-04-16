import { setCSSRuleUse } from "../dev-mode";
import { parseString } from "../text";
import { preset } from "./enum";
import {
  cssLoader,
  fontsExtensions,
  htmlLoader,
  imageExtensions,
  questionResponse,
  staticLoader,
  webpackMode,
} from "./types";

function langLoader(presetType: preset) {
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
    : parseString("");
}

function setCssPreprocessorLoader(
  loaderType: cssLoader,
  devMode: webpackMode,
  presetType: preset
) {
  const type =
    loaderType === "(Sass/Scss)"
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
      use: [${setCSSRuleUse(devMode, presetType)}, "css-loader", "${
    type.loader
  }"]
    }
  `;
}

function setHtmlLoader(loaderType: htmlLoader) {
  const type =
    loaderType === "EJS"
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
    }
  `;
}

function setImageExtensions(loaderType: imageExtensions) {
  return loaderType === ".gif"
    ? ``
    : loaderType === ".jpeg"
    ? ``
    : loaderType === ".jpg"
    ? ``
    : loaderType === ".png"
    ? ``
    : loaderType === ".webp"
    ? ``
    : parseString("");
}

function setFontsExtensions(loaderType: fontsExtensions) {
  return loaderType === ".eot"
    ? ``
    : loaderType === ".otf"
    ? ``
    : loaderType === ".svg"
    ? ``
    : loaderType === ".ttf"
    ? ``
    : loaderType === ".woff"
    ? ``
    : parseString("");
}

function setCoffeeScript(response: questionResponse) {
  return response === "Yes"
    ? `{
        test: /\.coffee$/,
        loader: "coffee-loader",
       },`
    : parseString("");
}

function setXmlLoader(response: questionResponse) {
  return response === "Yes"
    ? `{ 
        test: /\.xml$/, 
        loader: 'xml-loader' 
       },`
    : parseString("");
}

function setYamlLoader(response: questionResponse) {
  return response === "Yes"
    ? `{
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      }`
    : parseString("");
}

function setCsvLoader(response: questionResponse) {
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
    : parseString("");
}

function setStaticLoader(loader: staticLoader) {
  return loader === "file-loader"
    ? `file-loader`
    : loader === "raw-loader"
    ? `raw-loader`
    : loader === "url-loader"
    ? `url-loader`
    : parseString("");
}

export {
  langLoader,
  setCssPreprocessorLoader,
  setHtmlLoader,
  setCoffeeScript,
  setXmlLoader,
  setYamlLoader,
  setCsvLoader,
  setStaticLoader,
  setImageExtensions,
  setFontsExtensions,
};
