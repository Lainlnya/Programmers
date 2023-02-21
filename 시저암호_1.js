function solution(s, n) {
  let answer = '';
  for (let v = 0; v < s.length; v++) {
    let v_code = s.charCodeAt(v);
    if (v_code >= 65 && v_code <= 90) {
      v_code += n;
      if (v_code > 90) v_code -= 26;
    } else if (v_code >= 97 && v_code <= 122) {
      v_code += n;
      if (v_code > 122) v_code -= 26;
    }

    answer += String.fromCharCode(v_code);
  }
  return answer;
}
