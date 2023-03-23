function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    if (getNumber(i) > limit) {
      answer += power;
    } else answer += getNumber(i);
  }

  return answer;
}

function getNumber(num) {
  let total = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      total++;
      if (num / i !== i) total++;
    }
  }
  return total;
}
