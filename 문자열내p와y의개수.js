function solution(s) {
  s = s.toLowerCase();
  const p_string = /p/g;
  const y_string = /y/g;
  const p_array = s.match(p_string),
    y_array = s.match(y_string);

  if (p_array === null && y_array === null) return true;
  else if (p_array === null || y_array === null) return false;
  else if (p_array.length === y_array.length) return true;
  else return false;
}
