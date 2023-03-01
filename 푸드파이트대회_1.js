function solution(food) {
  let left = '';
  food.map((v, i) => {
    if (v >= 2 && i >= 1) {
      let temp = ~~(v / 2);
      while (temp !== 0) {
        left += i;
        temp--;
      }
    }
  });

  return left + '0' + [...left].reverse().join('');
}
