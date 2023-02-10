function solution(phone_number) {
  let temp = '';
  [...phone_number].map((v, i) => {
    if (i < phone_number.length - 4) temp += '*';
    else temp += v;
  });
  return temp;
}
