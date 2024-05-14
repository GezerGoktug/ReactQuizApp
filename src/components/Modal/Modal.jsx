import Button from "../Button/Button";
import Card from "../Card/Card";
import Overlay from "../ModalOverlay/Overlay";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import StyledModal, { ButtonWrapper } from "./Modal.style";

const Modal = ({ modal, setModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const modalHandle = () => {
    if (modal.mode === "Start-Quiz") {
      //! Quiz başlatma modalı ise quiz başlatma sayfasına yönlendirilir
      navigate("/quiz");
      setModal(null);
    } else if (modal.mode === "Complete-Quiz") {
      //! Quiz bitirme modalı ise quizi bitiren reducer çalıştırılır.
      dispatch({ type: "Complete-Quiz" });
      navigate("/result");
      setModal(null);
    }
  };
  return (
    <Overlay>
      <Card>
        <StyledModal>
          <FaXmark onClick={() => setModal(null)} />
          <h2>{modal.header}</h2>
          <p>{modal.content}</p>
          <ButtonWrapper>
            <Button  onClick={() => setModal(null)}>Close</Button>
            <Button onClick={modalHandle}>{modal.buttonContent}</Button>
          </ButtonWrapper>
        </StyledModal>
      </Card>
    </Overlay>
  );
};

export default Modal;
