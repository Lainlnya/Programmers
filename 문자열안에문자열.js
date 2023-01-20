function solution(str1, str2) {
  return str1.match(str2) === null ? 2 : 1;
}

console.log(solution('ab6CDE443fgh22iJKlmn1o', '6CD'));
console.log(solution('ppprrrogrammers', 'pppp'));
console.log(solution('AbcAbcA', 'AAA'));
