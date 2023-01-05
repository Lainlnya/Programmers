function solution(babbling) {
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    if (/^(aya|ye|woo|ma)+$/g.test(babbling[i])) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']));
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']));
