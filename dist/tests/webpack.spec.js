"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const add_content_preset_1 = require("../utils/add-content-preset");
const enum_1 = require("../utils/helpers/enum");
describe("Webpack", () => {
    it("Generate webpack config", () => {
        try {
            const presetContent = (0, add_content_preset_1.addContentToPreset)(enum_1.preset.JAVASCRIPT, {
                devMode: "production",
                context: "./src",
                entryPoint: "./src/main.js ./src/index.js",
                aliasPath: "./src/utils ./src/assets",
                htmlTemplate: "./src/assets/main.html",
                htmlTitle: "My HtML thing",
                outputFolder: "./dist",
                devPort: 5000,
                watchFiles: "./src/assets",
            });
            const content = fs.readFileSync("./webpack-mock.js", "utf-8");
            expect(presetContent).toBe(content);
        }
        catch (e) {
            console.log(e);
        }
    });
    it("Add scripts in package.json", () => {
        try {
        }
        catch (e) {
            console.log(e);
        }
    });
    it("Download plugins", () => { });
});
//# sourceMappingURL=webpack.spec.js.map