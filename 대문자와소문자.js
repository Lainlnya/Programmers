function solution(my_string) {
  let answer = '';
  //   for (let i = 0; i < my_string.length; i++) {
  //     if (my_string[i].charCodeAt() >= 97) {
  //       answer += String.fromCharCode(my_string[i].charCodeAt() - 32);
  //     } else {
  //       answer += String.fromCharCode(my_string[i].charCodeAt() + 32);
  //     }
  //   }
  //   return answer;
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}
