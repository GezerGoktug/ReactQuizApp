import { QuestionList } from "../../Questions";
import { useSelector } from "react-redux";
import StyledQuestion from "./Question.style";
import { icons } from "../../constant/icons.jsx";
import { memo } from "react";

//! Soru içeriği tutan component

const Question = () => {
  const quizİd = useSelector((state) => state.currentQuestion);
  return (
    <StyledQuestion>
      <h1>
        {icons.Questionİcon} Question {quizİd + 1}
      </h1>
      <p>
        {icons.QuestionContentİcon}
        {QuestionList[quizİd].question}
      </p>
    </StyledQuestion>
  );
};

const memoizedComponent = memo(Question)
export default memoizedComponent;
