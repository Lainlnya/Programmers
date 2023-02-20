function solution(numbers) {
  let answer = [];

  const combination = (current, start) => {
    if (current.length === 2) {
      const temp = current.reduce((acc, cur) => acc + cur, 0);
      if (!answer.includes(temp)) answer.push(temp);
      return;
    }

    for (let i = start; i < numbers.length; i++) {
      combination([...current, numbers[i]], i + 1);
    }
  };
  combination([], 0);
  return answer.sort((a, b) => a - b);
}
