type webpackOption = string | string[];
type splittingWebpack = "chunks Splitting" | "Code Splitting";
type webpackConfigType = "Preset" | "Custom";
type webpackMode = "production" | "development";
type linterChoose = "Typescript" | "Javascript";
type cssLoader = "(Sass/Scss)" | "Less" | "Stylus" | "PostCss";
type htmlLoader = "hbs" | "ejs" | "pug" | "jade";
type version = 4 | 5;

export {
  webpackOption,
  splittingWebpack,
  webpackConfigType,
  webpackMode,
  linterChoose,
  cssLoader,
  htmlLoader,
  version,
};
