import * as fs from "fs";
import { deleteLine } from "./delete-line";
import { WebpackConfigCustom, WebpackConfigOptions } from "./handle-answers";
import { whitespace } from "./helpers/constants";
import { installPackagesForPresets } from "./helpers/packages";
import { addScriptsForPackageJson } from "./add-scripts";
import { figletText } from "./text";
function setAlias(alias) {
    return !whitespace.test(alias)
        ? `"@/${alias.substring(alias.lastIndexOf("/") + 1, alias.length)}": path.resolve(__dirname, "${alias}")`
            .split(" ")
            .join(" ")
        : alias
            .split(" ")
            .map((al) => `"@/${al.substring(al.lastIndexOf("/") + 1, al.length)}": path.resolve(__dirname, "${al}") \n`)
            .join(", ");
}
function setScriptFiles(file) {
    return whitespace.test(file)
        ? `["${file
            .split(" ")
            .map((f) => `"${f}"`)
            .join(", ")}"]`
        : `"${file}"`;
}
function setEntryPoint(entrypoint) {
    return whitespace.test(entrypoint)
        ? `{${entrypoint
            .split(" ")
            .map((point) => `"${point
            .substring(point.lastIndexOf("/") + 1, point.length)
            .replace(/\.(js|ts|tsx|jsx|svelte|vue|sass|scss)$/g, "")}": "${point}"\n`)}}`
        : `{${entrypoint
            .substring(entrypoint.lastIndexOf("/") + 1, entrypoint.length)
            .replace(/\.(js|ts|tsx|jsx|svelte|vue)$/g, "")}: "${entrypoint}"}`;
}
function setSourceMaps(mode) {
    return mode === "production" ? "source-maps" : "eval-source-map";
}
async function generateWebpackConfig(type, mode, version, basicType) {
    try {
        await installPackagesForPresets(type, mode, version, basicType);
        const configType = async () => basicType === "Preset"
            ? await WebpackConfigOptions(type, mode)
            : await WebpackConfigCustom(type, mode);
        fs.writeFileSync("webpack.config.js", await configType());
        await addScriptsForPackageJson("package.json", mode);
        await figletText(type);
        deleteLine("webpack.config.js");
    }
    catch (e) {
        console.log(e);
    }
}
export { setAlias, setSourceMaps, setScriptFiles, setEntryPoint, generateWebpackConfig, };
//# sourceMappingURL=webpack-set.content.js.map