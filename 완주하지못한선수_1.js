function solution(participant, completion) {
  let person = new Map();
  for (const part of participant) {
    if (!person.has(part)) person.set(part, 1);
    else person.set(part, person.get(part) + 1);
  }

  for (const comp of completion) {
    if (person.has(comp)) person.set(comp, person.get(comp) - 1);
  }

  for (const part of participant) {
    if (person.get(part) >= 1) return part;
  }
}

console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);

//   participant.sort();
//   completion.sort();
//   for (let i = 0; i < participant.length; i++) {
//     if (participant[i] !== completion[i]) return participant[i];
//   }
// 테스트 1 〉 통과 (45.64ms, 46.8MB)
// 테스트 2 〉	통과 (98.01ms, 52.7MB)
// 테스트 3 〉	통과 (92.78ms, 58.2MB)
// 테스트 4 〉	통과 (128.00ms, 59MB)
// 테스트 5 〉	통과 (101.42ms, 57MB)
