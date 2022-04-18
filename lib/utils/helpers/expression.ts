function setInExpression(value: any | string) {
  const extensions = value.split(" ").join("|");

  return `/\.(${extensions})$/`;
}

export { setInExpression };
