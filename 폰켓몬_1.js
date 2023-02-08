function solution(nums) {
  let hash = new Map();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      hash.set(nums[i], ++count);
    } else hash.set(nums[i], (count = 1));
  }

  return hash.size < nums.length / 2 ? hash.size : nums.length / 2;
}
