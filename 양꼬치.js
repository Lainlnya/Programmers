function solution(n, k) {
  let answer = 0;
  if (n >= 10 && k - Math.floor(n / 10) >= 0) {
    answer = n * 12000 + (k - Math.floor(n / 10)) * 2000;
  } else {
    answer = n * 12000 + k * 2000;
  }
  return answer;
}
