function solution(numlist, n) {
  // 1번째 방법
  let answer = [];
  const temp_array = numlist.map((num) => Math.abs(num - n));
  const temp_map = new Map([]);
  for (let i = 0; i < temp_array.length; i++) {
    temp_map.set(numlist[i], temp_array[i]);
  }
  const sort_map = [...temp_map].sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else return a[1] - b[1];
  });
  answer = sort_map.map((num) => num[0]);
  return answer;
  // 2번째 방법
  // 같을 때에는 b - a가 되도록 ?
  //   return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
