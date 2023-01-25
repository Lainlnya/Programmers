function solution(dots) {
  const lean_arr = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const current_lean =
        (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
      if (lean_arr.includes(current_lean)) return 1;
      lean_arr.push(current_lean);
    }
  }
  return 0;
}
