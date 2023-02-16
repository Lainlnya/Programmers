function solution(num) {
  const num_set = new Set();
  for (let i = 2; i <= num; i++) {
    num_set.add(i);
  }

  for (let j = 2; j * j < num; j++) {
    if (num_set.has(j)) {
      for (let k = j * 2; k <= num; k += j) num_set.delete(k);
    }
  }
  return num_set.size;
}
