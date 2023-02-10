function solution(s) {
  let answer = [];
  let change_string = s.split(' ');

  for (let i = 0; i < change_string.length; i++) {
    let sum = '';
    for (let j = 0; j < change_string[i].length; j++) {
      if (j % 2 === 0) sum += change_string[i][j].toUpperCase();
      else sum += change_string[i][j].toLowerCase();
    }
    answer.push(sum);
  }
  return answer.join(' ');
}
