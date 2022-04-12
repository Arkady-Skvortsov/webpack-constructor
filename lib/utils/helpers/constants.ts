import { parseString } from "../text";
import { preset } from "./enum";
import { stringParser } from "./parser";
import { webpackMode } from "./types";

const whitespace = new RegExp(/^.+\s.+$/, "g");

function generateConstants(presetType: preset, mode: webpackMode) {
  const constants =
    presetType === "Typescript"
      ? stringParser('const TsLintPlugin = require("tslint-webpack-plugin")')
      : presetType === "Javascript"
      ? stringParser('const ESLintPlugin = require("eslint-webpack-plugin")')
      : presetType === "Vue"
      ? stringParser(
          'const { VueLoaderPlugin } = require("vue-loader/lib/plugin")'
        )
      : presetType === "React"
      ? parseString("")
      : presetType === "Svelte"
      ? parseString("")
      : parseString("");

  const modeConstants =
    mode === "production"
      ? (stringParser(
          "const HtmlMinimizerWebpackPlugin = require('html-minimizer-webpack-plugin');"
        ),
        stringParser(
          "const MiniCssExtractPlugin = require('mini-css-extract-plugin');"
        ),
        stringParser(
          "const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');"
        ),
        stringParser("const TerserPlugin = require('terser-webpack-plugin');"))
      : stringParser(
          "const WebpackNotifierPlugin = require('webpack-notifier');"
        );

  return `
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
${modeConstants}
${constants}
`;
}

export { generateConstants, whitespace };
