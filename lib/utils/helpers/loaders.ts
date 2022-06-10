import { setCSSRuleUse } from "../dev-mode";
import { parseString } from "../text";
import { preset } from "./enum";
import { setInExpression } from "./expression";
import { elmOptions, luaOptions } from "./interfaces";
import {
  cssLoader,
  fontsExtensions,
  htmlLoader,
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

function setHtmlLoader(loaderType: htmlLoader, presetType: preset) {
  const type = !["Vue", "React", "Svelte"].includes(presetType)
    ? {}
    : loaderType === "EJS"
    ? { expression: /.ejs$/, loader: "ejs-loader" }
    : loaderType === "HandleBars"
    ? { expression: /.hbs|handlebars$/, loader: "handlebars-loader" }
    : loaderType === "Pug"
    ? { expression: /.pug$/, loader: "pug-loader" }
    : loaderType === "Jade"
    ? { expression: /.jade$/, loader: "jade-loader" }
    : { expression: /.html$/, loader: "html-loader" } 

  return `{
      test: ${type.expression},
      use: [${type.loader}]
    };`;
}

async function parseHtmlLoaders(loaderType: string) {
  return loaderType
    .split(" ")
    .forEach((loader) =>
      loader === "Pug"
        ? "pug-loader"
        : loader === "EJS"
        ? "ejs-loader"
        : loader === "Handlebars"
        ? "handlebards-loader"
        : loader === "Jade"
        ? "jade-loader"
        : loader === "PostHTML" 
        ? "posthtml-loader"
        : "html-loader"
    );
}

async function parseCssLoaders(loaderType: string) {
  return loaderType
    .split(" ")
    .map((loader) =>
      loader === "(Sass/Scss)"
        ? "sass-loader"
        : loader === "Less"
        ? "less-loaderr"
        : loader === "PostCss"
        ? "postcss-loader"
        : loader === "Stylus"
        ? "stylus-loader"
        : "css-loader"
    );
}

async function parseIntegration(integrationType: string) {
  return integrationType
    .split(" ")
    .forEach((integration) =>
      integration === "Gulp"
        ? "webpack-stream"
        : integration === "Grunt"
        ? "grunt-webpack"
        : integration === "Karma"
        ? "karma-webpack"
        : integration === "Mocha"
        ? "mocha-webpack"
        : parseString("")
    );
}

function setImageExtensions(loaderType: string, staticLoader: staticLoader) {
  const type =
    loaderType === ".gif"
      ? { extension: "gif", option: `gifsicle: { interlaced: false }` }
      : loaderType === ".jpeg"
      ? { extension: "jpeg", option: `mozjpeg: { progressive: true }` }
      : loaderType === ".jpg"
      ? { extension: "jpg" }
      : loaderType === ".png"
      ? { extension: "png", option: `optipng: { enabled: false }` }
      : loaderType === ".webp"
      ? { extension: "webp", option: `webp: { quality: 85 }` }
      : loaderType === ".svg"
      ? { extension: "svg", option: `svgo: {  }` }
      : {};

  return `{
      test: ${setInExpression(type.extension)},
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

function setFontsExtensions(
  loaderType: fontsExtensions,
  staticLoader: staticLoader,
  fontsDir: string
) {
  const type =
    loaderType === ".eot"
      ? `.eot`
      : loaderType === ".otf"
      ? `.otf`
      : loaderType === ".svg"
      ? `.svg`
      : loaderType === ".ttf"
      ? `.ttf`
      : loaderType === ".woff"
      ? `.woff`
      : parseString("");

  return `
    {
      test: ${setInExpression(type)},
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

function setNodeModules() {
    `
    {
      test: /\.node$/,
      loader: "node-loader",
      options: {
        name: "[path][name].[ext]"
      }
    },
  ` 
}

function setLuaLoader(options: luaOptions): string {
  return `
    {
      test: /\.lua$/,
      use: [{ loader: "fengari-loader", options: { strip: ${options.strip} } }]
    },
  `
}

function setElmLoader(options: elmOptions): string {
  return `
    {
      test: /\.elm$/,
      exclude: [/elm-stuff/, /node_modules/],
      use: {
        loader: 'elm-webpack-loader',
        options: {
          optimize: ${options.optimize},
          debug: ${options.debug},
          runtimeOptions: [${options.runtimeOptions.join(", ")}],
          files: [${options.files.join(", ")}]
        }
      }
    },
  `
}

function setTwigLoader(): string {
  return `
    {
      test: /\.twig$/,
      use: {
        loader: 'twig-loader'
      }
    },
  `
}

function setCoffeeScript() {
  return `
      {
        test: /\.coffee$/,
        loader: "coffee-loader",
      },`;
}

function setXmlLoader() {
  return `
      { 
        test: /\.xml$/, 
        loader: 'xml-loader' 
      },`;
}

function setYamlLoader() {
  return `
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      }`;
}

function setCsvLoader() {
  return `
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }`;
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
  parseCssLoaders,
  parseHtmlLoaders,
  setCoffeeScript,
  parseIntegration,
  setXmlLoader,
  setElmLoader,
  setLuaLoader,
  setTwigLoader,
  setYamlLoader,
  setNodeModules,
  setCsvLoader,
  setStaticLoader,
  setImageExtensions,
  setFontsExtensions,
};
