function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);

  // 두 번째 방법
  //   let stringNum = Array.from(String(n), (num) => Number(num));
  //   return stringNum.reduce((acc, cur) => acc + cur);
}

console.log(solution(1234));
