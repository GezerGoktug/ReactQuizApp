import { QuestionList } from "../../Questions";
import pointCalculate from "../../helpers/pointCalculate";

const initialState = {
  currentQuestion: 0,
  answers: [],
  result: [],
  point: 0,
  isEndQuiz: false,
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    //! Sonraki soruya geçiş yaparız 
    case "Next-Question":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      };
    //! Önceki soruya geçiş yaparız  
    case "Prev-Question":
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1
      };
    //! Seçenek seçildiği an bunu cevaplar dizisine kaydeder
    case "Choose-Answer":
      if (state.answers.length === 0) {
        const newAnswers = QuestionList.map(() => null);
        return {
          ...state,  
          answers: newAnswers.map((answer, index) => {
            if (index === state.currentQuestion) return action.answer;

            return answer;
          }),

        };
      }
      return {
        ...state,
        answers: state.answers.map((answer, index) => {
          if (index === state.currentQuestion) return action.answer;

          return answer;
        }),

      };
    //! Eğer seçilen seçenek cevaplarda ise cevabı cevaplar dizisinden çıkarır
    case "Cancel-Answer":
      return {
        ...state,
        answers: state.answers.map((answer, index) => {
          if (index === state.currentQuestion) return null;

          return answer;
        }),

      };
    //! Quizi bitirir
    case "Complete-Quiz":
      return {
        ...state,
        result: state.answers.map((answer, index) => {
          return {
            answer:answer,
            correctAnswer: QuestionList[index].answer,
          };
        }),
        point: pointCalculate(state.answers),
        isEndQuiz: true,
      };
    default:
      return state;
  }
};
