import inquirer from "inquirer";
import { webpackConfigType } from "./helpers/types";
import { start } from "./start";
import { preset } from "./helpers/enum";
import { generateWebpackConfig } from "./webpack-set.content";

const basicSelect = async (text: webpackConfigType) =>
  text !== "Custom" ? choosePreset() : customChoose();

const firstChoose = async () => {
  await start();

  const basicChoose = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "Are you want a basic preset or you want to create a custom?",
    choices: ["Preset", "Custom"],
  });

  await basicSelect(basicChoose.question_1);
};

const customChoose = async () => {};

const choosePreset = async () => {
  const presetChoose = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: "What do you want to choose from presets?",
    choices: ["Vue", "React", "Svelte", "Typescript", "Javascript"],
  });

  await handleAnswer(presetChoose.question_2);
};

const handleAnswer = async (presetOptions: preset) => {
  await generateWebpackConfig(presetOptions);
  process.exit(1);
};

export { firstChoose, customChoose };
