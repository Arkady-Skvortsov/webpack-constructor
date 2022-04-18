import { setCSSRuleUse } from "../dev-mode";
import { parseString } from "../text";
import { setInExpression } from "./expression";
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
                        : parseString("");
}
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
      use: [${setCSSRuleUse(devMode, presetType)}, "css-loader", "${type.loader}"]
    }
  `;
}
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
}
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
function setCoffeeScript(response) {
    return response === "Yes"
        ? `{
        test: /\.coffee$/,
        loader: "coffee-loader",
       },`
        : parseString("");
}
function setXmlLoader(response) {
    return response === "Yes"
        ? `{ 
        test: /\.xml$/, 
        loader: 'xml-loader' 
       },`
        : parseString("");
}
function setYamlLoader(response) {
    return response === "Yes"
        ? `{
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      }`
        : parseString("");
}
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
        : parseString("");
}
function setStaticLoader(loader) {
    return loader === "file-loader"
        ? `file-loader`
        : loader === "raw-loader"
            ? `raw-loader`
            : loader === "url-loader"
                ? `url-loader`
                : parseString("");
}
export { langLoader, setCssPreprocessorLoader, setHtmlLoader, setCoffeeScript, setXmlLoader, setYamlLoader, setCsvLoader, setStaticLoader, setImageExtensions, setFontsExtensions, };
//# sourceMappingURL=loaders.js.map