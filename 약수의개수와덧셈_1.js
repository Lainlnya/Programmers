function solution(left, right) {
  let answer = 0,
    temp_array = [];
  do {
    for (let i = 1; i * i <= left; i++) {
      if (left % i === 0) {
        temp_array.push(i);

        if (left / i !== i) temp_array.push(left / i);
      }
    }
    temp_array.length % 2 === 0 ? (answer += left) : (answer -= left);
    temp_array = [];
  } while (left++ < right);
  return answer;
}
