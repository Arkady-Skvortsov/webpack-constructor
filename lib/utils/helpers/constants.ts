import { preset } from "./enum";

const whitespace = new RegExp(/^.+\s.+$/, "g");

const generateConstants = (presetType: preset) => {
  const constants =
    presetType === "Typescript"
      ? ("const TsLintPlugin = require('tslint-webpack-plugin');\n".split(""),
        "const WebpackNotifierPlugin = require('workbox-webpack-plugin');".split(
          ""
        ))
      : presetType === "Javascript"
      ? "const WebpackNotifierPlugin = require('workbox-webpack-plugin');".split(
          ""
        )
      : presetType === "Vue"
      ? "const { VueLoaderPlugin } = require('vue-loader/lib/plugin');\n".split(
          ""
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
const ESLintPlugin = require('eslint-webpack-plugin');
${constants}
`;
};

export { generateConstants, whitespace };
