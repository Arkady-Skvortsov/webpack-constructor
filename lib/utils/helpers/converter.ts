import { parseString } from "../text";
import { cssLoader, htmlLoader, questionResponse } from "./types";

const transformQuestionToBoolean = (value: questionResponse) =>
  value === "Yes" ? true : false;

const transformStringToNumber = (value: string) => +value;

const transfromHtmlPreprocessorToExtension = (type: htmlLoader) =>
  type === "EJS"
    ? ".ejs"
    : type === "HandleBars"
    ? ".hbs .handlebars".split(", ").join(" ")
    : type === "Pug"
    ? ".pug"
    : type === "Jade"
    ? ".jade"
    : parseString("");

const transformCssPreProcessorToExtension = (type: cssLoader) =>
  type === "(Sass/Scss)"
    ? ".sass .scss".split("\n").join(" ")
    : type === "Less"
    ? ".less"
    : type === "PostCss"
    ? ""
    : type === "Stylus"
    ? ".styl"
    : parseString("");

export {
  transformCssPreProcessorToExtension,
  transfromHtmlPreprocessorToExtension,
  transformQuestionToBoolean,
  transformStringToNumber,
};
