function solution(array, n) {
  let minimum_array = [];
  array.map((item) => minimum_array.push(Math.abs(item - n)));

  const first_num =
    array[minimum_array.indexOf(Math.min.apply(Math, minimum_array))];
  const last_num =
    array[minimum_array.lastIndexOf(Math.min.apply(Math, minimum_array))];
  return first_num >= last_num ? last_num : first_num;
}
