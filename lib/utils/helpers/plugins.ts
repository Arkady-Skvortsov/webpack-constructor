import { webpackMode } from "./types";
import { setScriptFiles } from "../webpack-set.content";
import { webpackConfig } from "./interfaces";
import { preset } from "./enum";
import { parseString } from "../text";

function setWebpackNotifierPlugin(mode: webpackMode) {
  return mode === "production"
    ? parseString("")
    : `
new WebpackNotifierPlugin({
  title: 'Webpack', 
  emoji: true, 
  alwaysNotify: true
})`;
}

function LinterChoose(lang: preset, options: webpackConfig) {
  return lang === "Typescript"
    ? `new TsLintPlugin({
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
