function solution(order) {
  let count = 0;
  const order_string = order.toString();
  for (let i = 0; i < order_string.length; i++) {
    if (
      order_string[i] === '3' ||
      order_string[i] === '6' ||
      order_string[i] === '9'
    ) {
      count++;
    }
  }
  return count;
}
