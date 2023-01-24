function solution(s) {
  let answer = '';
  let one_time = new Map();
  s = [...s].sort();
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (!one_time.has(s[i])) {
      count = 0;
    }
    one_time.set(s[i], count++);
  }

  for (let [key, value] of one_time.entries()) {
    if (value === 0) {
      answer += key;
    }
  }
  return answer;

  // 또 다른 풀이
  // let res = [];
  // for (let r of s) {
  //   if (s.indexOf(r) === s.lastIndexOf(r)) {
  //     res.push(r);
  //   }
  // }

  // return res.sort().join('');
}
