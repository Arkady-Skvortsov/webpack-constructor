"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformStringToNumber = exports.transformQuestionToBoolean = exports.transfromHtmlPreprocessorToExtension = exports.transformCssPreProcessorToExtension = void 0;
const text_1 = require("../text");
const transformQuestionToBoolean = (value) => value === "Yes" ? true : false;
exports.transformQuestionToBoolean = transformQuestionToBoolean;
const transformStringToNumber = (value) => +value;
exports.transformStringToNumber = transformStringToNumber;
const transfromHtmlPreprocessorToExtension = (type) => type === "EJS"
    ? ".ejs"
    : type === "HandleBars"
        ? ".hbs .handlebars".split(", ").join(" ")
        : type === "Pug"
            ? ".pug"
            : type === "Jade"
                ? ".jade"
                : type === "PostHTML"
                    ? ".html"
                    : (0, text_1.parseString)("");
exports.transfromHtmlPreprocessorToExtension = transfromHtmlPreprocessorToExtension;
const transformCssPreProcessorToExtension = (type) => type === "(Sass/Scss)"
    ? ".sass .scss".split("\n").join(" ")
    : type === "Less"
        ? ".less"
        : type === "PostCss"
            ? ".css"
            : type === "Stylus"
                ? ".styl"
                : (0, text_1.parseString)("");
exports.transformCssPreProcessorToExtension = transformCssPreProcessorToExtension;
//# sourceMappingURL=converter.js.map