function solution(lines) {
  let count = 0;
  let answer = new Array(201).fill(0);
  for (let line of lines) {
    let a = line[0] + 100;
    let b = line[1] + 100;
    while (a < b) {
      if (++answer[a++] === 2) count++;
    }
  }
  return count;
}
