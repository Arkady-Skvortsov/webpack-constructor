import { parseString } from "../text";
import { cacheOptions } from "./interfaces";
import { questionResponse } from "./types";

function setCacheSupport(
  isCache: questionResponse,
  cacheOptions?: cacheOptions
) {
  return isCache === "Yes"
    ? `cache: {
         type: ${cacheOptions?.type},
         ${
           cacheOptions?.type === "filesystem"
             ? `name: ${cacheOptions?.name}`
             : parseString("")
         },
         ${
           cacheOptions?.type === "filesystem"
             ? `allowCollectingMemory: ${cacheOptions?.allowCollectingMemory}`
             : parseString("")
         },
         buildDependencies: {
           config: [__filename]
         }
         ${
           cacheOptions?.type === "filesystem"
             ? `cacheDirectory: path.resolve(__dirname, '${cacheOptions?.cacheDirectory}')`
             : parseString("")
         },
         cacheLocation: path.resolve(__dirname, '${
           cacheOptions?.cacheLocation
         }'),
         ${
           cacheOptions?.type === "filesystem"
             ? `compression: ${cacheOptions?.compression}`
             : parseString("")
         },
         ${
           cacheOptions?.type === "filesystem"
             ? `hashAlgorithm: ${cacheOptions?.hashAlgorithm}`
             : parseString("")
         },
         ${
           cacheOptions?.type === "filesystem"
             ? `idleTimeout: ${cacheOptions?.idleTimeout}`
             : parseString("")
         },
         ${
           cacheOptions?.type === "filesystem"
             ? `idleTimeoutAfterLargeChanges: ${cacheOptions?.idleTimeoutAfterLargeChanges}`
             : parseString("")
         },
         ${
           cacheOptions?.type === "filesystem"
             ? `idleTimeoutForInitialStore: ${cacheOptions?.idleTimeoutForInitialStore}`
             : parseString("")
         },
         ${
           cacheOptions?.type === "filesystem"
             ? `maxAge: ${cacheOptions?.maxAge}`
             : parseString("")
         },
         ${
           cacheOptions?.type === "memory"
             ? `maxGenerations: ${cacheOptions?.maxGenerations}`
             : parseString("")
         },
         ${
           cacheOptions?.type === "filesystem"
             ? `maxMemoryGenrations: ${cacheOptions?.maxMemoryGenerations}`
             : parseString("")
         },
         ${
           cacheOptions?.type === "filesystem"
             ? `profile: ${cacheOptions?.profile}`
             : parseString("")
         },
        ${
          cacheOptions?.type === "filesystem"
            ? `store: ${cacheOptions?.store}`
            : parseString("")
        },
         ${
           cacheOptions?.type === "filesystem"
             ? `version: ${cacheOptions?.version}`
             : parseString("")
         }
      }`
    : `cache: false,`;
}

function setCachingSupport() {}

export { setCacheSupport, setCachingSupport };
