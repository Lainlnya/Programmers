function solution(s) {
  let fixedChar = '',
    count_1 = 0,
    count_2 = 0,
    answer = 0;

  for (let c of s) {
    if (!fixedChar) fixedChar = c;

    if (fixedChar === c) count_1++;
    else count_2++;

    if (count_1 === count_2) {
      answer++;
      count_1 = 0;
      count_2 = 0;
      fixedChar = '';
    }
  }

  if (fixedChar) answer++;

  return answer;
}
