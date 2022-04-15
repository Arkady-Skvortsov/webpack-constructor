import inquirer from "inquirer";
import {
  basicTypes,
  version,
  webpackConfigType,
  webpackMode,
} from "./helpers/types";
import { start } from "./start";
import { preset } from "./helpers/enum";
import { generateWebpackConfig } from "./webpack-set.content";
import { addContentToPreset } from "./add-content-preset";
import { setMainExtension } from "./helpers/main-extension";
import { generateExtensions } from "./helpers/extensions";
import {
  contextAnswer,
  cssPreprocessors,
  entryPointsAnswer,
  htmlPreprocessorsAnswer,
  imageExtensions,
  isCssPreprocessorsAnswer,
  isHtmlPreprocessorAnswer,
  isImageExtensionAnswer,
  supportFromCoffeScriptAnswer,
} from "./answers";

async function firstChoose() {
  await start();

  const basicChoose = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "Are you want a basic preset or you want to create a custom?",
    choices: ["Preset", "Custom"],
  });

  await choosePreset(basicChoose.question_1);
}

async function choosePreset(type: basicTypes) {
  const presetChoose = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: "What do you want to choose from presets?",
    choices: ["Vue", "React", "Svelte", "Typescript", "Javascript"],
  });

  const webpackVersion = await inquirer.prompt({
    name: "question_3",
    type: "list",
    message: "What is the version of webpack do you want to use?",
    choices: ["4", "5"],
  });

  const webpackMode = await inquirer.prompt({
    name: "question_4",
    type: "list",
    message: "What is the development mode do you want for webpack ?",
    choices: ["development", "production"],
  });

  await handleAnswer(
    presetChoose.question_2,
    webpackMode.question_4,
    webpackVersion.question_3
  );
}

async function handleAnswer(
  presetOptions: preset,
  mode: webpackMode,
  webpackVersion: version
) {
  await generateWebpackConfig(presetOptions, mode, webpackVersion);
  process.exit(1);
}

async function checkPresetTsConfig(preset: preset) {
  return preset === "Typescript"
    ? {
        tslintFilePath: await inquirer.prompt({
          name: "question_12",
          type: "input",
          message:
            "What is the path to you'r tslint.json file (default: ./tslint.json)?",
          default: "./tslint.json",
        }),
      }
    : void 0;
}

async function checkPresetFrameworkConfig(preset: preset) {
  return ["Javascript", "Typescript"].some((value) => value !== preset)
    ? {
        LintTypescriptFilesPath: await inquirer.prompt({
          name: "question_12",
          type: "list",
          message:
            "What is the language you want to select for that framework ?",
          choices: ["Javascript", "Typescript"],
        }),
      }
    : preset === "Typescript"
    ? await checkPresetTsConfig(preset)
    : void 0;
}

async function checkPresetHTML(preset: preset, text: any) {
  return ["React", "Vue", "Svelte"].some((value) => value !== preset)
    ? {
        htmlTitle: await inquirer.prompt({
          name: "question_6",
          type: "input",
          message:
            "What is the title do you want in html page (example: Hello world) ?",
          default: "Hello world",
        }),
        htmlTemplate: await inquirer.prompt({
          name: "question_7",
          type: "input",
          message: `What is the html template would be in webpack config (example: ${text}/main.html) ?`,
        }),
      }
    : void 0;
}

async function WebpackConfigCustom(presetType: preset, mode: webpackMode) {
  const contextPintWrite = await contextAnswer();
  const entryPointWrite = await entryPointsAnswer(
    presetType,
    contextPintWrite.question_context
  );
  const supportCoffescript = await supportFromCoffeScriptAnswer();
  const isHtmlPreprocessor = await isHtmlPreprocessorAnswer();
  const htmlPreprocessors = await htmlPreprocessorsAnswer(
    isHtmlPreprocessor.question_is_html_preprocessor
  );
  const isCssPreprocessor = await isCssPreprocessorsAnswer();
  const cssPreprocessorsAnswer = await cssPreprocessors(
    isCssPreprocessor.question_is_css_preprocessor
  );
  const isImageExtension = await isImageExtensionAnswer();
  const imageExtensionsAnswer = await imageExtensions(
    isImageExtension.question_is_image_extensions
  );
}

async function WebpackConfigOptions(presetType: preset, mode: webpackMode) {
  const contextPointWrite = await inquirer.prompt({
    name: "question_3",
    type: "input",
    message:
      "What is the context would be in Webpack config (example: ./src) ?",
  });

  const entryPointWrite = await inquirer.prompt({
    name: "question_4",
    type: "input",
    message: `What is the entry point(s) would be in webpack config (example: ${
      contextPointWrite.question_3
    }/main${generateExtensions(presetType)}) ?`,
  });

  const aliasPathWrite = await inquirer.prompt({
    name: "question_5",
    type: "input",
    message: `What is the path for alias(es) would be in webpack config (example: ${contextPointWrite.question_3}/utils) ?`,
  });

  const portWrite = await inquirer.prompt({
    name: "question_8",
    type: "input",
    message: "What is the port would be in Dev Server (default: 3500) ?",
    default: 3500,
  });

  const outputFolder = await inquirer.prompt({
    name: "question_9",
    type: "input",
    message:
      "What is the folder do you want that be an output (example: ./dist) ?",
    default: "./dist",
  });

  const htmlPreset = await checkPresetHTML(
    presetType,
    contextPointWrite.question_3
  );

  const checkLangPreset = await checkPresetFrameworkConfig(presetType);

  const checkTsConfigPreset = await checkPresetTsConfig(presetType);

  const watchFilesPath = await inquirer.prompt({
    name: "question_13",
    type: "input",
    message: `What is the folder with files do you want to watch for changes with starting devServer (example: ${contextPointWrite.question_3}/html) ?`,
    default: `${contextPointWrite.question_3}/html`,
  });

  return addContentToPreset(presetType, {
    context: contextPointWrite.question_3,
    entryPoint: entryPointWrite.question_4,
    aliasPath: aliasPathWrite.question_5,
    devPort: portWrite.question_8,
    htmlTitle: htmlPreset?.htmlTitle.question_6,
    htmlTemplate: htmlPreset?.htmlTemplate.question_7,
    tslintFilePath: checkTsConfigPreset?.tslintFilePath.question_12,
    outputFolder: outputFolder.question_9,
    watchFiles: watchFilesPath.question_13,
    devMode: mode,
  });
}

export { firstChoose, WebpackConfigOptions };
