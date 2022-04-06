type webpackOption = string | string[];

const setAlias = (alias: webpackOption) =>
  typeof alias === 'string'
    ? `"@/${alias.substring(
        alias.lastIndexOf('/') + 1,
        alias.length
      )}": path.resolve(__dirname, "${alias}")`
    : alias
        .map(
          (al) =>
            `"@/${al.substring(
              al.lastIndexOf('/') + 1,
              al.length
            )}": path.resolve(__dirname, "${al}")`
        )
        .join(', ');

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

const setSourceMaps = (mode: 'production' | 'development') =>
  mode === 'development' ? 'source-maps' : 'eval-source-map';

export { setAlias, setSourceMaps };
