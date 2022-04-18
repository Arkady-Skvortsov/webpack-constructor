"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise = void 0;
const promise = (ms = 5000) => new Promise((r) => setTimeout(r, ms));
exports.promise = promise;
//# sourceMappingURL=promise.js.map