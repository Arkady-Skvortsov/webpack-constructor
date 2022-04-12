"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whitespace = exports.generateConstants = void 0;
var text_1 = require("../text");
var parser_1 = require("./parser");
var whitespace = new RegExp(/^.+\s.+$/, "g");
exports.whitespace = whitespace;
function generateConstants(presetType) {
    var constants = presetType === "Typescript"
        ? (0, parser_1.stringParser)('const TsLintPlugin = require("tslint-webpack-plugin")')
        : presetType === "Javascript"
            ? (0, parser_1.stringParser)('const ESLintPlugin = require("eslint-webpack-plugin")')
            : presetType === "Vue"
                ? (0, parser_1.stringParser)('const { VueLoaderPlugin } = require("vue-loader/lib/plugin")')
                : presetType === "React"
                    ? (0, text_1.parseString)("")
                    : presetType === "Svelte"
                        ? (0, text_1.parseString)("")
                        : (0, text_1.parseString)("");
    return "\nconst path = require(\"path\");\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst HtmlMinimizerWebpackPlugin = require('html-minimizer-webpack-plugin');\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\nconst CssMinimizerPlugin = require('css-minimizer-webpack-plugin');\nconst TerserPlugin = require('terser-webpack-plugin');\nconst { CleanWebpackPlugin } = require('clean-webpack-plugin');\nconst WebpackNotifierPlugin = require('webpack-nofitier');\n".concat(constants, "\n");
}
exports.generateConstants = generateConstants;
//# sourceMappingURL=constants.js.map