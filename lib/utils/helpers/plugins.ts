import { webpackMode } from "./types";
import { setScriptFiles } from "../webpack-set.content";
import { webpackConfig } from "./interfaces";
import { preset } from "./enum";

const setWebpackNotifierPlugin = (mode: webpackMode) =>
  mode === "production"
    ? null
    : mode === "development"
    ? `
new WebpackNotifierPlugin({
  title: 'Webpack', 
  emoji: true, 
  alwaysNotify: true
})`
    : null;

const LinterChoose = (lang: preset, options: webpackConfig) =>
  lang === "Typescript"
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

export { setWebpackNotifierPlugin, LinterChoose };
