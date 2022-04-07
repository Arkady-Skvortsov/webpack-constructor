"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whitespace = exports.generateConstants = void 0;
var whitespace = new RegExp(/^.+\s.+$/, "g");
exports.whitespace = whitespace;
var generateConstants = function (presetType) {
    var constants = presetType === "Typescript"
        ? ("const TsLintPlugin = require('tslint-webpack-plugin');\n".split(""),
            "const WebpackNotifierPlugin = require('workbox-webpack-plugin');".split(""))
        : presetType === "Javascript"
            ? "const WebpackNotifierPlugin = require('workbox-webpack-plugin');".split("")
            : presetType === "Vue"
                ? "const { VueLoaderPlugin } = require('vue-loader/lib/plugin');\n".split("")
                : presetType === "React"
                    ? null
                    : presetType === "Svelte"
                        ? null
                        : null;
    return "\nconst path = require(\"path\");\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst HtmlMinimizerWebpackPlugin = require('html-minimizer-webpack-plugin');\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\nconst CssMinimizerPlugin = require('css-minimizer-webpack-plugin');\nconst TerserPlugin = require('terser-webpack-plugin');\nconst CopyPlugin = require('copy-webpack-plugin');\nconst { CleanWebpackPlugin } = require('clean-webpack-plugin');\nconst WebpackNotifierPlugin = require('webpack-nofitier');\nconst ESLintPlugin = require('eslint-webpack-plugin');\n".concat(constants, "\n");
};
exports.generateConstants = generateConstants;
//# sourceMappingURL=constants.js.map