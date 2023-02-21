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
