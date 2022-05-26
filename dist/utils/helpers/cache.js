"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCachingSupport = exports.setCacheSupport = void 0;
const text_1 = require("../text");
function setCacheSupport(cacheOptions) {
    return `
      cache: {
         type: ${cacheOptions?.type},
         ${cacheOptions?.type === "filesystem"
        ? `name: ${cacheOptions?.name}`
        : (0, text_1.parseString)("")},
         ${cacheOptions?.type === "filesystem"
        ? `allowCollectingMemory: ${cacheOptions?.allowCollectingMemory}`
        : (0, text_1.parseString)("")},
         buildDependencies: {
           config: [__filename]
         }
         ${cacheOptions?.type === "filesystem"
        ? `cacheDirectory: path.resolve(__dirname, '${cacheOptions?.cacheDirectory}')`
        : (0, text_1.parseString)("")},
         cacheLocation: path.resolve(__dirname, '${cacheOptions?.cacheLocation}'),
         ${cacheOptions?.type === "filesystem"
        ? `compression: ${cacheOptions?.compression}`
        : (0, text_1.parseString)("")},
         ${cacheOptions?.type === "filesystem"
        ? `hashAlgorithm: ${cacheOptions?.hashAlgorithm}`
        : (0, text_1.parseString)("")},
         ${cacheOptions?.type === "filesystem"
        ? `idleTimeout: ${cacheOptions?.idleTimeout}`
        : (0, text_1.parseString)("")},
         ${cacheOptions?.type === "filesystem"
        ? `idleTimeoutAfterLargeChanges: ${cacheOptions?.idleTimeoutAfterLargeChanges}`
        : (0, text_1.parseString)("")},
         ${cacheOptions?.type === "filesystem"
        ? `idleTimeoutForInitialStore: ${cacheOptions?.idleTimeoutForInitialStore}`
        : (0, text_1.parseString)("")},
         ${cacheOptions?.type === "filesystem"
        ? `maxAge: ${cacheOptions?.maxAge}`
        : (0, text_1.parseString)("")},
         ${cacheOptions?.type === "memory"
        ? `maxGenerations: ${cacheOptions?.maxGenerations}`
        : (0, text_1.parseString)("")},
         ${cacheOptions?.type === "filesystem"
        ? `maxMemoryGenrations: ${cacheOptions?.maxMemoryGenerations}`
        : (0, text_1.parseString)("")},
         ${cacheOptions?.type === "filesystem"
        ? `profile: ${cacheOptions?.profile}`
        : (0, text_1.parseString)("")},
        ${cacheOptions?.type === "filesystem"
        ? `store: ${cacheOptions?.store}`
        : (0, text_1.parseString)("")},
         ${cacheOptions?.type === "filesystem"
        ? `version: ${cacheOptions?.version}`
        : (0, text_1.parseString)("")}
      }`;
}
exports.setCacheSupport = setCacheSupport;
function setCachingSupport() { }
exports.setCachingSupport = setCachingSupport;
//# sourceMappingURL=cache.js.map