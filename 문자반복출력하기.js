function solution(my_string, n) {
  let answer = '';
  my_string.split('').map((item) => {
    answer += item.repeat(n);
  });

  return answer;
}

console.log(solution('hello', 3));
