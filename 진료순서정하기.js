function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map((item) => sorted.indexOf(item) + 1);
}
