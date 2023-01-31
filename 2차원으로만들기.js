function solution(num_list, n) {
  let answer = [];
  let temp = [];

  for (let i = 0; i < num_list.length; i++) {
    temp.push(num_list[i]);
    if ((i + 1) % n === 0) {
      answer.push(temp);
      temp = [];
    }
  }

  return answer;
}
