function solution(age) {
  const change_age = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  return age
    .toString()
    .split('')
    .map((item) => change_age[item])
    .join('');
}
