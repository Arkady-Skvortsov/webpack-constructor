import { parseString } from "../text";
import { preset } from "./enum";
import { stringParser } from "./parser";

const whitespace = new RegExp(/^.+\s.+$/, "g");

function generateConstants(presetType: preset) {
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

  return `
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerWebpackPlugin = require('html-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-nofitier');
${constants}
`;
}

export { generateConstants, whitespace };
