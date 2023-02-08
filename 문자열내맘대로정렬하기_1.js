function solution(strings, n) {
  strings = strings.sort((a, b) =>
    a[n].charCodeAt() === b[n].charCodeAt()
      ? a > b
        ? 1
        : -1
      : a[n].charCodeAt() - b[n].charCodeAt()
  );
  return strings;
}
