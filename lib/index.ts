#!/usr/bin/env node

import * as fs from "fs";
import { execSync } from "child_process";
import chalk from "chalk";
import inquirer from "inquirer";
import * as gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

const promise = (ms = 5000) => new Promise((r) => setTimeout(r, ms));

const regExp = new RegExp(/^.+\s.+$/, "g");

type webpackOption = string | string[];
type splittingWebpack = "chunks Splitting" | "Code splitting";

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
}

enum configType {
  ESLINT = "Eslint",
  TSLINT = "Tslint",
  PRETTIER = "Prettier",
  BABEL = "Babel",
  JEST = "Jest",
}

enum preset {
  REACT = "React",
  VUE = "Vue",
  SVELTE = "Svelte",
  TYPESCRIPT = "Typescript",
  JAVASCRIPT = "Javascript",
}

async function start() {
  const webpackTitle = chalkAnimation.rainbow("Webpack-constructor \n");

  await promise(5000);

  return webpackTitle.stop();
}

function addSplitting(options: string) {
  if (options === "") {
  }
}

function addScriptsForPackageJson(filePath: string, presetOptions: preset) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const jsonContent = JSON.parse(content);
    let scripts = jsonContent["scripts"];

    scripts = {};

    scripts["webpack:build"] =
      "webpack build --config ./webpack.config.js --stats verbose";
    scripts["webpack:watch"] = "webpack --watch";
    scripts["webpack:start"] = "webpack serve --open";
    scripts["webpack:dev"] = "webpack-dev-server";

    fs.appendFileSync(filePath, JSON.stringify(scripts));
  } catch (e) {
    console.log(e);
  }
}

async function basicPreset() {
  await start();

  const basicChoose = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "Are you want a basic preset or you want to create a custom?",
    choices: ["Preset", "Custom"],
  });

  await basicSelect(basicChoose.question_1);
}

async function choosePreset() {
  const presetChoose = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: "What do you want to choose from presets?",
    choices: ["Vue", "React", "Svelte", "Typescript", "Javascript"],
  });

  await handleAnswer(presetChoose.question_2);
}

const deleteLine = (file: string) =>
  fs.readFile(file, "utf-8", (err, data) => {
    const changed = data.split("\n").slice(1).join("\n");

    fs.writeFileSync(file, changed);
  });

async function WebpackConfigOptions() {
  const contextPointWrite = await inquirer.prompt({
    name: "question_3",
    type: "input",
    message: "What is the context would be in Webpack config?",
  });

  const entryPointWrite = await inquirer.prompt({
    name: "question_4",
    type: "input",
    message: "What is the entry point(s) would be in webpack config ?",
  });

  const aliasPathWrite = await inquirer.prompt({
    name: "question_5",
    type: "input",
    message: "What is the alias(es) would be in webpack config ?",
  });

  const htmlTitle = await inquirer.prompt({
    name: "question_6",
    type: "input",
    message: "What is the title do you want in html page ?",
  });

  const htmlTemplatePath = await inquirer.prompt({
    name: "question_7",
    type: "input",
    message: "What is the html template would be in webpack config?",
  });

  const portWrite = await inquirer.prompt({
    name: "question_8",
    type: "input",
    message: "What is the port would be in Dev Server?",
  });

  const outputFolder = await inquirer.prompt({
    name: "question_9",
    type: "input",
    message: "What is the folder do you want that be an output?",
  });

  const lintTypeScriptFilesPath = await inquirer.prompt({
    name: "question_11",
    type: "input",
    message: "What is the path of you'r .ts file(s)?",
  });

  const tslintFilePath = await inquirer.prompt({
    name: "question_12",
    type: "input",
    message:
      "What is the path to you'r tslint.json file (default: ./tslint.json) ?",
    default: "./tslint.json",
  });

  const devMode = await inquirer.prompt({
    name: "question_13",
    type: "list",
    message: "What is the development mode do you want for webpack?",
    choices: ["production", "development"],
  });

  return addContent(preset.TYPESCRIPT, {
    devMode: devMode.question_13,
    context: contextPointWrite.question_3,
    entryPoint: entryPointWrite.question_4,
    aliasPath: aliasPathWrite.question_5,
    htmlTitle: htmlTitle.question_6,
    htmlTemplate: htmlTemplatePath.question_7,
    LintTypescriptFilesPath: lintTypeScriptFilesPath.question_11,
    tslintFilePath: tslintFilePath.question_12,
    outputFolder: outputFolder.question_9,
    devPort: portWrite.question_8,
  });
}

async function basicSelect(text: string) {
  if (text !== "Custom") choosePreset();
}

const sourceMaps = (mode: "production" | "development"): string =>
  mode === "development" ? "evel-source-map" : "source-maps";

