function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  return (dots[1][1] - dots[0][1]) * (dots[2][0] - dots[1][0]);
}
