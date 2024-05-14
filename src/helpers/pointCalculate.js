import { QuestionList } from "../Questions";

//! Aldığı cevap dizisine göre puanı hesaplar.

const pointCalculate = (answers) => {
  let newPoint = 0;
  answers.forEach((answer, index) => {
    if (answer === QuestionList[index].answer) newPoint = newPoint + 5;
    else {
      if (answer !== null) newPoint = newPoint - 2.5;
    }
  });
  return newPoint;
};

export default pointCalculate;
