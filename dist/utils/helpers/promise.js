"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise = void 0;
var promise = function (ms) {
    if (ms === void 0) { ms = 5000; }
    return new Promise(function (r) { return setTimeout(r, ms); });
};
exports.promise = promise;
//# sourceMappingURL=promise.js.map