import inquirer from "inquirer";
import { version, webpackConfigType, webpackMode } from "./helpers/types";
import { start } from "./start";
import { preset } from "./helpers/enum";
import { generateWebpackConfig } from "./webpack-set.content";
import { addContentToPreset } from "./add-content-preset";
import { setMainExtension } from "./helpers/main-extension";
import { generateExtensions } from "./helpers/extensions";

async function basicSelect(text: webpackConfigType) {
  return text !== "Custom" ? choosePreset() : customChoose();
}

async function firstChoose() {
  await start();

  const basicChoose = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "Are you want a basic preset or you want to create a custom?",
    choices: ["Preset", "Custom"],
  });

  await basicSelect(basicChoose.question_1);
}

async function customChoose() {}

async function choosePreset() {
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
    ? await inquirer.prompt({
        name: "question_12",
        type: "input",
        message:
          "What is the path to you'r tslint.json file (default: ./tslint.json)?",
        default: "./tslint.json",
      })
    : void 0;
}

async function checkPresetFrameworkConfig(preset: preset) {
  return preset !== "Javascript" ?? preset !== "Typescript"
    ? await inquirer.prompt({
        name: "question_12",
        type: "list",
        message: "What is the language you want to select for that framework ?",
        choices: ["Javascript", "Typescript"],
      })
    : preset === "Typescript"
    ? await checkPresetTsConfig(preset)
    : void 0;
}

async function checkPresetHTML(preset: preset, text: any) {
  return preset !== "Vue" ?? preset !== "React"
    ? (await inquirer.prompt({
        name: "question_6",
        type: "input",
        message:
          "What is the title do you want in html page (example: Hello world) ?",
        default: "Hello world",
      }),
      await inquirer.prompt({
        name: "question_7",
        type: "input",
        message: `What is the html template would be in webpack config (example: ${text}/main.html) ?`,
      }))
    : void 0;
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

  await checkPresetHTML(presetType, contextPointWrite.question_3);

  await checkPresetFrameworkConfig(presetType);

  await checkPresetTsConfig(presetType);

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
    outputFolder: outputFolder.question_9,
    watchFiles: watchFilesPath.question_13,
    devMode: mode,
  });

  // htmlTitle: htmlTitle.question_6,
  // htmlTemplate: htmlTemplatePath.question_7,
  // LintTypescriptFilePath: ,
  // tslintFilePath: ,
}

export { firstChoose, customChoose, WebpackConfigOptions };
