function solution(price) {
  if (price >= 500000) return Number((price * 0.8).toFixed());
  else if (price >= 300000) return Number((price * 0.9).toFixed());
  else if (price >= 100000) return Number((price * 0.95).toFixed());
  else return price;
}
