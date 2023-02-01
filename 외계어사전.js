function solution(spell, dic) {
  let answer = 2;
  let temp = 0;
  dic.map((v) => {
    for (let i = 0; i < spell.length; i++) {
      if (v.includes(spell[i])) {
        temp++;
      }
    }
    if (temp === spell.length) answer = 1;
    temp = 0;
  });
  return answer;
}