async function spinner(text: string | preset) {
  const spnr = createSpinner(`Creating webpack config for ${text}`).start();

  await promise(5000);

  if (text !== "Custom")
    spnr.success({
      text: `Ok than, we would generated you a ${text} preset for Webpack)`,
    });
  else {
    spnr.success({
      text: "Ok than, we would generated a custom preset for you)",
    });
  }
}

async function handleAnswer(answer: string) {
  if (answer === "Vue") {
    await generateWebpackConfig(preset.VUE);
    process.exit(1);
  }

  if (answer === "React") {
    await generateWebpackConfig(preset.REACT);
    process.exit(1);
  }

  if (answer === "Svelte") {
    await generateWebpackConfig(preset.SVELTE);
    process.exit(1);
  }

  if (answer === "Typescript") {
    await generateWebpackConfig(preset.TYPESCRIPT);
    process.exit(1);
  }

  if (answer === "Javascript") {
    await generateWebpackConfig(preset.JAVASCRIPT);
    process.exit(1);
  }
}

const setScriptFiles = (file: string | any) =>
  regExp.test(file)
    ? `["${file
        .split(" ")
        .map((f: string) => `"${f}"`)
        .join(", ")}"]`
    : `"${file}"`;

const setEntryPoint = (entrypoint: string | any) =>
  regExp.test(entrypoint)
    ? `[${entrypoint
        .split(" ")
        .map((entry: string) => `"${entry}"`)
        .join(", ")}]`
    : `{main: "${entrypoint}"}`;

const aliasChecked = () => new RegExp(/\*.ts/g);

const setAlias = (alias: string | any) => {
  return regExp.test(alias)
    ? alias
        .split(" ")
        .map(
          (ar: string) =>
            `"@/${ar.substring(
              ar.lastIndexOf("/") + 1,
              ar.length
            )}": path.resolve(__dirname, "${ar}")`
        )
        .join(", ")
    : `"@/${alias.substring(
        alias.lastIndexOf("/") + 1,
        alias.length
      )}": path.resolve(__dirname, "${alias}")`;
};

function addContent(type: preset, options: webpackConfig): string {
  let content;

  if (type === "Vue") {
  }

  if (type === "React") {
  }

  if (type === "Svelte") {
  }

  if (type === "Typescript") {
    content = `
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlMinimizerWebpackPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const TsLintPlugin = require("tslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "${options.context}"),
  mode: "${options.devMode}",
  entry: ${setEntryPoint(options.entryPoint)},
  devtool: "${sourceMaps(options.devMode)}",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.s(a|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 85,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      ${setAlias(options.aliasPath)}
    },
    extensions: [
      ".ts",
      ".html",
      ".sass",
      ".scss",
      ".css",
      ".png",
      ".jpg",
      ".jpeg",
      ".webp",
    ],
    symlinks: false,
    cacheWithContext: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "${options.htmlTitle}",
      template: "${options.htmlTemplate}",
      minify: {
        collapseWhiteSpaces: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new TSLintPlugin({
      files: [${setScriptFiles(options.LintTypescriptFilesPath)}],
      project: "${options.tslintFilePath}",
      warningsAsError: true
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      maxInitialRequest: Infinity,
      minsize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageTitle = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            return 'npm.' + packageTitle.replace('@', '');
          }
        }
      }
    },
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: { level: 2, parallel: true },
      }),
      new TerserPlugin({
        parallel: 3,
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "${options.outputFolder}"),
  },
  devServer: {
    port: ${options.devPort},
    compress: true,
  },
};`;
  }
  return content as string;
}

function createHelpedFiles(presetType: preset) {
  if (presetType === "Javascript") {
    insertInConfig(configType.ESLINT, ``);
    insertInConfig(configType.BABEL, ``);
    insertInConfig(configType.JEST, ``);
    insertInConfig(configType.PRETTIER, ``);
  }

  if (presetType === "Typescript") {
    insertInConfig(
      configType.TSLINT,
      `
{
    "defaultSeverity": "error",
    "extends": [
      "tslint:all",
      "tslint-config-prettier",
      "tslint-plugin-prettier"
    ],
    "jsRules": {},
    "rules": {
       "prettier": true,
  "cyclomatic-complexity": false,
  "increment-decrement": false,
  "newline-before-return": false,
  "no-parameter-properties": false,
  "no-parameter-reassignment": false,
  "no-unused-variable": false,
  "typedef": false,
  "unnecessary-else": false,
  "comment-format": {
    "options": [
      "check-space"
    ]
  },
  "member-access": true,
  "only-arrow-functions": {
    "options": [
      "allow-declarations",
      "allow-named-functions"
    ]
  },
  "completed-docs": false,
  "no-any": true,
  "no-magic-numbers": true,
  "no-non-null-assertion": false,
  "no-null-keyword": false,
  "no-require-imports": false,
  "no-unbound-method": false,
  "no-unnecessary-qualifier": false,
  "no-use-before-declare": false,
  "no-void-expression": false,
  "prefer-function-over-method": false,
  "strict-comparisons": false,
  "strict-type-predicates": false,
  "triple-equals": {
    "options": [
      "allow-undefined-check"
    ]
  },
  "ban": {
    "options": [
      [
        "describe",
        "only"
      ],
      [
        "it",
        "only"
      ]
    ]
  },
  "interface-name": false,
  "file-header": {
    "options": [
      "Copyright \\\d{4} Palantir Technologies, Inc."
    ]
  },
  "max-classes-per-file": false,
  "member-ordering": {
    "options": {
      "order": "statics-first"
    }
  },
  "no-console": {
    "options": [
      "log"
    ]
  },
  "no-switch-case-fall-through": true,
  "strict-boolean-expressions": {
    "options": [
      "allow-boolean-or-undefined"
    ]
  },
      "switch-default": false,
      "variable-name": {
        "options": [
          "ban-keywords",
          "check-format",
          "allow-leading-underscore",
          "allow-pascal-case"
        ]
      },
      "linebreak-style": false
    },
    "rulesDirectory": []
}`
    );
    insertInConfig(
      configType.PRETTIER,
      `
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 80
}
      `
    );
    insertInConfig(
      configType.BABEL,
      `
{
  "presets": ["@babel/preset-env", "@babel/typescript"]
}
      `
    );
    insertInConfig(
      configType.JEST,
      `
module.exports = { 
  preset: 'ts-jest', 
  testEnvironment: true 
}
      `
    );
  }
}

