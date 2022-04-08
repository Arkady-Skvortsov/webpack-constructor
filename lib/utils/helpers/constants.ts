import { preset } from "./enum";
import { stringParser } from "./parser";

const whitespace = new RegExp(/^.+\s.+$/, "g");

const generateConstants = (presetType: preset) => {
  const constants =
    presetType === "Typescript"
      ? (stringParser('const TsLintPlugin = require("tslint-webpack-plugin")'),
        stringParser(
          'const WebpackNotifierPlugin = require("workbox-webpack-plugin")'
        ))
      : presetType === "Javascript"
      ? (stringParser(
          'const WebpackNotifierPlugin = require("workbox-webpack-plugin")'
        ),
        stringParser('const ESLintPlugin = require("eslint-webpack-plugin")'))
      : presetType === "Vue"
      ? stringParser(
          'const { VueLoaderPlugin } = require("vue-loader/lib/plugin")'
        )
      : presetType === "React"
      ? null
      : presetType === "Svelte"
      ? null
      : null;

  return `
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerWebpackPlugin = require('html-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-nofitier');
${constants}
`;
};

export { generateConstants, whitespace };
