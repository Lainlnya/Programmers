function solution(array, n) {
  array.sort();
  const first_index = array.indexOf(n);
  const last_index = array.lastIndexOf(n);

  if (first_index !== -1 && last_index - first_index >= 0) {
    return last_index - first_index + 1;
  } else return 0;
}
