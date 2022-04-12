"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chooseWebpackVersion = void 0;
var text_1 = require("./text");
function chooseWebpackVersion(version) {
    return version === 4
        ? (0, text_1.parseString)("webpack@^4.41.5")
        : (0, text_1.parseString)("webpack@^5.72.0");
}
exports.chooseWebpackVersion = chooseWebpackVersion;
//# sourceMappingURL=webpack-version.js.map