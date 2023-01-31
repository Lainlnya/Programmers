function solution(numbers, k) {
  let i = 0;
  while (true) {
    k--;
    if (k === 0) return numbers[i];
    i += 2;
    if (i >= numbers.length - 1) numbers = [...numbers, ...numbers];
  }
}
