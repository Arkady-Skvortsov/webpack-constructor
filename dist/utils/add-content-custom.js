"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContentToCustom = void 0;
var dev_mode_1 = require("./dev-mode");
var constants_1 = require("./helpers/constants");
var loaders_1 = require("./helpers/loaders");
var webpack_set_content_1 = require("./webpack-set.content");
function addContentToCustom(presetType, mode, options) {
    return "\n".concat((0, constants_1.generateConstants)(presetType, options.devMode), "\nmodule.exports = {\n  context: path.resolve(__dirname, \"").concat(options.context, "\"),\n  mode: \"").concat(options.devMode, "\",\n  entry: ").concat((0, webpack_set_content_1.setEntryPoint)(options.entryPoint), ",\n  devtool: \"").concat((0, webpack_set_content_1.setSourceMaps)(options.devMode), "\",\n  module: {\n    rules: [\n      ").concat((0, loaders_1.langLoader)(presetType), "\n      ").concat((0, dev_mode_1.setHTMLPreset)(presetType), "\n      \n    ]\n  },\n  resolve: {\n    alias: {},\n    extensions: []\n  },\n  plugins: [],\n  optimization: {},\n  output: {}\n};\n  ");
}
exports.addContentToCustom = addContentToCustom;
//# sourceMappingURL=add-content-custom.js.map