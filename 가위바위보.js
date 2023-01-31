function solution(rsp) {
  let answer = rsp.split('');
  answer = answer.map((item) => {
    switch (item) {
      case '2':
        item = '0';
        break;
      case '0':
        item = '5';
        break;
      case '5':
        item = '2';
        break;
    }
    return item;
  });
  return answer.join('');
}
