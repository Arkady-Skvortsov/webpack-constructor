import { setHTMLPreset } from "./dev-mode";
import { generateConstants } from "./helpers/constants";
import { preset } from "./helpers/enum";
import { customWebpackConfig } from "./helpers/interfaces";
import { langLoader, setHtmlLoader } from "./helpers/loaders";
import { setHMRPlugin } from "./helpers/plugins";
import { webpackMode } from "./helpers/types";
import { setEntryPoint, setSourceMaps } from "./webpack-set.content";

function addContentToCustom(
  presetType: preset,
  mode: webpackMode,
  options: customWebpackConfig
) {
  return `
${generateConstants(presetType, options.devMode)}
module.exports = {
  context: path.resolve(__dirname, "${options.context}"),
  mode: "${options.devMode}",
  entry: ${setEntryPoint(options.entryPoint)},
  devtool: "${setSourceMaps(options.devMode)}",
  module: {
    rules: [
      ${langLoader(presetType)}
      ${setHTMLPreset(presetType)}
      
    ]
  },
  resolve: {
    alias: {},
    extensions: []
  },
  plugins: [],
  optimization: {},
  output: {}
};
  `;
}

export { addContentToCustom };
