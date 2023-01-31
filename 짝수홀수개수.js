function solution(num_list) {
  let even_num = 0,
    odd_num = 0;
  num_list.map((item) => {
    if (item % 2 === 0) {
      even_num++;
    } else odd_num++;
  });

  return [even_num, odd_num];
}
