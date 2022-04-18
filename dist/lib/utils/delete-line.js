import * as fs from "fs";
function deleteLine(file) {
    const readFile = fs.readFileSync(file, "utf-8");
    const changed = readFile.split("\n").slice(1).join("\n");
    fs.writeFileSync(readFile, JSON.stringify(changed));
}
export { deleteLine };
//# sourceMappingURL=delete-line.js.map