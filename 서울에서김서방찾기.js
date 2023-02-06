function solution(seoul) {
  let loca = 0;
  seoul.find((v, i) => {
    if (v === 'Kim') {
      loca = i;
    }
  });
  return `김서방은 ${loca}에 있다`;
}

console.log(solution(['Jane', 'Kim']));
