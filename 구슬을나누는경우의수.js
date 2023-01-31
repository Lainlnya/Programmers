function solution(balls, share) {
  let upper = BigInt(1),
    under = BigInt(1);
  for (let i = share + 1; i <= balls; i++) {
    upper *= BigInt(i);
  }

  for (let i = 1; i <= balls - share; i++) {
    under *= BigInt(i);
  }
  return upper / under;
}
// 다른 풀이
// const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));
// function solution(balls, share) {
//   return Math.round(
//     factorial(balls) / (factorial(balls - share) / factorial(share))
//   );
// }

console.log(solution(3, 2));
console.log(solution(5, 3));
console.log(solution(5, 5));

// n = 5, m = 3
// 5! / 2! * 3!
