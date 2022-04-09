import { webpackOption } from "./types";

interface webpackConfig {
  devMode: "production" | "development";
  context: string;
  entryPoint: string;
  aliasPath: webpackOption;
  htmlTemplate: string;
  htmlTitle: string;
  LintTypescriptFilesPath: webpackOption;
  tslintFilePath: string;
  outputFolder: string;
  devPort: number;
  watchFiles: string;
}

export { webpackConfig };
