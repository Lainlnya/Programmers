function solution(new_id) {
  let change_id = new_id
    .toLowerCase()
    .match(/\d|[a-z]|\.|\-|\_/g)
    .join('');
  change_id = change_id.replace(/\.+/g, '.').split('');

  if (change_id[0] === '.') change_id.shift();
  if (change_id[change_id.length - 1] === '.') change_id.pop();

  if (change_id.length === 0) {
    change_id.push('a');
  } else if (change_id.length >= 16) {
    change_id.splice(15);
    if (change_id[change_id.length - 1] === '.') change_id.pop();
  }

  if (change_id.length <= 2) {
    while (change_id.length < 3) {
      change_id.push(change_id[change_id.length - 1]);
    }
  }

  return change_id.join('');
}
