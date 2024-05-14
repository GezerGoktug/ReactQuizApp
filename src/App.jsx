import { Route, Routes } from "react-router-dom";

import Quiz from "./pages/Quiz/Quiz";
import ResultQuiz from "./pages/ResultQuiz/ResultQuiz";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { Container, GlobalStyle, Wrapper } from "./App.style";
import Home from "./pages/Home/Home";

function App() {
  //! Quiz başlatma ve bitirme modalları için state
  const [modal, setModal] = useState();
  return (
    <Wrapper>
      <ToastContainer />
      <AnimatePresence>
        {modal && <Modal modal={modal} setModal={setModal} />}
      </AnimatePresence>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Home setModal={setModal} />} />
          <Route path="/Quiz" element={<Quiz setModal={setModal} />} />
          <Route path="/result" element={<ResultQuiz />} />
        </Routes>
      </Container>
    </Wrapper>
  );
}

export default App;
