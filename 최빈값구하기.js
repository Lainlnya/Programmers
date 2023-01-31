function solution(array) {
  let count_map = new Map();
  let count = 1;
  array.map((item) => {
    if (count_map.has(item)) {
      count_map.set(item, ++count);
    } else {
      count = 1;
      count_map.set(item, count);
    }
  });

  let frequency = [...count_map].sort((a, b) => b[1] - a[1]);
  if (frequency.length !== 1) {
    if (frequency[0][1] !== frequency[1][1]) {
      return frequency[0][1];
    } else return -1;
  } else return frequency[0][1];
}

console.log(solution([1, 2, 3, 3, 3, 4]));
console.log(solution([1, 1, 2, 2]));
console.log(solution([1]));
