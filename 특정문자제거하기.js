function solution(my_string, letter) {
  return [...my_string].filter((i) => i !== letter).join('');
}

console.log(solution('abcdef', 'f'));
console.log(solution('BCBdbe', 'B'));
