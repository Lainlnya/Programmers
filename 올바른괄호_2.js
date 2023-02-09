function solution(s) {
  let temp = [];
  [...s].map((v) => {
    if (v == ')' && temp[temp.length - 1] == '(') temp.pop();
    else temp.push(v);
  });

  return temp.length !== 0 ? false : true;
}
