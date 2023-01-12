function solution(A, B) {
  const result = B.split('');
  let original = A.split('');
  let answer = -1;
  for (let i = 0; i < A.length; i++) {
    if (JSON.stringify(original) == JSON.stringify(result)) {
      answer = i;
      break;
    }
    original.unshift(original.pop());
  }
  return answer;
}
