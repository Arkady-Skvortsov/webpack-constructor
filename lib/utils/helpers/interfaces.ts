import { version } from "./types";

interface webpackConfig {
  devMode: "production" | "development";
  context: string;
  entryPoint: string;
  aliasPath: string;
  htmlTemplate?: string;
  htmlTitle?: string;
  LintTypescriptFilesPath?: string;
  tslintFilePath?: string;
  outputFolder: string;
  devPort: number;
  watchFiles: string;
}

export { webpackConfig };
