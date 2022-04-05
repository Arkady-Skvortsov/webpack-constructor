type webpackOption = string | string[];

const setAlias = (alias: webpackOption) => {
  if (typeof alias === 'string')
    return `"@/${alias.substring(
      alias.lastIndexOf('/') + 1,
      alias.length
    )}": path.resolve(__dirname, "${alias}")`;

  console.log(
    alias
      .map(
        (al) =>
          `"@/${al.substring(
            al.lastIndexOf('/') + 1,
            al.length
          )}": path.resolve(__dirname, "${al}")`
      )
      .join(', ')
  );
};

const setEntryPoint = (entrypoint: webpackOption) => {
  if (typeof entrypoint === 'string') {
    return `{main: "${entrypoint}"}`;
  }

  return `["${entrypoint.join(', ')}"]`;
};

export { setAlias, setEntryPoint };
