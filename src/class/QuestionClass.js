//! Soru bilgileri tutacak nesneler için class,nesne template

export class Question {
  constructor(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
}
