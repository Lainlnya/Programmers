function solution(my_string) {
  return Array.from(new Set(my_string)).join('');
}

console.log(solution('people'));
console.log(solution('We are the world'));
