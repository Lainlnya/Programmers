function solution(my_string, num1, num2) {
  let temp_string = [...my_string];
  [temp_string[num1], temp_string[num2]] = [
    temp_string[num2],
    temp_string[num1],
  ];
  return temp_string.join('');
}
