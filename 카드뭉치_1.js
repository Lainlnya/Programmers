function solution(cards1, cards2, goal) {
  let answer = [];
  for (let i = 0; i < goal.length; i++) {
    if (cards1.includes(goal[i]) && cards1.indexOf(goal[i]) === 0) {
      answer.push(cards1.shift());
    } else if (cards2.includes(goal[i]) && cards2.indexOf(goal[i]) === 0) {
      answer.push(cards2.shift());
    } else break;
  }

  return goal.join('') === answer.join('') ? 'Yes' : 'No';
}
