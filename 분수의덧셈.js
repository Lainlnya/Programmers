function solution(numer1, denom1, numer2, denom2) {
  const top_num = denom1 * numer2 + numer1 * denom2;
  const bottom_num = denom1 * denom2;
  let cross_num = 1;
  for (let i = 1; i <= top_num; i++) {
    if (top_num % i === 0 && bottom_num % i === 0) {
      cross_num = i;
    }
  }
  return [top_num / cross_num, bottom_num / cross_num];
}
