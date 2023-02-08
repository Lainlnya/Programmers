function solution(s) {
  const big_string = [...s]
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join('');
  return big_string;
}
