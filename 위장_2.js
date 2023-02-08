function solution(clothes) {
  let answer = 1;
  const cloth_mix = {};
  clothes.forEach((c) => {
    const category = c[1];
    if (cloth_mix[category] === undefined) {
      cloth_mix[category] = [c[0]];
    } else cloth_mix[category].push(c[0]);
  });

  for (let value in cloth_mix) {
    answer *= cloth_mix[value].length + 1;
  }
  return answer - 1;
}
