#!/usr/bin/env node

import * as fs from "fs";
import { execSync } from "child_process";
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import { generateConstants } from "./utils/helpers/constants";
import {
  LinterChoose,
  setWebpackNotifierPlugin,
} from "./utils/helpers/plugins";
import {
  setCSSRuleUse,
  optimizeProductionCSS,
  setCssPlugin,
  outputFileName,
  isSourceMaps,
  setWatchFiles,
} from "./utils/dev-mode";
import { langLoader } from "./utils/helpers/loaders";
import { promise } from "./utils/helpers/promise";

const regExp = new RegExp(/^.+\s.+$/, "g");

type webpackOption = string | string[];

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

enum preset {
  REACT = "React",
  VUE = "Vue",
  SVELTE = "Svelte",
  TYPESCRIPT = "Typescript",
  JAVASCRIPT = "Javascript",
}

async function start() {
  const webpackTitle = chalkAnimation.rainbow("Webpack-constructor\n");

  await promise(5000);

  return webpackTitle.stop();
}

function addScriptsForPackageJson(filePath: string, presetOptions: preset) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const jsonContent = JSON.parse(content);
    let scripts = jsonContent["scripts"];

    scripts = {
      "webpack:build":
        "webpack build --config ./webpack.config.js --mode development",
      "webpack:watch": "webpack --watch --config ./webpack.config.js",
      "webpack:start": "webpack serve --open",
      "webpack:dev": "webpack-dev-server",
      "webpack:run-pwa": "http-server ./dist",
    };

    fs.writeFileSync(filePath, JSON.stringify(scripts));
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
    message: "What is the entry point(s) would be in webpack config?",
  });

  const aliasPathWrite = await inquirer.prompt({
    name: "question_5",
    type: "input",
    message: "What is the alias(es) would be in webpack config?",
  });

  const htmlTitle = await inquirer.prompt({
    name: "question_6",
    type: "input",
    message: "What is the title do you want in html page?",
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
    default: 3500,
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
    default: contextPointWrite.question_3,
  });

  const tslintFilePath = await inquirer.prompt({
    name: "question_12",
    type: "input",
    message:
      "What is the path to you'r tslint.json file (default: ./tslint.json)?",
    default: "./tslint.json",
  });

  const devMode = await inquirer.prompt({
    name: "question_13",
    type: "list",
    message: "What is the development mode do you want for webpack?",
    choices: ["production", "development", "both"],
  });

  const watchFilesPath = await inquirer.prompt({
    name: "question_14",
    type: "input",
    message:
      "What is the files do you want to watch for changes with starting devServer?",
    default: contextPointWrite.question_3,
  });

  return addContent(preset.TYPESCRIPT, {
    context: contextPointWrite.question_3,
    entryPoint: entryPointWrite.question_4,
    aliasPath: aliasPathWrite.question_5,
    htmlTitle: htmlTitle.question_6,
    htmlTemplate: htmlTemplatePath.question_7,
    devPort: portWrite.question_8,
    outputFolder: outputFolder.question_9,
    LintTypescriptFilesPath: lintTypeScriptFilesPath.question_11,
    tslintFilePath: tslintFilePath.question_12,
    devMode: devMode.question_13,
    watchFiles: watchFilesPath.question_14,
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

const setAlias = (alias: string | any) =>
  regExp.test(alias)
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

function addContent(type: preset, options: webpackConfig): string {
  return `
${generateConstants(type)}
module.exports = {
  context: path.resolve(__dirname, "${options.context}"),
  mode: "${options.devMode}",
  entry: ${setEntryPoint(options.entryPoint)},
  devtool: "${sourceMaps(options.devMode)}",
  module: {
    rules: [
      ${langLoader(type)}
      {
        test: /\.s(a|c)ss$/,
        use: [${setCSSRuleUse(options.devMode)}, "css-loader", "sass-loader"],
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
      filename: "${options.htmlTemplate}",
      title: "${options.htmlTitle}",
      template: "${options.htmlTemplate}",
      minify: {
        collapseWhiteSpaces: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
    ${setCssPlugin(options.devMode, type)}
    ${LinterChoose(type, options)}
    new CleanWebpackPlugin(),
    ${setWebpackNotifierPlugin(options.devMode)}
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
      ${optimizeProductionCSS(options.devMode)}
      new HtmlMinimizerPlugin(),
      new TerserPlugin({
        parallel: 3,
        cache: true,
        sourceMap: ${isSourceMaps(options.devMode)},
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
    filename: "${outputFileName(options.devMode, "js")}",
    path: path.resolve(__dirname, "${options.outputFolder}"),
  },
  devServer: {
    port: ${options.devPort},
    compress: true,
    watchFiles: {
      paths: [${setWatchFiles(options.watchFiles)}],
      options: {
        usePolling: false,
      },
    },
  },
};`;
}

async function installPackages(presetType: preset) {
  let installationSpinner = createSpinner(
    `Install packages for ${presetType}`
  ).start();

  if (presetType === "React") {
    execSync(
      "npm i -D webpack webpack-cli webpack-dev-server css-loader node-sass file-loader typescript @types/webpack sass-loader babel-loader @babel/core @babel/preset-react css-minimizer-webpack-plugin clean-webpack-plugin node-sass image-webpack-loader imagemin-mozjpeg imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin tslint terser-webpack-plugin tslint-webpack-plugin uglify-js webpack-notifier copy-webpack-plugin"
    );
  }

  if (presetType === "Vue") {
    execSync(
      "npm i -D  webpack webpack-cli webpack-dev-server ts-loader typescript file-loader vue-loader vue-style-loader babel-loader css-loader sass-loader @types/webpack @babel/core @babel/preset-env @babel/preset-typescript css-minimizer-webpack-plugin clean-webpack-plugin node-sass image-webpack-loader imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin tslint terser-webpack-plugin tslint-webpack-plugin uglify-js vue-style-loader vue-server-renderer webpack-notifier copy-webpack-plugin"
    );
  }

  if (presetType === "Svelte") {
    execSync(
      "npm i -D  webpack webpack-cli webpack-dev-server ts-loader typescript file-loader svelter-loader css-loader sass-loader @types/webpack css-minimizer-webpack-plugin clean-webpack-plugin node-sass image-webpack-loader imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin webpack-notifier copy-webpack-plugin"
    );
  }

  if (presetType === "Typescript") {
    await promise(5000);

    execSync(
      "npm i -D  webpack webpack-cli webpack-dev-server ts-loader typescript file-loader css-loader sass-loader @types/webpack html-webpack-plugin css-minimizer-webpack-plugin clean-webpack-plugin node-sass image-webpack-loader imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin terser-webpack-plugin tslint tslint-webpack-plugin uglify-js workbox-webpack-plugin http-server webpack-notifier copy-webpack-plugin"
    );

    installationSpinner.success({
      text: "Packages for Typescript had been installed",
    });
  }

  if (presetType === "Javascript") {
    await promise(5000);

    execSync(
      "npm i -D webpack webpack-cli webpack-dev-server file-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-loader css-loader sass-loader @types/webpack html-webpack-plugin css-minimizer-webpack-plugin clean-webpack-plugin image-webpack-loader imagemin-loader imagemin-mozjpeg imagemin-pngquant imagemin-svgo mini-css-extract-plugin terser-webpack-plugin uglify-js workbox-webpack-plugin http-server webpack-notifier copy-webpack-plugin"
    );

    installationSpinner.success({
      text: "Packages for Javascript had been installed",
    });
  }
}

async function generateWebpackConfig(type: preset) {
  try {
    if (type === preset.TYPESCRIPT) {
      await installPackages(preset.TYPESCRIPT);

      fs.writeFileSync("webpack.config.js", await WebpackConfigOptions());

      deleteLine("webpack.config.js");

      addScriptsForPackageJson("./package.json", preset.TYPESCRIPT);

      await figletText(preset.TYPESCRIPT);
    }
  } catch (e) {
    console.log(e);
  }
}

async function figletText(preset: preset) {
  const animation = chalkAnimation.rainbow(
    `Webpack ${preset} config had been generated!\n`
  );

  await promise(10000);

  return animation.stop();
}

basicPreset();
