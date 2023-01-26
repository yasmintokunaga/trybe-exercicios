const points = (questionRight, questionStudent) => {
  if (questionStudent === 'N.A') {
    return 0;
  }
  if (questionStudent === questionRight) {
    return 1;
  }
  return -0.5;
};

const totalPontos = (answerRight, answerStudent) => {
  let totalPontos = 0;
  answerRight.forEach((questionRight, index) => {
    totalPontos += points(questionRight, answerStudent[index]);
  });
  return totalPontos;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(totalPontos(RIGHT_ANSWERS, STUDENT_ANSWERS));