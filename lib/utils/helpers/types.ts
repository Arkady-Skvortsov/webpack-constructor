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
type htmlLoader = "Pug" | "Jade" | "EJS" | "HandleBars" | "PostHTML";
type imageExtensions = ".png" | ".jpeg" | ".jpg" | ".svg" | ".gif" | ".webp";
type fontsExtensions = ".woff" | ".ttf" | ".eot" | ".svg" | ".otf";
type cacheType = "memory" | "filesystem";
type cacheCompression = compressionAlgorithm | "brotli" | false;
type bundleAnalyzerMode = "server" | "static" | "json" | "disabled";
type bundleAnalyzerDefaultSizes = "stat" | "parsed" | "gzip";
type bundleAnalyzerLogLevel = "info" | "warn" | "error" | "silent";
type version = 4 | 5;
type splitChunkType = "async" | "initial" | "all";

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
  bundleAnalyzerDefaultSizes,
  bundleAnalyzerLogLevel,
  bundleAnalyzerMode,
  fontsExtensions,
  compressionAlgorithm,
  integrationWebpack,
  splitChunkType,
  cacheType,
  cacheCompression,
};
