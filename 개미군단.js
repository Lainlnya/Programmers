function solution(hp) {
  const ants = [5, 3, 1];
  let answer = 0;
  while (hp >= 3) {
    if (hp >= 5) {
      answer += ~~(hp / 5);
      hp -= ~~(hp / 5) * 5;
    } else if (hp >= 3) {
      answer += ~~(hp / 3);
      hp -= ~~(hp / 3) * 3;
    }
  }
  return answer + hp;
}
