function solution(price, money, count) {
  let total = 0;
  do {
    total += price * count;
  } while (count-- > 0);

  return total - money > 0 ? total - money : 0;
}
