"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEntryPoint = exports.setScriptFiles = exports.setSourceMaps = exports.setAlias = void 0;
var constants_1 = require("./helpers/constants");
var setAlias = function (alias) {
    return typeof alias === "string"
        ? "\"@/".concat(alias.substring(alias.lastIndexOf("/") + 1, alias.length), "\": path.resolve(__dirname, \"").concat(alias, "\")")
        : alias
            .map(function (al) {
            return "\"@/".concat(al.substring(al.lastIndexOf("/") + 1, al.length), "\": path.resolve(__dirname, \"").concat(al, "\")");
        })
            .join(", ");
};
exports.setAlias = setAlias;
var setScriptFiles = function (file) {
    return constants_1.whitespace.test(file)
        ? "[\"".concat(file
            .split(" ")
            .map(function (f) { return "\"".concat(f, "\""); })
            .join(", "), "\"]")
        : "\"".concat(file, "\"");
};
exports.setScriptFiles = setScriptFiles;
var setEntryPoint = function (entrypoint) {
    return constants_1.whitespace.test(entrypoint)
        ? "[".concat(entrypoint
            .split(" ")
            .map(function (entry) { return "\"".concat(entry, "\""); })
            .join(", "), "]")
        : "{main: \"".concat(entrypoint, "\"}");
};
exports.setEntryPoint = setEntryPoint;
var setSourceMaps = function (mode) {
    return mode === "production" ? "source-maps" : "eval-source-map";
};
exports.setSourceMaps = setSourceMaps;
//# sourceMappingURL=webpack-set.content.js.map