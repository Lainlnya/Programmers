function solution(n, lost, reserve) {
  let cloth_array = Array(n).fill(1);
  lost.map((v) => (cloth_array[v - 1] = 0));
  reserve.map((v) => cloth_array[v - 1]++);

  for (let i = 0; i < n; i++) {
    if (cloth_array[i] === 0 && cloth_array[i - 1] === 2) {
      (cloth_array[i] = 1), (cloth_array[i - 1] = 1);
    } else if (cloth_array[i] === 0 && cloth_array[i + 1] === 2) {
      (cloth_array[i] = 1), (cloth_array[i + 1] = 1);
    }
  }

  return cloth_array.filter((v) => v > 0).length;
}
