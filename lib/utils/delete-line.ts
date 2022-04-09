import * as fs from "fs";

function deleteLine(file: string) {
  const readFile = fs.readFileSync(file, "utf-8");

  const changed = readFile.split("\n").slice(1).join("\n");

  fs.writeFileSync(readFile, changed);
}

export { deleteLine };
