import { webpackMode } from "./types";
import { setScriptFiles } from "../webpack-set.content";
import { webpackConfig } from "./interfaces";
import { preset } from "./enum";

function setWebpackNotifierPlugin(mode: webpackMode) {
  return mode === "production"
    ? false
    : mode === "development"
    ? `
new WebpackNotifierPlugin({
  title: 'Webpack', 
  emoji: true, 
  alwaysNotify: true
})`
    : false;
}

function LinterChoose(lang: preset, options: webpackConfig) {
  return lang === "Typescript"
    ? `
new TSLintPlugin({
  files: [${setScriptFiles(options.LintTypescriptFilesPath)}],
  project: "${options.tslintFilePath}",
  warningsAsError: true
}),`
    : `
new ESLintPlugin({
  failOnError: true,
  failOnWarning: false,
  emitError: true,
  emitWarning: true,
}),`;
}

export { setWebpackNotifierPlugin, LinterChoose };
