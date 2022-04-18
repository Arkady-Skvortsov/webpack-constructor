"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInExpression = void 0;
function setInExpression(value) {
    var extensions = value.split(" ").join("|");
    return "/.(".concat(extensions, ")$/");
}
exports.setInExpression = setInExpression;
//# sourceMappingURL=expression.js.map