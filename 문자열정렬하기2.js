function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join('');
}

console.log(solution('Bcad'));
