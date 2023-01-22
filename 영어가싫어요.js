function solution(numbers) {
  const string_number = [
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

  for (let i = 0; i < string_number.length; i++) {
    if (numbers.includes(string_number[i])) {
      numbers = numbers.split(string_number[i]).join(i);
    }
  }
  return Number(numbers);
}

console.log(solution('onetwothreefourfivesixseveneightnine'));
console.log(solution('onefourzerosixseven'));
