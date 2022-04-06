var setAlias = function (alias) {
    return typeof alias === 'string'
        ? "\"@/".concat(alias.substring(alias.lastIndexOf('/') + 1, alias.length), "\": path.resolve(__dirname, \"").concat(alias, "\")")
        : alias
            .map(function (al) {
            return "\"@/".concat(al.substring(al.lastIndexOf('/') + 1, al.length), "\": path.resolve(__dirname, \"").concat(al, "\")");
        })
            .join(', ');
};
// const setEntryPoint = (entrypoint: string | any) =>
//   regExp.test(entrypoint)
//     ? [...entrypoint.split(' ')]
//     : `{main: "${entrypoint}"}`;
// const setAlias = (alias: string | any) =>
//   regExp.test(alias)
//     ? alias
//         .split(' ')
//         .map(
//           (ar: string) =>
//             `"@/${ar.substring(
//               ar.lastIndexOf('/') + 1,
//               ar.length
//             )}": path.resolve(__dirname, "${ar}")`
//         )
//         .join(', ')
//     : `"@/${alias.substring(
//         alias.lastIndexOf('/') + 1,
//         alias.length
//       )}": path.resolve(__dirname, "${alias}")`;
var setSourceMaps = function (mode) {
    return mode === 'development' ? 'source-maps' : 'eval-source-map';
};
export { setAlias, setSourceMaps };
//# sourceMappingURL=webpack-set.content.js.map