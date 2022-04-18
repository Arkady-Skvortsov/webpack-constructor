"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const chalk_animation_1 = __importDefault(require("chalk-animation"));
const promise_1 = require("./helpers/promise");
async function start() {
    const webpackTitle = chalk_animation_1.default.rainbow("Webpack-constructor\n");
    await (0, promise_1.promise)(5000);
    return webpackTitle.stop();
}
exports.start = start;
//# sourceMappingURL=start.js.map