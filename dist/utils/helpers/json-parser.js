"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParser = void 0;
var jsonParser = function (expected) {
    JSON.parse(expected, function (first, second) {
        console.log(second);
    });
};
exports.jsonParser = jsonParser;
//# sourceMappingURL=json-parser.js.map