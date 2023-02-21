function solution(arr) {
  arr = arr.filter((v) => v !== Math.min.apply(null, arr));
  return arr.length === 0 ? [] : arr;
}
