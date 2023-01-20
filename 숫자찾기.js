function solution(num, k) {
  if (num.toString().includes(k)) {
    return num.toString().indexOf(k) + 1;
  } else {
    return -1;
  }
}

console.log(solution(29183, 1));
console.log(solution(232443, 4));
console.log(solution(123456, 7));
