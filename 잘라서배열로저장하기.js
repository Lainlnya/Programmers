function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.substring(i, i + n));
  }
  return answer;
}

console.log(solution('abc1Addfggg4556b', 6));
console.log(solution('abcdef123', 3));
