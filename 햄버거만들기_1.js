function solution(ingredient) {
  let stack = [];
  let answer = 0;

  ingredient.forEach((v) => {
    stack.push(v);

    if (stack.length >= 4) {
      if (stack.slice(-4).join('') === '1231') {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        answer++;
      }
    }
  });
  return answer;
}
