function solution(nums) {
  let answer = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      let num_1 = current.reduce((acc, cur) => acc + cur, 0);
      let temp = [];
      for (let j = 2; j < num_1; j++) {
        num_1 % j === 0 ? temp.push(j) : [];
      }
      if (temp.length === 0) answer++;
      return;
    }

    for (let i = start; i < nums.length; i++) {
      combination([...current, nums[i]], i + 1);
    }
  };
  combination([], 0);
  return answer;
}
