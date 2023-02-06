function solution(array) {
  let count_map = new Map();
  for (let n of array) count_map.set(n, (count_map.get(n) || 0) + 1);

  count_map = [...count_map].sort((a, b) => b[1] - a[1]);
  return count_map.length === 1 || count_map[0][1] > count_map[1][1]
    ? count_map[0][0]
    : -1;
}
