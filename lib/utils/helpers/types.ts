type webpackOption = string | string[];
type splittingWebpack = "chunks Splitting" | "Code Splitting";
type webpackConfigType = "Preset" | "Custom";
type webpackMode = "production" | "development";
type linterChoose = "Typescript" | "Javascript";
type basicTypes = "Preset" | "Custom";
type compressionAlgorithm = "gzip";
type questionResponse = "Yes" | "No";
type integrationWebpack = "Grunt" | "Gulp" | "Mocha" | "Karma";
type staticLoader = "file-loader" | "url-loader" | "raw-loader";
type cssLoader = "(Sass/Scss)" | "Less" | "Stylus" | "PostCss";
type htmlLoader = "Pug" | "Jade" | "EJS" | "HandleBars";
type imageExtensions = ".png" | ".jpeg" | ".jpg" | ".svg" | ".gif" | ".webp";
type fontsExtensions = ".woff" | ".ttf" | ".eot" | ".svg" | ".otf";
type version = 4 | 5;

export {
  webpackOption,
  splittingWebpack,
  webpackConfigType,
  webpackMode,
  linterChoose,
  cssLoader,
  staticLoader,
  htmlLoader,
  version,
  basicTypes,
  questionResponse,
  imageExtensions,
  fontsExtensions,
  compressionAlgorithm,
  integrationWebpack,
};
