type webpackOption = string | string[];
type splittingWebpack = "chunks Splitting" | "Code Splitting";
type webpackConfigType = "preset" | "custom";
type webpackMode = "production" | "development";
type linterChoose = "Typescript" | "Javascript";
type cssLoader = "(Sass/Scss)" | "Less" | "Stylus" | "PostCss";
type htmlLoader = "hbs" | "ejs" | "pug" | "jade" | "usually";

export {
  webpackOption,
  splittingWebpack,
  webpackConfigType,
  webpackMode,
  linterChoose,
  cssLoader,
  htmlLoader,
};
