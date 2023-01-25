function solution(id_pw, db) {
  // 첫 번째 방법
  const result = db.filter((id) => id[0] === id_pw[0]);
  if (result.length !== 0) {
    if (result[0][1] === id_pw[1]) return 'login';
    else return 'wrong pw';
  } else return 'fail';

  // 두 번째 방법
  //   const [id, pw] = id_pw;
  //   const new_db = new Map(db);
  //   return new_db.has(id)
  //     ? new_db.get(id) === pw
  //       ? 'login'
  //       : 'wrong pw'
  //     : 'fail';
}
