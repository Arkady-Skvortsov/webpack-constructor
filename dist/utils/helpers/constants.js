"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extensions = exports.whitespace = exports.generateConstants = void 0;
const text_1 = require("../text");
const parser_1 = require("./parser");
const whitespace = new RegExp(/^.+\s.+$/, "g");
exports.whitespace = whitespace;
const extensions = new RegExp(/\.(js|ts|tsx|jsx|svelte|vue|sass|scss|)$/, "g");
exports.extensions = extensions;
function generateConstants(presetType, mode) {
    const constants = presetType === "Typescript"
        ? (0, parser_1.stringParser)(`const TsLintPlugin = require("tslint-webpack-plugin")`)
        : presetType === "Javascript"
            ? (0, parser_1.stringParser)(`const ESLintPlugin = require("eslint-webpack-plugin")`)
            : presetType === "Vue"
                ? (0, parser_1.stringParser)(`const { VueLoaderPlugin } = require("vue-loader/lib/plugin")`)
                : presetType === "React"
                    ? (0, text_1.parseString)("")
                    : presetType === "Svelte"
                        ? (0, text_1.parseString)("")
                        : (0, text_1.parseString)("");
    const htmlWebpackPluginConstant = ["Typescript", "Javascript"].some((value) => value === presetType)
        ? (0, text_1.parseString)(`const HtmlWebpackPlugin = require("html-webpack-plugin");`)
        : (0, text_1.parseString)("");
    const modeConstants = mode === "production" &&
        ["Svelte", "Vue", "React"].some((value) => value !== presetType)
        ? (0, parser_1.stringParser)("const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');\n const MiniCssExtractPlugin = require('mini-css-extract-plugin');\n const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');\n const TerserPlugin = require('terser-webpack-plugin');\n")
        : (0, parser_1.stringParser)(`const WebpackNotifierPlugin = require('webpack-notifier');`);
    return `
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
${htmlWebpackPluginConstant}
${modeConstants}
${constants}
  `;
}
exports.generateConstants = generateConstants;
//# sourceMappingURL=constants.js.map