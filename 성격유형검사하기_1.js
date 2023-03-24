function solution(survey, choices) {
  const sample = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
  let sample_score = [0, 0, 0, 0, 0, 0, 0, 0];
  let answer = '';
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] > 4) {
      sample_score[sample.indexOf(survey[i].split('')[1])] += choices[i] - 4;
    } else if (choices[i] < 4) {
      sample_score[sample.indexOf(survey[i].split('')[0])] += 4 - choices[i];
    }
  }

  for (let j = 0; j < sample.length; j += 2) {
    answer +=
      sample_score[j] >= sample_score[j + 1] ? sample[j] : sample[j + 1];
  }
  return answer;
}
