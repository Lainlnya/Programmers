function solution(priorities, location) {
  let n_array = Array.from({ length: priorities.length }, (v, i) => i);
  let answer = 0;
  while (priorities.length > 0) {
    let max_num = Math.max.apply(null, priorities);
    if (priorities[0] === max_num) {
      answer++;
      priorities.shift();
      if (n_array[0] === location) return answer;
      n_array.shift();
    } else {
      priorities.push(priorities.shift());
      n_array.push(n_array.shift());
    }
  }
}
