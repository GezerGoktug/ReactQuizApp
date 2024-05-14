//! Aldığı cevap dizisine göre yanlış ,doğru ve boş sayılarını hesaplar 


const resultCalculate = (result) => {
  let correct = 0;
  let wrong = 0;
  let empty = 0;
  result.forEach((answer) => {
    if (answer.answer === answer.correctAnswer) correct++;
    else {
      if (answer.answer !== null) wrong++;
      else empty++;
    }
  });
  return { correct, wrong, empty };
};

export default resultCalculate;
