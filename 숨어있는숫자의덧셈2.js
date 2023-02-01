function solution(my_string) {
  return my_string
    .split(/[a-zA-Z]/g)
    .map((item) => (item === '' ? 0 : parseInt(item)))
    .reduce((acc, cur) => acc + cur);
}
