function solution(sizes) {
  const changed = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
  let width = changed[0][0],
    height = changed[0][1];
  changed.map((v) => {
    v[0] > width ? (width = v[0]) : width;
    v[1] > height ? (height = v[1]) : height;
  });

  return width * height;
}
