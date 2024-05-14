import ReactDOM from "react-dom";
import StyledBackDrop from "./Overlay.style";

//! Modal overlayini (arka plan ,frame) z-index problemi çıkmasın diye...
//! overlay idli başka element te renderladık.
//! React Portal ile

const Backdrop = ({ children }) => {
  return <StyledBackDrop>{children}</StyledBackDrop>;
};

const Overlay = ({ children }) => {
  const overlay = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Backdrop>{children}</Backdrop>
        </>,
        overlay
      )}
    </>
  );
};

export default Overlay;
