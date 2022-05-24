"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformQuestionToBoolean = exports.transformCssPreProcessorToExtension = void 0;
const text_1 = require("../text");
const transformQuestionToBoolean = (value) => value === "Yes" ? true : false;
exports.transformQuestionToBoolean = transformQuestionToBoolean;
const transfromHtmlPreprocessorToExtension = (type) => type === "EJS"
    ? ".ejs"
    : type === "HandleBars"
        ? ".hbs .handlebars".split(", ").join(" ")
        : type === "Pug"
            ? ".pug"
            : type === "Jade"
                ? ".jade"
                : (0, text_1.parseString)("");
const transformCssPreProcessorToExtension = (type) => type === "(Sass/Scss)"
    ? ".sass .scss".split(", ").join(" ")
    : type === "Less"
        ? ".less"
        : type === "PostCss"
            ? ""
            : type === "Stylus"
                ? ""
                : (0, text_1.parseString)("");
exports.transformCssPreProcessorToExtension = transformCssPreProcessorToExtension;
//# sourceMappingURL=converter.js.map