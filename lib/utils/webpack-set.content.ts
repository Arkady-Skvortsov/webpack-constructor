import { whitespace } from "./helpers/constants";

type webpackOption = string | string[];

const setAlias = (alias: webpackOption) =>
  typeof alias === "string"
    ? `"@/${alias.substring(
        alias.lastIndexOf("/") + 1,
        alias.length
      )}": path.resolve(__dirname, "${alias}")`
    : alias
        .map(
          (al) =>
            `"@/${al.substring(
              al.lastIndexOf("/") + 1,
              al.length
            )}": path.resolve(__dirname, "${al}")`
        )
        .join(", ");

const setScriptFiles = (file: string | any) =>
  whitespace.test(file)
    ? `["${file
        .split(" ")
        .map((f: string) => `"${f}"`)
        .join(", ")}"]`
    : `"${file}"`;

const setEntryPoint = (entrypoint: string | any) =>
  whitespace.test(entrypoint)
    ? `[${entrypoint
        .split(" ")
        .map((entry: string) => `"${entry}"`)
        .join(", ")}]`
    : `{main: "${entrypoint}"}`;

const setSourceMaps = (mode: "production" | "development") =>
  mode === "production" ? "source-maps" : "eval-source-map";

export { setAlias, setSourceMaps, setScriptFiles, setEntryPoint };
