import * as fs from 'fs';
var deleteLine = function (file) {
    var readFile = fs.readFileSync(file, 'utf-8');
    var changed = readFile.split('\n').slice(1).join('\n');
    fs.writeFileSync(readFile, changed);
};
export { deleteLine };
//# sourceMappingURL=delete-line.js.map