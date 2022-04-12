import { parseString } from "../text";
import { preset } from "./enum";
import { cssLoader, htmlLoader } from "./types";

function langLoader(presetType: preset) {
  return presetType === "Typescript"
    ? `{
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    `
    : presetType === "Javascript"
    ? `
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: ["@babel/preset-env"]
        },
      },
    `
    : presetType === "Vue"
    ? `
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: "vue-loader",
      },
    `
    : presetType === "React"
    ? `
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: ["@babel/preset-env", "@babel/preset-react"]
        },
      },
    `
    : presetType === "Svelte"
    ? `
      {
        test: /\.(html|svelte)$/,
        use: 'svelte-loader'
      },
    `
    : parseString("");
}

function setCssPreprocessorLoader(loaderType: cssLoader) {
  return loaderType === "(Sass/Scss)"
    ? `sass-loader`
    : loaderType === "Less"
    ? `less-loader`
    : loaderType === "PostCss"
    ? `postcss-loader`
    : loaderType === "Stylus"
    ? `stylus-loader`
    : parseString("");
}

function setHtmlLoader(loaderType: htmlLoader) {
  return loaderType === "ejs"
    ? `
    {
      test: /\.ejs$/,
      use: ["ejs-loader"]
    }
    `
    : loaderType === "hbs"
    ? `
    { 
      test: /\.hbs|handlebars$/, 
      use: ["handlebars-loader"] 
    }
    `
    : loaderType === "pug"
    ? `
    { 
      test: /\.pug$/, 
      use: ["pug-loader"]
    }
    `
    : `
    {
      test: /\.html$/,
      use: ["html-loader"]
    }
    `;
}

export { langLoader, setCssPreprocessorLoader, setHtmlLoader };
