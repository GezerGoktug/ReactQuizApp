import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StyledOption from "./Option.style";



const Option = ({ children, onClick }) => {
  const [className, setClassName] = useState("");
  const [active, setActive] = useState(false);
  const quizİd = useSelector((state) => state.currentQuestion);
  const isEndQuiz = useSelector((state) => state.isEndQuiz);
  const answers = useSelector((state) => state.answers);
  const results = useSelector((state) => state.result);
  useEffect(() => {
    //! Seçenek içeriği cevaplar dizisinde ise o seçeneği seçer(aktif yapar.)
    if (answers[quizİd] === children) setActive(true);
    else setActive(false);

    //! Eğer quiz bitmişse
    if (isEndQuiz) {
      //! Eğer soru doğruysa ve soru içeriğide cevaplar içinde varsa ...
      //! yani soruya doğru cevap verildiyse o seçenek yeşil olur
      if (results[quizİd].answer === results[quizİd].correctAnswer) {
        if (results[quizİd].answer === children) setClassName(`correct`);
        else setClassName("");
      } 
      //! Eğer soru yanlış ise ya da boş ise
      else {
        //! Eğer soru boş değilse yani bir cevap verilmişse 
        //! Doğru cevabı yeşil bizim verdiğimiz cevap kırmızı olur
        if (results[quizİd].answer !== null) {
          if (results[quizİd].correctAnswer === children)
            setClassName("correct");
          else if (results[quizİd].answer === children) setClassName(`wrong`);
          else setClassName("");
        } 
        //! Soru Boşsa beyaz herhangi bi değişiklik olmaz.
        else setClassName("");
      }
    }
  }, [answers, quizİd, children, results, className, isEndQuiz]);

  return (
    <StyledOption
      $active={active}
      onClick={!isEndQuiz ? onClick : null}
      className={className}
    >
      {children}
    </StyledOption>
  );
};

export default Option;
