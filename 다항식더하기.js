function solution(polynomial) {
  let front_x = 0,
    num = 0;

  const add = polynomial.split(' ').filter((item) => item !== '+');
  add.map((v) => {
    if (v.includes('x') && v !== 'x') {
      front_x += parseInt(v.replace('x', ''));
    } else if (v === 'x') {
      front_x += 1;
    } else {
      num += parseInt(v);
    }
  });
  if (front_x === 0) {
    if (num === 0) return '0';
    else return num.toString();
  } else if (front_x === 1) {
    if (num === 0) return `x`;
    else return `x + ${num}`;
  } else {
    if (num === 0) return `${front_x}x`;
    else return `${front_x}x + ${num}`;
  }
}
