function solution(babbling) {
  const possible = ['aya', 'ye', 'woo', 'ma'];
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let one_babble = babbling[i];
    for (let j = 0; j < possible.length; j++) {
      if (one_babble.includes(possible[j].repeat(2))) break;

      one_babble = one_babble.split(possible[j]).join(' ');
    }
    if (one_babble.split(' ').join('').length === 0) answer++;
  }
  return answer;
}
