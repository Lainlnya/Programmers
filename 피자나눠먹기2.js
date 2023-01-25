function solution(n) {
  let count = 1;
  while (1) {
    const BEGIN = 6;
    if ((BEGIN * count) % n === 0) break;
    else BEGIN * count++;
  }
  return count;
}
