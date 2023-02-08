function solution(a, b) {
  const num = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return num[new Date(2016, a - 1, b).getDay()];
}
