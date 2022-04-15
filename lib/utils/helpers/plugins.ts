import { webpackMode, webpackOption } from "./types";
import { setScriptFiles } from "../webpack-set.content";
import { webpackConfig } from "./interfaces";
import { preset } from "./enum";
import { parseString } from "../text";
import { outputFileName } from "../dev-mode";

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
    : `new ESLintPlugin({
        failOnError: true,
        failOnWarning: false,
        emitError: true,
        emitWarning: true,
      }),`;
}

function isHtmlWebpackPlugin(presetType: preset, options: webpackConfig) {
  return ["Typescript", "Javascript"].some((value) => value !== presetType)
    ? parseString(`
    new HtmlWebpackPlugin({
      filename: "${outputFileName(options.devMode, "html")}",
      title: "${options.htmlTitle}",
      template: "${options.htmlTemplate}",
      minify: {
        collapseWhiteSpaces: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),`)
    : parseString("");
}

export { setWebpackNotifierPlugin, LinterChoose, isHtmlWebpackPlugin };