async function installPackages(presetType: preset) {
  let installationSpinner = createSpinner(
    "Install packages for Typescript"
  ).start();

  if (presetType === "React") {
    execSync("npm i");
    execSync("npm i");
  }

  if (presetType === "Vue") {
    execSync("");
    execSync("");
  }

  if (presetType === "Svelte") {
    execSync("");
    execSync("");
  }

  if (presetType === "Typescript") {
    await promise(5000);

    execSync("npm i webpack webpack-cli webpack-dev-server");
    execSync(
      "npm i -D ts-loader typescript file-loader @babel/core @babel/preset-env @babel/preset-typescript css-loader sass-loader @types/webpack html-webpack-plugin css-minimizer-webpack-plugin clean-webpack-plugin image-webpack-loader imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin terser-webpack-plugin tslint tslint-webpack-plugin"
    );

    installationSpinner.success({
      text: "Packages for Typescript had been installed",
    });
  }

  if (presetType === "Javascript") {
    execSync("npm i webpack webpack-cli webpack-dev-server");
    execSync(
      "npm i -D file-loader @babel/core @babel/preset-env babel-loader css-loader sass-loader @types/webpack html-webpack-plugin css-minimizer-webpack-plugin clean-webpack-plugin image-webpack-loader imagemin-loader imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin terser-webpack-plugin"
    );
  }
}

function insertInConfig(type: configType, content: string) {
  try {
    if (type === "Tslint") {
      fs.writeFileSync("tslint.json", content);
      deleteLine("tslint.json");
    }

    if (type === "Eslint") {
      fs.writeFileSync("eslint.json", content);
      deleteLine("eslint.json");
    }

    if (type === "Prettier") {
      fs.writeFileSync(".prettierrc", content);
      deleteLine(".prettierrc");
    }

    if (type === "Babel") {
      fs.writeFileSync(".babelrc", content);
      deleteLine(".babelrc");
    }

    if (type === "Jest") {
      fs.writeFileSync("jest.config.js", content);
      deleteLine("jest.config.js");
    }
  } catch (e) {
    console.log(e);
  }
}

async function generateWebpackConfig(type: preset) {
  try {
    if (type === preset.TYPESCRIPT) {
      await installPackages(preset.TYPESCRIPT);

      fs.writeFileSync("webpack.config.js", await WebpackConfigOptions());

      createHelpedFiles(preset.TYPESCRIPT);

      deleteLine("./webpack.config.js");
      deleteLine("./tslint.json");
      deleteLine("./.prettierrc");
      deleteLine("./jest.config.js");
      deleteLine("./.babelrc");

      addScriptsForPackageJson("./package.json", preset.TYPESCRIPT);

      return figletText(preset.TYPESCRIPT);
    }

    if (type === preset.JAVASCRIPT) {
      await installPackages(preset.JAVASCRIPT);

      fs.writeFileSync("webpack.config.js", await WebpackConfigOptions());

      createHelpedFiles(preset.JAVASCRIPT);

      deleteLine("eslint.json");
      deleteLine(".prettierrc");
      deleteLine(".babelrc");
      deleteLine("jest.config.js");
      deleteLine("webpack.config.js");

      addScriptsForPackageJson("./package.json", preset.JAVASCRIPT);
    }
  } catch (e) {
    console.log(e);
  }
}

async function figletText(preset: preset) {
  console.clear();

  figlet(
    "Webpack Typescript config had been generated like you wanted, use it like you want))",
    (err, data) => {
      console.log(gradient.passion.multiline(data));
    }
  );
}

basicPreset();
