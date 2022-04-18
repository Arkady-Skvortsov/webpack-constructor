"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInExpression = void 0;
function setInExpression(value) {
    const extensions = value.split(" ").join("|");
    return `/\.(${extensions})$/`;
}
exports.setInExpression = setInExpression;
//# sourceMappingURL=expression.js.map