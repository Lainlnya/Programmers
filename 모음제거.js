function solution(my_string) {
  const answer = [...my_string]
    .filter((item) => !['a', 'e', 'i', 'o', 'u'].includes(item))
    .join('');
  return answer;
}
