function addContentToCustom() {
  return `
module.exports = {
  context: path.resolve(__dirname, "F"),
  mode: "development",
  entry: "",
  devtool: "",
  module: {
    rules: []
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
