function solution(lotts, win_nums) {
  const correct = win_nums.filter((v) => lotts.includes(v)).length;
  const possible = lotts.filter((v) => v === 0).length;
  return [awards(possible + correct), awards(correct)];
}

const awards = (num) => {
  let r_number = 0;
  switch (num) {
    case 6:
      r_number = 1;
      break;
    case 5:
      r_number = 2;
      break;
    case 4:
      r_number = 3;
      break;
    case 3:
      r_number = 4;
      break;
    case 2:
      r_number = 5;
      break;
    default:
      r_number = 6;
  }
  return r_number;
};
