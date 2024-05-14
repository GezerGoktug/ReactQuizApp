import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import Badge from "../../components/Badge/Badge";
import resultCalculate from "../../helpers/resultCalculate";
import prizeHandle from "../../helpers/prizeHandle";
import { useNavigate } from "react-router-dom";
import {
  BadgeWrapper,
  StyledResultQuizContent,
  StyledTable,
  TableRow,
} from "./ResultQuiz.style";
import { icons } from "../../constant/icons";

const ResultQuiz = () => {
  const navigate = useNavigate();
  const results = useSelector((state) => state.result);
  const point = useSelector((state) => state.point);
  //! Aldığı verilen cevap dizisine göre boş ,doğru ,yanlış cevap sayılarını alıyoruz.  
  const { correct, wrong, empty } = resultCalculate(results);
  //! Puana göre alınacak ödülü belirleriz.
  const { message, src } = prizeHandle(point);

  return (
    <Card>
      <StyledResultQuizContent>
      {src && <img  src={src} />}
        <h1>{message}</h1>
        <BadgeWrapper>
          <Badge backcolor="#0BC250">{icons.correctİcon} Correct: {correct}</Badge>
          <Badge backcolor="#DA1B1B">{icons.wrongİcon} Wrong: {wrong}</Badge>
          <Badge backcolor="#87a0a7">{icons.emptyİcon} Empty: {empty}</Badge>
          <Badge>{icons.pointİcon}Point: {point}</Badge>
        </BadgeWrapper>
        <StyledTable>
          <table>
            <thead>
              <tr>
                <th>Question No</th>
                <th>Answer Given</th>
                <th>Correct answer</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <TableRow
                  $backColor={
                    result.answer &&
                    (result.answer === result.correctAnswer
                      ? "#45EF85"
                      : "#EF4545")
                  }
                  key={index}
                >
                  <td>{index + 1}</td>
                  <td>{result.answer || "Boş"}</td>
                  <td>{result.correctAnswer}</td>
                </TableRow>
              ))}
            </tbody>
          </table>
        </StyledTable>
      </StyledResultQuizContent>

      <Button onClick={() => navigate("/quiz")} me="auto">
        Back Questions
      </Button>
    </Card>
  );
};

export default ResultQuiz;
