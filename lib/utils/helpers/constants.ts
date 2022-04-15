import { parseString } from "../text";
import { preset } from "./enum";
import { stringParser } from "./parser";
import { webpackMode } from "./types";

const whitespace = new RegExp(/^.+\s.+$/, "g");
const extensions = new RegExp(/\.(js|ts|tsx|jsx|svelte|vue|sass|scss|)$/, "g");

function generateConstants(presetType: preset, mode: webpackMode) {
  const constants =
    presetType === "Typescript"
      ? stringParser(`const TsLintPlugin = require("tslint-webpack-plugin")`)
      : presetType === "Javascript"
      ? stringParser(`const ESLintPlugin = require("eslint-webpack-plugin")`)
      : presetType === "Vue"
      ? stringParser(
          `const { VueLoaderPlugin } = require("vue-loader/lib/plugin")`
        )
      : presetType === "React"
      ? parseString("")
      : presetType === "Svelte"
      ? parseString("")
      : parseString("");

  const htmlWebpackPluginConstant = ["Typescript", "Javascript"].some(
    (value) => value === presetType
  )
    ? parseString(`const HtmlWebpackPlugin = require("html-webpack-plugin");`)
    : parseString("");

  const modeConstants =
    mode === "production" &&
    ["Svelte", "Vue", "React"].some((value) => value !== presetType)
      ? stringParser(
          "const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');\n const MiniCssExtractPlugin = require('mini-css-extract-plugin');\n const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');\n const TerserPlugin = require('terser-webpack-plugin');\n"
        )
      : stringParser(
          `const WebpackNotifierPlugin = require('webpack-notifier');`
        );

  return `
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
${htmlWebpackPluginConstant}
${modeConstants}
${constants}
  `;
}

export { generateConstants, whitespace, extensions };
