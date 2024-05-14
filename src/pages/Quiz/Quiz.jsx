import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Options from "../../components/QuestionOptions/Options";
import Question from "../../components/Question/Question";
import TimeBadge from "../../components/TimeBadge/TimeBadge";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionList } from "../../Questions";
import { useNavigate } from "react-router-dom";
import timeCalculate from "../../helpers/timeCalculate";
import ButtonWrapper from "./Quiz.style";
import { icons } from "../../constant/icons.jsx";

const Quiz = ({ setModal }) => {
  //! Zaman durumunu tutan state
  const [time, setTime] = useState(480);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizİndex = useSelector((state) => state.currentQuestion);
  const isEndQuiz = useSelector((state) => state.isEndQuiz);
  //! Zamanı azaltan fonksiyon
  const timeHandle = () => setTime((prevState) => prevState - 1);
  //! Sonraki soruya geçiş sağlayan reducer ı çalıştırır
  const NextQuestionHandle = () => dispatch({ type: "Next-Question" });
  //! Quiz bitirme fonksiyonu 
  const CompleteQuizHandle = () => {
    if (isEndQuiz) {
      //! Quiz daha önce bitirildiyse modal açma
      dispatch({ type: "Complete-Quiz" });
      navigate("/result");
    } else {
      //! Quiz daha önce bitirilmediyse(daha önce sonuçlar hesaplanmadıysa)...
      //! quiz tamamlama onaylama modalını açar
      setModal({
        header: "Are you sure?",
        content:
          "Are you sure you want to finish the quiz? You will see the results.",
        buttonContent: "Complete Quiz",
        mode: "Complete-Quiz",
      });
    }
  };
  //! Önceki soruya geçiş sağlayan reducer ı çalıştırır
  const PrevQuestionHandle = () => dispatch({ type: "Prev-Question" });

  useEffect(() => {
    //! Zamanı başlat
    const timing = setInterval(timeHandle, 1000);

    if (isEndQuiz) {
      //! Quiz bitmişse zaman azaltmayı durdur ve state sıfırla
      clearInterval(timing, 1000);
      setTime(0);
    }
    return () => clearInterval(timing, 1000);
  }, [isEndQuiz]);
  useEffect(() => {
    //! Eğer quiz daha önce bitirilmediyse ve zaman 0 a ulaşırsa...
    //! süre biterse yani quizi tamamla.
    if (time === 0 && !isEndQuiz) {
      dispatch({ type: "Complete-Quiz" });
      navigate("/result");
    }
  }, [time]);

  return (
    <Card>
      <Question />
      <Options />
      <ButtonWrapper>
        {quizİndex !== 0 && (
          <Button
            onClick={PrevQuestionHandle}
            color="var(--secondary)"
            me="auto"
          >
            Prev Question
          </Button>
        )}
        <Button
          onClick={
            quizİndex === QuestionList.length - 1
              ? CompleteQuizHandle
              : NextQuestionHandle
          }
          color="var(--secondary)"
          ms="auto"
        >
          {quizİndex === QuestionList.length - 1
            ? "Complete Quiz"
            : "Next-Question"}
        </Button>
      </ButtonWrapper>
      <TimeBadge>
        {icons.timeİcon}
        {timeCalculate(time)}
      </TimeBadge>
    </Card>
  );
};

export default Quiz;
