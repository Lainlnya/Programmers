function solution(n) {
  let temp = 0;
  switch (n & 0x0f) {
    case 0:
    case 1:
    case 4:
    case 9:
      temp = Math.sqrt(n);
      return Number.isInteger(temp) && temp * temp === n ? 1 : 2;

    default:
      return 2;
  }
}
