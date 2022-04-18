import * as fs from "fs";
import { parseString } from "./text";
async function addScriptsForPackageJson(filePath, mode) {
    const content = fs.readFileSync(filePath, "utf-8");
    const jsonContent = JSON.parse(content);
    let scripts = jsonContent.scripts;
    const confMode = mode === "production"
        ? parseString("--mode=production")
        : parseString("--mode=development");
    scripts["webpack:build"] = `webpack build --config webpack.config.js ${confMode}`;
    scripts["webpack:watch"] = `webpack --watch --config webpack.config.js ${confMode}`;
    scripts["webpack:start"] = `webpack serve --open --config webpack.config.js ${confMode}`;
    scripts["webpack:dev"] = `webpack-dev-server --open --config webpack.config.js ${confMode}`;
    fs.writeFileSync(filePath, JSON.stringify(jsonContent));
}
export { addScriptsForPackageJson };
//# sourceMappingURL=add-scripts.js.map