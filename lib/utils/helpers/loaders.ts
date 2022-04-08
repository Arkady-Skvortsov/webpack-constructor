import { preset } from "./enum";
import { cssLoader } from "./types";

const langLoader = (presetType: preset) =>
  presetType === "Typescript"
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
    : null;

const setCssPreprocessorLoader = (loaderType: cssLoader) =>
  loaderType === "(Sass/Scss)"
    ? `sass-loader`
    : loaderType === "Less"
    ? `less-loader`
    : loaderType === "PostCss"
    ? ``
    : loaderType === "Stylus"
    ? ``
    : null;

const setHtmlLoader = () => {};

export { langLoader };
