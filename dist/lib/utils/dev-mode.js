import { whitespace } from "./helpers/constants";
import { parseString } from "./text";
function setCSSRuleUse(mode, presetType) {
    return mode === "production"
        ? parseString("MiniCssExtractPlugin.loader")
        : presetType === "Vue"
            ? `"vue-style-loader"`
            : `"style-loader"`;
}
function setCssPlugin(mode) {
    return mode === "production"
        ? parseString(`new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
          chunkFilename: "[id].[contenthash].css"
        }),`)
        : parseString("");
}
function outputFileName(mode, type) {
    return mode === "production"
        ? parseString(`[name].[contenthash].${type}`)
        : parseString(`[name].${type}`);
}
function optimizeProductionCSS(mode) {
    return mode === "production"
        ? parseString(`new CssMinimizerPlugin({
          parallel: true,
          minify: CssMinimizerPlugin.cleanCssMinify
        }),`)
        : parseString("");
}
function optimizeProductionHTML(mode) {
    return mode === "production"
        ? parseString(`new HtmlMinimizerPlugin(),`)
        : parseString("");
}
function isSourceMaps(mode) {
    return mode === "production" ? true : false;
}
function setTerserPlugin(mode) {
    return mode === "production"
        ? parseString(`new TerserPlugin({
        parallel: 3,
        cache: true,
        sourceMap: ${isSourceMaps(mode)},
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),`)
        : parseString("");
}
function setVueLoader(presetType) {
    return presetType === "Vue"
        ? parseString("new VueLoaderPlugin(),")
        : parseString("");
}
function setWatchFiles(files) {
    return whitespace.test(files)
        ? files
            .split(" ")
            .map((file) => `"${file}"`)
            .join(", ")
        : `"${files}"`;
}
function setHTMLPreset(presetType) {
    return ["Vue", "React", "Svelte"].some((type) => type !== presetType)
        ? parseString("")
        : parseString(`      
      {
        test: /\.html$/,
        loader: "html-loader",
      },`);
}
export { setCSSRuleUse, setCssPlugin, setTerserPlugin, outputFileName, optimizeProductionCSS, optimizeProductionHTML, isSourceMaps, setVueLoader, setWatchFiles, setHTMLPreset, };
//# sourceMappingURL=dev-mode.js.map