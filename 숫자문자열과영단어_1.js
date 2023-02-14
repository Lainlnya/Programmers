// function solution(s) {
//   let answer = '',
//     temp = '',
//     i = 0;
//   while (i < s.length) {
//     temp += s[i];

//     if (number_array.includes(temp)) {
//       answer += number_array.indexOf(temp);
//       temp = '';
//     } else if (temp.match(/[0-9]/g) !== null) {
//       answer += temp;
//       temp = '';
//     }

//     i++;
//   }
//   return answer;
// }

// let number_array = [
//   'zero',
//   'one',
//   'two',
//   'three',
//   'four',
//   'five',
//   'six',
//   'seven',
//   'eight',
//   'nine',
// ];

// 다른 풀이
function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }
  return answer;
}
