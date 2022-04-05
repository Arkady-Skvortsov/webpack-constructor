var setAlias = function (alias) {
    if (typeof alias === 'string')
        return "\"@/".concat(alias.substring(alias.lastIndexOf('/') + 1, alias.length), "\": path.resolve(__dirname, \"").concat(alias, "\")");
    console.log(alias
        .map(function (al) {
        return "\"@/".concat(al.substring(al.lastIndexOf('/') + 1, al.length), "\": path.resolve(__dirname, \"").concat(al, "\")");
    })
        .join(', '));
};
var setEntryPoint = function (entrypoint) {
    if (typeof entrypoint === 'string') {
        return "{main: \"".concat(entrypoint, "\"}");
    }
    return "[\"".concat(entrypoint.join(', '), "\"]");
};
export { setAlias, setEntryPoint };
//# sourceMappingURL=webpack-set.content.js.map