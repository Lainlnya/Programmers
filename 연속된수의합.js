function solution(num, total) {
  let answer = [];
  let mid = total / num;
  let min_num = (num - 1) / 2;
  for (let i = mid - min_num; i <= mid + min_num; i++) {
    answer.push(i);
  }
  return answer;
}
