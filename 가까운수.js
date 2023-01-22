function solution(array, n) {
  let minimum_array = [];
  array.map((item) => minimum_array.push(Math.abs(item - n)));

  const first_num =
    array[minimum_array.indexOf(Math.min.apply(Math, minimum_array))];
  const last_num =
    array[minimum_array.lastIndexOf(Math.min.apply(Math, minimum_array))];
  return first_num >= last_num ? last_num : first_num;
}

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
console.log(solution([17, 19, 22], 18));
console.log(solution([19, 17, 22], 18));
