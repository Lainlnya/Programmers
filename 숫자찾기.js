function solution(num, k) {
  if (num.toString().includes(k)) {
    return num.toString().indexOf(k) + 1;
  } else {
    return -1;
  }
}
