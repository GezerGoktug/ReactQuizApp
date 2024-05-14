import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import QuizStartContent from "./Home.style";

const Home = ({ setModal }) => {
  return (
    <div>
      <Card>
        <QuizStartContent>
          <img src="public/img/quiz.png" />
          <h1>Welcome to the quiz!</h1>
          <p>
            Welcome to our quiz application. You have 20 questions and 8
            minutes. 1 question is worth 5 points. 2 wrong questions, you will
            lose 5 points. The prize list is as in the table below. When you are
            ready, you can click on the start quiz button and start the quiz.
            Good luck!
          </p>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Point</th>
                <th>Prize</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>90-100</td>
                <td>Laptop</td>
              </tr>
              <tr>
                <td>2</td>
                <td>90-75</td>
                <td>Telephone</td>
              </tr>
              <tr>
                <td>3</td>
                <td>75-60</td>
                <td>Tablet</td>
              </tr>
              <tr>
                <td>4</td>
                <td>60-50</td>
                <td>Headphone</td>
              </tr>
            </tbody>
          </table>
          <Button
            onClick={() =>
              setModal({
                header: "Are you sure?",
                content:
                  "When you start, you will have 8 minutes. Are you sure you want to start?",
                buttonContent: "Start Quiz",
                mode: "Start-Quiz",
              })
            }
            me="auto"
            ms="auto"
          >
            Start Quiz
          </Button>
        </QuizStartContent>
      </Card>
    </div>
  );
};

export default Home;
