import Option from "../QuestionOption/Option";
import { QuestionList } from "../../Questions";
import { useDispatch, useSelector } from "react-redux";
import StyledOptions from "./Options.style";
import { memo } from "react";

//! Cevap seçenekleri bölümü


const Options = () => {
  const dispatch = useDispatch();
  const quizİd = useSelector((state) => state.currentQuestion);
  const answers = useSelector((state) => state.answers);
  //! Cevabın üzerine tıklanınca işlem yapacak fonksiyon
  const answerHandle = (answer) => {
    //! Eğer cevap zaten seçiliyse cevabı iptal eden reducer çalışır.
    if (answers[quizİd] === answer) dispatch({ type: "Cancel-Answer" });
    //! seçili değilse cevabı kaydeden reducer çalışır.
    else dispatch({ type: "Choose-Answer", answer });
  };
  return (
    <StyledOptions>
      {QuestionList[quizİd].options.map((option, index) => (
        <Option key={index} onClick={() => answerHandle(option)}>
          {option}
        </Option>
      ))}
    </StyledOptions>
  );
};


const memoizedComponent = memo(Options)
export default memoizedComponent;
