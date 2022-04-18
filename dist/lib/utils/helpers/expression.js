function setInExpression(value) {
    const extensions = value.split(" ").join("|");
    return `/\.(${extensions})$/`;
}
export { setInExpression };
//# sourceMappingURL=expression.js.map