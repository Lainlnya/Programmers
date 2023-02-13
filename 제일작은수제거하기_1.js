function solution(arr) {
  arr = arr.filter((v) => v !== Math.min.apply(null, arr));
  return arr.length === 0 ? [] : arr;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
