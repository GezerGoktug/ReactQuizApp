import styled from "styled-components";
import device from "../../constant/responsive";

const StyledModal = styled.div`
  & svg {
    position: absolute;
    font-size: 26px;
    cursor: pointer;
    top: 15px;
    right: 15px;
  }

  & h2 {
    background-color: gainsboro;
    margin: -20px -20px 0 -20px;
    border-radius: 12px 12px 0 0;
    padding: 20px;
  }
  & p {
    font-weight: 500;
    font-size: 18px;
    margin: 14px 0;
  }
  @media (max-width: ${device.tabletM}) {
    & h2 {
      margin: -15px -15px 0 -15px;
    }
  }
  @media (max-width: ${device.mobileL}) {
    & h2 {
      font-size: 20px;
      margin: -10px -10px 0 -10px;
    }
    & p {
      font-size: 14px;
    }
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;
export default StyledModal;
