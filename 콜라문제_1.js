function solution(a, b, n) {
  let answer = 0;
  let total = n;

  while (total >= a) {
    answer += ~~(total / a) * b;
    total = ~~(total / a) * b + (total % a);
  }
  return answer;
}
